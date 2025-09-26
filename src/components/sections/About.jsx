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
      name: "Design Team",
      role: "Product Designers",
      description:
        "Focused on user experience design, committed to infusing traditional productivity tools with emotional warmth",
      icon: Palette,
    },
    {
      name: "Tech Team",
      role: "Frontend & Backend Engineers",
      description:
        "Experienced development team ensuring product stability and user experience",
      icon: Code,
    },
    {
      name: "Operations Team",
      role: "User Operations Experts",
      description:
        "Deep understanding of user psychology, focused on building warm user communities",
      icon: TrendingUp,
    },
  ];

  const advantages = [
    {
      icon: Users,
      title: "Small & Elite Team Structure",
      description:
        "4-person elite team, efficient decision-making and rapid execution",
    },
    {
      icon: Code,
      title: "Deep Technical Expertise",
      description:
        "Covering AI application development, cloud computing, information system integration",
    },
    {
      icon: Heart,
      title: "Unique Design Philosophy",
      description: "Pioneer in emotional interactive design",
    },
    {
      icon: Target,
      title: "User-Oriented Thinking",
      description:
        "Deep understanding of user needs, continuous product experience optimization",
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
            About Us
          </h2>
          <p className="text-xl text-slate-600 mb-2">Our Story & Mission</p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Target className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
            </div>
            <h4 className="text-xl font-semibold text-purple-600 mb-4">
              Returning Technology to Its Warm Essence
            </h4>
            <p className="text-slate-600 leading-relaxed">
              In the fast-paced modern life, we believe that focus should not be
              cold time management, but warm growth companionship. FlowHaven
              Tech is committed to creating more warm digital experiences for
              users through innovative emotional interactive design.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Eye className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Company Vision
              </h3>
            </div>
            <p className="text-slate-600 leading-relaxed">
              To become a global leading developer of emotional productivity
              tools, using the power of technology to provide the most caring
              digital companions for everyone pursuing focus and growth.
            </p>
          </div>
        </div>

        {/* Core Team */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Core Team
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
            Company Advantages
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
              <h3 className="text-2xl font-bold mb-6">Company Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-100">
                    Full Company Name
                  </h4>
                  <p>FlowHaven Technology Co., Ltd.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-100">
                    Business Scope
                  </h4>
                  <p>
                    Software development, AI applications, information system
                    integration, digital content creation
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-purple-100">
                    Company Address
                  </h4>
                  <p>
                    Room 506, Unit 2, Building 1, No. 10 Jianshe Road, Chenghua
                    District, Chengdu, Sichuan Province, China
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-100">
                    Contact Email
                  </h4>
                  <p>missheiya0807@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-100">
                    Contact Phone
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
