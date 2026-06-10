'use client'

import { GraduationCap, Code, Database, Brain, LineChart,Github } from 'lucide-react'
import { Card } from '@/components/ui/card'

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
          </div>

          {/* About Content */}
          <div className="space-y-8">
            {/* Introduction */}
            <div className="text-center">
              <p className="text-lg text-gray-400 leading-relaxed mb-4 text-justify">
                I'm a <span className="text-blue-400 font-semibold">Computer Science</span> undergraduate
                specializating in <span className="text-purple-400 font-semibold">Data Science</span>,
                passionate about extracting insights from data, building Machine Learning models, 
                and solving real-world problems through practical projects and analytical thinking.
                My journey in tech is driven by curiosity, continuous learning, and the desire to create impactful solutions using technology.
                My interests primarily lie in Data Science, Machine Learning, Data Analytics, and AI-driven technologies.
                Alongside this, I also explore modern web development to build user-focused applications and strengthen my understanding of software development.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mb-4 text-justify">
                I continuously work on improving my problem-solving, development, and analytical skills through 
                hands-on projects and real-world learning experiences.
                
              </p>
            </div>

            {/* Interest Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <Card className="p-6 bg-slate-900/50 border-slate-800 hover:border-blue-500/50 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-blue-500/10 group-hover:bg-blue-500/20 transition-all">
                    <LineChart className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-200 mb-2">Data Science & Analytics</h3>
                    <p className="text-gray-500 text-sm">
                      Extracting insights from data through analysis, visualization, and data-driven problem solving.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-slate-900/50 border-slate-800 hover:border-purple-500/50 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-purple-500/10 group-hover:bg-purple-500/20 transition-all">
                    <Brain className="text-purple-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-200 mb-2">Machine Learning & AI</h3>
                    <p className="text-gray-500 text-sm">
                     Building and exploring intelligent models to solve practical problems using predictive and analytical techniques.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-slate-900/50 border-slate-800 hover:border-green-500/50 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-green-500/10 group-hover:bg-green-500/20 transition-all">
                    <Database className="text-green-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-200 mb-2">Databases</h3>
                    <p className="text-gray-500 text-sm">
                      Working with SQL and database systems to manage, organize, and retrieve structured data efficiently.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-slate-900/50 border-slate-800 hover:border-orange-500/50 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-orange-500/10 group-hover:bg-orange-500/20 transition-all">
                    <GraduationCap className="text-orange-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-200 mb-2">Problem Solving</h3>
                    <p className="text-gray-500 text-sm">
                     Strengthening analytical thinking and coding skills through DSA practice and real-world project development.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-slate-900/50 border-slate-800 hover:border-orange-500/50 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-orange-500/10 group-hover:bg-orange-500/20 transition-all">
                    <Github className="text-orange-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-200 mb-2">Git & GitHub</h3>
                    <p className="text-gray-500 text-sm">
                     Using version control and collaborative workflows to manage projects, track changes, and maintain organized code repositories.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="p-6 bg-slate-900/50 border-slate-800 hover:border-orange-500/50 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-orange-500/10 group-hover:bg-orange-500/20 transition-all">
                    <Code className="text-orange-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-200 mb-2">Full Stack Development</h3>
                    <p className="text-gray-500 text-sm">
                     Exploring modern web technologies to support and enhance data-driven applications and user experiences.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default About
