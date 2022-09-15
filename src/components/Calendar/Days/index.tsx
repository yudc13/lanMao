import React from 'react'
import {Text, View} from '@tarojs/components';
import classNames from 'classnames';
import dayjs from 'dayjs';


import {CalendarViewType, IDay} from '../types';
import {MONTH_ROWS, WEEK_ROWS} from '../utils';


import styles from './index.module.less';


interface DaysProps {
  dateList: IDay[]
  viewType: CalendarViewType
  currentDate?: string
  onChange?: (date: string) => void
}

const monthRows = Array.from({ length: MONTH_ROWS })
const weekRows = Array.from({ length: WEEK_ROWS })

const Days: React.FC<DaysProps> = (props) => {
  const today = dayjs().format('YYYY-MM-DD')
  const { dateList, viewType, currentDate = today, onChange } = props
  const rows = viewType === 'week' ? weekRows : monthRows
  return (
    <View className={styles.days}>
      {
        rows.map((_, index) => (
          <View className={styles.row} key={index}>
            {dateList.slice(index * 7, index * 7 + 7).map(day => (
              <Text
                className={classNames(styles.day, { [styles[day.type]]: true, [styles.current]: day.fullDate === currentDate })}
                key={day.fullDate}
                onClick={() => onChange?.(day.fullDate)}
              >
                {day.fullDate === today ? '今' : day.date}
              </Text>
            ))}
          </View>
        ))
      }
    </View>
  )
}

export default Days
