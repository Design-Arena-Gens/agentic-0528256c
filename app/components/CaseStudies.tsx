'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiArrowRight } from 'react-icons/fi'

export default function CaseStudies() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const caseStudies = [
    {
      title: 'E-Commerce Revolution',
      client: 'RetailCo',
      description: 'Implemented AI-powered recommendation engine that increased sales by 45% and customer engagement by 60%.',
      results: ['45% Sales Increase', '60% Engagement Boost', '30% Cart Abandonment Reduction'],
      image: 'bg-gradient-to-br from-purple-500 to-pink-500',
    },
    {
      title: 'Healthcare Automation',
      client: 'MediCare Solutions',
      description: 'Developed intelligent patient triage system reducing wait times by 70% while improving diagnostic accuracy.',
      results: ['70% Faster Triage', '95% Accuracy Rate', '2M+ Patients Served'],
      image: 'bg-gradient-to-br from-blue-500 to-purple-500',
    },
    {
      title: 'Financial Analytics',
      client: 'FinTech Global',
      description: 'Created AI-driven fraud detection system that prevented $50M in losses while reducing false positives by 80%.',
      results: ['$50M Losses Prevented', '80% Fewer False Positives', '99.9% Uptime'],
      image: 'bg-gradient-to-br from-violet-500 to-purple-600',
    },
  ]

  return (
    <section id="case-studies" className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Success <span className="text-gradient">Stories</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real results from real clients transforming their businesses with AI
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`h-48 ${study.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white/80 text-sm font-medium">{study.client}</p>
                  <h3 className="text-white text-2xl font-bold">{study.title}</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {study.description}
                </p>

                <div className="space-y-2 mb-4">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                      <span className="font-semibold text-purple-600 dark:text-purple-400">
                        {result}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:gap-3 transition-all"
                >
                  Learn More <FiArrowRight />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
