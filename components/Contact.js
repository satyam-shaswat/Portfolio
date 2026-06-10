'use client'

import { Mail, Linkedin, Github, Download, Send } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
  name: '',
  email: '',
  message: '',
})

const [loading, setLoading] = useState(false)
const [success, setSuccess] = useState(false)

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  })
}

const handleSubmit = async (e) => {
  e.preventDefault()

  setLoading(true)
  setSuccess(false)

  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })

    if (response.ok) {
      setSuccess(true)

      setFormData({
        name: '',
        email: '',
        message: '',
      })
    }
  } catch (error) {
    console.log(error)
  }

  setLoading(false)
}

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-950/50">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              I'm always open to new opportunities and collaborations. Feel free to reach out!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-6 bg-slate-900/50 border-slate-800 hover:border-blue-500/50 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-all">
                    <Mail className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 mb-1">Email</h3>
                    <a
                      href="mailto:satyamshaswat335@gmail.com"
                      className="text-gray-300 hover:text-blue-400 transition-colors"
                    >
                      satyamshaswat335@gmail.com
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-slate-900/50 border-slate-800 hover:border-blue-500/50 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-all">
                    <Linkedin className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 mb-1">LinkedIn</h3>
                    <a
                      href="https://linkedin.com/in/shaswatsatyam"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      linkedin.com/in/shaswatsatyam
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-slate-900/50 border-slate-800 hover:border-blue-500/50 transition-all group">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-lg bg-green-500/10 group-hover:bg-green-500/20 transition-all">
                    <Github className="text-green-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-400 mb-1">GitHub</h3>
                    <a
                      href="https://github.com/satyam-shaswat"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-green-400 transition-colors"
                    >
                      github.com/satyam-shaswat
                    </a>
                  </div>
                </div>
              </Card>

              
            </div>

            {/* Contact Form */}
            <Card className="p-6 bg-slate-900/50 border-slate-800">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                    Name
                  </label>
                  <Input
  id="name"
  name="name"
  type="text"
  placeholder="Your name"
  value={formData.name}
  onChange={handleChange}
  className="bg-slate-800/50 border-slate-700 focus:border-blue-500 text-gray-300"
  required
/>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                    Email
                  </label>
                  <Input
  id="email"
  name="email"
  type="email"
  placeholder="your.email@example.com"
  value={formData.email}
  onChange={handleChange}
  className="bg-slate-800/50 border-slate-700 focus:border-blue-500 text-gray-300"
  required
/>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                    Message
                  </label>
                  <Textarea
  id="message"
  name="message"
  placeholder="Your message..."
  rows={5}
  value={formData.message}
  onChange={handleChange}
  className="bg-slate-800/50 border-slate-700 focus:border-blue-500 text-gray-300 resize-none"
  required
/>
                </div>

 <Button
  type="submit"
  disabled={loading}
  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold"
  size="lg"
>
  <Send className="mr-2" size={20} />
  {loading ? 'Sending...' : 'Send Message'}
</Button>
{success && (
  <p className="text-green-400 text-sm text-center">
    Message sent successfully!
  </p>
)}
                  
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
