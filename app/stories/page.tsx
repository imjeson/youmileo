import type { Metadata } from 'next'
import SectionTitle from '@/components/SectionTitle'
import StoryCard from '@/components/StoryCard'
import EmptyState from '@/components/EmptyState'
import { generatedStories } from '@/src/data/generated-stories'

export const metadata: Metadata = {
  title: '每日故事 | 优米Leo看世界',
  description: '每天给优米和Leo讲一个故事，用故事陪伴孩子认识世界。',
}

export default function StoriesPage() {
  if (generatedStories.length === 0) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        <SectionTitle
          title="每日故事"
          subtitle="每天一个故事，陪孩子认识更大的世界"
        />
        <EmptyState
          icon="📖"
          title="还没有故事"
          description="爸爸正在准备新故事，明天再来看看吧！"
        />
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <SectionTitle
        title="每日故事"
        subtitle="每天一个故事，陪孩子认识更大的世界"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {generatedStories.map((story) => (
          <StoryCard key={story.id} story={story} />
        ))}
      </div>
    </div>
  )
}
