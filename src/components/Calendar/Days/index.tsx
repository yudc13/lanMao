import React from 'react'
import {Text, View} from '@tarojs/components';
import classNames from 'classnames';
import dayjs from 'dayjs';


import {IDay} from '../types';
import {DAY_ROWS} from '../utils';


import styles from './index.module.less';


interface DaysProps {
  dateList: IDay[]
  currentDate?: string
}

const dayRows = Array.from({ length: DAY_ROWS })

const Days: React.FC<DaysProps> = (props) => {
  const today = dayjs().format('YYYY-MM-DD')
  const { dateList, currentDate = today } = props
  return (
    <View className={styles.days}>
      {
        dayRows.map((_, index) => (
          <View className={styles.row} key={index}>
            {dateList.slice(index * 7, index * 7 + 7).map(day => (
              <Text
                className={classNames(styles.day, { [styles[day.type]]: true, [styles.current]: day.fullDate === currentDate })}
                key={day.fullDate}
              >
                {day.date}
              </Text>
            ))}
          </View>
        ))
      }
    </View>
  )
}

export default Days
