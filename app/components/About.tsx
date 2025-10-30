'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiAward, FiUsers, FiTrendingUp, FiZap } from 'react-icons/fi'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const features = [
    {
      icon: <FiAward size={32} />,
      title: 'Industry Leaders',
      description: 'Award-winning AI solutions recognized globally',
    },
    {
      icon: <FiUsers size={32} />,
      title: 'Expert Team',
      description: 'Top-tier AI specialists and engineers',
    },
    {
      icon: <FiTrendingUp size={32} />,
      title: 'Proven Results',
      description: 'Measurable ROI and business growth',
    },
    {
      icon: <FiZap size={32} />,
      title: 'Rapid Deployment',
      description: 'Fast implementation and integration',
    },
  ]

  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Evo</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            We are a forward-thinking AI consulting agency dedicated to empowering businesses
            through intelligent automation and innovative AI solutions. Our mission is to bridge
            the gap between cutting-edge technology and practical business applications,
            delivering transformative results that drive growth and efficiency.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-purple-600 dark:text-purple-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
