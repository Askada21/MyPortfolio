import type { ComponentProps } from 'react'

export default function ActionLink({ children, className = '', ...props }: ComponentProps<'a'>) {
  return (
    <a className={`action-link ${className}`} {...props}>
      {children}
    </a>
  )
}
