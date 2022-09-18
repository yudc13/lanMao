import {Text, View} from '@tarojs/components'
import Switch from '@/components/Switch';
import NavBar from '@/components/NavBar';
import Calendar from '@/components/Calendar';

import './index.less'


const Course = () => {
  return (
    <View className='index'>
      <NavBar>
        <Switch />
      </NavBar>
      <Calendar />
      <Text>Hello world!</Text>
    </View>
  )
}

export default Course
