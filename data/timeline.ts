export interface TimelineEntry {
  id: string
  date: string
  title: string
  content: string
  icon: string
}

export const timelineEntries: TimelineEntry[] = [
  {
    id: '1',
    date: '2026-05-30',
    title: 'Leo会说"姐姐"了',
    content: '今天Leo突然清楚地叫了一声"姐姐"，优米高兴得转圈圈，说弟弟终于会叫她了。',
    icon: '🗣️',
  },
  {
    id: '2',
    date: '2026-05-25',
    title: '优米第一次独立讲完一个故事',
    content: '优米拿着《小兔子找太阳》，从头到尾自己讲给Leo听，虽然有些地方记错了，但讲得很认真。',
    icon: '📖',
  },
  {
    id: '3',
    date: '2026-05-20',
    title: '全家一起去了植物园',
    content: '周末去植物园认识了好多花，优米最喜欢向日葵，说它们"像很多个太阳"。Leo一直想摸泥土。',
    icon: '🌻',
  },
  {
    id: '4',
    date: '2026-05-15',
    title: 'Leo学会拍手跟节奏了',
    content: '放小星星的时候Leo跟着节奏拍手，虽然节奏不太对，但他拍得好开心。',
    icon: '👏',
  },
]
