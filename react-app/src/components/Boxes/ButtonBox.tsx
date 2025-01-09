import React from 'react'

export interface ButtonBoxProps {
  className?: string
  vertical?: boolean
  children: React.ReactNode
}
export const ButtonBox = ({
  className,
  vertical = false,
  children,
}: ButtonBoxProps) => {
  return (
    <div
      // className={cn(styles.buttonBox, className, vertical ? styles.vertical : '')}
      className={className}
    >
      {children}
    </div>
  )
}
