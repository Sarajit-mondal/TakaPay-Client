import { useState } from "react";


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
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-lg p-4 cursor-pointer"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <h3 className="text-lg font-semibold flex justify-between items-center">
                {faq.q}
                <span>{openIndex === i ? "-" : "+"}</span>
              </h3>
              {openIndex === i && (
                <p className="mt-2 text-gray-600">{faq.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
