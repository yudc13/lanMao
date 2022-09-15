import dayjs from 'dayjs';
import {IDay} from './types';

export const MONTH_ROWS = 6
export const WEEK_ROWS = 1

export const weeks = ['日', '一', '二', '三', '四', '五', '六']

export const addDate = (currentDate: string, unit: dayjs.ManipulateType) => dayjs(currentDate).add(1, unit).format('YYYY-MM-DD')
export const subtractDate = (currentDate: string, unit: dayjs.ManipulateType) => dayjs(currentDate).subtract(1, unit).format('YYYY-MM-DD')

export const addOneMonth = (currentDate: string) => addDate(currentDate, 'month')
export const subtractOneMonth = (currentDate: string) => addDate(currentDate, 'month')

export const addOneWeek = (currentDate: string) => addDate(currentDate, 'week')
export const subtractOneWeek = (currentDate: string) => subtractDate(currentDate, 'week')


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
  let weekDay = dayjs(date).day()
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
  const calendarDays: IDay[] = []
  prevDays.forEach(day => {
    calendarDays.push({
      fullDate: `${prevDateStr}-${day > 9 ? day : `0${day}`}`,
      type: 'disabled',
      date: day
    })
  })
  currentDays.forEach(day => {
    calendarDays.push({
      fullDate: `${currentStr}-${day > 9 ? day : `0${day}`}`,
      type: 'active',
      date: day
    })
  })
  nextDays.forEach(day => {
    calendarDays.push({
      fullDate: `${nextDateStr}-${day > 9 ? day : `0${day}`}`,
      type: 'disabled',
      date: day
    })
  })
  return calendarDays
}

// 获取当前时间周的时间区间
export const getCurrentCalendarWeeks = (date?: string) => {
  // 当前周的第一天
  const currentWeekStartDate = dayjs(date).startOf('week')
  const calendarWeeks: IDay[] = []
  for (let i = 0; i < 7; i++) {
    const currentDate = currentWeekStartDate.add(i, 'day')
    calendarWeeks.push({
      fullDate: currentDate.format('YYYY-MM-DD'),
      type: 'active',
      date: currentDate.date()
    })
  }
  return calendarWeeks
}
