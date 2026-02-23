# Quick Start Guide

## Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open Browser
Navigate to: `http://localhost:5173`

---

## What You'll See

### Home Page (/)
- Hero banner with "Explore Our Courses"
- Search bar with 3 filter inputs
- Grid of 8 course cards
- Each card shows: image, category, title, instructor, duration, students, rating

### Course Details (/course/:id)
- Click any course card to view details
- Orange hero section with course info
- Left column: What you'll learn, description, instructor
- Right column: Sticky enrollment card with CTA buttons

---

## Key Features to Test

1. **Responsive Design**: Resize browser to see mobile/tablet/desktop layouts
2. **Navigation**: Click logo to return home, click course cards to view details
3. **Mobile Menu**: On mobile, click hamburger icon for navigation
4. **Hover Effects**: Hover over course cards, buttons for smooth transitions
5. **Routing**: Use browser back/forward buttons - routing works seamlessly

---

## Customization

### Change Primary Color
Edit `tailwind.config.js`:
```js
colors: {
  primary: '#FF6B35', // Change this hex code
}
```

### Add More Courses
Edit `src/data/courses.js` and add new course objects to the array.

### Modify Layout
- Navbar: `src/components/Navbar.jsx`
- Footer: `src/components/Footer.jsx`
- Home: `src/pages/Home.jsx`
- Details: `src/pages/CourseDetails.jsx`

---

## Build for Production

```bash
npm run build
```

Output will be in the `dist` folder, ready to deploy to any static hosting service (Vercel, Netlify, GitHub Pages, etc.).

---

## Troubleshooting

**Port already in use?**
```bash
# Vite will automatically try the next available port
# Or specify a custom port:
npm run dev -- --port 3000
```

**Dependencies not installing?**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Build errors?**
```bash
# Check Node version (should be v16+)
node --version

# Update npm
npm install -g npm@latest
```

---

## Next Steps

- Add authentication functionality
- Connect to a backend API
- Implement search/filter logic
- Add user enrollment tracking
- Create admin dashboard
- Add video player integration

Happy coding! 🚀
