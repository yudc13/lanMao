import {Text, View} from '@tarojs/components';

import './index.less'

interface SwitchProps {
  checked: boolean
  checkedLabel: string
  unCheckedLabel: string
  onChange: (checked: boolean) => void
}

const Switch = (props: SwitchProps) => {
  const { checked, checkedLabel, unCheckedLabel, onChange } = props
  const handleCheck = () => {
    onChange(!checked)
  }
  return (
    <View className={`switch ${checked ? 'checked' : ''}`} onClick={handleCheck}>
      <Text className='switch-label switch-label-on'>{checkedLabel}</Text>
      <Text className='switch-label switch-label-off'>{unCheckedLabel}</Text>
      <Text className='switch-selection'></Text>
    </View>
  )
}

export default Switch
