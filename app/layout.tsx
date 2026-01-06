import './globals.css'
// layout pieces
import { Navbar } from '../components/layout/Navbar'
import { Footer } from '../components/layout/Footer'
import { PageTransition } from '../components/layout/PageTransition'

// Using system fonts/fallbacks to avoid Google font fetch during build

export const metadata = {
  title: 'Elizabeth — Creative Frontend Developer',
  description: 'Designer-forward frontend portfolio with motion, polish, and performance.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`font-sans`}>
      <body className="antialiased bg-[var(--bg)] text-[var(--text-primary)]">
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">
            <PageTransition>
              <div className="container mx-auto px-6 lg:px-8 py-16">
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

