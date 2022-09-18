import {Swiper, SwiperItem, Text, View} from '@tarojs/components';
import React, {useCallback, useMemo, useState} from 'react';
import dayjs from 'dayjs';
import classNames from 'classnames';


import {
  addOneMonth,
  addOneWeek,
  getCurrentCalendarDays,
  getCurrentCalendarWeeks,
  subtractOneMonth,
  subtractOneWeek,
  weeks
} from './utils'

import {CalendarViewType, IDay} from './types';

import DatePicker from './DatePicker';
import Days from './Days';


import styles from './index.module.less'


const today = dayjs().format('YYYY-MM-DD')
const swiperItemStyles: React.CSSProperties = {
  position: 'absolute',
  width: '100%',
  height: '100%'
}

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(today)
  const [selectedDate, setSelectedDate] = useState(today)
  const [viewType, setViewType] = useState<CalendarViewType>('week')
  const [currentSwiperIndex, setCurrentSwiperIndex ] = useState(1)

  const handleSwiperChange = (e) => {
    const currentIndex = e.detail.current
    if ((currentSwiperIndex + 1) % 3 === currentIndex) {
      if (viewType === 'month') {
        // 当前月份+1
        setCurrentDate(addOneMonth(currentDate))
      } else {
        setCurrentDate(addOneWeek(currentDate))
      }

    } else {
      if (viewType === 'month') {
        // 当前月份-1
        setCurrentDate(subtractOneMonth(currentDate))
      } else {
        setCurrentDate(subtractOneWeek(currentDate))
      }
    }
    setCurrentSwiperIndex(currentIndex)
  }

  const handleDateChange = (date: string) => {
    setSelectedDate(`${date}-01`)
  }

  const handleSelectedDateChange = useCallback((date: string) => {
    setSelectedDate(date)
  }, [])

  const handleChangeViewType = () => {
    setViewType(viewType === 'week' ? 'month' : 'week')
  }

  const swiperItems: [IDay[], IDay[], IDay[]] = useMemo(() => {
    const items: [IDay[], IDay[], IDay[]] = [[], [], []]

    const nextSwiperIndex = (currentSwiperIndex + 1) % 3
    const prevSwiperIndex = (currentSwiperIndex + 2) % 3

    if (viewType === 'month') {
      const prevDays = getCurrentCalendarDays(subtractOneMonth(currentDate))
      const days = getCurrentCalendarDays(currentDate)
      const nextDays = getCurrentCalendarDays(addOneMonth(currentDate))
      // 当前月
      items[currentSwiperIndex] = days
      // 下一个月
      items[nextSwiperIndex] = nextDays
      // 上一个月
      items[prevSwiperIndex] = prevDays
    } else {
      const prevWeeks = getCurrentCalendarWeeks(subtractOneWeek(currentDate))
      const currentWeeks = getCurrentCalendarWeeks(currentDate)
      const nextWeeks = getCurrentCalendarWeeks(addOneWeek(currentDate))
      // 当前月
      items[currentSwiperIndex] = currentWeeks
      // 下一个月
      items[nextSwiperIndex] = nextWeeks
      // 上一个月
      items[prevSwiperIndex] = prevWeeks
    }
    return items
  }, [currentDate, currentSwiperIndex, viewType])

  return (
    <View className={styles.calendarContainer}>
      <View className={classNames(styles.calendar, { [styles.week]: viewType === 'week' })}>
        <View className={styles.calendarHeader}>
          <DatePicker currentDate={selectedDate} onChange={handleDateChange} />
          <View onClick={handleChangeViewType}>
            {viewType === 'week' ? '月' : '周'}
          </View>
        </View>
        <View className={styles.calendarWeeks}>
          {weeks.map(week => <Text className={styles.week} key={week}>{week}</Text>)}
        </View>
        <View className={styles.calendarPanel}>
          <Swiper circular current={currentSwiperIndex} onChange={handleSwiperChange} style={{ width: '100%', height: '100%' }}>
            {
              swiperItems.map((item, index) => (
                <SwiperItem key={index} style={swiperItemStyles}>
                  <Days dateList={item} viewType={viewType} currentDate={selectedDate} onChange={handleSelectedDateChange} />
                </SwiperItem>
              ))
            }
          </Swiper>
        </View>
      </View>
    </View>
  )
}

export default Calendar
