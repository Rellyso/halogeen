import { configureStore } from '@reduxjs/toolkit'
import { menuItemsSlice } from './slices/menuItemsSlice'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    menuItemsSlice: menuItemsSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
