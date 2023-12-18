import { createSlice } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '..'
import { IListItem } from '@/components/NavMenu/types'

export const menuItemsSlice = createSlice({
  name: 'menuItems',
  initialState: {
    isActiveMenu: false,
    activeItem: undefined as IListItem | undefined,
  },

  reducers: {
    toggleActiveMobileMenu: (state) => {
      state.isActiveMenu = !state.isActiveMenu
    },
    changeSelectedItem: (state, action) => {
      console.log(action.payload)

      const item = action.payload as IListItem

      if (item) {
        state.activeItem = state.activeItem?.id === item.id ? undefined : item
      } else {
        state.activeItem = undefined
      }
    },
  },
})

const { toggleActiveMobileMenu } = menuItemsSlice.actions
const menuItemSlice = (state: RootState) => state.menuItemsSlice

export const useNavMenu = () => {
  const dispatch = useDispatch()

  return {
    isActiveMenu: useSelector(menuItemSlice).isActiveMenu,
    toggleActiveMobileMenu: () => dispatch(toggleActiveMobileMenu()),
  }
}
