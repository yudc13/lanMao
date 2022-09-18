import {Text, View} from '@tarojs/components';

import './index.less'

const genOneDatTimeList = (date: string) => {
  return Array.from({ length: 24 }).map((_, index) => {
    return {
      current: date,
      hour: `${index}:00`,
    }
  })
}

const DayView = () => {
  const dayHours = genOneDatTimeList('2022-09-18')
  return (
    <View className='dayView'>
      {
        dayHours.map(item => (
          <View className='dayContainer' key={item.hour}>
            <View className='dayRow'>
              <View className='dayRowLeft'>
                <View className='dayRowLeftContent'>
                  <Text>{item.hour}</Text>
                </View>
              </View>
              <View className='dayRowRight'>
                right
              </View>
            </View>
          </View>
        ))
      }
    </View>
  )
}

export default DayView
