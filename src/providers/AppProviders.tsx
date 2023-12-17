'use client'
import { store } from '@/store'
import { ReactNode } from 'react'
import { Provider as ReduxProvider } from 'react-redux'

interface AppProvidersProps {
  children: ReactNode
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>
}
