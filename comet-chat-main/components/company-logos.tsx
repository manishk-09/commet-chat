"use client"
import Image from "next/image"

export function CompanyLogos() {
  const companies = ["AWS", "10x", "Microsoft", "NASSCOM", "techstars", "turning point", "cisco"]

  // Duplicate the array to create seamless loop
  const duplicatedCompanies = [...companies, ...companies]

  return (
    <section className="h-[120px] sm:h-[130px] md:h-[150px] border-y border-gray-300/20 overflow-hidden w-full">
      <div className="w-full h-full">
        <div className="relative w-full h-full flex flex-col justify-center">
          {/* Gradient overlays for smooth fade effect */}
          <div className="h-full absolute left-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="h-full absolute right-0 top-0 bottom-0 w-12 sm:w-16 md:w-20 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div className="flex animate-scroll-x hover:[animation-play-state:paused]">
            {duplicatedCompanies.map((company, index) => (
              <span
                key={`${company}-${index}`}
                className="text-sm sm:text-base md:text-lg text-gray-400 font-medium cursor-pointer hover:text-gray-300 transition-all duration-300 hover:scale-110 whitespace-nowrap mx-4 sm:mx-8 md:mx-12 flex-shrink-0"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
