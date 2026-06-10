'use client'

import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Name/Brand */}
            <div className="text-center md:text-left">
              <p className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Satyam Shaswat
              </p>
              <p className="text-sm text-gray-500 mt-1">
                Built with{' '}
                <Heart className="inline w-4 h-4 text-red-500 fill-current" />{' '}
                using Next.js & Tailwind CSS
              </p>
            </div>

            
          </div>

          {/* Copyright */}
          <div className="mt-6 pt-6 border-t border-slate-800 text-center">
            <p className="text-sm text-gray-500">
              © {currentYear} Satyam Shaswat. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
