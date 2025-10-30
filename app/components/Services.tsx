'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCpu, FiCode, FiZap, FiFileText, FiGlobe } from 'react-icons/fi'

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: <FiCpu size={40} />,
      title: 'AI Consulting',
      description: 'Strategic guidance to integrate AI into your business operations, maximize efficiency, and unlock new revenue streams.',
      features: ['AI Strategy Development', 'Technology Assessment', 'Implementation Roadmap'],
    },
    {
      icon: <FiCode size={40} />,
      title: 'AI Agents',
      description: 'Custom intelligent agents that automate complex tasks, interact with customers, and operate autonomously 24/7.',
      features: ['Conversational AI', 'Task Automation', 'Decision Support Systems'],
    },
    {
      icon: <FiZap size={40} />,
      title: 'Automations',
      description: 'End-to-end workflow automation that reduces manual effort, eliminates errors, and accelerates business processes.',
      features: ['Process Automation', 'Data Integration', 'Workflow Optimization'],
    },
    {
      icon: <FiFileText size={40} />,
      title: 'AI Content',
      description: 'Generate high-quality, engaging content at scale using advanced language models tailored to your brand voice.',
      features: ['Content Generation', 'Copywriting', 'SEO Optimization'],
    },
    {
      icon: <FiGlobe size={40} />,
      title: 'AI Web Development',
      description: 'Build intelligent, responsive web applications powered by AI that adapt to user behavior and preferences.',
      features: ['Smart Web Apps', 'Personalization', 'AI-Enhanced UX'],
    },
  ]

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI solutions tailored to your unique business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-violet-600 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity"></div>

              <div className="relative z-10">
                <div className="text-purple-600 dark:text-purple-400 mb-4 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>

                <h3 className="text-2xl font-bold mb-3">{service.title}</h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
