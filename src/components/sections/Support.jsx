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
      category: "Product Usage",
      questions: [
        {
          q: "Which platforms does TomatoTime support?",
          a: "Currently only supports iOS platform, available on US App Store.",
        },
        {
          q: "How do I get new animal companions?",
          a: "Animals are randomly obtained when completing focus tasks, with different animal types favored at different times.",
        },
        {
          q: "How do I unlock posters?",
          a: "Collect the specified number of same-themed animals to redeem corresponding themed posters.",
        },
        {
          q: "Does it support data synchronization?",
          a: "Supports automatic iCloud sync, worry-free data when switching devices.",
        },
      ],
    },
    {
      category: "Technical Support",
      questions: [
        {
          q: "How do I report technical issues?",
          a: "Please contact us via email or customer service channels, our tech team will respond within 24 hours.",
        },
        {
          q: "How do I resolve app crashes?",
          a: "We recommend restarting the app or updating to the latest version. If the problem persists, please contact technical support.",
        },
      ],
    },
  ];

  const cooperationTypes = [
    "App distribution channel partnerships",
    "Brand collaboration & content partnerships",
    "Technical services & outsourcing business",
    "Investment & strategic partnerships",
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
            Support Center
          </h2>
          <p className="text-xl text-slate-600 mb-2">
            User Help & Service Support
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto"></div>
        </div>

        {/* FAQ Section */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-slate-900 text-center mb-12">
            Frequently Asked Questions
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
              Contact Us
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-3">
                <MapPin className="text-purple-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-slate-900">
                    Company Address
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Room 506, Unit 2, Building 1, No. 10 Jianshe Road, Chenghua
                    District, Chengdu, Sichuan Province, China
                  </p>
                  <p className="text-slate-600 text-sm">Postal Code: 610051</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Mail className="text-purple-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-slate-900">
                    Contact Email
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
                    Contact Phone
                  </h4>
                  <p className="text-slate-600 text-sm">+86 18108224365</p>
                  <p className="text-slate-600 text-sm">
                    Contact Person: Ms. Lin (General Manager)
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Clock className="text-purple-600 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-slate-900">
                    Service Hours
                  </h4>
                  <p className="text-slate-600 text-sm">
                    Weekdays 9:00-18:00 (GMT+8)
                  </p>
                  <p className="text-slate-600 text-sm">
                    Technical Support: 7x24 email support
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Cooperation */}
          <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Handshake className="mr-3" size={24} />
              Business Cooperation
            </h3>
            <p className="text-purple-100 mb-6">
              We welcome the following cooperation opportunities:
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
              Contact Business Cooperation
            </Button>
          </div>
        </div>

        {/* Legal Information */}
        <div className="bg-slate-100 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Legal Information
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-center">
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">
                Full Company Name
              </h4>
              <p className="text-slate-600 text-sm">
                FlowHaven Technology Co., Ltd.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-slate-900 mb-2">
                Business Scope
              </h4>
              <p className="text-slate-600 text-sm">
                Software development, AI applications, information system
                integration, digital content creation
              </p>
            </div>
          </div>
          <div className="text-center mt-8 pt-6 border-t border-slate-300">
            <p className="text-slate-600 text-sm">
              Copyright © 2025 FlowHaven Technology Co., Ltd.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
