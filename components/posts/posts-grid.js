import PostItem from "./post-item"
import styles from "./posts-grid.module.css"

const PostsGrid = ({ posts }) => {
  return (
    <ul className={styles.grid}>
      {posts && posts.map((post) => <PostItem key={post.slug} post={post} />)}
    </ul>
  )
}

export default PostsGrid
