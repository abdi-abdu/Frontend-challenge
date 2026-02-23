# INFNOVA Academy - Course Platform Frontend

A fully responsive course platform built with React, Vite, and Tailwind CSS. This project demonstrates modern frontend development practices with clean component architecture and professional UI/UX design.

## Features

- Fully responsive design (mobile, tablet, desktop)
- Modern UI with orange primary color theme
- Smooth animations and hover effects
- Clean component-based architecture
- React Router for navigation
- Reusable components
- Static course data structure

## Tech Stack

- React 18
- Vite (Build tool)
- Tailwind CSS
- React Router DOM
- Modern ES6+ JavaScript

## Project Structure

```
course-platform/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky navigation with mobile menu
│   │   ├── Footer.jsx          # Footer with links
│   │   ├── CourseCard.jsx      # Reusable course card component
│   │   └── SearchBar.jsx       # Search and filter component
│   ├── pages/
│   │   ├── Home.jsx            # Home page with course listing
│   │   └── CourseDetails.jsx  # Course details page
│   ├── data/
│   │   └── courses.js          # Static course data
│   ├── App.jsx                 # Main app component with routing
│   ├── main.jsx                # App entry point
│   └── index.css               # Global styles with Tailwind
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
```

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to:
```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Pages

### Home Page
- Hero section with search functionality
- Responsive course grid (3 columns desktop, 2 tablet, 1 mobile)
- Course cards with hover effects
- Category badges, ratings, and student counts

### Course Details Page
- Orange hero header with course information
- Two-column layout (desktop)
- "What You'll Learn" section
- Course description
- Instructor profile card
- Sticky enrollment card with CTA buttons

## Components

### Navbar
- Logo on the left
- Navigation links (Courses, About, Contact)
- Sign In and Enroll Now buttons
- Mobile hamburger menu
- Sticky positioning

### CourseCard
- Course image with category badge
- Title and instructor name
- Duration, student count, and rating
- Hover effects (scale + shadow)
- Click to navigate to details

### SearchBar
- Three input fields for filtering
- Responsive grid layout
- Elevated card design

### Footer
- Three-column layout
- About, Quick Links, and Support sections
- Copyright information
- Dark navy background

## Design Features

- Orange primary color (#FF6B35)
- Soft shadows and rounded corners
- Smooth transitions on hover
- Professional typography hierarchy
- Consistent spacing and alignment
- Accessible color contrast

## Course Data Structure

Each course includes:
- ID, title, category
- Instructor name and bio
- Duration (weeks)
- Student count
- Rating
- Level (Beginner/Intermediate/Advanced)
- Image URL
- Description
- What you'll learn (array)
- Course includes (array)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Author

Built as a frontend internship challenge demonstrating React, Tailwind CSS, and modern web development best practices.
