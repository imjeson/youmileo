import type { Metadata } from 'next'
import SectionTitle from '@/components/SectionTitle'
import TimelineCard from '@/components/TimelineCard'
import { timelineEntries } from '@/data/timeline'

export const metadata: Metadata = {
  title: '成长记录 | 优米Leo看世界',
  description: '记录优米和Leo成长中的每一个珍贵瞬间。',
}

export default function TimelinePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <SectionTitle
        title="成长记录"
        subtitle="记录每一个珍贵瞬间"
      />
      <div className="max-w-2xl mx-auto">
        {timelineEntries.map((entry, index) => (
          <TimelineCard
            key={entry.id}
            entry={entry}
            isLast={index === timelineEntries.length - 1}
          />
        ))}
      </div>
    </div>
  )
}
