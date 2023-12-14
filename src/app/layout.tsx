import type { Metadata } from 'next'
import { DM_Sans, Inter } from 'next/font/google'
import './globals.scss'
import Image from 'next/image'
import Link from 'next/link'
import { Header } from '@/components/Header'

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500'],
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
      <body className={dmSans.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}
