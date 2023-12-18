import Image from 'next/image'
import styles from './products.module.scss'
import { getStaticBlurDataUrl } from '@/lib/static-blur-data-url'

export interface IProduct {
  id: string
  name: string
  image: string
  cost: number
  grade: number
}

interface ProductProps {
  product: IProduct
}

export const Product = ({ product }: ProductProps) => {
  const productGrade = product.grade.toFixed(1)
  const productCost = brazilianCurrencyFormatter.format(product.cost)

  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Image
          src={product.image}
          alt={`imagem do produto ${product.name}`}
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
          <p>{product.name}</p>
          <span>Nota: {productGrade}</span>
        </div>
        <span className={styles.productPrice}>{productCost}</span>
      </div>
    </div>
  )
}

const brazilianCurrencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})
