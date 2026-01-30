# Cat Food Reviews Website

A modern, responsive website for reviewing and showcasing top-rated cat food products.

## Features

- **Hero Section**: Eye-catching hero with cat image and tagline
- **Top Foods Section**: Displays 4 highly rated cat food products with ratings
- **About Section**: Mission statement and site information
- **FAQ Section**: Expandable accordion with common questions
- **Contact Section**: Social media links (Instagram and Facebook Marketplace)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Add images to `public/images/`:
   - `hero-cat.jpg` - A beautiful cat image for the hero section (recommended: 1920x700px)
   - `food-1.jpg` - Image for Premium Salmon & Tuna (recommended: 400x400px)
   - `food-2.jpg` - Image for Natural Chicken Recipe (recommended: 400x400px)
   - `food-3.jpg` - Image for Ocean Fish Feast (recommended: 400x400px)
   - `food-4.jpg` - Image for Turkey & Duck Formula (recommended: 400x400px)

   You can use free stock images from:
   - [Unsplash](https://unsplash.com) - Search for "cat" and "cat food"
   - [Pexels](https://pexels.com) - Free stock photos
   - [Pixabay](https://pixabay.com) - Free images

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
cat-food-reviews/
├── public/
│   └── images/          # Image assets
├── src/
│   ├── app/             # Next.js app directory
│   │   ├── layout.tsx  # Root layout
│   │   ├── page.tsx    # Home page
│   │   └── globals.css # Global styles
│   ├── components/      # React components
│   ├── data/           # Data files (foods, FAQs)
│   └── types/          # TypeScript type definitions
└── package.json
```

## Customization

### Update Food Reviews

Edit `src/data/foods.ts` to modify the food products displayed.

### Update FAQs

Edit `src/data/faqs.ts` to modify the frequently asked questions.

### Change Colors

Edit `tailwind.config.js` to customize the color scheme. The primary color is currently set to orange tones.

### Update Social Links

Edit `src/components/Contact.tsx` to update Instagram and Facebook Marketplace URLs.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This project can be easily deployed to:

- **Vercel** (recommended): Connect your GitHub repository and deploy automatically
- **Netlify**: Drag and drop the project or connect via Git
- **Any static hosting**: Run `npm run build` and deploy the `out` directory

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library

## License

MIT
