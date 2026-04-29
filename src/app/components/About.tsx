import { Award, Users, TrendingUp } from "lucide-react";
import { motion } from "motion/react";

export function About() {
  const highlights = [
    {
      icon: TrendingUp,
      title: "Revenue Growth Expert",
      description:
        "Proven track record of driving 35%+ revenue increases across multiple industries",
    },
    {
      icon: Users,
      title: "Strategic Partnerships",
      description: "Built and nurtured 50+ B2B and B2C client relationships",
    },
    {
      icon: Award,
      title: "High Performance",
      description: "Consistently exceeded targets with 110% achievement rate",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          About Me
        </h2>
        <div className="w-20 h-1 bg-[#C89B6D] mx-auto mb-12"></div>
  <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
        <p className="md:text-lg text-gray-700 max-w-4xl mx-auto text-center mb-16 leading-relaxed">
          Results-driven Business Development Manager with 7 years of proven
          expertise in driving revenue growth, building strategic partnerships,
          and expanding market share across multiple industries including
          aviation, logistics, FCMG, telecommunication, exports, and real
          estate. Skilled in identifying opportunities, negotiating high-value
          deals, and nurturing long-term client relationships that deliver
          measurable business results. Adept at market analysis, sales strategy,
          and stakeholder management, with a track record of converting
          prospects into loyal customers through consultative selling and
          tailored solutions.
        </p>
</motion.div>
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div
                key={index}
                className="bg-gradient-to-br from-[#C89B6D]/5 to-[#A67C52]/5 p-8 rounded-xl border border-[#C89B6D]/20 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-[#C89B6D] rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="text-white" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
