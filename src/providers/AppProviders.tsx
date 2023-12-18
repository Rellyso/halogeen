'use client'
import { store } from '@/store'
import { ReactNode } from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { TanstackProvider } from './TanstackProvider'

interface AppProvidersProps {
  children: ReactNode
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <ReduxProvider store={store}>
      <TanstackProvider>{children}</TanstackProvider>
    </ReduxProvider>
  )
}
