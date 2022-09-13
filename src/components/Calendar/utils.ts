import dayjs from 'dayjs';

export const weeks = ['日', '一', '二', '三', '四', '五', '六']

// 获取当前月有多少天
export const getDayCount = (year: number, month: number): number => {
  return dayjs().set('year', year).set('month', month).daysInMonth()
}

// 获取当前月第一天是星期几(0~6)
export const getWeekDay = (year: number, month: number) => {
  return new Date(year, month, 1).getDay()
}

// 获取上一个月还有哪些天
export const getPrevMonthRestDays = (year: number, month: number) => {
  let lastMonthDays = getDayCount(year, month)
  let weekDay = getWeekDay(year, month)
  const restDays: number[] = []
  while (weekDay > 0) {
    restDays.push(lastMonthDays--)
    weekDay--
  }
  return restDays.reverse()
}

// 获取当前月有哪些天
export const getCurrentMonthDays = (year: number, month: number) => {
  const dayCount = getDayCount(year, month)
  const days: number[] = []
  for (let i = 1; i <= dayCount; i++) {
    days.push(i)
  }
  return days
}

// 获取下个月还有那些天
export const getNextMonthRestDays = (year: number, month: number) => {
  const dayCount = getDayCount(year, month - 1)
  const weekDay = getWeekDay(year, month)
  const restDays: number[] = []
  for (let i = 1; i <= (42 - dayCount - weekDay - 1); i++) {
    restDays.push(i)
  }
  return restDays
}

// 获取当前月日历
export const getCurrentCalendarDays = (date?: string) => {
  const current = dayjs(date)
  const prevDate = dayjs(date).subtract(1, 'month')
  const nextDate = dayjs(date).add(1, 'month')

  const prevYear = prevDate.year()
  const prevMonth = prevDate.month() + 1
  const prevDays = getPrevMonthRestDays(prevYear, prevMonth)
  const currentYear = current.year()
  const currentMonth = current.month()
  const currentDays = getCurrentMonthDays(currentYear, currentMonth)
  const nextYear = nextDate.year()
  const nextMonth = nextDate.month() + 1
  const nextDays = getNextMonthRestDays(nextYear, nextMonth)
  const calendarDays: { date: string, type: 'active' | 'disabled', day: number }[] = []
  prevDays.forEach(day => {
    calendarDays.push({
      date: `${prevYear}-${prevMonth}-${day > 9 ? day : `0${day}`}`,
      type: 'disabled',
      day
    })
  })
  currentDays.forEach(day => {
    calendarDays.push({
      date: `${currentYear}-${currentMonth}-${day > 9 ? day : `0${day}`}`,
      type: 'active',
      day
    })
  })
  nextDays.forEach(day => {
    calendarDays.push({
      date: `${nextDays}-${nextMonth}-${day > 9 ? day : `0${day}`}`,
      type: 'disabled',
      day
    })
  })
  return calendarDays
}
