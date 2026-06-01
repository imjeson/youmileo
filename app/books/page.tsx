import type { Metadata } from 'next'
import SectionTitle from '@/components/SectionTitle'
import StoryCard from '@/components/StoryCard'
import EmptyState from '@/components/EmptyState'
import { generatedStories } from '@/src/data/generated-stories'

export const metadata: Metadata = {
  title: '绘本馆 | 优米Leo看世界',
  description: '精选亲子绘本推荐，适合0-5岁孩子的绘本清单。',
}

export default function BooksPage() {
  if (generatedStories.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        <SectionTitle
          title="绘本馆"
          subtitle="和孩子一起读过的好绘本"
        />
        <EmptyState
          icon="📚"
          title="绘本馆还是空的"
          description="爸爸正在整理绘本，很快就会上架哦！"
        />
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <SectionTitle
        title="绘本馆"
        subtitle="和孩子一起读过的好绘本"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {generatedStories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </div>
  )
}
