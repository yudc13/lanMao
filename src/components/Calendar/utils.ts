import dayjs from 'dayjs';

export const weeks = ['日', '一', '二', '三', '四', '五', '六']

// 获取当前月有多少天
export const getDayCount = (date: string): number => {
  return dayjs(date).daysInMonth()
}

// 获取当前月第一天是星期几(0~6)
export const getWeekDay = (year: number, month: number) => {
  return new Date(year, month, 1).getDay()
}

// 获取上一个月还有哪些天
export const getPrevMonthRestDays = (date: string) => {
  // 上一个月
  const prevDate = dayjs(date).subtract(1, 'month').format('YYYY-MM-DD')
  let lastMonthDays = getDayCount(prevDate)
  let weekDay = getWeekDay(dayjs(date).year(), dayjs(date).month())
  const restDays: number[] = []
  while (weekDay > 0) {
    restDays.push(lastMonthDays--)
    weekDay--
  }
  return restDays.reverse()
}

// 获取当前月有哪些天
export const getCurrentMonthDays = (date: string) => {
  const dayCount = getDayCount(date)
  const days: number[] = []
  for (let i = 1; i <= dayCount; i++) {
    days.push(i)
  }
  return days
}

// 获取下个月还有那些天
export const getNextMonthRestDays = (date: string) => {
  const dayCount = getDayCount(date)
  const weekDay = getWeekDay(dayjs(date).year(), dayjs(date).month())
  const restDays: number[] = []
  for (let i = 1; i <= (42 - dayCount - weekDay); i++) {
    restDays.push(i)
  }
  return restDays
}

// 获取当前月日历
export const getCurrentCalendarDays = (date?: string) => {
  const current = dayjs(date)
  const prevDate = dayjs(date).subtract(1, 'month')
  const nextDate = dayjs(date).add(1, 'month')

  const currentStr = current.format('YYYY-MM')
  const prevDateStr = prevDate.format('YYYY-MM')
  const nextDateStr = nextDate.format('YYYY-MM')

  const prevDays = getPrevMonthRestDays(currentStr)
  const currentDays = getCurrentMonthDays(currentStr)
  const nextDays = getNextMonthRestDays(currentStr)
  const calendarDays: { date: string, type: 'active' | 'disabled', day: number }[] = []
  prevDays.forEach(day => {
    calendarDays.push({
      date: `${prevDateStr}-${day > 9 ? day : `0${day}`}`,
      type: 'disabled',
      day
    })
  })
  currentDays.forEach(day => {
    calendarDays.push({
      date: `${currentStr}-${day > 9 ? day : `0${day}`}`,
      type: 'active',
      day
    })
  })
  nextDays.forEach(day => {
    calendarDays.push({
      date: `${nextDateStr}-${day > 9 ? day : `0${day}`}`,
      type: 'disabled',
      day
    })
  })
  return calendarDays
}
