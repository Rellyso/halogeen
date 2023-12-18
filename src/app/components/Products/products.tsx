'use client'
import styles from './products.module.scss'
import { Product } from '.'
import { useQuery } from '@tanstack/react-query'
import { IProduct } from './product'

async function getProducts(): Promise<IProduct[]> {
  return await fetch(
    'https://run.mocky.io/v3/41996c88-a069-4177-8070-82cd738e2218',
  ).then((data) => data.json())
}

export const Products = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  })

  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Produtos</h1>

      {isLoading && <p>Carregando...</p>}
      <div className={styles.cards}>
        {data &&
          data.map((product) => <Product key={product.id} product={product} />)}
      </div>
    </section>
  )
}
