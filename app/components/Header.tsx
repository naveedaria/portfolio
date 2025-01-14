"use client"

import Link from 'next/link'
import { useTheme } from "next-themes"
import { Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className="py-6 px-4 md:px-6 flex items-center justify-between bg-card sticky top-0 z-50">
      <Link href="/" className="text-2xl font-bold">
        NA
      </Link>
      <nav className="flex items-center space-x-4">
        <Link href="#about" className="hover:text-primary transition-colors">About</Link>
        <Link href="#projects" className="hover:text-primary transition-colors">Projects</Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </nav>
    </header>
  )
}

