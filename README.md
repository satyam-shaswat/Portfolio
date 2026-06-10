# Satyam Shaswat - Developer Portfolio

A modern, responsive portfolio website built with Next.js, React, and Tailwind CSS.

## 🚀 Features

- **Modern Dark Theme** - Professional dark UI with gradient accents
- **Fully Responsive** - Optimized for all devices (desktop, tablet, mobile)
- **Smooth Animations** - Subtle fade-in effects and smooth transitions
- **Sticky Navigation** - Easy navigation between sections
- **Skills Display** - Categorized skill cards with color-coded gradients
- **Learning Journey** - Timeline showing educational progression
- **Contact Section** - Professional contact form and social links

## 📋 Sections

1. **Hero Section** - Introduction with name, title, and CTA buttons
2. **About Section** - Background, interests, and education
3. **Skills Section** - Technical skills organized by category
4. **Education Journey** - Educational timeline and growth path
5. **Contact Section** - Get in touch form and social links
6. **Footer** - Copyright and social media links

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **UI Library**: React 18
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Language**: JavaScript

## 🎨 Design Features

- Dark theme with blue, purple, and pink gradients
- Smooth scroll behavior between sections
- Hover effects on interactive elements
- Custom animations and transitions
- Professional typography and spacing
- Optimized images from Unsplash/Pexels

## 📦 Project Structure

```
/app
├── app/
│   ├── page.js           # Main page component
│   ├── layout.js         # Root layout with metadata
│   └── globals.css       # Global styles and custom animations
├── components/
│   ├── Navbar.js         # Navigation component
│   ├── Hero.js           # Hero section
│   ├── About.js          # About section
│   ├── Skills.js         # Skills section
│   ├── Education.js      # Learning timeline
│   ├── Contact.js        # Contact section
│   └── Footer.js         # Footer component
└── components/ui/        # shadcn/ui components
```

## 🚀 Getting Started

The application is already running. Access it at:
https://e2498b25-417b-4c64-b8ab-603e60508a8f.preview.emergentagent.com

To restart the server:
```bash
sudo supervisorctl restart nextjs
```

## 📝 Customization

### Update Personal Information

1. **Name and Title**: Edit `/app/components/Hero.js`
2. **About Content**: Edit `/app/components/About.js`
3. **Skills**: Edit the `skillCategories` array in `/app/components/Skills.js`
4. **Social Links**: Update URLs in Hero, Contact, and Footer components

### Add Real Resume Download

Replace the placeholder button in `/app/components/Hero.js` and `/app/components/Contact.js` with actual resume link:
```jsx
<a href="/path-to-your-resume.pdf" download>
  Download Resume
</a>
```

### Connect Contact Form

To make the contact form functional, integrate with a service like:
- Formspree
- EmailJS
- Your own backend API

## 🎯 Features to Add (Optional Enhancements)

- [ ] Blog section for technical articles
- [ ] Dark/Light mode toggle
- [ ] Certificate showcase
- [ ] Testimonials section
- [ ] Real-time contact form submission
- [ ] Analytics integration
- [ ] SEO optimization with dynamic metadata
- [ ] Animations with Framer Motion

## 📱 Responsive Breakpoints

- Mobile: 375px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## 🌟 Highlights

- SEO-friendly with proper metadata
- Fast loading with Next.js optimization
- Clean and maintainable code structure
- Reusable React components
- Professional design suitable for recruiters
- No external dependencies for core functionality

## 📄 License

This is a personal portfolio template. Feel free to customize and use it for your own portfolio.

---

Built with ❤️ using Next.js and Tailwind CSS
