import { useRef, useState } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Send,
  User,
  MessageSquare,
  Loader2,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";
import { Button } from "./ui/button";

const EMAILJS_SERVICE_ID = "service_nwjebgf";
const EMAILJS_TEMPLATE_ID = "template_3jt8vfq";
const EMAILJS_PUBLIC_KEY = "lPrOTbfir21Ckny__";
interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}
export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current!,
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setTimeout(() => setStatus("idle"), 4000);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">
          Get In Touch
        </h2>
        <div className="w-20 h-1 bg-[#C89B6D] mx-auto mb-12"></div>

        <div className="max-w-6xl mx-auto">
          <p className="text-center text-lg mb-12 text-gray-700 text-[16px] md:text-lg">
            I'm always open to discussing new opportunities, partnerships, and
            how I can contribute to driving your business growth. Feel free to
            reach out through any of the channels below.
          </p>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-xl md:text-2xl  font-bold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4 mb-8">
                  <a
                    href="mailto:taiyeidolor23@gmail.com"
                    className="flex items-center gap-2 md:gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow border border-gray-200"
                  >
                    <div className="md:w-12 md:h-12 w-10 h-10  bg-[#C89B6D]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="text-[#C89B6D]" size={24} />
                    </div>
                    <div>
                      {/* <p className="text-sm text-gray-500 mb-1">Email</p> */}
                      <p className="font-semibold text-gray-900 md:text-lg text-sm">
                        Taiyeidolor23@gmail.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:08109722115"
                    className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow border border-gray-200"
                  >
                    <div className="md:w-12 md:h-12 w-10 h-10 bg-[#C89B6D]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="text-[#C89B6D]" size={24} />
                    </div>
                    <div>
                      {/* <p className="text-sm text-gray-500 mb-1">Phone</p> */}
                      <p className="font-semibold text-gray-900 md:text-lg text-sm">
                        08109722115 / 07045972110
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/taiye-idolor-430600216"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-white rounded-xl hover:shadow-md transition-shadow border border-gray-200"
                  >
                    <div className="md:w-12 md:h-12 w-10 h-10 bg-[#C89B6D]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Linkedin className="text-[#C89B6D]" size={24} />
                    </div>
                    <div>
                      {/* <p className="text-sm text-gray-500 mb-1">LinkedIn</p> */}
                      <p className="font-semibold text-gray-900 md:text-lg text-sm">
                        Connect with me
                      </p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200">
                    <div className="md:w-12 md:h-12 w-10 h-10 bg-[#C89B6D]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-[#C89B6D]" size={24} />
                    </div>
                    <div>
                      {/* <p className="text-sm text-gray-500 mb-1">Location</p> */}
                      <p className="font-semibold text-gray-900 md:text-lg text-sm">
                        Lagos, Nigeria
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-br from-[#C89B6D] to-[#A67C52] rounded-xl text-white">
                  <p className="text-sm mb-2">Availability</p>
                  <p className="font-semibold">Open to new opportunities</p>
                  <p className="text-sm text-white/80 mt-2">
                    Referrals available upon request
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-lg md:text-2xl font-bold text-gray-900 mb-6">
                  Send a Message
                </h3>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Full Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <User className="text-gray-400" size={20} />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C89B6D] focus:border-transparent outline-none transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="text-gray-400" size={20} />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C89B6D] focus:border-transparent outline-none transition-all"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Subject
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <MessageSquare className="text-gray-400" size={20} />
                      </div>
                      <input
                        type="text"
                        id="subject"
                        name="title"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C89B6D] focus:border-transparent outline-none transition-all"
                        placeholder="Business Opportunity"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#C89B6D] focus:border-transparent outline-none transition-all resize-none"
                      placeholder="Tell me about your project or opportunity..."
                    ></textarea>
                  </div>

                  {/* <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#C89B6D] to-[#A67C52] text-white py-4 rounded-lg font-semibold hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </button> */}
                  <Button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-gradient-to-r from-[#C89B6D] to-[#A67C52] text-white py-6 rounded-lg font-semibold hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
                  >
                    <Send size={20} />

                    {status === "sending" ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
    </section>
  );
}
