import React from 'react';
import {View} from '@tarojs/components';
import {useNavBarInfo} from '@/hooks';

import styles from './index.module.less'

interface NavBarProps {
  backgroundColor?: string
}

const NavBar = (props: React.PropsWithChildren<NavBarProps>) => {
  const {backgroundColor = '#80D1C8', children} = props
  const {navBarHeight, menuTop, menuRight} = useNavBarInfo()
  return (
    <>
      <View className={styles.navbar} style={{height: `${navBarHeight}px`, padding: `${menuTop}px ${menuRight}px ${menuRight}px`, backgroundColor}}>
        <View className={styles.title}>{children}</View>
      </View>
      <View style={{ height: `${navBarHeight}px` }} />
    </>
  )
}

export default NavBar
