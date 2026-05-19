import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Star, Users } from "lucide-react";
import image2 from "../../assets/image2.jpg";

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                让专注更有
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  温度
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                陪伴式生产力工具的创新引领者
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                四川小宇灵境科技有限公司专注于开发治愈系生产力应用，以情感化交互设计为核心，让每一个专注时刻都温暖而充实
              </p>
            </div>

            {/* Value Propositions */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <Heart className="text-pink-400" size={24} />
                <div>
                  <h3 className="text-white font-semibold">
                    情感陪伴
                  </h3>
                  <p className="text-gray-400 text-sm">
                    可爱的动物伙伴
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <Star className="text-yellow-400" size={24} />
                <div>
                  <h3 className="text-white font-semibold">
                    科学高效
                  </h3>
                  <p className="text-gray-400 text-sm">
                    番茄时间管理
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <Users className="text-blue-400" size={24} />
                <div>
                  <h3 className="text-white font-semibold">
                    成长激励
                  </h3>
                  <p className="text-gray-400 text-sm">动物成长系统</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <Heart className="text-green-400" size={24} />
                <div>
                  <h3 className="text-white font-semibold">
                    治愈体验
                  </h3>
                  <p className="text-gray-400 text-sm">
                    缓解压力，提升幸福感
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("download")}
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3"
              >
                即将上线
              </Button>
              <Button
                onClick={() => scrollToSection("features")}
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-3"
              >
                了解更多
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full border-2 border-white"></div>
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-400 rounded-full border-2 border-white"></div>
              </div>
              <p className="text-gray-400">
                已获 <span className="text-white font-semibold">100万+</span>{" "}
                用户信赖
              </p>
            </div>
          </div>

          {/* Right Content - Consultation Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  获取产品咨询
                </h3>
                <p className="text-gray-300">
                  准备注册我们的治愈服务了吗？
                </p>
              </div>

              <div className="space-y-4">
                <Input
                  placeholder="您的姓名"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Input
                  type="email"
                  placeholder="邮箱地址"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Input
                  placeholder="电话号码"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />

                <div className="flex items-start space-x-2">
                  <input type="checkbox" className="mt-1" />
                  <p className="text-sm text-gray-400">
                    我已阅读并同意
                    <span className="text-purple-400 underline cursor-pointer">
                      服务条款
                    </span>
                  </p>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                  size="lg"
                >
                  立即开始
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
