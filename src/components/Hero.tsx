export default function Hero() {
  const heroImageUrl =
    'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80';

  return (
    <section className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-br from-primary-400 to-primary-600 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImageUrl})` }}
        role="img"
        aria-label="Beautiful cat"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
          Find the Purrfect Food for Your Cat
        </h1>
        <p className="text-xl md:text-2xl text-white/90 drop-shadow-md">
          Expert reviews and ratings to help you choose the best nutrition for your feline friend
        </p>
      </div>
    </section>
  );
}
