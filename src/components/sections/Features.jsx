import {
  Clock,
  Heart,
  Trophy,
  BarChart3,
  Palette,
  Shield,
  Zap,
  Users,
} from "lucide-react";
import image1 from "../../assets/image1.png";
import image3 from "../../assets/image3.png";

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "Smart Focus Timer",
      description:
        "25-minute focus cycles based on the Pomodoro Technique with customizable durations to suit your personal rhythm",
      details: [
        "25-minute focus cycles based on Pomodoro Technique",
        "Customizable focus duration to match personal rhythm",
        "Immersive background sounds and white noise options",
        "Anti-distraction mechanism to maintain focus",
      ],
    },
    {
      icon: Heart,
      title: "Animal Companion Growth",
      description:
        "Randomly obtain cute animal companions, complete focus tasks, and watch animals grow alongside you",
      details: [
        "Randomly obtain cute animal companions",
        "Complete focus tasks and watch animals grow alongside you",
        "Multiple themed scenes including Breezy Plains, Snowy Warmth, and Giant Leaf Jungle",
        "Time-based personalized drop mechanism",
      ],
    },
    {
      icon: Trophy,
      title: "Poster Collection System",
      description:
        "Unlock beautiful themed posters through animal combinations, achievement showcase and collection gallery",
      details: [
        "Unlock beautiful themed posters through animal combinations",
        "Achievement showcase and collection gallery",
        "Social sharing features to showcase focus achievements",
        "Continuously updated content ecosystem",
      ],
    },
    {
      icon: BarChart3,
      title: "Data Statistics & Analysis",
      description:
        "Visualize focus duration and frequency, track personal growth journey",
      details: [
        "Visualize focus duration and frequency",
        "Track personal growth journey",
        "Efficiency improvement data insights",
        "Habit formation progress tracking",
      ],
    },
  ];

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Product Features
          </h2>
          <p className="text-xl text-slate-600 mb-2">
            Redefining the Focus Experience
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
        </div>

        {/* Features Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-purple-200">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="text-white" size={24} />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-start space-x-2"
                        >
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-600 text-sm">
                            {detail}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Product Showcase */}
        <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                TomatoTime – Focus & Relax Timer
              </h3>
              <p className="text-lg text-purple-100 mb-6">
                The first healing-style Pomodoro app, now live on the US App
                Store
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Palette className="text-yellow-300 mb-2" size={24} />
                  <h4 className="font-semibold mb-1">Healing Design</h4>
                  <p className="text-sm text-purple-100">
                    Warm visual experience
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Shield className="text-green-300 mb-2" size={24} />
                  <h4 className="font-semibold mb-1">Focus Protection</h4>
                  <p className="text-sm text-purple-100">
                    Anti-distraction mechanism
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Zap className="text-orange-300 mb-2" size={24} />
                  <h4 className="font-semibold mb-1">Efficient Management</h4>
                  <p className="text-sm text-purple-100">
                    Scientific time allocation
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Users className="text-blue-300 mb-2" size={24} />
                  <h4 className="font-semibold mb-1">Social Sharing</h4>
                  <p className="text-sm text-purple-100">
                    Achievement showcase
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src={image1}
                  alt="Cute animal illustrations"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-2xl blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
