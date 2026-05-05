export default function Index() {
  return (
    <div className="space-y-6">
      <div className="border-l-4 border-[#ff6600] pl-4 mb-6">
        <h1 className="text-4xl font-bold text-white mb-2">
          Welcome to my website
        </h1>
        <p className="text-[#ff8833] text-lg font-medium">I'm Erick Amezcua</p>
      </div>

      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-[#2a2a2a] rounded-sm p-3 space-y-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
        <p className="text-gray-300 leading-relaxed">
          This is my personal website to shared to the world about my personal
          projects and portafolio.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="bg-[#0d0d0d] border border-[#333] hover:border-[#ff6600] rounded-sm p-5 transition-all group">
            <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-[#ff6600] to-[#ff7a1a] flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(255,102,0,0.3)]">
              <span className="text-white text-xl">🎨</span>
            </div>
            <h3 className="text-white font-bold mb-2 group-hover:text-[#ff8833] transition-colors">
              Blog posts
            </h3>
            <p className="text-gray-500 text-sm">Programming, thoughts, etc.</p>
          </div>
          <div className="bg-[#0d0d0d] border border-[#333] hover:border-[#ff6600] rounded-sm p-5 transition-all group">
            <div className="w-10 h-10 rounded-sm bg-gradient-to-br from-[#ff6600] to-[#ff7a1a] flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(255,102,0,0.3)]">
              <span className="text-white text-xl">🎯</span>
            </div>
            <h3 className="text-white font-bold mb-2 group-hover:text-[#ff8833] transition-colors">
              Porfolio
            </h3>
            <p className="text-gray-500 text-sm">Projects and stuff.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
