#!/bin/bash

# Crystal City Ballroom - Deployment Script untuk Coolify
# Author: AI Assistant
# Version: 1.0

set -e

echo "🚀 Crystal City Ballroom - Deployment Script"
echo "==========================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Docker is running
check_docker() {
    print_status "Checking Docker..."
    if ! docker info > /dev/null 2>&1; then
        print_error "Docker is not running. Please start Docker Desktop."
        exit 1
    fi
    print_success "Docker is running"
}

# Build Docker image
build_image() {
    print_status "Building Docker image..."
    docker build -t crystal-ballroom:latest .
    print_success "Docker image built successfully"
}

# Test the build locally (optional)
test_local() {
    print_status "Testing local deployment..."
    
    # Stop existing container if running
    docker stop crystal-ballroom-test 2>/dev/null || true
    docker rm crystal-ballroom-test 2>/dev/null || true
    
    # Run container
    docker run -d --name crystal-ballroom-test -p 3000:80 crystal-ballroom:latest
    
    # Wait for container to start
    sleep 5
    
    # Test health endpoint
    if curl -f http://localhost:3000/health > /dev/null 2>&1; then
        print_success "Local test passed - Application is healthy"
        echo "🌐 Test URL: http://localhost:3000"
    else
        print_error "Local test failed - Health check failed"
        docker logs crystal-ballroom-test
        exit 1
    fi
    
    # Cleanup
    docker stop crystal-ballroom-test
    docker rm crystal-ballroom-test
}

# Prepare for Coolify deployment
prepare_coolify() {
    print_status "Preparing for Coolify deployment..."
    
    # Check if git repo is clean
    if [ -n "$(git status --porcelain)" ]; then
        print_warning "Git repository has uncommitted changes"
        echo "Files to commit:"
        git status --short
        echo ""
        read -p "Do you want to commit these changes? (y/n): " -n 1 -r
        echo ""
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            git add .
            git commit -m "feat: add Coolify deployment configuration"
            print_success "Changes committed"
        else
            print_warning "Proceeding without committing changes"
        fi
    fi
    
    # Push to remote
    print_status "Pushing to remote repository..."
    git push origin $(git branch --show-current)
    print_success "Code pushed to remote repository"
}

# Display deployment instructions
show_instructions() {
    echo ""
    echo "📋 Coolify Deployment Instructions"
    echo "=================================="
    echo ""
    echo "1. Login to your Coolify dashboard"
    echo "2. Create a new project: 'crystal-ballroom'"
    echo "3. Add new application with these settings:"
    echo "   - Repository: $(git remote get-url origin)"
    echo "   - Branch: $(git branch --show-current)"
    echo "   - Build Pack: Docker"
    echo "   - Dockerfile: ./Dockerfile"
    echo "   - Port: 80"
    echo ""
    echo "4. Optional Environment Variables:"
    echo "   NODE_ENV=production"
    echo ""
    echo "5. Deploy and monitor the logs"
    echo ""
    echo "📁 Deployment files created:"
    echo "   ✅ Dockerfile"
    echo "   ✅ nginx.conf"
    echo "   ✅ .dockerignore"
    echo "   ✅ docker-compose.yml"
    echo "   ✅ DEPLOYMENT.md"
    echo ""
    echo "📖 For detailed instructions, see: DEPLOYMENT.md"
    echo ""
    print_success "Ready for Coolify deployment! 🎉"
}

# Main execution
main() {
    case "${1:-all}" in
        "check")
            check_docker
            ;;
        "build")
            check_docker
            build_image
            ;;
        "test")
            check_docker
            build_image
            test_local
            ;;
        "prepare")
            prepare_coolify
            ;;
        "instructions")
            show_instructions
            ;;
        "all")
            check_docker
            build_image
            test_local
            prepare_coolify
            show_instructions
            ;;
        *)
            echo "Usage: $0 [check|build|test|prepare|instructions|all]"
            echo ""
            echo "Commands:"
            echo "  check        - Check if Docker is running"
            echo "  build        - Build Docker image"
            echo "  test         - Build and test locally"
            echo "  prepare      - Prepare git repository for Coolify"
            echo "  instructions - Show Coolify deployment instructions"
            echo "  all          - Run all steps (default)"
            exit 1
            ;;
    esac
}

main "$@"