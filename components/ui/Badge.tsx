import React from 'react'

export const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <span className="text-xs px-2 py-1 rounded-full bg-white/6 text-slate-100">{children}</span>
  )
}
