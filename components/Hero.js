
'use client'

import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { Github, Linkedin, Mail, Download, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href)

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background Glow Effects */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">

            {/* Greeting */}
            <div
              className="mb-6 opacity-0 animate-fade-in"
              style={{
                animationDelay: '0.1s',
                animationFillMode: 'forwards',
              }}
            >
              <span className="inline-block px-4 py-2 bg-slate-800/50 border border-blue-500/30 rounded-full text-sm text-blue-400 font-medium">
                👋 Welcome to my portfolio
              </span>
            </div>

            {/* Name */}
            <h1
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 opacity-0 animate-fade-in"
              style={{
                animationDelay: '0.3s',
                animationFillMode: 'forwards',
              }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Satyam Shaswat
              </span>
            </h1>

            {/* Typing Animation */}
            <div
              className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300 mb-6 h-16 opacity-0 animate-fade-in"
              style={{
                animationDelay: '0.5s',
                animationFillMode: 'forwards',
              }}
            >
              <TypeAnimation
                sequence={[
                  'Computer Science Student',
                  2000,
                  'Aspiring Data Scientist',
                  2000,
                  'Data Engineer',
                  2000,
                  'Machine Learning Enthusiast',
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>

            {/* Introduction */}
            <p
              className="text-base sm:text-lg text-gray-400 max-w-2xl mb-10 leading-relaxed opacity-0 animate-fade-in"
              style={{
                animationDelay: '0.7s',
                animationFillMode: 'forwards',
                textAlign: 'justify',
              }}
            >
              Undergraduate student specializing in Data Science,
              interested in extracting insights from data, building Machine Learning models,
              and solving real-world problems through analytical thinking and practical projects.
              technologies through modern development practices.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12 opacity-0 animate-fade-in"
              style={{
                animationDelay: '0.9s',
                animationFillMode: 'forwards',
              }}
            >
              
            </div>

            {/* Social Links */}
            <div
              className="flex justify-center md:justify-start gap-6 opacity-0 animate-fade-in"
              style={{
                animationDelay: '1.1s',
                animationFillMode: 'forwards',
              }}
            >
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-800/50 border border-slate-700 hover:border-blue-500 hover:bg-slate-800 transition-all group"
              >
                <Github
                  size={24}
                  className="text-gray-400 group-hover:text-blue-400 transition-colors"
                />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-slate-800/50 border border-slate-700 hover:border-blue-500 hover:bg-slate-800 transition-all group"
              >
                <Linkedin
                  size={24}
                  className="text-gray-400 group-hover:text-blue-400 transition-colors"
                />
              </a>

              <a
                href="mailto:satyamshaswat335@gmail.com"
                className="p-3 rounded-full bg-slate-800/50 border border-slate-700 hover:border-blue-500 hover:bg-slate-800 transition-all group"
              >
                <Mail
                  size={24}
                  className="text-gray-400 group-hover:text-blue-400 transition-colors"
                />
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div
            className="flex justify-center opacity-0 animate-fade-in"
            style={{
              animationDelay: '1.2s',
              animationFillMode: 'forwards',
            }}
          >
            <div className="relative">

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-blue-500/30 blur-3xl rounded-full"></div>

              {/* Profile Image */}
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-blue-400 shadow-[0_0_60px_rgba(59,130,246,0.5)]">

                <Image
                  src="/Portfolio/images/profile.png"
                  alt="Profile"
                  fill
                  className="object-cover"
                  priority
                />

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero

