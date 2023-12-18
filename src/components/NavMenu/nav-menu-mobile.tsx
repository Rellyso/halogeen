'use client'

import { useState } from 'react'
import { ListItem } from './list-item'
import styles from './nav-menu.module.scss'
import { IListItem, ISubItem } from './types'
import { NavSubmenuMobile } from '.'

interface NavMenuProps {
  listItems: IListItem[]
  onChangeItem: (item: IListItem) => void
}

export const NavMenuMobile = ({ listItems, onChangeItem }: NavMenuProps) => {
  const [activeItemId, setActiveItemId] = useState('')

  const handleChange = (item: IListItem) => {
    if (onChangeItem) {
      onChangeItem({ ...item, active: !item.active })
    }
    setActiveItemId((prev) => (prev === item.id ? '' : item.id))
  }

  const itemsWithoutSubItems = listItems.filter(
    (item) => !item.subItems || item.subItems.length === 0,
  )

  const allSubItems = listItems
    .map((item) => {
      if (item.subItems) {
        return {
          header: item.subItemHeader as string,
          items: item.subItems,
        }
      }

      return undefined
    })
    .filter((item) => !!item)

  return (
    <nav className={styles.nav} data-mobile="true">
      <ul>
        {itemsWithoutSubItems.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            activeItemId={activeItemId}
            onChangeItem={handleChange}
          />
        ))}
      </ul>

      <div>
        {allSubItems.map((item) => (
          <div key={item?.header}>
            <h3>{item?.header}</h3>
            <NavSubmenuMobile subItems={item?.items as ISubItem[]} />
          </div>
        ))}
      </div>
    </nav>
  )
}
