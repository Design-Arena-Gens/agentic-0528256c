'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiClock, FiArrowRight } from 'react-icons/fi'

export default function Blog() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const posts = [
    {
      title: 'The Future of AI in Enterprise: 2025 Trends',
      excerpt: 'Discover the top AI trends that will shape enterprise technology in 2025 and how to prepare your organization.',
      date: '2025-10-15',
      readTime: '5 min read',
      category: 'Trends',
    },
    {
      title: 'Building Effective AI Agents: Best Practices',
      excerpt: 'Learn the essential strategies for developing AI agents that deliver real business value and scale effectively.',
      date: '2025-10-10',
      readTime: '7 min read',
      category: 'Development',
    },
    {
      title: 'Automation ROI: Measuring Success in AI Projects',
      excerpt: 'A comprehensive guide to calculating and maximizing return on investment for your AI automation initiatives.',
      date: '2025-10-05',
      readTime: '6 min read',
      category: 'Business',
    },
  ]

  return (
    <section id="blog" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Latest <span className="text-gradient">Insights</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Stay ahead with expert perspectives on AI innovation and industry trends
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-br from-purple-500 to-violet-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-gray-900/90 rounded-full text-xs font-semibold text-purple-600">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <span className="flex items-center gap-1">
                    <FiClock size={14} />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {post.excerpt}
                </p>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-semibold group-hover:gap-3 transition-all"
                >
                  Read More <FiArrowRight />
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-purple-600 dark:text-purple-400 border-2 border-purple-600 dark:border-purple-400 rounded-lg hover:bg-purple-600 hover:text-white dark:hover:bg-purple-400 dark:hover:text-gray-900 transition-all duration-300"
          >
            View All Articles <FiArrowRight />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
