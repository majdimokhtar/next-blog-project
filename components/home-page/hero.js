import styles from "./hero.module.css"
import Image from "next/image"

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image
          src="/images/site/majdimokhtar-alt.jpg"
          alt="and image showing Majdi"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi , I'am Majdi</h1>
      <p>
        I blog about web development - especially front end frameworks like
        React.
      </p>
    </section>
  )
}

export default Hero
