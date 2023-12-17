import { createSlice } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '..'

export const menuItemsSlice = createSlice({
  name: 'menuItems',
  initialState: {
    isOpenedMobileMenu: false,
  },

  reducers: {
    toggleActiveMobileMenu: (state) => {
      state.isOpenedMobileMenu = !state.isOpenedMobileMenu
    },
  },
})

const { toggleActiveMobileMenu } = menuItemsSlice.actions
const isOpenedMobileMenu = (state: RootState) => state.menuItemsSlice

export const useNavMenu = () => {
  const dispatch = useDispatch()

  return {
    isActiveMobileMenu: useSelector(isOpenedMobileMenu).isOpenedMobileMenu,
    toggleActiveMobileMenu: () => dispatch(toggleActiveMobileMenu()),
  }
}
