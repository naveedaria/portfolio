'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NavLink } from '@/components/nav-link'
import { PageTransition } from '@/components/page-transition'
import { SocialLinks } from '@/components/social-links'
import Link from 'next/link'
import { Star, X } from 'lucide-react'
import { ModeToggle } from '@/components/mode-toggle'
import { WeatherInfo } from '@/components/weather-info'

interface Book {
  id: number
  title: string
  author: string
  color: string
  rating: number
  review: string
}

const books: Book[] = [
  { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", color: "bg-stone-200", rating: 5, review: "A classic that explores human nature and moral growth through a child's perspective." },
  { id: 2, title: "1984", author: "George Orwell", color: "bg-neutral-200", rating: 4, review: "A chilling portrayal of a totalitarian future that remains relevant today." },
  { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", color: "bg-zinc-200", rating: 4, review: "A vivid portrayal of the Jazz Age and the American Dream." },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen", color: "bg-stone-300", rating: 5, review: "A timeless romance with sharp social commentary and unforgettable characters." },
  { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger", color: "bg-neutral-300", rating: 3, review: "A controversial coming-of-age tale that captures teenage angst and alienation." },
  { id: 6, title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", color: "bg-zinc-300", rating: 4.5, review: "A masterpiece of magical realism that spans generations of a family's history." },
  { id: 7, title: "The Hobbit", author: "J.R.R. Tolkien", color: "bg-stone-200", rating: 4.5, review: "An enchanting adventure that laid the groundwork for modern fantasy literature." },
  { id: 8, title: "Brave New World", author: "Aldous Huxley", color: "bg-neutral-200", rating: 4, review: "A thought-provoking dystopian novel that questions the price of happiness in a technologically advanced society." },
  { id: 9, title: "The Alchemist", author: "Paulo Coelho", color: "bg-zinc-200", rating: 4, review: "A philosophical novel about following one's dreams and finding one's destiny." },
  { id: 10, title: "Fahrenheit 451", author: "Ray Bradbury", color: "bg-stone-300", rating: 4.5, review: "A dystopian tale about the dangers of censorship and the importance of free thought." },
  { id: 11, title: "The Odyssey", author: "Homer", color: "bg-neutral-300", rating: 5, review: "An epic poem that has captivated readers for thousands of years with its tale of adventure and homecoming." },
  { id: 12, title: "Jane Eyre", author: "Charlotte Brontë", color: "bg-zinc-300", rating: 4.5, review: "A groundbreaking work of fiction that combines romance with social criticism and psychological depth." },
]

export default function Bookcase() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)

  return (
    <div className="min-h-screen bg-[#f8f8f8] dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-6 py-12 md:px-12 lg:px-24">
        <header className="flex flex-col sm:flex-row justify-between items-start mb-16">
          <div className="flex items-center gap-8 mb-8 sm:mb-0">
            <Link 
              href="/" 
              className="text-2xl font-serif tracking-tight hover:text-emerald-900 dark:hover:text-emerald-400 transition-colors"
            >
              Naveed Aria
            </Link>
            <WeatherInfo />
          </div>
          <nav className="flex items-center gap-8">
            <NavLink href="/projects">projects</NavLink>
            <NavLink href="/resume">resume</NavLink>
            {/* <NavLink href="/bookcase">bookcase</NavLink> */}
            <ModeToggle />
          </nav>
        </header>

        <PageTransition>
          <main className="relative max-w-5xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {books.map((book) => (
                <motion.div
                  key={book.id}
                  className={`${book.color} dark:bg-gray-800 rounded-lg shadow-sm cursor-pointer p-4 flex items-center justify-center transform transition-all duration-200 hover:shadow-md hover:-translate-y-1`}
                  style={{ aspectRatio: '2/3' }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedBook(book)}
                >
                  <h3 className="text-gray-800 dark:text-gray-200 text-center font-serif text-sm">
                    {book.title}
                  </h3>
                </motion.div>
              ))}
            </div>

            <AnimatePresence>
              {selectedBook && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
                  onClick={() => setSelectedBook(null)}
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-md w-full relative"
                    onClick={e => e.stopPropagation()}
                  >
                    <button
                      onClick={() => setSelectedBook(null)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                      aria-label="Close"
                    >
                      <X size={20} />
                    </button>
                    <h2 className="text-2xl font-serif mb-2 text-gray-900 dark:text-gray-100">
                      {selectedBook.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 italic">
                      by {selectedBook.author}
                    </p>
                    <div className="flex items-center mb-4">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={i < Math.floor(selectedBook.rating) 
                              ? "text-emerald-600 dark:text-emerald-400" 
                              : "text-gray-300 dark:text-gray-600"
                            }
                          />
                        ))}
                      </div>
                      <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                        {selectedBook.rating.toFixed(1)}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {selectedBook.review}
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </PageTransition>
      </div>
    </div>
  )
}

