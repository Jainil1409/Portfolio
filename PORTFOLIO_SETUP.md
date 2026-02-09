# Portfolio Website Setup Guide

Your professional portfolio website is now ready! Here's everything you need to know.

## ✨ Features Included

- **Navigation Bar** - Sticky header with responsive mobile menu
- **Hero Section** - Eye-catching introduction with call-to-action buttons
- **Projects Showcase** - Featured and complete project listings
- **Skills Section** - Organized by category (Frontend, Backend, Tools)
- **Blog** - Blog listing and individual post pages
- **About Section** - Personal introduction with contact details
- **Contact Form** - Functional form with validation
- **Footer** - Quick links and social media
- **Responsive Design** - Works on mobile, tablet, and desktop

## 🚀 Running Your Portfolio

The development server is already running at `http://localhost:3000`

To start it manually:
```bash
npm run dev
```

## 📝 Customization Guide

### 1. Update About Section
**File**: `src/components/About.tsx`
- Add your biography
- Update email address
- Add your location
- Update GitHub and LinkedIn profiles
- Replace placeholder image with your photo

### 2. Add Your Projects
**Files**: 
- `src/components/Projects.tsx` (featured projects)
- `src/app/projects/page.tsx` (all projects)

Add details like:
- Project title and description
- Technologies used
- Project links
- Project images

### 3. Update Skills
**File**: `src/components/Skills.tsx`
- Edit skill categories
- Update individual skills
- Add new categories as needed

### 4. Write Blog Posts
**Files**:
- `src/app/blog/page.tsx` (blog listing)
- `src/app/blog/[id]/page.tsx` (individual posts)

Add:
- Blog post titles and excerpts
- Publication dates
- Post categories
- Full content

### 5. Configure Contact Form
**File**: `src/components/ContactForm.tsx`
- Integrate with email service (Mailgun, SendGrid, etc.)
- Add form submission handlers
- Customize validation

### 6. Customize Navigation
**File**: `src/components/Navigation.tsx`
- Change portfolio name
- Add/remove navigation links
- Customize colors and styling

### 7. Update Personal Info
**File**: `src/components/Footer.tsx`
- Add social media links
- Update copyright year
- Add footer content

## 🎨 Styling

All styling uses **Tailwind CSS**. To customize:
- Edit component styles directly in `.tsx` files
- Modify global styles in `src/app/globals.css`
- Update Tailwind config in `tailwind.config.ts`

## 📦 Project Structure

```
src/
├── app/
│   ├── blog/
│   │   ├── page.tsx           # Blog listing
│   │   └── [id]/page.tsx      # Individual post
│   ├── projects/
│   │   └── page.tsx           # Projects page
│   ├── globals.css
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Homepage
└── components/
    ├── Navigation.tsx
    ├── Hero.tsx
    ├── Projects.tsx
    ├── Skills.tsx
    ├── About.tsx
    ├── BlogPreview.tsx
    ├── ContactForm.tsx
    └── Footer.tsx
```

## 🌐 Deployment

### Option 1: Vercel (Recommended)
1. Push code to GitHub
2. Go to `vercel.com` and sign in
3. Import your repository
4. Click Deploy

### Option 2: Netlify
1. Connect your GitHub repository
2. Netlify automatically deploys on push

### Option 3: GitHub Pages
1. Update `next.config.ts`
2. Run `npm run build`
3. Push `out` folder to GitHub Pages

### Option 4: Custom Server
```bash
npm run build
npm start
```

## 🛠️ Build Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [React Docs](https://react.dev)

## 🎯 Next Steps

1. Customize your personal information
2. Add your real projects
3. Update your skills
4. Write blog posts
5. Set up contact form integration
6. Deploy to a hosting platform
7. Share your portfolio!

Happy coding! 🚀
