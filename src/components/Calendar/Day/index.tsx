import {Text, View} from '@tarojs/components';
import React from 'react';
import classNames from 'classnames';


import {IDay} from '../types';

import styles from './index.module.less'

interface DayProps {
  date: IDay
  currentDate: string
}

const Day = (props: React.PropsWithChildren<DayProps>) => {
  const { date, currentDate, children } = props
  return (
    <View className={styles.day}>
      <Text className={classNames(styles.date, { [styles[date.type]]: true, [styles.current]: date.fullDate === currentDate })} >{children}</Text>
    </View>
  )
}

export default Day
