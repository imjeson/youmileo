import Link from 'next/link'

interface StoryCardProps {
  story: {
    id: string
    slug?: string
    title: string
    date: string
    category: string
    coverImage: string
    duration: string
    summary?: string
    description?: string
  }
}

export default function StoryCard({ story }: StoryCardProps) {
  const href = story.slug ? `/stories/${story.slug}` : '#'
  const text = story.summary || story.description || ''

  return (
    <Link href={href} className="block">
      <div className="bg-white rounded-2xl overflow-hidden card-shadow card-hover">
        <div className="h-40 bg-coral-light flex items-center justify-center overflow-hidden">
          <img
            src={story.coverImage}
            alt={story.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs px-2 py-1 bg-sky-light text-sky-dark rounded-full font-medium">
              {story.category}
            </span>
            <span className="text-xs text-gray-400">{story.duration}</span>
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2">{story.title}</h3>
          <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{text}</p>
          <div className="mt-3 text-xs text-gray-400">{story.date}</div>
        </div>
      </div>
    </Link>
  )
}
