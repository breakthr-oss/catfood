import { FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Get in Touch
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Follow us on social media for the latest reviews and cat care tips.
        </p>
        <div className="flex justify-center gap-8">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 rounded-lg hover:bg-gray-50 transition-colors group"
            aria-label="Visit our Instagram"
          >
            <FaInstagram className="text-5xl text-pink-600 group-hover:scale-110 transition-transform" />
            <span className="text-lg font-semibold text-gray-800">Instagram</span>
          </a>
          <a
            href="https://www.facebook.com/marketplace"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-3 p-6 rounded-lg hover:bg-gray-50 transition-colors group"
            aria-label="Visit our Facebook Marketplace"
          >
            <FaFacebook className="text-5xl text-blue-600 group-hover:scale-110 transition-transform" />
            <span className="text-lg font-semibold text-gray-800">Facebook Marketplace</span>
          </a>
        </div>
      </div>
    </section>
  );
}
