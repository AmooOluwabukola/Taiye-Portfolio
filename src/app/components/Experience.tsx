import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      company: "Spacemould Limited",
      role: "Head of Sales and Business Development",
      period: "Sept 2024 – Present",
      type: "Hybrid",
      achievements: [
        "Built a scalable sales engine that boosted qualified pipeline volume by ~45% within six months and improved lead-to-deal conversion by 18%",
        "Closed strategic partnerships that increased enterprise deal value by 30% and expanded market reach across two new sectors",
        "Led the Nxthaus go-to-market rollout, achieving 60% faster adoption in the first quarter and generating a 25% lift in product visibility"
      ]
    },
    {
      company: "Oria Group",
      role: "Business Development Manager",
      period: "October 2024 – September 2025",
      type: "Hybrid",
      achievements: [
        "Achieved a 35% increase in group revenue within 12 months by driving business growth across subsidiaries (Kadosh Media Studios, Food logic, and Santoria)",
        "Secured and managed 50+ new B2B and B2C clients, expanding the customer base by 40% in 6 months",
        "Drove 15% growth in consolidated profits by leveraging cross-selling and inter-subsidiary referrals",
        "Reduced turnaround time on client projects by 25% through workflow optimization and efficient resource management"
      ]
    },
    {
      company: "Sujimoto Holdings",
      role: "Business Development Manager",
      period: "October 2022 – August 2024",
      type: "",
      achievements: [
        "Resolved 95% of customer complaints within the first call, resulting in a 25% reduction in escalation rate",
        "Achieved a customer satisfaction score of 92% through active listening, empathy and effective problem-solving",
        "Improved customer retention by 15% through proactive engagement and personalized support",
        "Consistently exceeded monthly target with a survey of 110% achievement"
      ]
    },
    {
      company: "Transsion Holdings",
      role: "Customer Service Representative/Content Specialist",
      period: "June 2022 - October 2022",
      type: "",
      achievements: [
        "Created and published 1000+ high quality content pieces (blog posts, social media posts) within 3 months period resulting in a 50% conversion and increase for website traffic",
        "Developed and implemented a content strategy that increased engagement by 200% and boosted conversion by 15%",
        "Collaborated with the design team to create visually appealing content assets, resulting in 25% increase in social media engagement"
      ]
    },
    {
      company: "Boom Boom Nig. Ltd.",
      role: "Customer Service Representative",
      period: "April 2021 – March 2022",
      type: "",
      achievements: [
        "Increased sales through customer service by 15% by identifying and capitalizing on up-sheet opportunity",
        "Improved customer retention by 12% through proactive engagement and personalized support",
        "Received 95% positive feedback rating from customers in communication skills and issue resolution"
      ]
    },
    {
      company: "Oxford Realty Group, Lagos",
      role: "Business Consultant",
      period: "March 2019 – December 2019",
      type: "",
      achievements: [
        "Enhanced client satisfaction ratings by resolving difficult customer issues through completion",
        "Developed new proposals, contracts and procedures to draw in more clients and streamline work operation",
        "Identified key products, services and customers and use data to device innovative sales and marketing plans enabling dramatic growth",
        "Developed complete business plan and operational strategies for new and existing business"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
          Professional Experience
        </h2>
        <div className="w-20 h-1 bg-[#C89B6D] mx-auto mb-16"></div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#C89B6D]/30"></div>

          {experiences.map((exp, index) => (
            
            <div
              key={index}
              className={`relative mb-12 md:pl-1/2 md:ml-auto md:text-left
              }`}
            >
              {/* Timeline dot */}
              <div className="hidden md:block absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#C89B6D] rounded-full ring-4 ring-white"></div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-8 h-8 md:w-12 md:h-12 bg-[#C89B6D]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="text-[#C89B6D]" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="md:text-xl text-[1px] font-bold text-gray-900">{exp.role}</h3>
                    <p className="text-[#C89B6D] font-semibold text-[14px] md:text-lg">{exp.company}</p>
                    <div className="flex items-center gap-2 md:text-sm text-[12px] text-gray-500 mt-1">
                      <Calendar size={14} />
                      <span>{exp.period}</span>
                      {exp.type && <span className="ml-2 px-2 py-0.5 bg-[#C89B6D]/10 text-[#C89B6D] rounded text-xs">{exp.type}</span>}
                    </div>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#C89B6D] mt-1 flex-shrink-0">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
