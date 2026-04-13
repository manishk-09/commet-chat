"use client"

const footerSections = [
  {
    title: "Platform",
    links: [
      "Chat & Messaging",
      "Voice & Video Calls",
      "Security & Compliance",
      "Moderation",
      "Network of partners",
      "Integrations",
      "Mobile SDKs",
      "Analytics & Insights",
    ],
  },
  {
    title: "Solutions",
    links: [
      "Social Communities",
      "Marketplaces",
      "On-Demand Services",
      "Virtual Events",
      "Ed-Tech Platforms",
      "Collaborative Spaces",
      "Gaming",
      "Security",
    ],
  },
  {
    title: "Developers",
    links: ["Documentation", "React", "Angular", "Vue", "iOS", "Android", "React Native", "Flutter", "Ionic"],
  },
  {
    title: "Resources",
    links: ["Customer stories", "Blog", "Guides", "Webinars", "Community forum", "Partners", "Careers", "Press"],
  },
]

export function Footer() {
  return (
    <footer className="px-6 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="animate-fade-in-up">
            <div className="text-xl font-bold mb-4 cursor-pointer hover:text-purple-400 transition-colors duration-200">
              cometchat
            </div>
          </div>

          {footerSections.map((section, sectionIndex) => (
            <div
              key={section.title}
              className="animate-fade-in-up"
              style={{ animationDelay: `${sectionIndex * 0.1}s` }}
            >
              <div className="font-semibold mb-4">{section.title}</div>
              <div className="space-y-2 text-sm text-gray-400">
                {section.links.map((link, linkIndex) => (
                  <div
                    key={link}
                    className="cursor-pointer hover:text-purple-400 transition-colors duration-200 animate-fade-in-up"
                    style={{ animationDelay: `${sectionIndex * 0.1 + linkIndex * 0.05}s` }}
                  >
                    {link}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800 text-sm text-gray-400 space-y-4 md:space-y-0">
          <div className="hover:text-gray-300 transition-colors duration-200">
            2024 © CometChat • Terms of Use • Privacy Policy
          </div>
          <div className="flex items-center space-x-4">
            {["🇺🇸 Americas", "🌐 English", "📧 Instagram", "🐦 Twitter", "💼 LinkedIn"].map((item) => (
              <span key={item} className="cursor-pointer hover:text-purple-400 transition-colors duration-200">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
