

export default function Contact() {
  return (
    <section className="min-h-screen bg-white px-6 py-16 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-gray-50 shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Contact Us
        </h2>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-400"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-400"
          ></textarea>
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
