'use client'

import Image from 'next/image'
import styles from './header-styles.module.scss'
import {
  FlaskConical,
  MenuSquare,
  RectangleHorizontal,
  Settings2,
  Thermometer,
} from 'lucide-react'
import { NavCallout, NavMenu, NavMenuMobile } from '../NavMenu'
import { IListItem } from '../NavMenu/types'
import { Bowl, JewelryBox, Menu, SafetyGlasses } from '@/app/assets/icons'
import { useNavMenu } from '@/store/slices/menuItemsSlice'
import { useState } from 'react'

export const Header = () => {
  const { isActiveMenu, toggleActiveMobileMenu } = useNavMenu()

  const [activeItem, setActiveItem] = useState<IListItem>()

  const handleChangeSelectedItem = (item: IListItem) => {
    setActiveItem((prev) => {
      if (prev?.id === item.id) {
        return undefined
      }
      return item
    })
    toggleActiveMobileMenu()
  }

  return (
    <div className={styles.headerContainer}>
      <header className={styles.header}>
        <Image
          src="/logo.svg"
          alt="Halogenn logo"
          width={160}
          height={35}
          priority
        />

        <NavMenu
          listItems={listItems}
          onChangeItem={handleChangeSelectedItem}
        />

        <button className={styles.budgetButton}>
          <MenuSquare />
          <span>Orçamento</span>
        </button>

        <button
          onClick={toggleActiveMobileMenu}
          className={styles.navMenuMobileButton}
        >
          <Menu />
        </button>
      </header>

      {isActiveMenu && (
        <div className={styles.navMenuMobile}>
          <h3>Navegue por nosso site</h3>

          <NavMenuMobile
            listItems={listItems}
            onChangeItem={handleChangeSelectedItem}
          />
        </div>
      )}

      {activeItem?.subItems && isActiveMenu && (
        <NavCallout
          header={activeItem?.subItemHeader}
          subItems={activeItem?.subItems}
        />
      )}
    </div>
  )
}

const listItems: IListItem[] = [
  {
    id: 'inicio',
    href: '#',
    children: 'Início',
  },
  {
    id: 'produtos',
    href: '#',
    children: 'Produtos',
    subItemHeader: 'Catálogo completo de itens para você',
    subItems: [
      {
        id: 'lab',
        header: 'Laboratório',
        links: [
          { header: 'Equipamentos', href: '#', icon: <Settings2 /> },
          { header: 'Termômetros', href: '#', icon: <Thermometer /> },
          { header: 'Acessórios', href: '#', icon: <SafetyGlasses /> },
        ],
      },
      {
        id: 'utils',
        header: 'Utensílios',
        links: [
          {
            header: 'Inox e Ferragens',
            href: '#',
            icon: <RectangleHorizontal />,
          },
          { header: 'Vidrarias', href: '#', icon: <FlaskConical /> },
          { header: 'Plásticos', href: '#', icon: <JewelryBox /> },
          { header: 'Porcelanas', href: '#', icon: <Bowl /> },
        ],
      },
    ],
  },
  {
    id: 'laudos',
    href: '#',
    children: 'Laudos',
  },
  {
    id: 'sobre',
    href: '#',
    children: 'Sobre nós',
  },
  {
    id: 'certificacoes',
    href: '#',
    children: 'Certificações',
  },
  {
    id: 'contato',
    href: '#',
    children: 'Contato',
  },
]
