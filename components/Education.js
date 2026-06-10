'use client'

import { GraduationCap, School, Brain, } from 'lucide-react'
import { Card } from '@/components/ui/card'

const Education = () => {
  const journeySteps = [
    {
      icon: GraduationCap,
      title: 'SRM Institute of Science and Technology',
      period: '2023-Present',
      
      description: 'Currently pursuing undergraduate studies in Computer Science with a specialization in Data Science.',
      highlights: ['B.Tech – Computer Science (Data Science)', 'CGPA: 8.45/10'],
      color: 'blue',
    },
    {
      icon: School,
      title: 'Intermediate Education',
      period: '2021-2023',
      description: 'Completed higher secondary education with a focus on academic growth and foundational learning.',
      highlights: [ 'Bihar State Education Board', 'Science Stream', '81.6%'],
      color: 'green',
    },
    {
      icon: Brain,
      title: 'High School Education',
      period: '2021',
      description: 'Completed secondary education with strong interest in learning, problem solving, and technology.',
      highlights: ['CBSE', '77%'],
      color: 'purple',
    },
    
  ]

  const colorClasses = {
    blue: {
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/50',
      text: 'text-blue-400',
      gradient: 'from-blue-500 to-cyan-500',
    },
    green: {
      bg: 'bg-green-500/10',
      border: 'border-green-500/50',
      text: 'text-green-400',
      gradient: 'from-green-500 to-emerald-500',
    },
    purple: {
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/50',
      text: 'text-purple-400',
      gradient: 'from-purple-500 to-pink-500',
    },
    orange: {
      bg: 'bg-orange-500/10',
      border: 'border-orange-500/50',
      text: 'text-orange-400',
      gradient: 'from-orange-500 to-red-500',
    },
  }

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              My academic journey and continuous learning through school and undergraduate studies.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 hidden md:block" />

            {/* Journey Steps */}
            <div className="space-y-8">
              {journeySteps.map((step, idx) => {
                const colors = colorClasses[step.color]
                const Icon = step.icon

                return (
                  <div key={idx} className="relative">
                    {/* Timeline Dot */}
                    <div className="absolute left-8 w-4 h-4 rounded-full bg-slate-900 border-4 border-current transform -translate-x-1.5 hidden md:block" style={{ color: `var(--${step.color}-500)` }} />

                    {/* Content Card */}
                    <Card className="md:ml-20 p-6 bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all group">
                      <div className="flex items-start gap-4">
                        {/* Icon */}
                        <div className={`p-3 rounded-lg ${colors.bg} border ${colors.border} group-hover:scale-110 transition-transform`}>
                          <Icon className={colors.text} size={24} />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h3 className="text-xl font-bold text-gray-200">{step.title}</h3>
                            <span className={`text-sm ${colors.text} font-medium mt-1 sm:mt-0`}>
                              {step.period}
                            </span>
                          </div>
                          <p className="text-gray-500 text-sm mb-3">{step.description}</p>

                          {/* Highlights */}
                          <div className="flex flex-wrap gap-2">
                            {step.highlights.map((highlight, hIdx) => (
                              <span
                                key={hIdx}
                                className="px-3 py-1 bg-slate-800/80 border border-slate-700 rounded-md text-xs text-gray-400"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>

         
        </div>
      </div>
    </section>
  )
}

export default Education;
