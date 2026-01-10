export function Footer() {
  return (
    <footer className="border-t border-white/6 mt-12">
      <div className="container mx-auto px-6 lg:px-8 py-8 text-sm text-slate-400 flex flex-col md:flex-row items-center justify-between">
        <div>© {new Date().getFullYear()} Elizabeth — Frontend Engineer</div>
        <div className="mt-3 md:mt-0">Built with Next.js, Tailwind CSS, Framer Motion</div>
      </div>
    </footer>
  )
}
