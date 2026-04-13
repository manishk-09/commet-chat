"use client"

import { Button } from "@/components/ui/button"
import Prefooter from "../public/Pre-footer.png"

export function CTASection() {
  return (
    <section className="relative w-full h-[480px] flex flex-col justify-center  from-gray-900 to-black overflow-hidden">
      <div className=" w-full h-full z-0 absolute">
      <img src={Prefooter.src} alt="Prefooter" className=" w-full h-full object-cover" />
      </div>


      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-6 animate-fade-in-up">Get started for free</h2>
        <p className="text-xl text-gray-300 mb-12 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Build and test for as long as you need.
          <br />
          Pick a plan when you're ready.
        </p>
        <div
          className="flex items-center justify-center space-x-6 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="text-gray-400 hover:text-gray-300 transition-colors duration-200 cursor-pointer text-lg">
            Start free trial
          </span>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 text-lg rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
            Get started free
          </Button>
        </div>
      </div>
    </section>
  )
}
