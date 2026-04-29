import { GraduationCap, Award, Heart, FileCheck } from "lucide-react";
import { motion } from "motion/react";

export function Education() {
  const certifications = [
    "Principles of Entrepreneurship and Innovation Management",
    "Certified Export Specialist (CES)",
    "Chartered Institute of Logistics and Supply Chain Management",
    "Project Management Professional (PMP)"
  ];

  const awards = [
    "Award of Meritorious Leadership and Exceptional Service - Department of Geography and Regional Planning",
    "Award of Stewardship and Service - All Saint Chapel"
  ];

  const voluntary = [
    "Co-headed Anti-cultism campaign for fresh-men students in the University of Benin, Nigeria",
    "Data collector for COVID-19 PCR centers in Ikpoba Okha Local Government Area of Benin City"
  ];

  return (
    <section id="education" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
            <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
        <h2 className="md:text-4xl text-3xl font-bold text-center mb-4 text-gray-900">
          Education & Achievements
        </h2>
        <div className="w-20 h-1 bg-[#C89B6D] mx-auto mb-16"></div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Education */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-[#C89B6D] rounded-lg flex items-center justify-center">
                <GraduationCap className="text-white" size={28} />
              </div>
              <h3 className="text-xl md:text-2xl  font-bold text-gray-900">Education</h3>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-900 mb-2">
                Bachelor of Science in Geography and Regional Planning
              </h4>
              <p className="text-[#C89B6D] font-medium">University of Benin City, Nigeria</p>
            </div>
          </div>

          {/* Awards */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-[#C89B6D] rounded-lg flex items-center justify-center">
                <Award className="text-white" size={28} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">Awards</h3>
            </div>
            <ul className="space-y-3">
              {awards.map((award, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                  <span className="text-[#C89B6D] mt-1 flex-shrink-0">•</span>
                  <span>{award}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-[#C89B6D] rounded-lg flex items-center justify-center">
                <FileCheck className="text-white" size={28} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">Certifications</h3>
            </div>
            <ul className="space-y-3">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                  <span className="text-[#C89B6D] mt-1 flex-shrink-0">•</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Voluntary Services */}
          <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-[#C89B6D] rounded-lg flex items-center justify-center">
                <Heart className="text-white" size={28} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">Voluntary Services</h3>
            </div>
            <ul className="space-y-3">
              {voluntary.map((service, index) => (
                <li key={index} className="flex items-start gap-2 text-gray-700">
                  <span className="text-[#C89B6D] mt-1 flex-shrink-0">•</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  );
}
