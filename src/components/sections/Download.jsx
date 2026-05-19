import { Button } from "@/components/ui/button";
import {
  Apple,
  Play,
  Star,
  Download as DownloadIcon,
  Users,
  GraduationCap,
  Briefcase,
  Target,
} from "lucide-react";
import image3 from "../../assets/image3.png";

const Download = () => {
  const userGroups = [
    {
      icon: GraduationCap,
      title: "学生群体",
      description: "提升学习专注，减轻学业压力",
    },
    {
      icon: Briefcase,
      title: "职场人士",
      description: "高效时间管理，工作生活平衡",
    },
    {
      icon: Users,
      title: "自由职业者",
      description: "培养自律习惯，提升工作效率",
    },
    {
      icon: Target,
      title: "成长追求者",
      description: "温暖陪伴，快乐专注",
    },
  ];

  const reviews = [
    {
      text: "终于找到一款让专注变得有趣的应用！",
      author: "用户A",
      rating: 5,
    },
    {
      text: "小动物们太可爱了，每天都期待专注时光。",
      author: "用户B",
      rating: 5,
    },
    {
      text: "这款应用真的帮我养成了专注的习惯。",
      author: "用户C",
      rating: 5,
    },
  ];

  return (
    <section
      id="download"
      className="py-20 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            立即体验萌友专注
          </h2>
          <p className="text-xl text-slate-600 mb-2">
            开启您的治愈专注之旅
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Product Introduction */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                产品介绍
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                萌游专注是一款创新的生产力应用，将番茄工作法与动物陪伴机制相结合。通过可爱的动物伙伴，让每一次专注都充满乐趣与成就感。
              </p>

              {/* Download Info */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100">
                <h4 className="text-lg font-bold text-slate-900 mb-4">
                  下载信息
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-slate-700">
                      平台支持：
                    </span>
                    <p className="text-slate-600">iOS（美国App Store）</p>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700">
                      版本：
                    </span>
                    <p className="text-slate-600">最新版本</p>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700">大小：</span>
                    <p className="text-slate-600">约50MB</p>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700">
                      系统要求：
                    </span>
                    <p className="text-slate-600">iOS 14.0或更高版本</p>
                  </div>
                </div>
              </div>
            </div>

            {/* User Groups */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                目标用户
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {userGroups.map((group, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-slate-50 rounded-lg"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <group.icon className="text-white" size={16} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm">
                        {group.title}
                      </h4>
                      <p className="text-slate-600 text-xs">
                        {group.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* App Preview */}
            <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
              <div className="text-center mb-6">
                <img
                  src={image3}
                  alt="萌友专注应用预览"
                  className="rounded-xl shadow-2xl w-full max-w-sm mx-auto"
                />
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <Button
                  className="w-full bg-white/20 hover:bg-white/30 text-white border border-white/30"
                  size="lg"
                >
                  <Apple className="mr-2" size={20} />
                  即将上线
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-white/30 text-white hover:bg-white/10"
                  size="lg"
                >
                  <DownloadIcon className="mr-2" size={20} />
                  产品演示视频
                </Button>
              </div>
            </div>

            {/* User Reviews */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                用户评价
              </h3>
              <div className="space-y-4">
                {reviews.map((review, index) => (
                  <div key={index} className="bg-slate-50 rounded-lg p-4">
                    <div className="flex items-center space-x-1 mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="text-yellow-400 fill-current"
                          size={16}
                        />
                      ))}
                    </div>
                    <p className="text-slate-600 text-sm mb-2">
                      "{review.text}"
                    </p>
                    <p className="text-slate-500 text-xs">- {review.author}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">
            准备开始您的专注之旅了吗？
          </h3>
          <p className="text-xl text-purple-100 mb-8">
            加入百万用户，体验温暖专注时光
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3"
            >
              <Apple className="mr-2" size={20} />
              即将上线
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-3"
            >
              了解更多功能
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
