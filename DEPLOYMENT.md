# Deployment Guide

## Deploy to Vercel (Recommended)

### Option 1: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Option 2: Vercel Dashboard
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Vercel auto-detects Vite - just click "Deploy"

---

## Deploy to Netlify

### Option 1: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

### Option 2: Netlify Dashboard
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"

---

## Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/course-platform",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.js`:
```js
export default defineConfig({
  plugins: [react()],
  base: '/course-platform/', // Your repo name
})
```

4. Deploy:
```bash
npm run deploy
```

---

## Deploy to Firebase Hosting

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login and initialize:
```bash
firebase login
firebase init hosting
```

3. Configure `firebase.json`:
```json
{
  "hosting": {
    "public": "dist",
    "ignore": ["firebase.json", "**/.*", "**/node_modules/**"],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

4. Build and deploy:
```bash
npm run build
firebase deploy
```

---

## Environment Variables

If you add API keys or environment variables:

1. Create `.env` file:
```
VITE_API_URL=https://api.example.com
```

2. Access in code:
```js
const apiUrl = import.meta.env.VITE_API_URL;
```

3. Add to deployment platform:
   - Vercel: Project Settings → Environment Variables
   - Netlify: Site Settings → Environment Variables
   - GitHub Pages: Use GitHub Secrets

---

## Performance Optimization

Before deploying:

1. **Optimize Images**: Use WebP format, compress images
2. **Code Splitting**: Already handled by Vite
3. **Lazy Loading**: Add for routes if needed
4. **CDN**: Most platforms provide this automatically

---

## Post-Deployment Checklist

- [ ] Test all pages and routes
- [ ] Verify responsive design on mobile
- [ ] Check browser console for errors
- [ ] Test navigation and links
- [ ] Verify images load correctly
- [ ] Test on different browsers
- [ ] Check page load speed (Google PageSpeed Insights)
- [ ] Set up custom domain (optional)

---

## Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Update DNS records as instructed

### Netlify
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Update DNS records as instructed

---

## Monitoring

Consider adding:
- Google Analytics
- Sentry for error tracking
- Vercel Analytics (built-in)
- Lighthouse CI for performance monitoring

---

Your course platform is production-ready! 🎉
