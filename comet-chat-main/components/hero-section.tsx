"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"
import Image from "next/image"
import Banner from "../public/Banner.png"
import Heroform from "../public/Hero form.png"

export function HeroSection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    cname: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ fullName: "", email: "", cname: "" })
    }, 3000)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <section className="relative w-full min-h-screen overflow-hidden flex justify-center items-center px-4 py-12">
      {/* Background images */}
      <div className="absolute inset-0 z-0">
        <img src={Banner.src} alt="Banner" className="w-full h-full object-cover hidden sm:block" />
        <img src={Heroform.src} alt="Mobile Banner" className="w-full h-full object-cover sm:hidden" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-between items-center max-w-7xl w-full gap-8">
        {/* Text Section */}
        <div className="text-white w-full lg:w-1/2 text-left px-2 sm:px-4 space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
            <span className="block animate-fade-in-up">Join the CometChat partner universe
            </span>
          </h1>
          <p
            className="text-sm sm:text-base lg:text-lg text-gray-300 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            Create value for your clients, leverage our technology and grow your business with us!
          </p>
        </div>

        {/* Form Section */}
        <div
          className="bg-[#FAFAFF14] w-full lg:w-1/2 backdrop-blur-xl rounded-2xl p-4 sm:p-8 border border-gray-800 hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 animate-fade-in-up max-w-xl"
          style={{ animationDelay: "0.8s" }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white lg:text-left">
            Become a partner
          </h3>

          {isSubmitted ? (
            <div className="text-center py-8 animate-fade-in text-white">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-green-400 mb-1">Application Submitted!</h4>
              <p className="text-sm sm:text-base text-gray-400">We'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 text-white text-sm sm:text-base w-full">
              <label htmlFor="Fullname">Full Name</label>
              <Input
                name="Fullname"
                placeholder="Full name"
                value={formData.fullName}
                onChange={(e) => handleInputChange("fullName", e.target.value)}
                className="bg-[#FAFAFF14] border-gray-700 text-white placeholder-white/40 focus:border-purple-500"
                required
              />
              <label htmlFor="Cemail">Email Address</label>
              <Input
                name="Cemail"
                type="email"
                placeholder="Company email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                className="bg-[#FAFAFF14] border-gray-700 text-white placeholder-white/40 focus:border-purple-500"
                required
              />
              <label htmlFor="Cname">Company Name</label>
              <Input
                name="Cname"
                placeholder="Company Name"
                value={formData.cname}
                onChange={(e) => handleInputChange("cname", e.target.value)}
                className="bg-[#FAFAFF14] border-gray-700 text-white placeholder-white/40 focus:border-purple-500"
                required
              />
              <Button
                type="submit"
                disabled={isSubmitting}
                className="mt-2 w-full sm:w-fit bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit application"
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
