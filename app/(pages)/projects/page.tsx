import Projects from '@/components/sections/Projects'

export const metadata = {
  title: 'Projects — Elizabeth Olanrewaju',
  description: 'Selected projects in fintech, cryptocurrency, e-commerce, and access management.'
}

export default function ProjectsPage() {
  return (
    <div className="pt-12 pb-20">
      <Projects />
    </div>
  )
}
