import { CheckCircle } from "lucide-react";

const features = [
  "Experience instant transactions with our **lightning-fast platform**, designed for speed and reliability.",
  "Navigate with ease using our **intuitive interface**, making complex financial tasks simple and effortless.",
  "Protect your assets with **state-of-the-art security protocols**, ensuring your data is always safe and confidential.",
  "Get help whenever you need it with our **dedicated 24/7 customer support**, ready to assist you around the clock.",
  "Connect your finances effortlessly with **seamless integrations**, from bank accounts to digital wallets.",
];

export default function Features() {
  return (
    <section className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Features That Define Us
        </h2>
        <div className="grid md:grid-cols-2 gap-6 text-left">
          {features.map((feature, i) => (
            <div key={i} className="flex items-start gap-3">
              <CheckCircle className="text-blue-600 w-6 h-6 min-w-6 min-h-6" />
              <p className="text-lg text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: feature }}></p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}