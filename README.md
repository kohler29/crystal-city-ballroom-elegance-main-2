# 🏛️ Crystal City Ballroom

> Elegant event venue website showcasing premium ballroom services with modern web technologies and SEO optimization.

## ✨ Features

### 🎨 Design & User Experience
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI**: Built with shadcn-ui components and Tailwind CSS
- **Smooth Animations**: Framer Motion for engaging user interactions
- **Elegant Typography**: Professional styling for luxury venue branding

### 📱 Progressive Web App (PWA)
- **Offline Support**: Service worker for offline functionality
- **App-like Experience**: Installable on mobile devices
- **Fast Loading**: Optimized performance with caching strategies

### 🔍 SEO & Performance
- **Google 2024 SEO Updates**: Latest algorithm optimizations
- **Structured Data**: Schema.org markup for local business
- **Meta Tags**: Comprehensive Open Graph and Twitter Card support
- **Core Web Vitals**: Optimized for Google's performance metrics
- **Sitemap & Robots.txt**: Proper search engine indexing

### 🏢 Business Features
- **Service Showcase**: Wedding, corporate, and special event packages
- **Image Gallery**: High-quality venue photography
- **Contact Forms**: Easy inquiry and booking system
- **Testimonials**: Customer reviews and feedback
- **Location Info**: Integrated maps and contact details

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm
- Git

### Local Development

```bash
# Clone the repository
git clone <YOUR_GIT_URL>
cd crystal-city-ballroom

# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:8080
```

### Build for Production

```bash
# Build the application
npm run build

# Preview production build
npm run preview
```

## 🛠️ Technology Stack

### Frontend
- **React 18**: Modern React with hooks and functional components
- **TypeScript**: Type-safe development
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn-ui**: High-quality React components
- **Framer Motion**: Animation library
- **React Router**: Client-side routing
- **React Query**: Data fetching and caching

### Build & Deployment
- **Docker**: Containerized deployment
- **Nginx**: Production web server
- **Multi-stage builds**: Optimized Docker images

## 📦 Deployment Options

### 🐳 Docker Deployment (Recommended)

#### Quick Deploy with Script
```bash
# Make script executable
chmod +x deploy.sh

# Run full deployment process
./deploy.sh

# Or run specific steps
./deploy.sh build    # Build Docker image
./deploy.sh test     # Test locally
./deploy.sh prepare  # Prepare for deployment
```

#### Manual Docker Build
```bash
# Build Docker image
docker build -t crystal-ballroom:latest .

# Run locally
docker run -d -p 3000:80 crystal-ballroom:latest

# Access at http://localhost:3000
```

### ☁️ Coolify Self-Hosted

1. **Setup Repository**: Push code to your Git repository
2. **Coolify Dashboard**: Create new project "crystal-ballroom"
3. **Application Settings**:
   - Build Pack: Docker
   - Dockerfile: `./Dockerfile`
   - Port: 80
4. **Deploy**: Click deploy and monitor logs

📖 **Detailed Guide**: See [DEPLOYMENT.md](./DEPLOYMENT.md) for complete instructions

### 🌐 Other Platforms

- **Vercel**: `npm run build` + static deployment
- **Netlify**: Connect Git repository
- **Railway**: Docker deployment
- **DigitalOcean App Platform**: Docker or buildpack

## 📁 Project Structure

```
crystal-city-ballroom/
├── public/                 # Static assets
│   ├── foto/              # Venue images
│   ├── manifest.json      # PWA manifest
│   ├── robots.txt         # SEO robots file
│   └── sitemap.xml        # SEO sitemap
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # shadcn-ui components
│   │   ├── Hero.tsx      # Landing section
│   │   ├── AboutSection.tsx
│   │   ├── PackagesSection.tsx
│   │   └── Footer.tsx
│   ├── pages/            # Route pages
│   ├── hooks/            # Custom React hooks
│   └── lib/              # Utilities
├── Dockerfile            # Docker configuration
├── nginx.conf           # Nginx configuration
├── docker-compose.yml   # Docker Compose setup
├── deploy.sh           # Deployment script
└── DEPLOYMENT.md       # Deployment guide
```

## 🔧 Configuration

### Environment Variables

Copy `.env.example` to `.env` and configure:

```bash
# Application
NODE_ENV=production
APP_DOMAIN=your-domain.com

# Optional: Analytics
GA_TRACKING_ID=G-XXXXXXXXXX

# Optional: Contact
CONTACT_EMAIL=info@your-domain.com
```

### SEO Configuration

- **Meta Tags**: Configured in `index.html`
- **Structured Data**: JSON-LD in components
- **Sitemap**: Auto-generated in `public/sitemap.xml`
- **Robots.txt**: SEO rules in `public/robots.txt`

## 🚀 Performance Features

- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: Responsive images with lazy loading
- **Caching**: Nginx-based static asset caching
- **Compression**: Gzip compression enabled
- **PWA**: Service worker for offline functionality

## 🔒 Security

- **Security Headers**: Configured in Nginx
- **HTTPS**: Automatic SSL with Let's Encrypt (Coolify)
- **Content Security Policy**: XSS protection
- **CORS**: Proper cross-origin configuration

## 🧪 Testing & Quality

```bash
# Lint code
npm run lint

# Type checking
npx tsc --noEmit

# Build verification
npm run build
```

## 📈 Monitoring

- **Health Check**: `/health` endpoint
- **Performance**: Core Web Vitals tracking
- **SEO**: Google Search Console integration
- **Analytics**: Google Analytics ready

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check [DEPLOYMENT.md](./DEPLOYMENT.md)
- **Issues**: Create GitHub issue for bugs
- **Questions**: Use GitHub Discussions

---

**Built with ❤️ for Crystal City Ballroom**
