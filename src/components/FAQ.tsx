import { faqs } from '@/data/faqs';
import FAQItem from './FAQItem';

export default function FAQ() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Have questions about cat food? We've got answers.
        </p>
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
