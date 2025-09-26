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
                Making Focus Feel
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Warmer
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Innovative Leader in Companion Productivity Tools
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                FlowHaven Tech specializes in developing healing productivity
                apps with emotional interactive design, making every moment of
                focus warm and fulfilling
              </p>
            </div>

            {/* Value Propositions */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <Heart className="text-pink-400" size={24} />
                <div>
                  <h3 className="text-white font-semibold">
                    Emotional Companion
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Cute animal companions
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <Star className="text-yellow-400" size={24} />
                <div>
                  <h3 className="text-white font-semibold">
                    Scientific Efficiency
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Pomodoro time management
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <Users className="text-blue-400" size={24} />
                <div>
                  <h3 className="text-white font-semibold">
                    Growth Motivation
                  </h3>
                  <p className="text-gray-400 text-sm">Animal growth system</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-white/10 backdrop-blur-sm rounded-lg">
                <Heart className="text-green-400" size={24} />
                <div>
                  <h3 className="text-white font-semibold">
                    Healing Experience
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Relieve stress and boost happiness
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
                Coming Soon
              </Button>
              <Button
                onClick={() => scrollToSection("features")}
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10 px-8 py-3"
              >
                Learn More
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
                Trusted by <span className="text-white font-semibold">1M+</span>{" "}
                users
              </p>
            </div>
          </div>

          {/* Right Content - Consultation Form */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Get Product Consultation
                </h3>
                <p className="text-gray-300">
                  Ready to sign up for our healing services?
                </p>
              </div>

              <div className="space-y-4">
                <Input
                  placeholder="Your Name"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Input
                  placeholder="Phone Number"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />

                <div className="flex items-start space-x-2">
                  <input type="checkbox" className="mt-1" />
                  <p className="text-sm text-gray-400">
                    I have read and agree to the
                    <span className="text-purple-400 underline cursor-pointer">
                      Terms of Service
                    </span>
                  </p>
                </div>

                <Button
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                  size="lg"
                >
                  Get Started
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
