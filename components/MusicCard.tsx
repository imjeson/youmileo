import { MusicItem } from '@/data/music'

interface MusicCardProps {
  item: MusicItem
}

export default function MusicCard({ item }: MusicCardProps) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden card-shadow card-hover">
      <div className="h-36 bg-warm-light flex items-center justify-center">
        <div className="text-center text-gray-400">
          <div className="text-4xl mb-1">🎵</div>
          <p className="text-xs">{item.coverImage}</p>
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs px-2 py-1 bg-blush-light text-blush-dark rounded-full font-medium">
            {item.category}
          </span>
          <span className="text-xs text-gray-400">{item.duration}</span>
        </div>
        <h3 className="text-lg font-bold text-gray-800 mb-2">{item.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{item.description}</p>
      </div>
    </div>
  )
}
