export default function Blog() {
  return (
    <div className="space-y-6">
      <div className="border-l-4 border-[#ff6600] pl-4 mb-6">
        <h2 className="text-3xl font-bold text-white mb-2">Blog</h2>
        <p className="text-gray-500">Articles and tutorials.</p>
      </div>

      <div className="space-y-4">
        {[
          {
            title: "Open Software 101",
            date: "15 de Enero, 2026",
            excerpt:
              "Un viaje nostálgico por uno de los sistemas operativos más icónicos...",
          },
          {
            title: "Diseño retro en la web moderna",
            date: "10 de Enero, 2026",
            excerpt:
              "Cómo combinar la estética clásica con tecnologías actuales...",
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
  );
}
