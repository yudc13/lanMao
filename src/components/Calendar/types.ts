export interface IDay {
  // 完整的日期
  fullDate: string,
  type: 'active' | 'disabled',
  // 日
  date: number
}

export type CalendarViewType = 'week' | 'month'
