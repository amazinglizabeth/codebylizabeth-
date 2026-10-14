import React from 'react'

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  hoverEffect?: boolean
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = true,
  ...props 
}) => {
  return (
    <div 
      className={`glass rounded-2xl ${hoverEffect ? 'glass-card-hover' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}
