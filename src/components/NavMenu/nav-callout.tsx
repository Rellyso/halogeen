import {
  FlaskConical,
  RectangleHorizontal,
  Settings2,
  Thermometer,
} from 'lucide-react'
import styles from './nav-callout.module.scss'
import { Bowl, JewelryBox, SafetyGlasses } from '@/app/assets/icons'
import { ISubItem } from './types'

interface NavCalloutProps {
  header?: string
  subItems: ISubItem[]
}

export const NavCallout = ({ header, subItems }: NavCalloutProps) => {
  const isHidden = !header && subItems.length === 0

  return (
    <div aria-hidden={isHidden} className={styles.navCalloutContainer}>
      <hr />
      <div className={styles.navCallout}>
        <h3 className={styles.navCalloutTitle}>
          Catálogo completo de itens para você
        </h3>

        <ul className={styles.navCalloutContent}>
          <li className={styles.navCalloutItem}>
            <h4>Laboratório</h4>
            <div className={styles.navCalloutSubItems}>
              <span className={styles.navCalloutSubItem}>
                <Settings2 />
                <p>Equipamentos</p>
              </span>
              <span className={styles.navCalloutSubItem}>
                <Thermometer />
                <p>Termômetros</p>
              </span>
              <span className={styles.navCalloutSubItem}>
                <SafetyGlasses />
                <p>Acessórios</p>
              </span>
            </div>
          </li>
          <li className={styles.navCalloutItem}>
            <h4>Utensílios</h4>
            <div className={styles.navCalloutSubItems}>
              <span className={styles.navCalloutSubItem}>
                <RectangleHorizontal />
                <p>Inox e Ferragens</p>
              </span>
              <span className={styles.navCalloutSubItem}>
                <FlaskConical />
                <p>Vidrarias</p>
              </span>
              <span className={styles.navCalloutSubItem}>
                <JewelryBox />
                <p>Plásticos</p>
              </span>
              <span className={styles.navCalloutSubItem}>
                <Bowl />
                <p>Porcelanas</p>
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}
