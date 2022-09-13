import {Text, View} from '@tarojs/components';
import classNames from 'classnames'

import {getCurrentCalendarDays, weeks} from './utils'

import styles from './index.module.less'

const Calendar = () => {
  const days = getCurrentCalendarDays()
  console.log(days)
  return (
    <View className={styles.calendar}>
      <View className={styles.header}>Header</View>
      <View className={styles.weeks}>
        {weeks.map(week => <Text className={styles.week} key={week}>{week}</Text>)}
      </View>
      <View className={styles.days}>
        {days.map(day => <Text className={classNames(styles.day, { [styles[day.type]]: true })} key={day.date}>{day.day}</Text>)}
      </View>
    </View>
  )
}

export default Calendar
