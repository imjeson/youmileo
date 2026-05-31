export interface Book {
  id: string
  title: string
  author: string
  summary: string
  ageRange: string
  coverImage: string
  tags: string[]
}

export const books: Book[] = [
  {
    id: '1',
    title: '好饿的毛毛虫',
    author: '艾瑞·卡尔',
    summary: '色彩缤纷的经典绘本，让孩子认识数字、食物和蝴蝶的蜕变过程。',
    ageRange: '1-3岁',
    coverImage: '/images/book-1.png',
    tags: ['认知', '经典', '数字'],
  },
  {
    id: '2',
    title: '猜猜我有多爱你',
    author: '山姆·麦克布雷尼',
    summary: '用最温柔的方式告诉孩子，爱是无法衡量的，但可以用各种方式表达。',
    ageRange: '2-5岁',
    coverImage: '/images/book-2.png',
    tags: ['亲情', '情感', '睡前'],
  },
  {
    id: '3',
    title: '棕色的熊、棕色的熊，你在看什么？',
    author: '比尔·马丁',
    summary: '重复的句式和鲜艳的色彩，是孩子英语启蒙和颜色认知的绝佳选择。',
    ageRange: '0-3岁',
    coverImage: '/images/book-3.png',
    tags: ['颜色', '英语启蒙', '动物'],
  },
  {
    id: '4',
    title: '逃家小兔',
    author: '玛格丽特·怀兹·布朗',
    summary: '不管小兔子怎么逃，妈妈总会找到它。一个关于安全感和无条件爱的故事。',
    ageRange: '2-5岁',
    coverImage: '/images/book-4.png',
    tags: ['亲情', '安全感', '想象力'],
  },
  {
    id: '5',
    title: '大卫，不可以',
    author: '大卫·香农',
    summary: '调皮的大卫总是被妈妈说"不可以"，但最后妈妈说"我爱你"。每个孩子都是大卫。',
    ageRange: '2-5岁',
    coverImage: '/images/book-5.png',
    tags: ['行为习惯', '亲情', '幽默'],
  },
]
