import { CheckCircle } from "lucide-react";

// The data is reframed to represent different user benefits/levels.
const plans = [
  {
    name: "Standard Account",
    description: "Ideal for everyday transactions. Secure, fast, and always reliable.",
    details: [
      "Low-cost Send Money",
      "Free Mobile Recharge",
      "Pay Bills with ease",
      "Cash Out from a massive network",
    ],
    highlighted: false,
  },
  {
    name: "VIP User",
    description: "Unlock special benefits and loyalty rewards as you use the app more.",
    details: [
      "Reduced Cash Out charges",
      "Exclusive offers & cashback",
      "Higher transaction limits",
      "Priority customer service",
    ],
    highlighted: true,
  },
  {
    name: "Business Account",
    description: "Tailored for entrepreneurs and merchants. Streamline your business finances.",
    details: [
      "Accept payments instantly",
      "Manage business transactions",
      "Generate transaction reports",
      "Dedicated merchant support",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Changed the heading to be more benefit-oriented */}
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Transparent and Fair Charges</h2>
        <p className="text-lg text-gray-600 mb-10">
          Our model is built on transparency. Pay only for the services you use, with no hidden fees.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`p-8 rounded-2xl shadow-lg border transition-transform hover:scale-105 ${
                plan.highlighted ? "bg-blue-600 text-white border-blue-600" : "bg-white border-gray-200"
              }`}
            >
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-gray-800"}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.highlighted ? "text-blue-200" : "text-gray-500"}`}>{plan.description}</p>
              
              {/* Removed the fixed price block to avoid the "subscription" feel */}
              
              <ul className="space-y-4 text-left mb-6">
                {plan.details.map((detail, idx) => (
                  <li key={idx} className={`flex items-start gap-3 ${plan.highlighted ? "text-blue-50" : "text-gray-700"}`}>
                    <CheckCircle className={`w-5 h-5 flex-shrink-0 ${plan.highlighted ? "text-blue-200" : "text-blue-600"}`} />
                    <span className="text-base">{detail}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full px-6 py-3 rounded-lg font-bold transition-transform transform hover:scale-105 ${
                  plan.highlighted
                    ? "bg-white text-blue-600 hover:bg-gray-100"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}