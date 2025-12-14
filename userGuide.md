# iOS Developer Portfolio - User Guide

## Website Overview

**Purpose:** A modern, elegant personal portfolio website showcasing your iOS development skills, projects, and experience.

**Access:** Public website - no login required

**Tech Stack:** React 19 + TypeScript + Tailwind CSS 4 + Framer Motion + Next.js

**Deployment:** Auto-scaling infrastructure with global CDN for optimal performance worldwide.

---

## Using Your Website

### 1. **Navigating the Portfolio**

Your portfolio is organized into six main sections accessible from the header navigation:

- **"About"** - Scroll to learn about your background and key highlights
- **"Skills"** - View your technical expertise with interactive skill cards that animate on hover
- **"Projects"** - Browse your featured work with project cards that lift and glow on hover; click any card to open a detailed modal
- **"Experience"** - Review your professional timeline with company logos and achievements
- **"Contact"** - Find ways to reach out via email, LinkedIn, GitHub, or a contact form

### 2. **Hero Section**

The landing section displays your name, title, and a brief tagline. Click "View My Work" to smoothly scroll to the About section, or click the animated scroll indicator at the bottom to navigate down.

### 3. **Interactive Features**

- **Dark/Light Mode Toggle** - Click the sun/moon icon in the header to switch themes
- **Smooth Scrolling** - All navigation links smoothly scroll to their respective sections
- **Hover Animations** - Cards, buttons, and icons respond with lift, glow, and scale effects
- **Lightbox Modal** - Click any project card to view detailed information, technologies used, and action buttons
- **Contact Form** - Fill out the form in the Contact section to send a message directly

### 4. **Mobile Responsiveness**

The portfolio is fully responsive. On mobile devices:

- Navigation menu collapses into a hamburger icon
- All sections stack vertically for easy scrolling
- Touch-friendly buttons and interactive elements
- Optimized spacing and typography for small screens

---

## Managing Your Website

### Customizing Content

**To personalize your portfolio, edit these files:**

1. **Hero Section** - `client/src/components/Hero.tsx`
   - Update your name, title, and tagline in the heading
   - Modify the CTA button text and actions

2. **About Section** - `client/src/components/About.tsx`
   - Replace the profile emoji with your actual photo (place in `client/public/`)
   - Update your bio and key highlights list

3. **Skills Section** - `client/src/components/Skills.tsx`
   - Add or remove skills from the `skills` array
   - Update skill names, descriptions, and icon colors
   - Modify the "Also Proficient In" list at the bottom

4. **Projects Section** - `client/src/components/Projects.tsx`
   - Update the `projects` array with your actual projects
   - Replace emoji placeholders with real project images
   - Add project links and source code URLs

5. **Experience Section** - `client/src/components/Experience.tsx`
   - Update the `experiences` array with your work history
   - Replace company logos with actual company names or emojis
   - Modify achievements and key metrics

6. **Contact Section** - `client/src/components/Contact.tsx`
   - Update social media links (LinkedIn, GitHub, email, portfolio)
   - Customize the contact form submission handling

7. **Header/Footer** - `client/src/components/Header.tsx` and `client/src/components/Footer.tsx`
   - Update the logo text "iOS Dev" to your name
   - Modify navigation items if needed
   - Update footer copyright and social links

### Styling & Theme

**Color Palette** - Edit `client/src/index.css` to customize colors:

- Primary color: `#0071e3` (Apple blue)
- Background: `#0a0a0a` (dark)
- Card background: `#1d1d1f`
- Accent colors: Gradients from blue to purple

**Fonts** - The portfolio uses Inter font (imported from Google Fonts). To change:

1. Edit the `@import` line in `client/src/index.css`
2. Update font references in the `body` CSS rule

**Dark/Light Mode** - Both themes are pre-configured. The default is dark mode. To change:

- Edit `App.tsx` and change `defaultTheme="dark"` to `defaultTheme="light"`

### Adding Images

1. Place images in `client/public/`
2. Reference them in components with absolute paths: `/image-name.png`
3. For profile photos, replace the emoji in `About.tsx` with an `<img>` tag

### Updating Social Links

Find and update these URLs in `Contact.tsx` and `Footer.tsx`:

- `mailto:hello@example.com` → Your email
- `https://linkedin.com` → Your LinkedIn profile
- `https://github.com` → Your GitHub profile
- `https://twitter.com` → Your Twitter/X profile

---

## Development Workflow

### Running Locally

```bash
cd ios-developer-portfolio
pnpm install
pnpm dev
```

Visit `http://localhost:3000` to preview changes in real-time.

### Building for Production

```bash
pnpm build
pnpm preview
```

### Project Structure

```
client/
  src/
    components/        # Reusable UI components
      Header.tsx       # Navigation & theme toggle
      Hero.tsx         # Landing section
      About.tsx        # About section
      Skills.tsx       # Skills grid
      Projects.tsx     # Project cards & modal
      Experience.tsx   # Timeline section
      Contact.tsx      # Contact form
      Footer.tsx       # Footer
    pages/
      Home.tsx         # Main portfolio page
    index.css          # Global styles & theme colors
  public/              # Static assets (images, icons)
```

### Key Technologies

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Lucide React** - Icon library

---

## Next Steps

**Talk to Manus AI anytime to request changes or add features.** Whether you want to modify colors, add new sections, integrate a backend, or deploy your portfolio, I'm here to help.

### Recommended Next Actions

1. **Personalize Your Content** - Replace all placeholder text and images with your actual information
2. **Add Your Projects** - Update the projects section with your real work and screenshots
3. **Update Social Links** - Ensure all social media and contact links point to your profiles
4. **Deploy Your Portfolio** - Publish your site to make it live for potential employers and clients
5. **Optimize for SEO** - Add meta tags and descriptions to improve search visibility

Your portfolio is now ready to impress! Make it uniquely yours and share it with the world.
