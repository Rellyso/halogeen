import type { Metadata } from 'next'
import { DM_Sans as DMSans, Roboto } from 'next/font/google'
import './globals.scss'
import { Header } from '@/components/Header'
import classNames from 'classnames'
import { AppProviders } from '@/providers/AppProviders'

const dmSans = DMSans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'Início | Halogenn',
  description: 'Qualidade e expertise em produtos químicos e acessórios',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={classNames(dmSans.className, roboto.className)}>
        <AppProviders>
          <Header />
          {children}
        </AppProviders>
      </body>
    </html>
  )
}
