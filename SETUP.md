# Quick Setup Guide

## Step 1: Install Dependencies

```bash
cd cat-food-reviews
npm install
```

## Step 2: Add Images

You need to add 5 images to the `public/images/` folder:

1. **hero-cat.jpg** - A beautiful cat photo for the hero section
   - Recommended size: 1920x700px
   - Search terms: "cat", "kitten", "feline"

2. **food-1.jpg** through **food-4.jpg** - Cat food product images
   - Recommended size: 400x400px (square)
   - Search terms: "cat food", "pet food", "cat food bag"

### Free Image Sources:
- [Unsplash](https://unsplash.com/s/photos/cat) - High-quality free photos
- [Pexels](https://www.pexels.com/search/cat/) - Free stock photos
- [Pixabay](https://pixabay.com/images/search/cat/) - Free images

### Quick Image Download (using curl):
```bash
# Example: Download a placeholder (replace with actual URLs)
cd public/images

# For hero image, you can use any cat photo from Unsplash
# For food images, search for "cat food" on Unsplash
```

## Step 3: Update Social Media Links

Edit `src/components/Contact.tsx` and update the URLs:
- Line 10: Replace `https://www.instagram.com` with your Instagram URL
- Line 22: Replace `https://www.facebook.com/marketplace` with your Facebook Marketplace URL

## Step 4: Run the Development Server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site!

## Step 5: Customize Content

- **Food Reviews**: Edit `src/data/foods.ts`
- **FAQs**: Edit `src/data/faqs.ts`
- **About Section**: Edit `src/components/About.tsx`
- **Hero Tagline**: Edit `src/components/Hero.tsx`

## Troubleshooting

### Images not showing?
- Make sure images are in `public/images/` folder
- Check that filenames match exactly (case-sensitive)
- Verify image file extensions are `.jpg` or `.png`

### Build errors?
- Run `npm install` to ensure all dependencies are installed
- Check that Node.js version is 18 or higher
