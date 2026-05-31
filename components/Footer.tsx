import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-sky-light border-t border-sky/20 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold text-sky-dark mb-2">🌈 优米Leo看世界</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Jeson爸爸陪优米和Leo讲故事、读绘本、玩音乐、看世界。
              <br />
              每天15分钟，记录亲子日常。
            </p>
          </div>

          <div>
            <h4 className="font-bold text-gray-700 mb-2">快速导航</h4>
            <ul className="space-y-1">
              <li><Link href="/stories" className="text-sm text-gray-600 hover:text-sky-dark">每日故事</Link></li>
              <li><Link href="/books" className="text-sm text-gray-600 hover:text-sky-dark">绘本馆</Link></li>
              <li><Link href="/music" className="text-sm text-gray-600 hover:text-sky-dark">音乐小剧场</Link></li>
              <li><Link href="/timeline" className="text-sm text-gray-600 hover:text-sky-dark">成长记录</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-gray-700 mb-2">关于</h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              不鸡娃，不焦虑。
              <br />
              用故事和音乐，陪孩子慢慢长大。
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-sky/20 text-center text-sm text-gray-500">
          © 2026 优米Leo看世界 · youmileo.com
        </div>
      </div>
    </footer>
  )
}
