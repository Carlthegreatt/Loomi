import { TrendingUp, BookOpen, Calendar } from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="container flex mx-auto px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4  mb-12 max-w-5xl mx-auto">
        <div className="w-80 md:w-5 flex flex-col items-center p-6 rounded-xl bg-[#0a2f3c]/60 backdrop-blur-sm border border-[#286c77]/30 hover:shadow-lg hover:shadow-[#286c77]/20 transition-all duration-300">
          <div className="w-12 h-12 bg-[#286c77]/20 rounded-lg flex items-center justify-center mb-4">
            <TrendingUp className="w-6 h-6 text-[#286c77]" />
          </div>
          <h3 className="font-semibold text-[#ebe9fc] mb-2">
            Financial Tracking
          </h3>
          <p className="text-sm text-[#5d969d] text-center">
            Monitor expenses, budget effectively, and build healthy financial
            habits
          </p>
        </div>

        <div className="w-80 flex flex-col items-center p-6 rounded-xl bg-[#0a2f3c]/60 backdrop-blur-sm border border-[#286c77]/30 hover:shadow-lg hover:shadow-[#286c77]/20 transition-all duration-300">
          <div className="w-12 h-12 bg-[#286c77]/20 rounded-lg flex items-center justify-center mb-4">
            <BookOpen className="w-6 h-6 text-[#286c77]" />
          </div>
          <h3 className="font-semibold text-[#ebe9fc] mb-2">Study Analytics</h3>
          <p className="text-sm text-[#5d969d] text-center">
            Track study sessions, monitor progress, and optimize your learning
          </p>
        </div>

        <div className="w-80 flex flex-col items-center p-6 rounded-xl bg-[#0a2f3c]/60 backdrop-blur-sm border border-[#286c77]/30 hover:shadow-lg hover:shadow-[#286c77]/20 transition-all duration-300">
          <div className="w-12 h-12 bg-[#286c77]/20 rounded-lg flex items-center justify-center mb-4">
            <Calendar className="w-6 h-6 text-[#286c77]" />
          </div>
          <h3 className="font-semibold text-[#ebe9fc] mb-2">Smart Planning</h3>
          <p className="text-sm text-[#5d969d] text-center">
            Organize tasks, set goals, and stay on top of your academic schedule
          </p>
        </div>
      </div>
    </div>
  );
}
