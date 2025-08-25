// src/components/Footer.tsx
import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} TakaPay. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <Link to="/about">About</Link>
          <Link to="/features">Features</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
