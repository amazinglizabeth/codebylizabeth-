import React from 'react'

export const GlassCard: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return (
    <div className={`glass rounded-2xl p-6 border ${className}`}>
      {children}
    </div>
  )
}
