'use client'

import { useState, useEffect, useCallback, useRef } from 'react'

interface TtsPlayerProps {
  text: string[]
}

export default function TtsPlayer({ text }: TtsPlayerProps) {
  const [status, setStatus] = useState<'idle' | 'playing' | 'paused'>('idle')
  const [currentLine, setCurrentLine] = useState(-1)
  const [supported, setSupported] = useState(false)
  const lineIndexRef = useRef(0)

  useEffect(() => {
    setSupported(typeof window !== 'undefined' && 'speechSynthesis' in window)
    return () => {
      window.speechSynthesis?.cancel()
    }
  }, [])

  function speakLine(index: number) {
    if (index >= text.length) {
      setStatus('idle')
      setCurrentLine(-1)
      return
    }

    const utterance = new SpeechSynthesisUtterance(text[index])
    utterance.lang = 'en-US'
    utterance.rate = 0.85
    utterance.pitch = 1.1

    utterance.onstart = () => {
      setCurrentLine(index)
      lineIndexRef.current = index
    }

    utterance.onend = () => {
      speakLine(index + 1)
    }

    utterance.onerror = () => {
      setStatus('idle')
      setCurrentLine(-1)
    }

    window.speechSynthesis.speak(utterance)
  }

  const play = useCallback(() => {
    window.speechSynthesis.cancel()
    setStatus('playing')
    lineIndexRef.current = 0
    speakLine(0)
  }, [text])

  const pause = useCallback(() => {
    window.speechSynthesis.pause()
    setStatus('paused')
  }, [])

  const resume = useCallback(() => {
    window.speechSynthesis.resume()
    setStatus('playing')
  }, [])

  const stop = useCallback(() => {
    window.speechSynthesis.cancel()
    setStatus('idle')
    setCurrentLine(-1)
  }, [])

  if (!supported) return null

  return (
    <div className="flex items-center gap-3">
      {status === 'idle' && (
        <button
          onClick={play}
          className="inline-flex items-center gap-2 px-4 py-2 bg-sky text-white font-medium rounded-xl hover:bg-sky-dark transition-colors text-sm"
        >
          <span>🔊</span>
          <span>朗读绘本</span>
        </button>
      )}

      {status === 'playing' && (
        <button
          onClick={pause}
          className="inline-flex items-center gap-2 px-4 py-2 bg-warm text-gray-800 font-medium rounded-xl hover:bg-warm-dark transition-colors text-sm"
        >
          <span>⏸️</span>
          <span>暂停</span>
        </button>
      )}

      {status === 'paused' && (
        <button
          onClick={resume}
          className="inline-flex items-center gap-2 px-4 py-2 bg-sky text-white font-medium rounded-xl hover:bg-sky-dark transition-colors text-sm"
        >
          <span>▶️</span>
          <span>继续</span>
        </button>
      )}

      {status !== 'idle' && (
        <button
          onClick={stop}
          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-600 font-medium rounded-xl hover:bg-gray-300 transition-colors text-sm"
        >
          <span>⏹️</span>
          <span>停止</span>
        </button>
      )}

      {currentLine >= 0 && (
        <span className="text-xs text-gray-400">
          {currentLine + 1} / {text.length}
        </span>
      )}
    </div>
  )
}
