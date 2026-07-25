# Yusuf Kedir - Professional Portfolio Website

A modern, responsive portfolio website showcasing my work as a Full-Stack Software Engineer with expertise in AI integration, system design, and scalable applications.

**Live Demo:** [yusuf-portfolio.vercel.app](https://yusuf-portfolio.vercel.app)

## 🚀 Features

- **Modern UI/UX**: Built with Next.js 14, React, and Tailwind CSS
- **Smooth Animations**: Framer Motion animations for engaging interactions
- **Responsive Design**: Mobile-first approach for all devices
- **Dark Theme**: Professional dark color scheme with accent colors
- **Project Showcase**: 6 featured projects with detailed descriptions
- **Skills Section**: Organized by categories (Frontend, Backend, AI/ML, DevOps, etc.)
- **Experience Timeline**: Professional work experience with key responsibilities
- **Contact Form**: Functional contact section with form validation
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Performance**: Optimized for fast loading and Core Web Vitals

## 📚 Projects Highlighted

1. **Educational Adventure Pathway (EAP)** - AI-Powered Scholarship Platform
2. **Harar City Land Management System** - File Management with Real-time Tracking
3. **Ethiopian-UniConnect** - University Resource Exchange Platform
4. **University Management System** - Comprehensive Admin System
5. **Restaurant Management System** - Multi-Tenant Admin Platform
6. **Fake News Detection System** - Machine Learning Classification

## 🛠 Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **State Management**: React Hooks

### Backend & Tools
- **Node.js**: Runtime
- **Git**: Version Control
- **ESLint**: Code Quality

### Deployment
- **Hosting**: Vercel
- **CI/CD**: GitHub Actions
- **Domain**: Custom Domain

## 📋 Installation & Setup

### Prerequisites
- Node.js 18+ and npm/yarn
- Git

### Local Development

```bash
# Clone the repository
git clone https://github.com/yu12suf/My-Portfolio-Website.git
cd My-Portfolio-Website

# Install dependencies
npm install
# or
yarn install

# Run development server
npm run dev
# or
yarn dev

# Open browser and navigate to
http://localhost:3000
```

### Build for Production

```bash
# Build the project
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Projects.tsx        # Projects showcase
│   ├── ProjectCard.tsx     # Individual project card
│   ├── Skills.tsx          # Skills section
│   ├── SkillCategory.tsx   # Skill category component
│   ├── Experience.tsx      # Experience timeline
│   ├── ExperienceItem.tsx  # Experience item component
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer
│   └── SectionHeading.tsx  # Section heading component
└── public/                 # Static assets

```

## 🎨 Customization

### Update Your Information
Edit the following files to customize the portfolio:

- **Hero Section**: `src/components/Hero.tsx`
- **About Section**: `src/components/About.tsx`
- **Projects**: `src/components/Projects.tsx`
- **Skills**: `src/components/Skills.tsx`
- **Experience**: `src/components/Experience.tsx`
- **Contact**: `src/components/Contact.tsx`

### Colors & Theme
Tailwind CSS configuration in `tailwind.config.ts`:

```typescript
colors: {
  primary: '#0f172a',      // Dark blue
  secondary: '#1e293b',    // Medium blue
  accent: '#3b82f6',       // Bright blue
}
```

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"
5. Vercel will automatically build and deploy

### GitHub Actions CI/CD

The repository includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically:
- Runs ESLint checks
- Builds the project
- Deploys to Vercel on push to main/master

## 📈 Performance

- **Lighthouse Score**: 90+
- **Core Web Vitals**: Optimized
- **Bundle Size**: Optimized with Next.js
- **Load Time**: < 2 seconds on 4G

## 🔐 Environment Variables

Create a `.env.local` file for sensitive data:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/yu12suf
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yusuf-kedir
```

## 📝 License

This project is open source and available under the MIT License. See [LICENSE](LICENSE) for details.

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact & Social

- **Email**: yusuf.kedir@example.com
- **Phone**: +251 (912) 345-678
- **Location**: Harar, Ethiopia
- **GitHub**: [@yu12suf](https://github.com/yu12suf)
- **LinkedIn**: [@yusuf-kedir](https://linkedin.com/in/yusuf-kedir)

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [Vercel](https://vercel.com/) - Deployment platform

---

**Made with ❤️ by Yusuf Kedir**
