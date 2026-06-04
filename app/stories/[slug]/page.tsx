import type { Metadata } from 'next'
import Link from 'next/link'
import { generatedStories } from '@/src/data/generated-stories'
import EmptyState from '@/components/EmptyState'
import TtsPlayer from '@/components/TtsPlayer'
import AnimationPlayer from '@/components/AnimationPlayer'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return generatedStories.map((story) => ({
    slug: story.slug,
  }))
}

export function generateMetadata({ params }: Props): Metadata {
  const story = generatedStories.find((s) => s.slug === params.slug)
  if (!story) {
    return { title: '故事未找到 | 优米Leo看世界' }
  }
  return {
    title: `${story.title} | 优米Leo看世界`,
    description: story.description,
  }
}

export default function StoryDetailPage({ params }: Props) {
  const story = generatedStories.find((s) => s.slug === params.slug)

  if (!story) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <EmptyState
          icon="🔍"
          title="找不到这个故事"
          description="可能链接有误，回首页看看吧"
        />
        <div className="text-center mt-6">
          <Link href="/stories" className="text-sky-dark hover:underline">
            ← 返回故事列表
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Back link */}
      <Link
        href="/stories"
        className="inline-flex items-center text-sm text-gray-500 hover:text-sky-dark mb-6"
      >
        ← 返回故事列表
      </Link>

      {/* Animation - top position */}
      {story.animationUrl && (
        <div className="mb-8">
          <AnimationPlayer src={story.animationUrl} title={`${story.title} 动画`} />
        </div>
      )}

      {/* Story header */}
      <div className="bg-white rounded-2xl card-shadow overflow-hidden">
        <div className="h-48 md:h-64 bg-coral-light flex items-center justify-center overflow-hidden">
          <img
            src={story.coverImage}
            alt={story.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs px-3 py-1 bg-sky-light text-sky-dark rounded-full font-medium">
              {story.category}
            </span>
            <span className="text-xs px-3 py-1 bg-warm-light text-warm-dark rounded-full font-medium">
              {story.ageRange}
            </span>
            <span className="text-xs text-gray-400">{story.duration}</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
            {story.title}
          </h1>

          <p className="text-gray-500 text-sm mb-2">{story.date}</p>

          <p className="text-gray-600 leading-relaxed mb-6">
            {story.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {story.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-blush-light text-blush-dark rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* PDF link */}
          <a
            href={story.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-coral text-white font-medium rounded-2xl hover:bg-coral-dark transition-colors"
          >
            <span>📄</span>
            <span>打开绘本 PDF</span>
          </a>
        </div>
      </div>

      {/* Optional vocabulary section */}
      {story.vocabulary && story.vocabulary.length > 0 && (
        <div className="mt-8 bg-sky-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">今日词汇</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {story.vocabulary.map((item) => (
              <div key={item.word} className="bg-white rounded-xl p-4">
                <div className="font-bold text-sky-dark">{item.word}</div>
                <div className="text-sm text-gray-600">{item.meaning}</div>
                {item.example && (
                  <div className="text-xs text-gray-400 mt-1 italic">{item.example}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Parent questions */}
      {story.parentQuestions && story.parentQuestions.length > 0 && (
        <div className="mt-8 bg-warm-light rounded-2xl p-6">
          <h2 className="text-xl font-bold text-gray-800 mb-4">和孩子聊一聊</h2>
          <ul className="space-y-2">
            {story.parentQuestions.map((q, i) => (
              <li key={i} className="flex items-start gap-2 text-gray-600">
                <span className="text-warm-dark">💬</span>
                <span>{q}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* PDF text content - bottom */}
      {story.pdfText && story.pdfText.length > 0 && (
        <div className="mt-8 bg-white rounded-2xl card-shadow p-6 md:p-8">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-3">
            <h2 className="text-xl font-bold text-gray-800">绘本内容</h2>
            <TtsPlayer text={story.pdfText} />
          </div>
          <div className="space-y-2">
            {story.pdfText.map((line, i) => (
              <p key={i} className="text-gray-600 leading-relaxed">
                {line}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
