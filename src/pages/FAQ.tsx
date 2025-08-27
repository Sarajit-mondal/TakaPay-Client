import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    q: "What services do you provide?",
    a: "We provide web development, UI/UX design, and digital solutions tailored to your needs.",
  },
  {
    q: "How can I get support?",
    a: "You can contact us via email or use our live chat support available 24/7.",
  },
  {
    q: "Do you offer refunds?",
    a: "Yes, we offer a 14-day money-back guarantee for all subscription plans.",
  },
  {
    q: "What is your typical project timeline?",
    a: "The project timeline depends on the scope and complexity. A standard project typically takes 4-6 weeks from start to finish.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white shadow-lg rounded-xl transition-all duration-300 ease-in-out hover:shadow-xl"
            >
              <div
                className="flex justify-between items-center p-6 cursor-pointer"
                onClick={() => toggleFAQ(i)}
              >
                <h3 className="text-xl font-semibold text-gray-800">
                  {faq.q}
                </h3>
                <span className="text-blue-600 transition-transform duration-300">
                  {openIndex === i ? (
                    <ChevronUp size={24} />
                  ) : (
                    <ChevronDown size={24} />
                  )}
                </span>
              </div>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === i ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="p-6 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}