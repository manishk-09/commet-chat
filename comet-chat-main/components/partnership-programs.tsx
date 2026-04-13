"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const programs = [
  {
    icon: '/Solid3.png',
    title: "Affiliate partner program",
    description:
      "Bring leads to your customers with a world-class communication platform and earn up to 30% in-app engagement and revenues. Get responsible for referring CometChat to any of your customers.",
  },
  {
    icon: "/Solid2.png",
    title: "Technology partner program",
    description:
      "Development teams can use our plug and play SDKs to build communication experiences. Plus clients using our SDKs and APIs. It's always safe and 99% uptime.",
  },
  {
    icon: "/Solid.png",
    title: "Start-up growth program",
    description:
      "We help startups accelerate, according to their growth stage and needs. This program also enables VCs to accelerate the growth of their portfolio companies.",
  },
]

export function PartnershipPrograms() {
  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 animate-fade-in-up">
          <Badge className="bg-white text-[#6852D6] text-[22px] mb-4 hover:bg-purple-600/30 transition-colors duration-200">
            Our programs
          </Badge>
          <h2 className="text-4xl text-black font-bold mb-4">Types of partnerships programs</h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program, index) => {
            
            return (
              <Card
                key={program.title}
                className=" border-none  p-8 hover:bg-gray-800/50 hover:border-purple-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 group animate-fade-in-up cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardContent className="p-0">
                  <div className="w-10 h-10 bg-purple-600/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-600/30 transition-colors duration-300">
                  <Image src={program.icon} alt="..." width={15} height={15} className=" text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                    
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-black group-hover:text-purple-300 transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="text-black group-hover:text-gray-300 transition-colors duration-300">
                    {program.description}
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
