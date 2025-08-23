import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-[95vh] flex items-center justify-center bg-[#0a0a0a] pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#ebe9fc] mb-6 leading-tight">
            Your All-in-One
            <span className="block text-[#286c77]">Student Tracker</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[#5d969d] mb-8 max-w-2xl mx-auto leading-relaxed">
            Master your academic journey with intelligent tracking for finances,
            studies, and planning. Everything you need to succeed, all in one
            place.
          </p>

          {/* Call to Action Buttons */}
          <div className=" flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="px-8 py-3 text-base font-medium bg-[#286c77] hover:bg-[#286c77]/90 text-[#ebe9fc] border-[#286c77]"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-3 text-base font-medium border-[#286c77] text-[#286c77] hover:bg-[#286c77] hover:text-[#ebe9fc]"
            >
              Watch Demo
            </Button>
          </div>

          {/* Trust Indicators */}
        </div>
      </div>
    </section>
  );
}
