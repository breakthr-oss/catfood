# Cat Food Reviews

A modern, responsive website that helps cat owners discover and compare highly rated cat food products.

---

## What This Project Is

**Cat Food Reviews** is a static marketing site built with [Next.js](https://nextjs.org), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com). It showcases top-rated cat foods, explains the site’s mission, answers common questions, and links to social channels. The project includes:

- A **Next.js app** (React) you run with `npm run dev`
- A **standalone `index.html`** you can open directly in a browser (no server required)

---

## What It Does

The site has five main sections:

| Section | Description |
|--------|-------------|
| **Hero** | Full-width hero with a cat-themed background and tagline: *"Find the Purrfect Food for Your Cat"* |
| **Top Foods** | Grid of 4 highly rated cat foods with name, brand, star rating, and short description |
| **About** | Mission statement: helping cat owners choose quality nutrition with honest, research-based reviews |
| **FAQ** | Expandable accordion with common questions (e.g. how we rate food, grain-free vs. grain-inclusive, wet vs. dry) |
| **Contact** | Links to **Instagram** and **Facebook Marketplace** |

You can customize foods, FAQs, mission text, and social links by editing the data files and components (see [Customization](#customization) below).

---

## How to Run It Locally

### Prerequisites

- **Node.js** 18 or newer ([nodejs.org](https://nodejs.org))
- **npm** (included with Node.js)

### 1. Clone the repository (if you haven’t already)

```bash
git clone https://github.com/breakthr-oss/catfood.git
cd catfood
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

### 4. Open the site in your browser

Go to:

**http://localhost:3000**

You should see the full Cat Food Reviews site. Edits to code will hot-reload.

---

### Optional: Run the standalone HTML version

To view the site **without** Node or a dev server:

1. Open `index.html` in your project root (double-click or **File → Open** in your browser).

The standalone version uses embedded assets and works when opened via `file://`. It does not use the Next.js app or `npm run dev`.

---

## Project Structure

```
cat-food-reviews/
├── public/
│   └── images/          # Hero and food images (add hero-cat.jpg, food-1.jpg, etc.)
├── src/
│   ├── app/             # Next.js app
│   │   ├── layout.tsx   # Root layout, metadata
│   │   ├── page.tsx     # Home page
│   │   └── globals.css  # Global styles
│   ├── components/      # Hero, TopFoods, About, FAQ, Contact, etc.
│   ├── data/            # foods.ts, faqs.ts
│   └── types/           # TypeScript types
├── index.html           # Standalone HTML version
├── package.json
└── README.md
```

---

## Customization

| What to change | Where to edit |
|----------------|----------------|
| Top 4 cat foods | `src/data/foods.ts` |
| FAQ questions & answers | `src/data/faqs.ts` |
| Mission / About copy | `src/components/About.tsx` |
| Hero tagline | `src/components/Hero.tsx` |
| Instagram / Facebook links | `src/components/Contact.tsx` |
| Colors / theme | `tailwind.config.js` |

---

## Adding Images

For the **Next.js** app, add images under `public/images/`:

- `hero-cat.jpg` — hero background (e.g. 1920×700)
- `food-1.jpg` … `food-4.jpg` — product images (e.g. 400×400)

You can use free stock photos from [Unsplash](https://unsplash.com), [Pexels](https://pexels.com), or [Pixabay](https://pixabay.com). The hero also has a built-in fallback (gradient + simple cat graphic) if no image is present.

---

## Build for Production

```bash
npm run build
npm start
```

Then open **http://localhost:3000** to view the production build locally.

---

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **React Icons**

---

## License

MIT
