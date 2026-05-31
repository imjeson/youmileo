import type { Metadata } from 'next'
import SectionTitle from '@/components/SectionTitle'
import BookCard from '@/components/BookCard'
import { books } from '@/data/books'

export const metadata: Metadata = {
  title: '绘本馆 | 优米Leo看世界',
  description: '精选亲子绘本推荐，适合0-5岁孩子的绘本清单。',
}

export default function BooksPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <SectionTitle
        title="绘本馆"
        subtitle="和孩子一起读过的好绘本"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  )
}
