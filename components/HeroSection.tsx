import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-sky-light via-white to-warm-light py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8 md:gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            优米Leo看世界
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
            Jeson爸爸陪优米和Leo讲故事、读绘本、玩音乐、看世界
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/stories"
              className="inline-block px-8 py-3 bg-coral text-white font-medium rounded-2xl hover:bg-coral-dark transition-colors text-center"
            >
              开始今天的故事
            </Link>
            <Link
              href="/books"
              className="inline-block px-8 py-3 bg-white text-sky-dark font-medium rounded-2xl border-2 border-sky hover:bg-sky-light transition-colors text-center"
            >
              查看绘本馆
            </Link>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-3xl bg-warm-light border-2 border-warm/30 flex items-center justify-center">
            <div className="text-center text-gray-400">
              <div className="text-6xl mb-4">👨‍👧‍👦</div>
              <p className="text-sm">hero-family.png</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
