import { ReactNode } from 'react'

export interface IItemLink {
  href: string
  header: string
  icon?: ReactNode
}

export interface ISubItem {
  id: string
  header: string
  links: IItemLink[]
  href?: string
  icon?: string
  className?: string
}

export interface IListItem {
  id: string
  href: string
  active?: boolean
  className?: string
  children?: React.ReactNode
  subItemHeader?: string
  subItems?: ISubItem[]
}
