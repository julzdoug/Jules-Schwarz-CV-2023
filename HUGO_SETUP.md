# 🚀 Jules Schwarz - Hugo Portfolio

Your repository has been successfully converted to a **Hugo static site** with beautiful animations!

## ✨ Features

- **Smooth Animations**: Fade-in, slide-in, and bounce animations on page load
- **Scroll Effects**: Parallax effect on hero section and scroll-triggered animations
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern UI**: Clean, professional design with Bootstrap 5
- **Fast Performance**: Hugo generates static HTML for lightning-fast load times
- **Easy to Customize**: Modify the theme in `themes/personnaltheme/`

## 🎨 Animation Details

The site includes:
- **Fade-in animations**: Title and subtitle with staggered timing
- **Slide animations**: Content sections slide in on scroll
- **Bounce effect**: Profile image bounces on load
- **Floating elements**: Decorative background elements
- **Mouse scroll indicator**: Animated scroll suggestion
- **Hover effects**: Cards lift on hover with smooth transitions

## 📁 Project Structure

```
Jules-Schwarz-CV-2023/
├── hugo.toml              # Hugo configuration
├── content/               # Your content (markdown files)
├── themes/
│   └── personnaltheme/    # Custom theme with animations
│       ├── layouts/       # HTML templates
│       └── static/        # CSS, JS, images
└── public/                # Generated static site (after build)
```

## 🚀 Quick Start

### Development Server

```bash
cd /home/julesschwarz/JulesDevPage/Jules-Schwarz-CV-2023
/home/julesschwarz/.local/bin/hugo server
```

Then visit: `http://localhost:1313`

### Build for Production

```bash
/home/julesschwarz/.local/bin/hugo
```

This generates a `public/` folder with your static site ready to deploy.

## 📝 Adding Content

Create new projects by adding markdown files in the `content/` folder:

```bash
/home/julesschwarz/.local/bin/hugo new content/my-project.md
```

Example content:
```markdown
---
title: "Project Name"
summary: "Brief description of your project"
link: "https://example.com"
draft: false
---

More details about your project...
```

## 🎯 Customization

- **Colors**: Edit the CSS variables in `themes/personnaltheme/static/css/style.css`
- **Content**: Modify `themes/personnaltheme/layouts/index.html`
- **Theme Data**: Update `hugo.toml` with your site info

## 🌐 Deployment

The static site can be deployed to:
- **GitHub Pages**: Push `public/` folder
- **Netlify**: Connect your repo for auto-deploy
- **Vercel**: Simple deployment with zero config
- **Any web host**: Just upload the `public/` folder

## 📞 Next Steps

1. ✅ Hugo site is ready!
2. ⭕ Customize colors and content to match your brand
3. ⭕ Add your projects in the `content/` folder
4. ⭕ Update social links in the footer
5. ⭕ Deploy to your hosting platform

Enjoy your new animated Hugo portfolio! 🎉
