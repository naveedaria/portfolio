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
        isActive ? "text-black" : "text-gray-500 hover:text-gray-800"
      )}
    >
      {children}
    </Link>
  )
}

