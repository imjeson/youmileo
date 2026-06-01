import HeroSection from '@/components/HeroSection'
import SectionTitle from '@/components/SectionTitle'
import StoryCard from '@/components/StoryCard'
import MusicCard from '@/components/MusicCard'
import TimelineCard from '@/components/TimelineCard'
import { generatedStories } from '@/src/data/generated-stories'
import { musicItems } from '@/data/music'
import { timelineEntries } from '@/data/timeline'
import Link from 'next/link'

export default function HomePage() {
  const todayStory = generatedStories[0]
  const latestStories = generatedStories.slice(0, 3)
  const latestMusic = musicItems[0]
  const weeklyTimeline = timelineEntries.slice(0, 2)

  return (
    <>
      <HeroSection />

      {/* 今日推荐故事 */}
      {todayStory && (
        <section className="max-w-6xl mx-auto px-4 py-12">
          <SectionTitle title="今日推荐" subtitle="今天给优米和Leo讲的故事" />
          <div className="max-w-lg mx-auto">
            <StoryCard story={todayStory} />
          </div>
        </section>
      )}

      {/* 最新故事 */}
      {latestStories.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 py-12 bg-sky-light/30 -mx-4 md:mx-auto rounded-3xl">
          <SectionTitle title="最新故事" subtitle="最近讲给孩子们的故事" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestStories.map((story) => (
              <StoryCard key={story.id} story={story} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/stories"
              className="inline-block px-6 py-2 text-sky-dark border-2 border-sky rounded-2xl hover:bg-sky-light transition-colors font-medium"
            >
              查看全部故事
            </Link>
          </div>
        </section>
      )}

      {/* 音乐小剧场 */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <SectionTitle title="音乐小剧场" subtitle="用音乐开启每一天" />
        <div className="max-w-lg mx-auto">
          <MusicCard item={latestMusic} />
        </div>
        <div className="text-center mt-8">
          <Link
            href="/music"
            className="inline-block px-6 py-2 text-blush-dark border-2 border-blush rounded-2xl hover:bg-blush-light transition-colors font-medium"
          >
            进入音乐小剧场
          </Link>
        </div>
      </section>

      {/* 本周成长记录 */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <SectionTitle title="本周成长记录" subtitle="记录每一个珍贵瞬间" />
        <div className="max-w-2xl mx-auto">
          {weeklyTimeline.map((entry, index) => (
            <TimelineCard
              key={entry.id}
              entry={entry}
              isLast={index === weeklyTimeline.length - 1}
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/timeline"
            className="inline-block px-6 py-2 text-grass-dark border-2 border-grass rounded-2xl hover:bg-grass-light transition-colors font-medium"
          >
            查看全部记录
          </Link>
        </div>
      </section>

      {/* 简短介绍 */}
      <section className="bg-warm-light py-12">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="text-4xl mb-4">🌟</div>
          <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
            每天15分钟，讲一个故事，
            <br />
            看见一个更大的世界。
          </p>
        </div>
      </section>
    </>
  )
}
