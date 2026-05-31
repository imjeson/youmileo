import type { Metadata } from 'next'
import SectionTitle from '@/components/SectionTitle'

export const metadata: Metadata = {
  title: '关于我们 | 优米Leo看世界',
  description: '了解优米Leo看世界背后的家庭和初心。',
}

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <SectionTitle
        title="关于我们"
        subtitle="一个真实家庭的成长记录"
      />

      {/* Family members */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-sky-light rounded-2xl p-6 text-center card-shadow">
          <div className="text-5xl mb-4">👨</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Jeson爸爸</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            讲故事的人，绘本的搬运工，音乐的启蒙者。
            每天用15分钟，陪孩子看见更大的世界。
          </p>
        </div>

        <div className="bg-coral-light rounded-2xl p-6 text-center card-shadow">
          <div className="text-5xl mb-4">👧</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">优米（姐姐）</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            喜欢故事、音乐和探索世界。
            好奇心旺盛，总有问不完的"为什么"。
          </p>
        </div>

        <div className="bg-warm-light rounded-2xl p-6 text-center card-shadow">
          <div className="text-5xl mb-4">👶</div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Leo（弟弟）</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            正在慢慢长大，跟着姐姐一起听故事。
            最近学会了拍手和叫"姐姐"。
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="bg-grass-light rounded-2xl p-8 md:p-12 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">我们的初心</h3>
        <div className="max-w-2xl mx-auto space-y-4 text-gray-600 leading-relaxed">
          <p className="text-lg">
            不鸡娃，不焦虑。
          </p>
          <p>
            每天15分钟，通过故事、绘本、音乐和生活记录，让孩子看见更大的世界。
          </p>
          <p>
            我们相信，最好的教育不是灌输知识，而是陪伴。
            陪孩子读一本书、唱一首歌、观察一朵花、记录一个瞬间。
          </p>
          <p>
            这个网站，既是给孩子的礼物，也是一份家庭的成长档案。
          </p>
        </div>
      </div>

      {/* Values */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { icon: '📖', label: '讲故事' },
          { icon: '📚', label: '读绘本' },
          { icon: '🎵', label: '玩音乐' },
          { icon: '🌍', label: '看世界' },
        ].map((item) => (
          <div key={item.label} className="text-center py-6 bg-white rounded-2xl card-shadow">
            <div className="text-3xl mb-2">{item.icon}</div>
            <div className="font-medium text-gray-700">{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
