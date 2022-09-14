import {Text, View} from '@tarojs/components';
import classNames from 'classnames'
import dayjs from 'dayjs';
import {useMemo, useState} from 'react';


import {getCurrentCalendarDays, weeks} from './utils'

import styles from './index.module.less'

const today = dayjs().format('YYYY-MM-DD')

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(today)
  const days = useMemo(() => getCurrentCalendarDays(currentDate), [currentDate])
  const handlePrevMonth = () => {
    setCurrentDate(dayjs(currentDate).subtract(1, 'month').format('YYYY-MM-DD'))
  }
  const handleNextMonth = () => {
    setCurrentDate(dayjs(currentDate).add(1, 'month').format('YYYY-MM-DD'))
  }
  const onTouchStart = (e) => {
    console.log(e)
  }
  return (
    <View className={styles.calendarContainer}>
      <View className={styles.calendar}>
        <View className={styles.calendarHeader}>
          <Text onClick={handlePrevMonth}>上一月</Text>
          <Text>{currentDate}</Text>
          <Text onClick={handleNextMonth}>下一月</Text>
        </View>
        <View className={styles.calendarWeeks}>
          {weeks.map(week => <Text className={styles.week} key={week}>{week}</Text>)}
        </View>
        <View className={styles.calendarPanel}>
          {
            Array.from({ length: 6 }).map((_, index) => (
              <View className={styles.row} key={index}>
                {days.slice(index * 7, index * 7 + 7).map(day => (
                  <Text
                    className={classNames(styles.day, { [styles[day.type]]: true, [styles.current]: day.date === today })}
                    key={day.date}
                  >
                    {day.day}
                  </Text>
                ))}
              </View>
            ))
          }
        </View>
        <View className={styles.controlBar} onTouchStart={onTouchStart}>拖动</View>
      </View>
    </View>
  )
}

export default Calendar
