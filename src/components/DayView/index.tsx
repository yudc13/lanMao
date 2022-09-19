import {Text, View} from '@tarojs/components';
import React from 'react'
import classNames from 'classnames';
import dayjs from 'dayjs';
import Color from 'color'


import './index.less'

const genOneDatTimeList = (date: string): { startDate: string, hour: string }[] => {
  return Array.from({ length: 14 }).map((_, index) => {
    const hour = index > 9 ? `${index}` : `0${index}`
    return {
      startDate: `${date} ${hour}`,
      hour: `${index + 8}:00`,
    }
  })
}

const getHour = (date: string) => dayjs(date).format('HH:MM')

const DayView = () => {
  const dayHours = genOneDatTimeList('2022-09-18')

  const dataSource = [
    {
      startDate: '2022-09-18 09:00',
      endDate: '2022-09-18 10:30',
      className: '中二班',
      roomNo: '103',
      bgColor: '#C1DAFD'
    },
    {
      startDate: '2022-09-18 14:00',
      endDate: '2022-09-18 15:30',
      className: '中二班',
      roomNo: '103',
      bgColor: '#FDDAA6FF'
    },
    {
      startDate: '2022-09-18 16:00',
      endDate: '2022-09-18 17:00',
      className: '中二班',
      roomNo: '103',
      bgColor: '#7CFFE4'
    },
    {
      startDate: '2022-09-18 17:30',
      endDate: '2022-09-18 18:30',
      className: '小二班',
      roomNo: '101',
      bgColor: 'rgba(107, 114, 255, 1)'
    }
  ]

  const getBoxStyle = (boxItem): React.CSSProperties => {
    const baseDate = '2022-09-18 08:00'
    const topBase = dayjs(boxItem.startDate).diff(baseDate, 'hour', true)
    const heightBase = dayjs(boxItem.endDate).diff(boxItem.startDate, 'hour', true)
    return {
      top: `${topBase * 80}rpx`,
      height: `${heightBase * 80}rpx`,
      backgroundColor: Color(boxItem.bgColor).alpha(0.5),
      borderLeftColor: boxItem.bgColor,
    }
  }

  const getRightBoxContent = (ds) => {
    const heightBase = dayjs(ds.endDate).diff(ds.startDate, 'hour', true)
    if (heightBase >= 1) {
      return (
        <>
          <View className='dayRowRightBoxItem'>
            <Text>{ds.className}</Text>
            <Text>{getHour(ds.startDate)}</Text>
          </View>
          <View className='dayRowRightBoxItem'>
            <Text>{ds.roomNo}</Text>
            <Text>{getHour(ds.endDate)}</Text>
          </View>
        </>
      )
    }
    return (
      <View className='dayRowRightBoxItem'>
        <Text>{ds.className}</Text>
        <Text>{ds.roomNo}</Text>
      </View>
    )
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
      {dataSource.map(ds => <View key={ds.startDate} className='dayRowRightBox' style={getBoxStyle(ds)}>
        {getRightBoxContent(ds)}
      </View>)}
    </View>
  )
}

export default DayView
