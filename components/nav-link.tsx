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
        "text-lg transition-colors duration-200",
        isActive 
          ? "text-gray-900 dark:text-white font-medium" 
          : "text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200"
      )}
    >
      {children}
    </Link>
  )
}

