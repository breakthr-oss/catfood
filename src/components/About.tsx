export default function About() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          About Us
        </h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            At Cat Food Reviews, we're passionate about helping cat owners make informed decisions about their pet's nutrition. We understand that choosing the right food for your feline friend can be overwhelming with so many options available.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Our mission is to provide honest, comprehensive reviews of cat food products based on ingredient quality, nutritional value, brand reputation, and real-world feedback from cat owners and veterinarians.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            We believe every cat deserves the best nutrition, and we're here to help you find it. Whether you're looking for grain-free options, formulas for specific life stages, or budget-friendly choices, we've got you covered.
          </p>
        </div>
      </div>
    </section>
  );
}
