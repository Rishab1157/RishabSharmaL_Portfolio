# Rishab Sharma - Portfolio Website

A modern, professional portfolio website built with React, Vite, and TailwindCSS. This portfolio showcases my skills, experience, and projects as a Full-Stack Developer.

## Features

- 🎨 **Modern Design**: Clean, corporate, and professional design suitable for mid-senior level roles
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ⚡ **Fast Performance**: Built with Vite for optimal performance
- 🎭 **Smooth Animations**: Professional animations using Framer Motion
- 🎯 **SEO Friendly**: Semantic HTML and proper meta tags

## Tech Stack

- **React 18** - Latest version with hooks and functional components
- **Vite** - Fast build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **React Icons** - Icon library

## Sections

1. **Navbar** - Responsive navigation with smooth scrolling
2. **Hero** - Introduction with name, title, and CTA buttons
3. **Skills** - Technical skills organized by category (Frontend, Backend, Databases, Other)
4. **Experience** - Professional work experience timeline
5. **Projects** - Featured projects with tech stack and links
6. **Contact** - Contact form and social media links
7. **Footer** - Professional footer with copyright

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Protfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Update Personal Information

1. **Name and Title**: Edit `src/components/Hero.jsx`
2. **Skills**: Update `src/components/Skills.jsx`
3. **Experience**: Modify `src/components/Experience.jsx`
4. **Projects**: Edit `src/components/Projects.jsx`
5. **Contact Links**: Update social media URLs in `src/components/Contact.jsx`
6. **Resume**: Place your resume PDF in the `public` folder and update the path in `src/components/Hero.jsx`

### Styling

- Colors can be customized in `tailwind.config.js`
- Global styles are in `src/index.css`

## Deployment

This project can be deployed to various platforms:

- **Vercel**: Connect your GitHub repo and deploy automatically
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **AWS S3 + CloudFront**: Upload `dist` folder to S3 bucket
- **GitHub Pages**: Use the `gh-pages` package

## License

This project is open source and available under the MIT License.

## Contact

Rishab Sharma
- Email: rishab.sharma@example.com
- LinkedIn: [Your LinkedIn Profile]
- GitHub: [Your GitHub Profile]

