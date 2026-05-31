export interface Story {
  id: string
  title: string
  summary: string
  date: string
  category: string
  coverImage: string
  duration: string
}

export const stories: Story[] = [
  {
    id: '1',
    title: '小兔子找太阳',
    summary: '小兔子从没见过太阳，它问了很多朋友，终于在一个晴朗的早晨看到了红红的、圆圆的太阳。',
    date: '2026-05-30',
    category: '认知启蒙',
    coverImage: '/images/story-1.png',
    duration: '5分钟',
  },
  {
    id: '2',
    title: '好饿的毛毛虫',
    summary: '一只毛毛虫从蛋里孵出来，它好饿好饿，吃了一个又一个水果，最后变成了一只美丽的蝴蝶。',
    date: '2026-05-29',
    category: '经典绘本',
    coverImage: '/images/story-2.png',
    duration: '8分钟',
  },
  {
    id: '3',
    title: '月亮的味道',
    summary: '动物们好奇月亮是什么味道，它们叠罗汉去够月亮，最后小老鼠够到了——月亮是甜甜的！',
    date: '2026-05-28',
    category: '想象力',
    coverImage: '/images/story-3.png',
    duration: '6分钟',
  },
  {
    id: '4',
    title: '我爸爸',
    summary: '在孩子眼里，爸爸什么都不怕，会走钢丝、会摔跤、会游泳……爸爸真的很棒！',
    date: '2026-05-27',
    category: '亲情',
    coverImage: '/images/story-4.png',
    duration: '5分钟',
  },
  {
    id: '5',
    title: '猜猜我有多爱你',
    summary: '小兔子和大兔子比赛谁的爱更多更远更高，最后发现爱是说不完的。',
    date: '2026-05-26',
    category: '亲情',
    coverImage: '/images/story-5.png',
    duration: '7分钟',
  },
]
