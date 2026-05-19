import {
  HelpCircle,
  Mail,
  Phone,
  MapPin,
  Clock,
  Handshake,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const Support = () => {
  const faqs = [
    {
      category: "产品使用",
      questions: [
        {
          q: "萌友专注支持哪些平台？",
          a: "目前仅支持iOS平台，可在美国App Store下载。",
        },
        {
          q: "如何获得新的动物伙伴？",
          a: "完成专注任务时随机获得动物，不同时间段会有不同动物类型偏好。",
        },
        {
          q: "如何解锁海报？",
          a: "收集指定数量的同主题动物即可兑换相应主题海报。",
        },
        {
          q: "是否支持数据同步？",
          a: "支持iCloud自动同步，换设备也无需担心数据丢失。",
        },
      ],
    },
    {
      category: "技术支持",
      questions: [
        {
          q: "如何反馈技术问题？",
          a: "请通过邮箱或客服渠道联系我们，技术团队将在24小时内响应。",
        },
        {
          q: "应用崩溃如何解决？",
          a: "建议重启应用或更新到最新版本。如问题持续，请联系技术支持。",
        },
      ],
    },
  ];

  const cooperationTypes = [
    "应用分发渠道合作",
    "品牌合作与内容合作",
    "技术服务与外包业务",
    "投资与战略合作",
  ];

  return (
    <section
      id="support"
      className="py-20 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            支持中心
          </h2>
          <p className="text-xl text-slate-600 mb-2">
            用户帮助与服务支持
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
            常见问题
          </h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {faqs.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100"
              >
                <h4 className="text-xl font-bold text-purple-600 mb-6 flex items-center">
                  <HelpCircle className="mr-2" size={24} />
                  {category.category}
                </h4>
                <div className="space-y-6">
                  {category.questions.map((faq, faqIndex) => (
                    <div
                      key={faqIndex}
                      className="border-b border-slate-100 pb-4 last:border-b-0"
                    >
                      <h5 className="font-semibold text-slate-900 mb-2">
                        Q: {faq.q}
                      </h5>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        A: {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Details */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Phone className="mr-3 text-purple-600" size={24} />
              联系我们
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <MapPin className="text-purple-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-slate-900">
                    公司地址
                  </h4>
                  <p className="text-slate-600 text-sm">
                    中国四川省成都市成华区建设路10号1栋2单元506室
                  </p>
                  <p className="text-slate-600 text-sm">邮编：610051</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="text-purple-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-slate-900">
                    联系邮箱
                  </h4>
                  <p className="text-slate-600 text-sm">
                    missheiya0807@gmail.com
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="text-purple-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-slate-900">
                    联系电话
                  </h4>
                  <p className="text-slate-600 text-sm">+86 18108224365</p>
                  <p className="text-slate-600 text-sm">
                    联系人：林女士（总经理）
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="text-purple-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-slate-900">
                    服务时间
                  </h4>
                  <p className="text-slate-600 text-sm">
                    工作日 9:00-18:00（GMT+8）
                  </p>
                  <p className="text-slate-600 text-sm">
                    技术支持：7x24邮箱支持
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Cooperation */}
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Handshake className="mr-3" size={24} />
              商务合作
            </h3>
            <p className="text-purple-100 mb-6">
              我们欢迎以下合作机会：
            </p>
            <div className="space-y-3 mb-8">
              {cooperationTypes.map((type, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                  <span className="text-white">{type}</span>
                </div>
              ))}
            </div>
            <Button
              className="w-full bg-white text-purple-600 hover:bg-gray-100"
              size="lg"
            >
              <Mail className="mr-2" size={20} />
              联系商务合作
            </Button>
          </div>
        </div>

        {/* Legal Information */}
        <div className="bg-slate-100 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            法律信息
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-center">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">
                公司全称
              </h4>
              <p className="text-slate-600 text-sm">
                四川小宇灵境科技有限公司
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">
                业务范围
              </h4>
              <p className="text-slate-600 text-sm">
                软件开发、AI应用、信息系统集成、数字内容创作
              </p>
            </div>
          </div>
          <div className="text-center mt-8 pt-6 border-t border-slate-300">
            <p className="text-slate-600 text-sm">
              版权所有 © 2025 四川小宇灵境科技有限公司
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
