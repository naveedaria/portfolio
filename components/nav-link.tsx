'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

export function NavLink({ href, children }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link 
      href={href} 
      className={cn(
        "text-sm uppercase tracking-wide transition-colors duration-200",
        isActive 
          ? "text-emerald-900 dark:text-emerald-400 font-medium" 
          : "text-gray-500 dark:text-gray-400 hover:text-emerald-800 dark:hover:text-emerald-500"
      )}
    >
      {children}
    </Link>
  )
}

