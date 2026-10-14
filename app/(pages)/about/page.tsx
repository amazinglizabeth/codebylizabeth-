import About from '@/components/sections/About'

export const metadata = {
  title: 'About — Elizabeth Olanrewaju',
  description: 'Frontend engineer specializing in Next.js, React, TypeScript, and motion systems.'
}

export default function AboutPage() {
  return (
    <div className="pt-12 pb-20">
      <About />
    </div>
  )
}
