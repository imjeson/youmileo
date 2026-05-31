import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '优米Leo看世界 | Jeson爸爸的亲子故事时间',
  description: 'Jeson爸爸陪优米和Leo讲故事、读绘本、玩音乐、看世界。每天15分钟，记录孩子成长和亲子日常。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
