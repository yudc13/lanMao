import Taro from '@tarojs/taro';
import {useMemo} from 'react';

const useNavBarInfo = () => {
  const systemInfo = Taro.getSystemInfoSync()
  const menuInfo = Taro.getMenuButtonBoundingClientRect()

  // 导航栏高度
  const navBarHeight = (systemInfo.statusBarHeight || 0) + 44
  // 按钮位置
  const menuHeight = menuInfo.height
  const menuRight = systemInfo.screenWidth - menuInfo.right
  const menuTop = menuInfo.top

  return useMemo(() => ({
    navBarHeight,
    menuHeight,
    menuRight,
    menuTop
  }), [menuHeight, menuRight, menuTop, navBarHeight])
}

export default useNavBarInfo
