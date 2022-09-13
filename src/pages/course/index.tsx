import { Component, PropsWithChildren } from 'react'
import {View, Text} from '@tarojs/components'
import NavBar from '../../components/NavBar';
import Switch from '../../components/Switch';

import './index.less'

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
        <Text>Hello world!</Text>
      </View>
    )
  }
}
