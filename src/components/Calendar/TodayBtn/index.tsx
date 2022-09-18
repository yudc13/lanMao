import {View} from '@tarojs/components';
import React from 'react';

import styles from './index.module.less'

interface TodayBtnProps {
  onClick?: () => void
  style?: React.CSSProperties
}

const TodayBtn = (props: TodayBtnProps) => {
  return <View className={styles.today} onClick={props.onClick} style={props.style}>今</View>
}

export default TodayBtn
