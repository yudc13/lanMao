import {Text, View} from '@tarojs/components';
import React from 'react'
import classNames from 'classnames';


import './index.less'
import dayjs from 'dayjs';

const genOneDatTimeList = (date: string): { startDate: string, hour: string }[] => {
  return Array.from({ length: 14 }).map((_, index) => {
    const hour = index > 9 ? `${index}` : `0${index}`
    return {
      startDate: `${date} ${hour}`,
      hour: `${index + 8}:00`,
    }
  })
}

const DayView = () => {
  const dayHours = genOneDatTimeList('2022-09-18')

  const dataSource = [
    {
      startDate: '2022-09-18 09:00',
      endDate: '2022-09-18 10:30',
      bgColor: '#C1DAFD'
    },
    {
      startDate: '2022-09-18 14:00',
      endDate: '2022-09-18 15:30',
      bgColor: '#FDDAA6FF'
    },
    {
      startDate: '2022-09-18 16:00',
      endDate: '2022-09-18 17:00',
      bgColor: '#7CFFE4'
    }
  ]

  const getBoxStyle = (boxItem): React.CSSProperties => {
    const baseDate = '2022-09-18 08:00'
    const topBase = dayjs(boxItem.startDate).diff(baseDate, 'hour', true)
    const heightBase = dayjs(boxItem.endDate).diff(boxItem.startDate, 'hour', true)
    return {
      top: `${topBase * 100}rpx`,
      height: `${heightBase * 100}rpx`,
      backgroundColor: boxItem.bgColor
    }
  }
  return (
    <View className='dayView'>
      {
        dayHours.map((item, index) => (
          <View className='dayContainer' key={item.hour}>
            <View className='dayRow'>
              <View className='dayRowLeft'>
                <View className={classNames('dayRowLeftContent', { first: index === 0 })}>
                  <Text>{item.hour}</Text>
                </View>
              </View>
              <View className='dayRowRight' />
            </View>
          </View>
        ))
      }
      {dataSource.map(ds => <View key={ds.startDate} className='dayRowRightBox' style={getBoxStyle(ds)}>1</View>)}
    </View>
  )
}

export default DayView
