import {Text, View} from '@tarojs/components';
import {useState} from 'react';

import './index.less'

const Switch = () => {
  const [checked, setChecked] = useState(false)
  const handleCheck = () => {
    setChecked(!checked)
  }
  return (
    <View className={`switch ${checked ? 'checked' : ''}`} onClick={handleCheck}>
      <Text className='switch-label switch-label-off'>今日</Text>
      <Text className='switch-label switch-label-on'>日程</Text>
      <Text className='switch-selection'></Text>
    </View>
  )
}

export default Switch
