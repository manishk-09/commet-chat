"use client"

import { Button } from "@/components/ui/button"
import { Moon } from "lucide-react"

export function Header() {
  return (
    <header className="absolute top-0 inset-x-0 z-50 ">
      <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Logo */}
        <div className="text-xl font-bold cursor-pointer hover:text-purple-500 transition-colors duration-200 text-white">
          cometchat
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-sm text-white">
          {["Platform", "Solutions", "Developers", "Resources", "Pricing"].map((item) => (
            <span
              key={item}
              className="cursor-pointer relative group hover:text-purple-500 transition-colors duration-200"
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
            </span>
          ))}
        </div>

        {/* Auth + Dark Mode */}
        <div className="flex items-center space-x-4">
          {/* Log in visible on all devices */}
          <span className="text-sm cursor-pointer text-white hover:text-purple-500 transition-colors duration-200">
            Log in
          </span>

          {/* Desktop only: Get started button */}
          <Button className="hidden md:inline-flex bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-transform duration-200 hover:scale-105 shadow-sm">
            Get started free
          </Button>

          {/* Night mode icon for all screen sizes */}
          <div className="hidden max-md:flex outline-2 rounded-lg w-9 h-9 bg-gray-800 justify-center items-center ">
          <Moon className="w-5 h-5 text-white cursor-pointer hover:text-purple-500 transition-colors duration-200" />
          </div>
          
        </div>
      </nav>
    </header>
  )
}
