import Image from 'next/image'
import styles from './products.module.scss'
import { getStaticBlurDataUrl } from '@/lib/static-blur-data-url'

const imgSrc =
  'https://source.unsplash.com/relogio-branco-redondo-com-faixa-branca-2cFZ_FB08UM'

export const Product = () => {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Image
          src={imgSrc}
          alt=""
          placeholder="blur"
          blurDataURL={getStaticBlurDataUrl()}
          fill
          style={{
            objectFit: 'cover',
          }}
        />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.productInfo}>
          <p>Name here</p>
          <span>Nota: 9.0</span>
        </div>
        <span className={styles.productPrice}>R$ 200,00</span>
      </div>
    </div>
  )
}
