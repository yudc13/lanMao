import React from 'react'
import {Image, Picker, Text, View} from '@tarojs/components';
import dayjs from 'dayjs';

import iconDown from '../../../static/icon-down.svg'

import styles from './index.module.less'

interface DataPickerProps {
  currentDate: string;
  onChange: (currentDate: string) => void
}

const DatePicker: React.FC<DataPickerProps> = ({ currentDate, onChange }) => {
  const handleDateChange = (e) => {
    onChange(e.detail.value)
  }
  const date = dayjs(currentDate).format('YYYY年MM月')
  return (
    <Picker mode='date' fields='month' value={currentDate} onChange={handleDateChange}>
      <View className={styles.datePicker}>
        <Text className={styles.date}>{date}</Text>
        <Image src={iconDown} className={styles.icon} />
      </View>
    </Picker>
  )
}

export default DatePicker
