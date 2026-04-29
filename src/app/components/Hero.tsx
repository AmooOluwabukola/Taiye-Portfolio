import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import profileImage from "../../imports/profile.jpg";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-[#C89B6D] to-[#A67C52] text-white pt-24">
      <div className="max-w-7xl mx-auto px-6 py-20 md:py-32">
          <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden ring-8 ring-white/20 shadow-2xl">
              <img
                src={profileImage}
                alt="Taiye Idolor"
                className="w-full h-full object-cover object-[center_10%]"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Taiye Idolor
            </h1>
            <p className="text-lg md:text-3xl text-white/90 mb-6 font-semibold">
              Business Development Manager
            </p>
            <p className="md:text-lg text-white/80 mb-8 max-w-2xl">
             I am a results-driven professional with 7 years of proven expertise in driving revenue growth,
              building strategic partnerships, and expanding market share across aviation, logistics,
              FCMG, telecommunication, exports, and real estate industries.
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
              <a
                href="mailto:taiyeidolor23@gmail.com"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors"
              >
                <Mail size={16} />
                {/* <span>taiyeidolor23@gmail.com</span> */}
              </a>
              <a
                href="tel:08109722115"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors"
              >
                <Phone size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/taiye-idolor-430600216"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors"
              >
                <Linkedin size={16} />
              </a>
            
            </div>
          </div>
        </div>
        </motion.div>
      </div>
    </section>
  );
}
