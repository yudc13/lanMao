import {Swiper, SwiperItem, Text, View} from '@tarojs/components';
import React, {useMemo, useState} from 'react';
import dayjs from 'dayjs';

import {addOneMonth, getCurrentCalendarDays, subtractOneMonth, weeks} from './utils'
import Days from './Days';

import styles from './index.module.less'
import {IDay} from './types';
import DatePicker from './DatePicker';

const today = dayjs().format('YYYY-MM-DD')
const swiperItemStyles: React.CSSProperties = {
  position: 'absolute',
  width: '100%',
  height: '100%'
}

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(today)
  const [currentSwiperIndex, setCurrentSwiperIndex ] = useState(1)
  const prevDays = useMemo(() => getCurrentCalendarDays(subtractOneMonth(currentDate)), [currentDate])
  const days = useMemo(() => getCurrentCalendarDays(currentDate), [currentDate])
  const nextDays = useMemo(() => getCurrentCalendarDays(addOneMonth(currentDate)), [currentDate])


  const nextSwiperIndex = (currentSwiperIndex + 1) % 3
  const prevSwiperIndex = (currentSwiperIndex + 2) % 3

  const handleSwiperChange = (e) => {
    const currentIndex = e.detail.current
    if (nextSwiperIndex === currentIndex) {
      // 当前月份+1
      setCurrentDate(addOneMonth(currentDate))
    } else {
      // 当前月份-1
      setCurrentDate(subtractOneMonth(currentDate))
    }
    setCurrentSwiperIndex(currentIndex)
  }

  const handleDateChange = (e) => {
    console.log(e)
  }

  const swiperItems: [IDay[], IDay[], IDay[]] = [[], [], []]

  // 当前月
  swiperItems[currentSwiperIndex] = days
  // 下一个月
  swiperItems[nextSwiperIndex] = nextDays
  // 上一个月
  swiperItems[prevSwiperIndex] = prevDays

  return (
    <View className={styles.calendarContainer}>
      <View className={styles.calendar}>
        <View className={styles.calendarHeader}>
          <DatePicker currentDate={currentDate} onChange={handleDateChange} />
        </View>
        <View className={styles.calendarWeeks}>
          {weeks.map(week => <Text className={styles.week} key={week}>{week}</Text>)}
        </View>
        <View className={styles.calendarPanel}>
          <Swiper circular current={currentSwiperIndex} onChange={handleSwiperChange} style={{ width: '100%', height: '100%' }}>
            {
              swiperItems.map((item, index) => (
                <SwiperItem key={index} style={swiperItemStyles}>
                  <Days dateList={item} currentDate={currentDate} />
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
