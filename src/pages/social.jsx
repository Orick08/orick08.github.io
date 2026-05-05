export default function Social() {
  const socialList = [
    {
      name: "Twitter",
      handle: "@Orick08",
      color: "#ff6600",
    },
    {
      name: "GitHub",
      handle: "github.com/Orick08",
      color: "#ff8833",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="border-l-4 border-[#ff6600] pl-4 mb-6">
        <h2 className="text-3xl font-bold text-white mb-2">Social Media</h2>
        <p className="text-gray-500">Conecta conmigo en redes sociales</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {socialList.map((social) => (
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
  );
}
