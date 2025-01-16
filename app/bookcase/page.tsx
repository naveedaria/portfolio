'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NavLink } from '@/components/nav-link'
import { PageTransition } from '@/components/page-transition'
import { SocialLinks } from '@/components/social-links'
import Link from 'next/link'
import { Star, X } from 'lucide-react'
import { ModeToggle } from '@/components/mode-toggle'

interface Book {
  id: number
  title: string
  author: string
  color: string
  rating: number
  review: string
}

const books: Book[] = [
  { id: 1, title: "To Kill a Mockingbird", author: "Harper Lee", color: "bg-blue-500", rating: 5, review: "A classic that explores human nature and moral growth through a child's perspective." },
  { id: 2, title: "1984", author: "George Orwell", color: "bg-red-500", rating: 4, review: "A chilling portrayal of a totalitarian future that remains relevant today." },
  { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald", color: "bg-yellow-500", rating: 4, review: "A vivid portrayal of the Jazz Age and the American Dream." },
  { id: 4, title: "Pride and Prejudice", author: "Jane Austen", color: "bg-green-500", rating: 5, review: "A timeless romance with sharp social commentary and unforgettable characters." },
  { id: 5, title: "The Catcher in the Rye", author: "J.D. Salinger", color: "bg-purple-500", rating: 3, review: "A controversial coming-of-age tale that captures teenage angst and alienation." },
  { id: 6, title: "One Hundred Years of Solitude", author: "Gabriel García Márquez", color: "bg-indigo-500", rating: 4.5, review: "A masterpiece of magical realism that spans generations of a family's history." },
  { id: 7, title: "The Hobbit", author: "J.R.R. Tolkien", color: "bg-green-600", rating: 4.5, review: "An enchanting adventure that laid the groundwork for modern fantasy literature." },
  { id: 8, title: "Brave New World", author: "Aldous Huxley", color: "bg-blue-600", rating: 4, review: "A thought-provoking dystopian novel that questions the price of happiness in a technologically advanced society." },
  { id: 9, title: "The Alchemist", author: "Paulo Coelho", color: "bg-yellow-600", rating: 4, review: "A philosophical novel about following one's dreams and finding one's destiny." },
  { id: 10, title: "Fahrenheit 451", author: "Ray Bradbury", color: "bg-red-600", rating: 4.5, review: "A dystopian tale about the dangers of censorship and the importance of free thought." },
  { id: 11, title: "The Odyssey", author: "Homer", color: "bg-blue-700", rating: 5, review: "An epic poem that has captivated readers for thousands of years with its tale of adventure and homecoming." },
  { id: 12, title: "Jane Eyre", author: "Charlotte Brontë", color: "bg-purple-600", rating: 4.5, review: "A groundbreaking work of fiction that combines romance with social criticism and psychological depth." },
]

export default function Bookcase() {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)

  return (
    <div className="min-h-screen px-6 py-12 md:px-12 lg:px-24 flex justify-center items-start">
      <div className="w-full max-w-6xl">
        <header className="flex flex-col sm:flex-row items-center sm:items-baseline justify-between mb-16">
          <div className="space-y-2 mb-4 sm:mb-0">
            <h1 className="text-3xl font-medium text-center sm:text-left">
              <Link href="/" className="hover:text-gray-600 transition-colors duration-300">
                Naveed Aria
              </Link>
              <span className="text-gray-400 ml-2">—</span>
              <span className="text-gray-600 ml-2 text-xl">Bookcase</span>
            </h1>
            <SocialLinks />
          </div>
          <nav className="flex items-center gap-4 sm:gap-8">
            <NavLink href="/projects">projects</NavLink>
            {/* <NavLink href="/writing">writing</NavLink> */}
            <NavLink href="/resume">resume</NavLink>
            <NavLink href="/bookcase">bookcase</NavLink>
            <ModeToggle />
          </nav>
        </header>

        <PageTransition>
          <main className="relative">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {books.map((book) => (
                <motion.div
                  key={book.id}
                  className={`${book.color} rounded-lg shadow-md cursor-pointer p-4 flex items-center justify-center`}
                  style={{
                    aspectRatio: '2/3',
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedBook(book)}
                >
                  <h3 className="text-white text-center font-bold text-sm">{book.title}</h3>
                </motion.div>
              ))}
            </div>

            <AnimatePresence>
              {selectedBook && (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                >
                  <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
                    <button
                      onClick={() => setSelectedBook(null)}
                      className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                      aria-label="Close"
                    >
                      <X size={24} />
                    </button>
                    <h2 className="text-2xl font-bold mb-2">{selectedBook.title}</h2>
                    <p className="text-gray-600 mb-4">by {selectedBook.author}</p>
                    <div className="flex items-center mb-4">
                      <div className="flex mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={20}
                            className={i < Math.floor(selectedBook.rating) ? "text-yellow-500" : "text-gray-300"}
                          />
                        ))}
                      </div>
                      <span className="text-lg font-semibold">{selectedBook.rating.toFixed(1)}</span>
                    </div>
                    <p className="text-gray-700">{selectedBook.review}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </main>
        </PageTransition>
      </div>
    </div>
  )
}

