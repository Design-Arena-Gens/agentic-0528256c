import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Evo - AI Consulting Agency',
  description: 'Transform your business with cutting-edge AI solutions. Expert AI consulting, agents, automations, and web development.',
  keywords: 'AI consulting, AI agents, automation, AI content, AI web development, machine learning, artificial intelligence',
  authors: [{ name: 'Evo' }],
  openGraph: {
    title: 'Evo - AI Consulting Agency',
    description: 'Transform your business with cutting-edge AI solutions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
