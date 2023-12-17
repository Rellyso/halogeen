import { EcologyFlask, Factory, GlassBottles } from '@/app/assets/icons'
import { HeroBoxItem } from '.'
import styles from './hero-box.module.scss'

export const HeroBoxes = () => {
  return (
    <div className={styles.boxes}>
      <HeroBoxItem
        header="Produtos"
        description="Vidrarias e Equipamentos"
        icon={<EcologyFlask />}
      />
      <HeroBoxItem
        highlight
        header="Químicos"
        description="Materiais Químicos"
        icon={<GlassBottles />}
      />
      <HeroBoxItem
        header="Laboratórios"
        description="Ferramentas e utensílios"
        icon={<Factory />}
      />
    </div>
  )
}
