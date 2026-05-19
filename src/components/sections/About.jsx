import {
  Target,
  Eye,
  Users,
  Award,
  Code,
  Palette,
  TrendingUp,
  Heart,
} from "lucide-react";

const About = () => {
  const teamMembers = [
    {
      name: "设计团队",
      role: "产品设计师",
      description:
        "专注于用户体验设计，致力于为传统生产力工具注入情感温度",
      icon: Palette,
    },
    {
      name: "技术团队",
      role: "前后端工程师",
      description:
        "经验丰富的开发团队，确保产品稳定性与用户体验",
      icon: Code,
    },
    {
      name: "运营团队",
      role: "用户运营专家",
      description:
        "深入理解用户心理，专注构建温暖的用户社区",
      icon: TrendingUp,
    },
  ];

  const advantages = [
    {
      icon: Users,
      title: "小而精的团队架构",
      description:
        "4人精英团队，高效决策与快速执行",
    },
    {
      icon: Code,
      title: "深厚的技术实力",
      description:
        "涵盖AI应用开发、云计算、信息系统集成",
    },
    {
      icon: Heart,
      title: "独特的设计理念",
      description: "情感化交互设计先行者",
    },
    {
      icon: Target,
      title: "用户导向思维",
      description:
        "深入理解用户需求，持续优化产品体验",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            关于我们
          </h2>
          <p className="text-xl text-slate-600 mb-2">我们的故事与使命</p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">我们的使命</h3>
            </div>
            <h4 className="text-xl font-semibold text-purple-600 mb-4">
              让科技回归温暖本质
            </h4>
            <p className="text-slate-600 leading-relaxed">
              在快节奏的现代生活中，我们相信专注不应是冰冷的时间管理，而是温暖的成长陪伴。四川小宇灵境科技有限公司致力于通过创新的情感化交互设计，为用户创造更温暖的数字体验。
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Eye className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                公司愿景
              </h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              成为全球领先的情感化生产力工具开发者，用科技的力量为每一个追求专注与成长的人提供最贴心的数字陪伴。
            </p>
          </div>
        </div>

        {/* Core Team */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
            核心团队
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <member.icon className="text-white" size={28} />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    {member.name}
                  </h4>
                  <p className="text-purple-600 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Advantages */}
        <div>
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
            公司优势
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100 hover:border-purple-200 transition-colors duration-300"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <advantage.icon className="text-white" size={24} />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">
                    {advantage.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Info */}
        <div className="mt-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">公司信息</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-100">
                    公司全称
                  </h4>
              <p>四川小宇灵境科技有限公司</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-100">
                    业务范围
                  </h4>
                  <p>
                    软件开发、AI应用、信息系统集成、数字内容创作
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">联系方式</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-100">
                    公司地址
                  </h4>
                  <p>
                    中国四川省成都市成华区建设路10号1栋2单元506室
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-100">
                    联系邮箱
                  </h4>
                  <p>missheiya0807@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-100">
                    联系电话
                  </h4>
                  <p>+86 18108224365</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
