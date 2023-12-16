'use client'

import { useState } from 'react'
import { ListItem } from './list-item'
import styles from './nav-menu.module.scss'
import { IListItem } from './types'

interface NavMenuProps {
  listItems: IListItem[]
  onChangeItem: (item: IListItem) => void
}

export const NavMenu = ({ listItems, onChangeItem }: NavMenuProps) => {
  const [activeItemId, setActiveItemId] = useState('')

  const handleChange = (item: IListItem) => {
    if (onChangeItem) {
      onChangeItem({ ...item, active: !item.active })
    }
    setActiveItemId((prev) => (prev === item.id ? '' : item.id))
  }

  return (
    <nav className={styles.nav}>
      <ul>
        {listItems.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            activeItemId={activeItemId}
            onChangeItem={handleChange}
          />
        ))}
      </ul>
    </nav>
  )
}
