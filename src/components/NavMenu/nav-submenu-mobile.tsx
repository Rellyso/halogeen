import styles from './nav-submenu-mobile.module.scss'
import { ISubItem } from './types'

interface NavSubmenuMobileProps {
  subItems: ISubItem[]
}

export const NavSubmenuMobile = ({ subItems }: NavSubmenuMobileProps) => {
  return (
    <div className={styles.navSubmenuMobileContainer}>
      <div className={styles.navSubmenuMobile}>
        <ul className={styles.navSubmenuMobileContent}>
          {subItems.map((item) => (
            <li className={styles.navSubmenuMobileItem} key={item.id}>
              <h4>{item.header}</h4>
              <div className={styles.navSubmenuMobileSubItems}>
                {item.links.map((link) => (
                  <span
                    key={`${link.header}#${link.href}`}
                    className={styles.navSubmenuMobileSubItem}
                  >
                    {link.icon}
                    <p>{link.header}</p>
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
