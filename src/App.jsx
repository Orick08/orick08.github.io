import { useState } from "react";
import { XPWindow } from "@/components/XPWindow";
import { User, Home, Share2, BookOpen, Briefcase } from "lucide-react";


export default function App() {
  const [activeSection, setActiveSection] = useState("inicio");

  const menuItems = [
    { id: "inicio", label: "Inicio", icon: Home },
    { id: "sobre-mi", label: "Sobre mí", icon: User },
    { id: "social-media", label: "Social Media", icon: Share2 },
    { id: "blog", label: "Blog", icon: BookOpen },
    { id: "portafolio", label: "Portafolio", icon: Briefcase },
  ];

  return (
    <div className="min-h-screen bg-[#000000] p-8 flex gap-6 overflow-auto">
      {/* Menu Window - Left Side */}
      <XPWindow title="Menu" className="w-72 h-fit flex-shrink-0">
        <div className="p-5">
          <nav className="flex flex-col gap-2.5">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-3 px-5 py-3.5 rounded-sm transition-all duration-150 ${
                    activeSection === item.id
                      ? "bg-gradient-to-r from-[#ff6600] to-[#ff7a1a] text-white shadow-[0_0_20px_rgba(255,102,0,0.4)]"
                      : "bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] text-[#ff8833] hover:from-[#ff6600] hover:to-[#ff7a1a] hover:text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]"
                  }`}
                >
                  <Icon size={18} strokeWidth={2.5} />
                  <span className="font-semibold tracking-wide">{item.label}</span>
                </button>
              );
            })}
          </nav>
          
          {/* Zune branding accent */}
          <div className="mt-6 pt-4 border-t border-[#333]">
            <div className="flex items-center gap-2 opacity-40">
              <div className="w-2 h-2 bg-[#ff6600] rounded-full animate-pulse"></div>
              <span className="text-[#666] text-xs font-semibold tracking-wider">ZUNE THEME</span>
            </div>
          </div>
        </div>
      </XPWindow>

      {/* Content Window - Right Side */}
      <XPWindow title={menuItems.find(item => item.id === activeSection)?.label || "Inicio"} className="flex-1 min-h-[600px]">
        <div className="p-8">
          {activeSection === "inicio" && (
            <div className="space-y-6">
              <div className="border-l-4 border-[#ff6600] pl-4 mb-6">
                <h1 className="text-4xl font-bold text-white mb-2">
                  Bienvenido a mi sitio web
                </h1>
                <p className="text-[#ff8833] text-lg font-medium">
                  Tema Zune • Windows XP Edition
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-[#2a2a2a] rounded-sm p-6 space-y-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                <p className="text-gray-300 leading-relaxed">
                  Este es un sitio web personal con un diseño nostálgico inspirado en el tema Zune de Windows XP.
                  Utiliza el menú de la izquierda para navegar por las diferentes secciones.
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div className="bg-[#0d0d0d] border border-[#333] hover:border-[#ff6600] rounded-sm p-5 transition-all group">
                    <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-[#ff6600] to-[#ff7a1a] flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(255,102,0,0.3)]">
                      <span className="text-white text-xl">🎨</span>
                    </div>
                    <h3 className="text-white font-bold mb-2 group-hover:text-[#ff8833] transition-colors">Diseño Retro</h3>
                    <p className="text-gray-500 text-sm">Inspirado en la estética del tema Zune</p>
                  </div>
                  <div className="bg-[#0d0d0d] border border-[#333] hover:border-[#ff6600] rounded-sm p-5 transition-all group">
                    <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-[#ff6600] to-[#ff7a1a] flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(255,102,0,0.3)]">
                      <span className="text-white text-xl">🎯</span>
                    </div>
                    <h3 className="text-white font-bold mb-2 group-hover:text-[#ff8833] transition-colors">Tema Personalizado</h3>
                    <p className="text-gray-500 text-sm">Colores negro y naranja para un look único</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "sobre-mi" && (
            <div className="space-y-6">
              <div className="border-l-4 border-[#ff6600] pl-4 mb-6">
                <h2 className="text-3xl font-bold text-white mb-2">Sobre mí</h2>
                <p className="text-gray-500">Conoce más sobre mi experiencia y habilidades</p>
              </div>
              
              <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-[#2a2a2a] rounded-sm p-6 space-y-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-[#ff8833] font-bold text-xl mb-2">Perfil</h3>
                    <p className="text-gray-300 leading-relaxed">
                      Desarrollador apasionado por crear experiencias web únicas y memorables.
                      Me especializo en desarrollo frontend con React y diseño de interfaces.
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-[#2a2a2a]">
                    <h3 className="text-[#ff8833] font-bold text-xl mb-3">Habilidades</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {["React", "TypeScript", "Tailwind CSS", "UI/UX Design"].map((skill) => (
                        <div key={skill} className="flex items-center gap-3 bg-[#0d0d0d] border border-[#333] px-4 py-2.5 rounded-sm">
                          <div className="w-2 h-2 bg-[#ff6600] rounded-full shadow-[0_0_8px_rgba(255,102,0,0.6)]"></div>
                          <span className="text-gray-300 font-medium">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "social-media" && (
            <div className="space-y-6">
              <div className="border-l-4 border-[#ff6600] pl-4 mb-6">
                <h2 className="text-3xl font-bold text-white mb-2">Social Media</h2>
                <p className="text-gray-500">Conecta conmigo en redes sociales</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { name: "Twitter / X", handle: "@tunombre", color: "#ff6600" },
                  { name: "GitHub", handle: "github.com/tunombre", color: "#ff8833" },
                  { name: "LinkedIn", handle: "linkedin.com/in/tunombre", color: "#ff6600" },
                  { name: "Instagram", handle: "@tunombre", color: "#ff8833" },
                ].map((social) => (
                  <div
                    key={social.name}
                    className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-[#2a2a2a] hover:border-[#ff6600] rounded-sm p-5 transition-all cursor-pointer group shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                  >
                    <h3 className="text-[#ff8833] font-bold text-lg mb-1 group-hover:text-[#ff6600] transition-colors">
                      {social.name}
                    </h3>
                    <p className="text-gray-500 text-sm">{social.handle}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === "blog" && (
            <div className="space-y-6">
              <div className="border-l-4 border-[#ff6600] pl-4 mb-6">
                <h2 className="text-3xl font-bold text-white mb-2">Blog</h2>
                <p className="text-gray-500">Artículos y reflexiones</p>
              </div>
              
              <div className="space-y-4">
                {[
                  {
                    title: "Mi experiencia con Windows XP",
                    date: "15 de Enero, 2026",
                    excerpt: "Un viaje nostálgico por uno de los sistemas operativos más icónicos...",
                  },
                  {
                    title: "Diseño retro en la web moderna",
                    date: "10 de Enero, 2026",
                    excerpt: "Cómo combinar la estética clásica con tecnologías actuales...",
                  },
                  {
                    title: "El poder de React y TypeScript",
                    date: "5 de Enero, 2026",
                    excerpt: "Construyendo aplicaciones web robustas y escalables...",
                  },
                ].map((post) => (
                  <div
                    key={post.title}
                    className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-[#2a2a2a] hover:border-[#ff6600] rounded-sm p-6 transition-all cursor-pointer group shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                  >
                    <h3 className="text-white font-bold text-xl mb-2 group-hover:text-[#ff8833] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-3">{post.date}</p>
                    <p className="text-gray-400 leading-relaxed">{post.excerpt}</p>
                    <button className="mt-4 px-4 py-2 bg-gradient-to-r from-[#ff6600] to-[#ff7a1a] hover:from-[#ff7a1a] hover:to-[#ff6600] text-white text-sm font-bold rounded-sm transition-all shadow-[0_0_15px_rgba(255,102,0,0.2)]">
                      Leer más →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeSection === "portafolio" && (
            <div className="space-y-6">
              <div className="border-l-4 border-[#ff6600] pl-4 mb-6">
                <h2 className="text-3xl font-bold text-white mb-2">Portafolio</h2>
                <p className="text-gray-500">Mis proyectos destacados</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    name: "Proyecto XP Theme",
                    description: "Sitio web con diseño retro inspirado en Windows XP",
                    tech: ["React", "Tailwind", "TypeScript"],
                  },
                  {
                    name: "Dashboard Moderno",
                    description: "Panel de control con visualizaciones de datos",
                    tech: ["React", "Charts", "API"],
                  },
                  {
                    name: "E-commerce Platform",
                    description: "Tienda online con carrito de compras",
                    tech: ["React", "Redux", "Stripe"],
                  },
                  {
                    name: "Portfolio Gallery",
                    description: "Galería de imágenes con filtros dinámicos",
                    tech: ["React", "Framer Motion", "CSS"],
                  },
                ].map((project) => (
                  <div
                    key={project.name}
                    className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-[#2a2a2a] hover:border-[#ff6600] rounded-sm overflow-hidden transition-all group shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                  >
                    <div className="h-40 bg-gradient-to-br from-[#ff6600] via-[#ff7a1a] to-[#e65c00] flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/20"></div>
                      <span className="text-white font-bold text-lg relative z-10 drop-shadow-lg">{project.name}</span>
                    </div>
                    <div className="p-5">
                      <h3 className="text-white font-bold text-lg mb-2">{project.name}</h3>
                      <p className="text-gray-500 text-sm mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 bg-[#0d0d0d] border border-[#ff6600] rounded-sm text-[#ff8833] text-xs font-semibold shadow-[inset_0_0_10px_rgba(255,102,0,0.1)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </XPWindow>
    </div>
  );
}