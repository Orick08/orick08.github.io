import { useState } from "react";
import { XPWindow } from "@/components/XPWindow";
import { User, Home, Share2, BookOpen, Briefcase } from "lucide-react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Index from "./pages/index";
import Porfolio from "./pages/portfolio";
import Social from "./pages/social";
import About from "./pages/about";
import Blog from "./pages/blog";

export default function App() {
  const location = useLocation();

  const menuItems = [
    { id: "/", label: "Home", icon: Home },
    { id: "/blog", label: "Blog", icon: BookOpen },
    { id: "/portfolio", label: "Portfolio", icon: Briefcase },
    { id: "/social", label: "Social Media", icon: Share2 },
    { id: "/about-me", label: "About Me", icon: User },
  ];

  const currentItem = menuItems.find((item) => item.id === location.pathname);
  const currentTitle = currentItem ? currentItem.label : "Home";

  return (
    <div className="min-h-screen bg-[#000000] p-3 lg:p-8 flex flex-col lg:flex-row gap-6 overflow-auto">
      {/* Menu Window - Left Side */}
      {/* TODO: make this max width 200px */}
      <XPWindow title="Menu" className="h-fit flex-1">
        <div className="p-4">
          <nav className="flex flex-row lg:flex-col gap-3">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.id;
              return (
                <Link
                  key={item.id}
                  to={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-3 px-5 py-3.5 rounded-sm transition-all duration-150 ${
                    isActive
                      ? "bg-gradient-to-r from-[#ff6600] to-[#ff7a1a] text-white shadow-[0_0_20px_rgba(255,102,0,0.4)]"
                      : "bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] text-[#ff8833] hover:from-[#ff6600] hover:to-[#ff7a1a] hover:text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                  }`}
                >
                  <Icon size={18} strokeWidth={2.5} />
                  <span className="font-semibold tracking-wide hidden lg:inline">
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Zune branding accent */}
          <div className="mt-6 pt-4 border-t border-[#333]">
            <div className="flex items-center gap-2 opacity-40">
              <div className="w-2 h-2 bg-[#ff6600] rounded-full animate-pulse"></div>
              <span className="text-[#666] text-xs font-semibold tracking-wider">
                Made with react, 2026.
              </span>
            </div>
          </div>
        </div>
      </XPWindow>

      {/* Content Window - Right Side */}
      <XPWindow title={currentTitle} className="flex-1 lg:flex-4 min-h-[600px]">
        <div className="p-4 lg:p-8">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/portfolio" element={<Porfolio />} />
            <Route path="/social" element={<Social />} />
            <Route path="/about-me" element={<About />} />
          </Routes>
        </div>
      </XPWindow>
    </div>
  );
}
