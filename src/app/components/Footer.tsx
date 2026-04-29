import { Github, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-4 border-t">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px]  md:text-sm text-muted-foreground">
            © {new Date().getFullYear()} Taiye Idolor. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="mailto:taiyeidolor23@gmail.com"
              className="text-muted-foreground hover:text-[#C89B6D] transition-colors"
            >
              <Mail size={16} className="h-5 w-5"/>
            </a>
              <a
                href="tel:08109722115"
              className="text-muted-foreground hover:text-[#C89B6D] transition-colors"
              >
                <Phone size={16} className="h-5 w-5" />
              </a>
            <a
           href="https://www.linkedin.com/in/taiye-idolor-430600216"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-[#C89B6D] transition-colors"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          
          </div>
        </div>
      </div>
    </footer>
    //    <footer className="mt-16 py-8 border-t border-gray-200">
    //     <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-600">
    //       <p>© 2026 Taiye Idolor. All rights reserved.</p>
    //           <div className="flex flex-wrap gap-4 justify-center md:justify-start text-sm">
    //           <a
    //             href="mailto:taiyeidolor23@gmail.com"
    //             className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors"
    //           >
    //             <Mail size={16} />
    //             {/* <span>taiyeidolor23@gmail.com</span> */}
    //           </a>
    //           <a
    //             href="tel:08109722115"
    //             className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors"
    //           >
    //             <Phone size={16} />
    //             {/* <span>08109722115</span> */}
    //           </a>
    //           <a
    //             href="https://www.linkedin.com/in/taiye-idolor-430600216"
    //             target="_blank"
    //             rel="noopener noreferrer"
    //             className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors"
    //           >
    //             <Linkedin size={16} />
    //             {/* <span>LinkedIn</span> */}
    //           </a>
    //           {/* <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
    //             <MapPin size={16} />
    //             <span>Lagos, Nigeria</span>
    //           </div> */}
    //         </div>
    //     </div>
    //   </footer>
  );
}
