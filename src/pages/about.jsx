export default function About() {
  const skills = ["Python", "C#", "JavaScript", "React"];

  return (
    <div className="space-y-6">
      <div className="border-l-4 border-[#ff6600] pl-4 mb-6">
        <h2 className="text-3xl font-bold text-white mb-2">About me</h2>
        <p className="text-gray-500">
          I'm a software developer based in Mexico.
        </p>
      </div>

      <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-[#2a2a2a] rounded-sm p-6 space-y-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
        <div className="space-y-4">
          <div>
            <h3 className="text-[#ff8833] font-bold text-xl mb-2">Profile</h3>
            <p className="text-gray-300 leading-relaxed">
              Not much to say yet, mainly AWS developer.
            </p>
          </div>

          <div className="pt-4 border-t border-[#2a2a2a]">
            <h3 className="text-[#ff8833] font-bold text-xl mb-3">Abilities</h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-3 bg-[#0d0d0d] border border-[#333] px-4 py-2.5 rounded-sm"
                >
                  <div className="w-2 h-2 bg-[#ff6600] rounded-full shadow-[0_0_8px_rgba(255,102,0,0.6)]"></div>
                  <span className="text-gray-300 font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
