"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const advantages = [
  {
    icon: '/Icon1.png',
    title: "Free credits",
    description: "Free monthly credits to build, experiment and test.",
  },
  {
    icon: '/Icon2.png',
    title: "Revenue share",
    description: "Get monthly recurring revenues when you refer clients.",
  },
  {
    icon: '/Icon3.png',
    title: "Training and marketing sessions",
    description: "Training and marketing sessions for your sales teams.",
  },
  {
    icon: '/Icon4.png',
    title: "Special developer access",
    description: "Special developer access to build optimized stack for your clients.",
  },
  {
    icon: '/Icon5.png',
    title: "Reduced size",
    description: "Reduce your app size by 50% faster with our partners programs.",
  },
  {
    icon: '/Icon6.png',
    title: "Value addition to your users",
    description: "We offer 4.2x and 5x more features.",
  },
  {
    icon: '/Icon7.png',
    title: "Knowledge sessions",
    description: "Access to regular technical sessions.",
  },
  {
    icon: '/Icon8.png',
    title: "On-demand support",
    description: "Dedicated developer and implementation.",
  },
  {
    icon: '/Icon9.png',
    title: "Significant process income",
    description: "Up-front of 5-10x but better.",
  },
]

export function PartnerAdvantages() {
  return (
    <section className="px-6 py-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 animate-fade-in-up">
          <Badge className=" bg-[#0A0914] text-[#FF7F3E] text-[22px] mb-4 hover:bg-purple-600/30 transition-colors duration-200">
            Be a partner
          </Badge>
          <h2 className="text-4xl font-bold mb-4">CometChat partner advantages</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => {
            
            return (
              <Card
                key={advantage.title}
                className="bg-[#0A0914] border-none p-6 hover:bg-gray-800/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 group animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="h-fit w-fit bg-purple-600/20 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-600/30 transition-colors duration-300">
                     <Image src={advantage.icon} alt="..." width={38} height={38} className=" rounded-full group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                    {advantage.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
