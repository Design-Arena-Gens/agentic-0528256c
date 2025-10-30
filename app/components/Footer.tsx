'use client'

import { FiGithub, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Case Studies', href: '#case-studies' },
      { name: 'Blog', href: '#blog' },
    ],
    services: [
      { name: 'AI Consulting', href: '#services' },
      { name: 'AI Agents', href: '#services' },
      { name: 'Automations', href: '#services' },
      { name: 'AI Content', href: '#services' },
      { name: 'AI Web Development', href: '#services' },
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
    ],
  }

  const socialLinks = [
    { icon: <FiTwitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <FiLinkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <FiGithub size={20} />, href: '#', label: 'GitHub' },
    { icon: <FiInstagram size={20} />, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="text-3xl font-bold text-gradient mb-4 inline-block">
              Evo
            </a>
            <p className="text-gray-400 mb-6 max-w-sm">
              Empowering businesses through intelligent AI solutions and innovative automation.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-gray-800 hover:bg-purple-600 flex items-center justify-center transition-colors"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Evo AI Consulting Agency. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm">
              Built with 💜 using cutting-edge AI technology
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
