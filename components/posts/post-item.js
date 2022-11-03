import Link from "next/link"
import Image from "next/image"
import styles from "./post-item.module.css"

const PostItem = ({ post }) => {
  const { title, image, excerpt, date, slug } = post
  const formattedDate = new Date(date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
  const imagePath = `/images/posts/${slug}/${image}`
  const linkPath = `posts/${slug}`
  return (
    <li className={styles.post}>
      <Link href={linkPath} >
        <a>
          <div>
            <Image className={styles.image} src={imagePath} alt={title} width={300} height={200} layout="responsive" />
          </div>
          <div className={styles.content}>
            <h3>{title} </h3>
            <time>{formattedDate} </time>
            <p>{excerpt} </p>
          </div>
        </a>
      </Link>
    </li>
  )
}

export default PostItem
