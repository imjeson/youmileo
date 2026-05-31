import { Book } from '@/data/books'

interface BookCardProps {
  book: Book
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden card-shadow card-hover">
      <div className="h-48 bg-grass-light flex items-center justify-center">
        <div className="text-center text-gray-400">
          <div className="text-4xl mb-1">📚</div>
          <p className="text-xs">{book.coverImage}</p>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs px-2 py-1 bg-warm-light text-warm-dark rounded-full font-medium">
            {book.ageRange}
          </span>
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-1">{book.title}</h3>
        <p className="text-xs text-gray-400 mb-2">作者：{book.author}</p>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{book.summary}</p>
        <div className="mt-3 flex flex-wrap gap-1">
          {book.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-0.5 bg-blush-light text-blush-dark rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
