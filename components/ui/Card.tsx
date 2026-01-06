import React from 'react'

type Props = { children: React.ReactNode, className?: string }

export const Card: React.FC<Props> = ({ children, className = '' }) => {
  return (
    <div className={`glass p-4 rounded-xl shadow-lg ${className}`}>{children}</div>
  )
}
