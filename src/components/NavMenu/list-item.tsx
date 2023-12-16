import Link from 'next/link'
import styles from './list-item.module.scss'
import { ChevronDown } from 'lucide-react'
import { IListItem } from './types'

interface ListItemProps {
  item: IListItem
  activeItemId?: string
  onChangeItem?: (item: IListItem) => void
}

export const ListItem = ({
  activeItemId,
  item,
  onChangeItem,
}: ListItemProps) => {
  const hasItems = item.subItems && item.subItems.length > 0
  const handleChangeItem = (item: IListItem) => {
    if (onChangeItem) {
      onChangeItem({ ...item, active: !item.active })
    }
  }

  return (
    <li
      data-active={item.id === activeItemId}
      className={`${styles.listItem} ${item.className}`}
    >
      <Link href={item.href} onClick={() => handleChangeItem(item)}>
        {item.children}
        {hasItems && <ChevronDown size={16} />}
      </Link>
    </li>
  )
}
