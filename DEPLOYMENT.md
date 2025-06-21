# Deployment Guide - Crystal City Ballroom ke Coolify Self-Hosted

## Prerequisites

1. **Coolify Server** yang sudah terinstall dan berjalan
2. **Git Repository** yang dapat diakses oleh Coolify
3. **Domain** yang sudah dikonfigurasi (opsional)

## Langkah-langkah Deployment

### 1. Persiapan Repository

Pastikan semua file deployment sudah ada di repository:
- `Dockerfile`
- `nginx.conf`
- `.dockerignore`
- `docker-compose.yml`

### 2. Setup di Coolify Dashboard

#### A. Buat Project Baru
1. Login ke Coolify dashboard
2. Klik "New Project"
3. Berikan nama project: `crystal-ballroom`

#### B. Tambah Application
1. Di dalam project, klik "New Resource" → "Application"
2. Pilih "Public Repository" atau "Private Repository"
3. Masukkan URL repository Git
4. Pilih branch yang akan di-deploy (biasanya `main` atau `master`)

#### C. Konfigurasi Build
1. **Build Pack**: Pilih "Docker"
2. **Dockerfile Path**: `./Dockerfile`
3. **Build Context**: `./`
4. **Port**: `80`

#### D. Environment Variables (Opsional)
Jika diperlukan, tambahkan environment variables:
```
NODE_ENV=production
```

#### E. Domain Configuration
1. Jika menggunakan domain custom:
   - Masukkan domain di field "Domains"
   - Pastikan DNS sudah mengarah ke server Coolify
2. Jika menggunakan subdomain Coolify:
   - Biarkan kosong, Coolify akan generate otomatis

### 3. Deploy Application

1. Klik "Deploy" untuk memulai deployment
2. Monitor log deployment di dashboard
3. Tunggu hingga status berubah menjadi "Running"

### 4. Verifikasi Deployment

1. Akses aplikasi melalui URL yang diberikan
2. Test semua halaman:
   - Homepage (`/`)
   - About (`/about`)
   - Gallery (`/gallery`)
   - Packages (`/packages`)
   - Testimonials (`/testimonials`)
   - Contact (`/contact`)

3. Verifikasi health check:
   ```bash
   curl https://your-domain.com/health
   ```

### 5. SSL Certificate

Coolify akan otomatis menghandle SSL certificate melalui Let's Encrypt jika:
- Domain sudah dikonfigurasi dengan benar
- DNS sudah mengarah ke server

## Troubleshooting

### Build Gagal
1. Periksa log build di Coolify dashboard
2. Pastikan `package.json` dan dependencies sudah benar
3. Verifikasi `Dockerfile` syntax

### Application Tidak Bisa Diakses
1. Periksa status container di dashboard
2. Verifikasi port configuration (80)
3. Check health check endpoint

### Routing Issues
1. Pastikan `nginx.conf` sudah benar
2. Verifikasi React Router configuration
3. Test dengan direct URL access

## Monitoring

### Health Check
Aplikasi memiliki health check endpoint di `/health` yang akan return "healthy" jika aplikasi berjalan normal.

### Logs
Akses logs melalui Coolify dashboard untuk monitoring real-time.

## Update Deployment

1. Push changes ke Git repository
2. Di Coolify dashboard, klik "Redeploy"
3. Atau setup auto-deployment dengan webhook

## Performance Optimization

### Nginx Configuration
- Gzip compression enabled
- Static asset caching (1 year)
- Security headers included

### Docker Optimization
- Multi-stage build untuk ukuran image yang lebih kecil
- `.dockerignore` untuk exclude unnecessary files

## Security

- Security headers sudah dikonfigurasi di Nginx
- HTTPS otomatis melalui Let's Encrypt
- Container berjalan sebagai non-root user

## Support

Jika mengalami masalah:
1. Check Coolify documentation
2. Verifikasi server resources (CPU, Memory, Disk)
3. Monitor application logs

---

**Note**: Ganti `your-domain.com` dengan domain aktual yang akan digunakan.