import Image from "next/image"
import Link from "next/link"
import styles from './header-styles.module.scss'
import { MenuSquare } from "lucide-react"

export const Header = () => {

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

        <nav className={styles.nav}>
          <ul>
            <li>
              <Link href="#">Início</Link>
            </li>
            <li>
              <Link href="#">Produtos</Link>
            </li>
            <li>
              <Link href="#">Laudos</Link>
            </li>
            <li>
              <Link href="#">Sobre nós</Link>
            </li>
            <li>
              <Link href="#">Certificações</Link>
            </li>
          </ul>
        </nav>

        <button className={styles.budgetButton}>
          <MenuSquare />
          Orçamento
        </button>
      </header>
    </div>
  )
}