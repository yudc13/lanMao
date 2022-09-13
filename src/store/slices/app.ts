import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '../store';

interface MenuInfo {
  height: number
  top: number
  right: number
}

interface AppState {
  navBarHeight: number
  menuInfo: MenuInfo
}

const initialState: AppState = {
  navBarHeight: 0,
  menuInfo: {
    height: 0,
    top: 0,
    right: 0
  }
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setNavBarHeight(state, action: PayloadAction<number>) {
      state.navBarHeight = action.payload
    },
    setMenuInfo(state, action: PayloadAction<MenuInfo>) {
      state.menuInfo = action.payload
    }
  }
})

export const { setNavBarHeight, setMenuInfo } = appSlice.actions

export const selectNavBarHeight = (state: RootState) => state.app.navBarHeight
export const selectMenuInfo = (state: RootState) => state.app.menuInfo

export default appSlice.reducer
