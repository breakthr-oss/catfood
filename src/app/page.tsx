import Hero from '@/components/Hero';
import TopFoods from '@/components/TopFoods';
import About from '@/components/About';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TopFoods />
      <About />
      <FAQ />
      <Contact />
    </main>
  );
}
