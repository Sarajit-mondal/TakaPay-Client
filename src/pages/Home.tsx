import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

export default function Home() {
  const [loading, setLoading] = useState(true);

  // Simulate data loading delay
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-[calc(100vh-152px)] flex-grow flex flex-col items-center justify-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white px-6">
      {loading ? (
        // Skeleton Loader
        <div className="animate-pulse space-y-6 w-full max-w-3xl text-center">
          <div className="h-10 bg-white/30 rounded w-2/3 mx-auto"></div>
          <div className="h-6 bg-white/30 rounded w-1/2 mx-auto"></div>
          <div className="h-12 bg-white/30 rounded w-40 mx-auto"></div>
        </div>
      ) : (
        // Hero Content
        <motion.div
          className="text-center space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Fast, Secure & Smart Payments
          </h1>
          <p className="text-lg md:text-xl text-white/90">
            Experience seamless transactions anytime, anywhere.
          </p>
          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            <Link
              to="/features"
              className="px-6 py-3 bg-white text-pink-600 rounded-xl font-semibold hover:bg-gray-200 transition"
            >
              Explore Features
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-pink-700 rounded-xl font-semibold hover:bg-pink-800 transition"
            >
              Get Started
            </Link>
          </div>
        </motion.div>
      )}
    </main>
  );
}
