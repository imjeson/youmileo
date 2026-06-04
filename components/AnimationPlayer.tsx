'use client'

import { useRef, useState, useCallback, useEffect } from 'react'

interface AnimationPlayerProps {
  src: string
  title: string
}

export default function AnimationPlayer({ src, title }: AnimationPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const toggleFullscreen = useCallback(() => {
    const el = containerRef.current
    if (!el) return

    if (!document.fullscreenElement) {
      el.requestFullscreen().catch(() => {})
    } else {
      document.exitFullscreen().catch(() => {})
    }
  }, [])

  useEffect(() => {
    function onFullscreenChange() {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', onFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange)
  }, [])

  return (
    <div ref={containerRef} className={`relative ${isFullscreen ? 'w-screen h-screen bg-black' : 'w-full rounded-2xl overflow-hidden card-shadow'}`}>
      <div className={isFullscreen ? 'w-full h-full' : 'relative w-full'} style={isFullscreen ? undefined : { paddingBottom: '56.25%' }}>
        <iframe
          src={src}
          className={`border-0 ${isFullscreen ? 'w-full h-full' : 'absolute inset-0 w-full h-full'}`}
          allowFullScreen
          title={title}
        />
      </div>
      <div className="absolute top-3 right-3 z-10 flex items-center gap-2">
        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 bg-black/60 hover:bg-black/80 text-white text-sm font-medium rounded-xl backdrop-blur-sm transition-colors"
          title="新窗口打开"
        >
          ↗ 新窗口
        </a>
        <button
          onClick={toggleFullscreen}
          className="px-3 py-2 bg-black/60 hover:bg-black/80 text-white text-sm font-medium rounded-xl backdrop-blur-sm transition-colors"
          title={isFullscreen ? '退出全屏' : '全屏播放'}
        >
          {isFullscreen ? '✕ 退出全屏' : '⛶ 全屏'}
        </button>
      </div>
    </div>
  )
}
