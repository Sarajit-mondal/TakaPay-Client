// src/components/Navbar.tsx

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-pink-600 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold">TakaPay</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `hover:text-yellow-300 ${isActive ? "text-yellow-200 font-semibold" : ""}`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-pink-700 p-4 flex flex-col gap-3">
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              className="hover:text-yellow-300"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}
