'use client'

import { Card } from '@/components/ui/card'
import { Terminal, Braces } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
  
    {
      title: 'Data Science & Analytics',
      gradient: 'from-purple-500 to-pink-500',
      text: 'text-white-300',
      skills: ['EDA', 'Data Cleaning', 'Feature Engineering', 'Data Visualization', 'Statistical Analysis'],
    },
    {
      title: 'Machine Learning',
      gradient: 'from-gray-500 to-slate-500',
      text: 'text-green-300',
      skills: ['Model Building & Evaluation', 'Supervised Learning', 'Scikit-learn', 'Unsupervised Learning', 'Clustering', 'Natural Language Processing', 'Deep Learning', 'TensorFlow'],
    },
      {
  
      title: 'Programming Languages',
      gradient: 'from-blue-500 to-cyan-500',
      text: 'text-gray-300',
      skills: ['Python', 'C++', 'SQL', ],
    },
    {
      title: 'Libraries & Tools',
      gradient: 'from-green-500 to-emerald-500',
      text: 'text-green-300',
      skills: ['Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'Power BI'],
    },
    {
      title: 'Frameworks & Development',
      gradient: 'from-orange-500 to-red-500',
      skills: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'Flask', 'Tailwind CSS'],
    },
    {
      title: 'Tools & Platforms',
      gradient: 'from-yellow-500 to-orange-500',
      skills: ['Git', 'GitHub', 'Postman', 'VS Code', 'Jupyter Notebook', 'Google Colab'],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Skills & Technologies
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full" />
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern applications and analyzing complex data
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, idx) => (
              <Card
                key={idx}
                className="p-6 bg-slate-900/50 border-slate-800 hover:border-slate-700 transition-all group hover:scale-105"
              >
                <div className="mb-4">
                  <div
                    className={`inline-block px-4 py-2 rounded-lg bg-gradient-to-r ${category.gradient} bg-opacity-10`}
                  >
                    <h3 className={`text-xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text ${category.text}`}>
                      {category.title}
                    </h3>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-3 py-1.5 bg-slate-800/80 border border-slate-700 rounded-md text-sm text-gray-300 hover:border-blue-500/50 hover:text-blue-400 transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm">
              Always learning and expanding my skillset with the latest technologies
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
