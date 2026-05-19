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
                四川小宇灵境科技
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              四川小宇灵境科技有限公司专注于开发治愈系生产力应用，以情感化交互设计为核心，让每一个专注时刻都温暖而充实。
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-purple-400" />
                <span className="text-gray-400 text-sm">
                  中国四川省成都市成华区建设路10号1栋2单元506室
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
            <h3 className="text-white font-semibold mb-4">快速导航</h3>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                首页
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                产品功能
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                关于我们
              </button>
              <button
                onClick={() => scrollToSection("download")}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                下载应用
              </button>
              <button
                onClick={() => scrollToSection("support")}
                className="block text-gray-400 hover:text-white transition-colors text-sm"
              >
                支持中心
              </button>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">我们的产品</h3>
            <div className="space-y-2">
              <div className="text-gray-400 text-sm">萌友专注</div>
              <div className="text-gray-400 text-sm">专注与放松计时器</div>
              <div className="text-gray-400 text-sm">
                治愈系番茄钟
              </div>
              <div className="text-gray-400 text-sm">
                动物陪伴专注
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 四川小宇灵境科技有限公司 版权所有
            </div>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>用</span>
              <Heart size={14} className="text-red-400 fill-current" />
              <span>在中国成都制作</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
