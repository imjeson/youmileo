import type { Metadata } from 'next'
import SectionTitle from '@/components/SectionTitle'
import MusicCard from '@/components/MusicCard'
import { musicItems } from '@/data/music'

export const metadata: Metadata = {
  title: '音乐小剧场 | 优米Leo看世界',
  description: '用音乐开启每一天，家庭演奏、原创儿歌和睡前音乐。',
}

export default function MusicPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <SectionTitle
        title="音乐小剧场"
        subtitle="用音乐和节奏感受世界"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {musicItems.map((item) => (
          <MusicCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}
