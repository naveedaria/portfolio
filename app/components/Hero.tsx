import { Button } from '@/components/ui/button'
import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section id="about" className="py-20 px-4 md:px-6 text-center relative bg-background">
      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-foreground">Naveed Aria</h1>
        <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">If you have a bad bitch looking for a husband send me an email</h2>
        <p className="max-w-2xl mx-auto text-lg mb-8">
          Meow
        </p>
        <div className="flex justify-center space-x-4 mb-12">
          <Link href="https://github.com/naveedaria" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="rounded-full">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
          </Link>
          <Link href="https://linkedin.com/in/naveedaria" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="rounded-full">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </Link>
          <Button variant="outline" size="icon" className="rounded-full" onClick={() => navigator.clipboard.writeText('naveedaria4@gmail.com')}>
            <Mail className="h-5 w-5" />
            <span className="sr-only">Copy Email</span>
          </Button>
        </div>
      </div>
    </section>
  )
}

