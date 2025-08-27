

const plans = [
  {
    name: "Basic",
    price: "$9/mo",
    features: ["1 Project", "Basic Support", "Access to Resources"],
  },
  {
    name: "Pro",
    price: "$29/mo",
    features: ["10 Projects", "Priority Support", "Exclusive Resources"],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$99/mo",
    features: ["Unlimited Projects", "Dedicated Manager", "Custom Solutions"],
  },
];

export default function Pricing() {
  return (
    <section className="min-h-screen bg-gray-50 px-6 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`p-6 rounded-2xl shadow-md border transition-transform hover:scale-105 ${
                plan.highlighted ? "bg-blue-600 text-white" : "bg-white"
              }`}
            >
              <h3 className="text-2xl font-semibold mb-3">{plan.name}</h3>
              <p className="text-3xl font-bold mb-6">{plan.price}</p>
              <ul className="space-y-2">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="text-lg">
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-6 px-6 py-2 rounded-lg font-medium transition ${
                  plan.highlighted
                    ? "bg-white text-blue-600"
                    : "bg-blue-600 text-white"
                }`}
              >
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
