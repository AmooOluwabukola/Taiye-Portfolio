import { TrendingUp, Users, Search, MessageCircle, Handshake, Clock } from "lucide-react";

export function Skills() {
  const skills = [
    { name: "Sales and Revenue Growth", icon: TrendingUp },
    { name: "Client Relationship Management", icon: Users },
    { name: "Market Research and Analysis", icon: Search },
    { name: "Excellent Communication", icon: MessageCircle },
    { name: "Negotiation and Deal Structuring", icon: Handshake },
    { name: "Time Management", icon: Clock }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          Core Skills
        </h2>
        <div className="w-20 h-1 bg-[#C89B6D] mx-auto mb-16 text-lg"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-[#C89B6D]/5 p-6 rounded-xl border-2 border-[#C89B6D]/20 hover:border-[#C89B6D] hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-[#C89B6D] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <skill.icon className="text-white" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900">{skill.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
