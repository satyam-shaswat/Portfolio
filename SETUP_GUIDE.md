# Portfolio Website - Setup Guide

## 📥 What's Included

This zip file contains your complete portfolio website with all source code and components.

## 🚀 Quick Start

### 1. Extract the Files
```bash
unzip portfolio-satyam-shaswat.zip
cd portfolio-satyam-shaswat
```

### 2. Install Dependencies
```bash
# Using npm
npm install

# OR using yarn (recommended)
yarn install
```

### 3. Run the Development Server
```bash
# Using npm
npm run dev

# OR using yarn
yarn dev
```

### 4. Open in Browser
Visit `http://localhost:3000` to see your portfolio!

## 📁 Project Structure

```
portfolio-satyam-shaswat/
├── app/
│   ├── page.js           # Main page
│   ├── layout.js         # Root layout
│   ├── globals.css       # Global styles
│   └── api/              # API routes (optional)
├── components/
│   ├── Navbar.js         # Navigation
│   ├── Hero.js           # Hero section
│   ├── About.js          # About section
│   ├── Skills.js         # Skills section
│   ├── Projects.js       # Projects section
│   ├── LearningJourney.js # Timeline
│   ├── Contact.js        # Contact form
│   ├── Footer.js         # Footer
│   └── ui/               # shadcn/ui components
├── lib/
│   └── utils.js          # Utility functions
├── package.json          # Dependencies
├── tailwind.config.js    # Tailwind config
└── next.config.js        # Next.js config
```

## ✏️ Customization Guide

### Update Personal Information

#### 1. Update Name & Social Links
**File:** `components/Hero.js`
```javascript
// Change your name
<h1>Your Name</h1>

// Update social links
<a href="https://github.com/YOUR_USERNAME">
<a href="https://linkedin.com/in/YOUR_PROFILE">
<a href="mailto:YOUR_EMAIL@example.com">
```

#### 2. Update About Section
**File:** `components/About.js`
- Edit the introduction text
- Modify interest cards
- Update education details

#### 3. Add Your Skills
**File:** `components/Skills.js`
```javascript
const skillCategories = [
  {
    title: 'Your Category',
    gradient: 'from-blue-500 to-cyan-500',
    skills: ['Skill1', 'Skill2', 'Skill3'],
  },
  // Add more categories...
]
```

#### 4. Add Your Projects
**File:** `components/Projects.js`
```javascript
const projects = [
  {
    title: 'Your Project Name',
    description: 'Project description...',
    image: 'https://your-image-url.com/image.jpg',
    tech: ['React', 'Node.js'],
    github: 'https://github.com/your-repo',
    live: 'https://your-live-demo.com',
  },
  // Add more projects...
]
```

#### 5. Update Contact Information
**File:** `components/Contact.js`
- Change email address
- Update social media links
- Modify LinkedIn and GitHub URLs

#### 6. Update Footer
**File:** `components/Footer.js`
- Change the name
- Update social links

### Add Your Resume

1. Add your resume PDF to the `public` folder (create it if it doesn't exist):
```bash
mkdir public
cp /path/to/your/resume.pdf public/resume.pdf
```

2. Update the download button in `components/Hero.js`:
```javascript
<Button asChild>
  <a href="/resume.pdf" download="Your-Name-Resume.pdf">
    Download Resume
  </a>
</Button>
```

## 🎨 Customize Colors & Theme

**File:** `app/globals.css`

Change the gradient colors:
```css
/* Find and modify gradient classes */
.bg-gradient-to-r from-blue-400 to-purple-500
```

Or update in individual components for specific sections.

## 🌐 Deploy Your Portfolio

### Option 1: Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy (automatic!)

### Option 2: Netlify
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Connect repository
4. Deploy

### Option 3: GitHub Pages
Requires additional configuration for Next.js static export.

## 📝 Build for Production

```bash
# Create optimized production build
npm run build
# or
yarn build

# Start production server
npm start
# or
yarn start
```

## 🔧 Common Issues

### Port Already in Use
If port 3000 is busy:
```bash
# Change port in package.json
"dev": "next dev -p 3001"
```

### Module Not Found
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Images Not Loading
- Ensure image URLs are accessible
- For local images, place them in `public/` folder

## 📚 Technologies Used

- **Next.js 14** - React framework
- **React 18** - UI library
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Lucide React** - Icons

## 🆘 Need Help?

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Docs](https://ui.shadcn.com)

## ⚡ Performance Tips

1. Optimize images before uploading
2. Use Next.js Image component for better performance
3. Minimize custom CSS
4. Keep dependencies updated

## 📄 License

This portfolio template is free to use and customize for your personal portfolio.

---

Good luck with your portfolio! 🚀
