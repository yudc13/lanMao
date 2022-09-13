import { Component, PropsWithChildren } from 'react'
import {View, Text} from '@tarojs/components'
import NavBar from '../../components/NavBar';
import Switch from '../../components/Switch';

import './index.less'
import Calendar from '../../components/Calendar';

export default class Course extends Component<PropsWithChildren> {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
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
}
