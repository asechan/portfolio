# Asechan Chib - Portfolio Website

A minimal, ethereal personal portfolio built with Next.js (App Router), Tailwind CSS (v4), and Framer Motion. 

## Tech Stack
- **Framework:** [Next.js (App Router)](https://nextjs.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

## Design System
- **Colors:** Morning Mist (Light Ethereal)
- **Typography:** Outfit (Headings) & Manrope (Body)
- **Visual Motif:** Subtle Noise & Blur, with staggered scroll reveals

## Setup & Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contact Form Setup

This template uses [Formspree](https://formspree.io/) for a simple, serverless contact form without needing backend secrets.

1. Sign up for a free account at Formspree.
2. Create a new form and copy the endpoint URL provided.
3. Open `src/app/contact/page.tsx` and replace `YOUR_FORM_ID_HERE` in the `<form action="...">` tag with your actual Formspree endpoint.

## Deployment

This site is optimized for deployment on [Vercel](https://vercel.com/):

1. Push the code to a GitHub repository.
2. Create a new project on Vercel and link your repository.
3. Vercel will automatically detect the Next.js framework and deploy the site.

## Notes on Inspiration
While this portfolio takes structural and pacing cues from references like hamishw.com (full-screen hero, smooth scroll reveals, dedicated case studies), all code, styling, visual identity, and project content have been built completely from scratch to reflect a unique "Morning Mist" aesthetic.
