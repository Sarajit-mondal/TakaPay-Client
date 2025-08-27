import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send message. Please try again later.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Failed to send message. Please try again later.');
    }
  };

  return (
    <section className="min-h-screen bg-white px-6 py-16 flex items-center justify-center">
      <div className="max-w-3xl w-full bg-gray-50 shadow-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Contact Us
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-400"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring focus:ring-blue-400"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            {status || 'Send Message'}
          </button>
        </form>
        {status && <p className="mt-4 text-center text-sm text-gray-600">{status}</p>}
      </div>
    </section>
  );
}