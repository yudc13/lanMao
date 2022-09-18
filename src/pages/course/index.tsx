import {ScrollView, View} from '@tarojs/components'
import React, {useState} from 'react';

import {CalendarViewType} from '@/components/Calendar/types';

import Switch from '@/components/Switch';
import NavBar from '@/components/NavBar';
import Calendar from '@/components/Calendar';
import DayView from '@/components/DayView';



import './index.less'


const Course = () => {
  const [checked, setChecked] = useState(false)
  const [calendarView, setCalendarView] = useState<CalendarViewType>('week')
  const isWeekView = calendarView === 'week'
  const scrollStyle: React.CSSProperties = { height: isWeekView ? `calc(100vh - 250px)` : `calc(100vh - 560px)` }

  return (
    <View className='course'>
      <NavBar>
        <Switch checked={checked} checkedLabel='今日' unCheckedLabel='日程' onChange={setChecked} />
      </NavBar>
      <Calendar view={calendarView} onViewChange={setCalendarView} />
      <View className='courseView'>
        <ScrollView scrollY
          scrollWithAnimation
          style={scrollStyle}
        >
          <DayView />
        </ScrollView>
      </View>
    </View>
  )
}

export default Course
