import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'default' | 'accent' | 'emerald' | 'cyan' | 'outline'
  className?: string
}

export const Badge: React.FC<BadgeProps> = ({ 
  children, 
  variant = 'default',
  className = '' 
}) => {
  const variantStyles = {
    default: 'bg-white/[0.05] border-white/10 text-slate-300 hover:border-white/20',
    accent: 'bg-indigo-500/10 border-indigo-500/30 text-indigo-300',
    emerald: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300',
    cyan: 'bg-cyan-500/10 border-cyan-500/30 text-cyan-300',
    outline: 'bg-transparent border-white/15 text-slate-300 hover:bg-white/5'
  }

  return (
    <span className={`inline-flex items-center gap-1.5 text-xs font-mono font-medium px-2.5 py-1 rounded-full border backdrop-blur-md transition-colors ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  )
}
