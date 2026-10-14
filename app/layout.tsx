import './globals.css'
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { PageTransition } from '../components/layout/PageTransition'

export const metadata = {
  title: 'Elizabeth Olanrewaju — Creative Frontend Developer & UI Engineer',
  description: 'Frontend engineer specializing in Next.js, React, TypeScript, and motion design. Crafting high-performance fintech dashboards and web applications.',
  keywords: ['Frontend Developer', 'React Developer', 'Next.js', 'TypeScript', 'Portfolio', 'Fintech UI', 'Web Developer'],
  authors: [{ name: 'Elizabeth Olanrewaju' }],
  openGraph: {
    title: 'Elizabeth Olanrewaju — Creative Frontend Developer',
    description: 'Frontend engineer specializing in Next.js, React, TypeScript, and motion design.',
    type: 'website'
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark font-sans scroll-smooth">
      <body className="antialiased bg-[#060810] text-[#F8FAFC] selection:bg-indigo-500/30 selection:text-indigo-200">
        <div className="min-h-screen flex flex-col justify-between">
          <Navbar />
          <main className="flex-1">
            <PageTransition>
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">
                {children}
              </div>
            </PageTransition>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
