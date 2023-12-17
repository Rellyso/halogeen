import styles from './products.module.scss'
import { Product } from '.'

export const Products = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Produtos</h1>

      <div className={styles.cards}>
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  )
}
