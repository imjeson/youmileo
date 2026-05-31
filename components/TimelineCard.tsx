import { TimelineEntry } from '@/data/timeline'

interface TimelineCardProps {
  entry: TimelineEntry
  isLast?: boolean
}

export default function TimelineCard({ entry, isLast = false }: TimelineCardProps) {
  return (
    <div className="flex gap-4">
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center">
        <div className="w-10 h-10 rounded-full bg-sky-light border-2 border-sky flex items-center justify-center text-lg flex-shrink-0">
          {entry.icon}
        </div>
        {!isLast && <div className="w-0.5 flex-1 bg-sky/30 mt-2" />}
      </div>

      {/* Content */}
      <div className={`pb-8 ${isLast ? '' : ''}`}>
        <div className="text-xs text-gray-400 mb-1">{entry.date}</div>
        <h3 className="text-lg font-bold text-gray-800 mb-1">{entry.title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed">{entry.content}</p>
      </div>
    </div>
  )
}
