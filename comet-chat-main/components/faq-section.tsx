"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "This is a frequently asked question?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
  },
  {
    question: "This is a frequently asked question?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
  },
  {
    question: "This is a very long frequently asked question about our services with more than one line?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
  },
  {
    question: "This is a frequently asked question?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
  },
  {
    question: "This is a question?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
  },
  {
    question: "This is a question?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum!",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="px-6 py-20 bg-white">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 animate-fade-in-up">
          <Badge className="bg-white text-red-400 text-[25px] mb-4 hover:bg-purple-600/30 transition-colors duration-200">
            FAQ's
          </Badge>
          <h2 className="text-4xl text-black font-bold mb-4">We want to help you with all your doubts</h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-300/50 rounded-xl border  hover:border-purple-500/50 transition-all duration-300 overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-700/30 transition-colors duration-200"
              >
                <span className="text-black pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-black transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-6 text-black  ">
                  <div className="pt-4">{faq.answer}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
