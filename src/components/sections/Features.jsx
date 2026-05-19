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
      title: "智能专注计时器",
      description:
        "基于番茄工作法的25分钟专注周期，可自定义时长以适应您的个人节奏",
      details: [
        "基于番茄工作法的25分钟专注周期",
        "可自定义专注时长，匹配个人节奏",
        "沉浸式背景音和白噪音选项",
        "防干扰机制，保持专注状态",
      ],
    },
    {
      icon: Heart,
      title: "动物伙伴成长系统",
      description:
        "随机获得可爱的动物伙伴，完成专注任务，看着动物与您一起成长",
      details: [
        "随机获得可爱的动物伙伴",
        "完成专注任务，看着动物与您一起成长",
        "多种主题场景，包括微风草原、雪域暖意、巨型叶林等",
        "基于时间的个性化掉落机制",
      ],
    },
    {
      icon: Trophy,
      title: "海报收藏系统",
      description:
        "通过动物组合解锁精美主题海报，成就展示与收藏画廊",
      details: [
        "通过动物组合解锁精美主题海报",
        "成就展示与收藏画廊",
        "社交分享功能，展示专注成就",
        "持续更新的内容生态",
      ],
    },
    {
      icon: BarChart3,
      title: "数据统计分析",
      description:
        "可视化专注时长与频率，追踪个人成长旅程",
      details: [
        "可视化专注时长与频率",
        "追踪个人成长旅程",
        "效率提升数据洞察",
        "习惯养成进度追踪",
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
            产品功能
          </h2>
          <p className="text-xl text-slate-600 mb-2">
            重新定义专注体验
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
                萌友专注 – 专注与放松计时器
              </h3>
              <p className="text-lg text-purple-100 mb-6">
                首款治愈系番茄钟应用，现已上线美国App Store
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Palette className="text-yellow-300 mb-2" size={24} />
                  <h4 className="font-semibold mb-1">治愈设计</h4>
                  <p className="text-sm text-purple-100">
                    温暖的视觉体验
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Shield className="text-green-300 mb-2" size={24} />
                  <h4 className="font-semibold mb-1">专注守护</h4>
                  <p className="text-sm text-purple-100">
                    防干扰机制
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Zap className="text-orange-300 mb-2" size={24} />
                  <h4 className="font-semibold mb-1">高效管理</h4>
                  <p className="text-sm text-purple-100">
                    科学时间分配
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <Users className="text-blue-300 mb-2" size={24} />
                  <h4 className="font-semibold mb-1">社交分享</h4>
                  <p className="text-sm text-purple-100">
                    成就展示
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10">
                <img
                  src={image1}
                  alt="可爱的动物插画"
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
