import Image from 'next/image'
import styles from './page.module.css'
import Hero from '/public/images/hero.svg'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}>Title Content</h1>
        <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe ab, in, ducimus est architecto soluta sapiente ea quae quo reprehenderit, nisi voluptatibus quod ratione nemo animi ex perspiciatis? Facere, earum.
        Doloribus, deleniti, reprehenderit ad rerum libero, optio neque deserunt vero qui ipsum sapiente placeat accusantium cupiditate tempore a nobis inventore fugit dolore. Repellendus ad corrupti nesciunt ex provident, repellat molestias.
        Harum, perspiciatis quibusdam tempore modi quam ea molestiae at fugiat nulla minima! Impedit enim, fugit deserunt at delectus ut explicabo? Odit voluptatem facilis, dolores sequi repellendus tempore nostrum voluptatibus debitis.</p>
        <button className={styles.button}>Send</button>
      </div>

      <div className={styles.col}>
        <Image src={Hero} />
      </div>
    </div>
  )
}
