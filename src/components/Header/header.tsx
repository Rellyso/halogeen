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
import { useState } from 'react'
import { NavCallout, NavMenu } from '../NavMenu'
import { IListItem } from '../NavMenu/types'
import { Bowl, JewelryBox, SafetyGlasses } from '@/app/assets/icons'

export const Header = () => {
  const [selectedItem, setSelectedItem] = useState<IListItem>()

  const handleChangeSelectedItem = (item: IListItem) => {
    setSelectedItem((prev) => {
      if (prev?.id === item.id) {
        return undefined
      }
      return item
    })
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
      </header>

      {selectedItem?.subItems && (
        <NavCallout
          header={selectedItem?.subItemHeader}
          subItems={selectedItem?.subItems}
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
]
