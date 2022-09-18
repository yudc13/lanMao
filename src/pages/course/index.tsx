import {View} from '@tarojs/components'
import Switch from '@/components/Switch';
import NavBar from '@/components/NavBar';
import Calendar from '@/components/Calendar';
import DayView from '@/components/DayView';


import './index.less'


const Course = () => {
  return (
    <View className='course'>
      <NavBar>
        <Switch />
      </NavBar>
      <Calendar />
      <View className='courseView'>
        <DayView />
      </View>
    </View>
  )
}

export default Course
