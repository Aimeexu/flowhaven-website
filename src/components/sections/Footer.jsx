import { Mail, Phone, MapPin, Heart } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FH</span>
              </div>
              <span className="text-white font-semibold text-lg">
                FlowHaven Tech
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              FlowHaven Tech specializes in developing healing productivity apps
              with emotional interactive design, making every moment of focus
              warm and fulfilling.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-purple-400" />
                <span className="text-gray-400 text-sm">
                  Room 506, Unit 2, Building 1, No. 10 Jianshe Road, Chenghua
                  District, Chengdu, Sichuan Province, China
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-purple-400" />
                <span className="text-gray-400 text-sm">
                  missheiya0807@gmail.com
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-purple-400" />
                <span className="text-gray-400 text-sm">+86 18108224365</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Navigation</h3>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection("download")}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Download App
              </button>
              <button
                onClick={() => scrollToSection("support")}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                Support Center
              </button>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Our Products</h3>
            <div className="space-y-2">
              <div className="text-gray-400 text-sm">TomatoTime</div>
              <div className="text-gray-400 text-sm">Focus & Relax Timer</div>
              <div className="text-gray-400 text-sm">
                Healing Pomodoro Clock
              </div>
              <div className="text-gray-400 text-sm">
                Animal Companion Focus
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 FlowHaven Technology Co., Ltd. All rights reserved
            </div>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart size={14} className="text-red-400 fill-current" />
              <span>in Chengdu, China</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
