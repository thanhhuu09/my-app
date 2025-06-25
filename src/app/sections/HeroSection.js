"use client";

import { Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-16 pb-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
            <div className="flex items-center justify-center mb-2">
              <Sparkles
                className="w-8 h-8 md:w-12 md:h-12 text-blue-500 mr-4"
                fill="currentColor"
              />
              <span>AI-Powered Hiring,</span>
            </div>
            <div>Real-World Impact.</div>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mb-12">
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Experience a recruitment revolution with our AI-powered platform
            that streamlines hiring processes and enhances candidate engagement.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors cursor-pointer">
            Get a Demo →
          </button>
          <button className="px-8 py-4 border-[2px] border-[#2253db] text-[#2253db] bg-[#FFFCF5] rounded-full text-lg font-bold transition-colors shadow-none focus:outline-none cursor-pointer hover:bg-blue-50">
            Talk to Our Tech Expert
          </button>
        </div>
      </div>
    </section>
  );
}
