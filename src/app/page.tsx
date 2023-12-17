import Image from 'next/image'
import styles from './page.module.scss'
import { HeroBoxes } from './components/HeroBox'
import { Products } from './components/Products'

export default function Home() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.assets}>
        <Image
          className={styles.madeBy}
          src="/images/made-by.png"
          alt=""
          width={186}
          height={186}
        />
        <Image
          className={styles.squares}
          src="/images/squares.png"
          alt=""
          width={311}
          height={343}
        />
      </div>

      <div className={styles.mobileInfo}>
        <h1>
          Qualidade e expertise em produtos <span>químicos e acessórios</span>
        </h1>

        <p>
          Estamos preparados para te entender e atender da melhor forma para
          suprir todas as suas demandas em químicos e similares.
        </p>

        <Image
          className={styles.squaresBottomMobile}
          src="/images/squares.png"
          alt=""
          width={311}
          height={343}
        />
      </div>

      <div className={styles.mainContainer}>
        <HeroBoxes />

        <Products />
      </div>
      <div className={styles.madeByMobile}>
        <Image src="/images/made-by.png" alt="" width={186} height={186} />
      </div>
    </div>
  )
}
