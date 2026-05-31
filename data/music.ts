export interface MusicItem {
  id: string
  title: string
  description: string
  duration: string
  coverImage: string
  category: string
}

export const musicItems: MusicItem[] = [
  {
    id: '1',
    title: '小星星变奏曲',
    description: '优米用尤克里里弹奏小星星，Leo在旁边打节拍，爸爸即兴编了新歌词。',
    duration: '3分钟',
    coverImage: '/images/music-1.png',
    category: '家庭演奏',
  },
  {
    id: '2',
    title: '早安歌：今天也是好天气',
    description: '每天早上叫醒优米和Leo的原创早安歌，用音乐开始新的一天。',
    duration: '2分钟',
    coverImage: '/images/music-2.png',
    category: '原创儿歌',
  },
  {
    id: '3',
    title: '睡前音乐盒：月光摇篮曲',
    description: '睡前的轻柔旋律，配合绘本《月亮的味道》一起听，帮助孩子安静入睡。',
    duration: '5分钟',
    coverImage: '/images/music-3.png',
    category: '睡前音乐',
  },
]
