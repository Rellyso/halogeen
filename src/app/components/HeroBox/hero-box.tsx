import { ReactNode } from 'react'
import styles from './hero-box.module.scss'
import classNames from 'classnames'

interface HeroBoxItemProps {
  header: string
  description: string
  icon?: ReactNode
  highlight?: boolean
}

export const HeroBoxItem = ({
  header,
  description,
  icon,
  highlight,
}: HeroBoxItemProps) => {
  return (
    <div className={classNames(styles.box, highlight ? styles.boxMiddle : '')}>
      <p>{header}</p>
      <div>
        {icon && icon}
        <h3>{description}</h3>
      </div>
    </div>
  )
}
