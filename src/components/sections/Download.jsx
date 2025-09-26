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
      title: "Students",
      description: "Improve learning focus, reduce academic stress",
    },
    {
      icon: Briefcase,
      title: "Professionals",
      description: "Efficient time management, work-life balance",
    },
    {
      icon: Users,
      title: "Freelancers",
      description: "Build self-discipline habits, boost work efficiency",
    },
    {
      icon: Target,
      title: "Growth Seekers",
      description: "Warm companionship, joyful focus",
    },
  ];

  const reviews = [
    {
      text: "Finally found an app that makes focusing fun!",
      author: "User A",
      rating: 5,
    },
    {
      text: "The little animals are so cute, I look forward to focus time every day.",
      author: "User B",
      rating: 5,
    },
    {
      text: "This app really helped me develop the habit of focusing.",
      author: "User C",
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
            Experience TomatoTime Now
          </h2>
          <p className="text-xl text-slate-600 mb-2">
            Begin your healing focus journey
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
                Product Introduction
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                TomatoTime is an innovative productivity app that combines the
                Pomodoro Technique with animal companion mechanics. Through cute
                animal companions, every focus session becomes fun and
                fulfilling.
              </p>

              {/* Download Info */}
              <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-6 border border-purple-100">
                <h4 className="text-lg font-bold text-slate-900 mb-4">
                  Download Information
                </h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-slate-700">
                      Platform Support:
                    </span>
                    <p className="text-slate-600">iOS (US App Store)</p>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700">
                      Version:
                    </span>
                    <p className="text-slate-600">Latest Version</p>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700">Size:</span>
                    <p className="text-slate-600">Approximately 50MB</p>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-700">
                      System Requirements:
                    </span>
                    <p className="text-slate-600">iOS 14.0 or later</p>
                  </div>
                </div>
              </div>
            </div>

            {/* User Groups */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                Target Users
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
                  alt="TomatoTime app preview"
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
                  Coming Soon
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-white/30 text-white hover:bg-white/10"
                  size="lg"
                >
                  <DownloadIcon className="mr-2" size={20} />
                  Product Demo Video
                </Button>
              </div>
            </div>

            {/* User Reviews */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">
                User Reviews
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
            Ready to start your focus journey?
          </h3>
          <p className="text-xl text-purple-100 mb-8">
            Join millions of users and experience warm focus time
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-purple-600 hover:bg-gray-100 px-8 py-3"
            >
              <Apple className="mr-2" size={20} />
              Coming Soon
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-3"
            >
              Learn More Features
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Download;
