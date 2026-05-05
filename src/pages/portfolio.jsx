export default function Porfolio() {
  return (
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
              <span className="text-white font-bold text-lg relative z-10 drop-shadow-lg">
                {project.name}
              </span>
            </div>
            <div className="p-5">
              <h3 className="text-white font-bold text-lg mb-2">
                {project.name}
              </h3>
              <p className="text-gray-500 text-sm mb-4">
                {project.description}
              </p>
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
  );
}
