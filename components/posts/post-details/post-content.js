import styles from "./post-content.module.css"
import PostHeader from "./post-header"
import ReactMarkdown from 'react-markdown'

// const DUMMY_POST = {
//   slug: "getting-started-with-nextjs",
//   title: "getting started with next js",
//   image: "getting-started-with-nextjs.png",
//   content: "# This is first text",
//   date: "2022-10-02",
// }

const PostContent = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`
  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown >{post.content}</ReactMarkdown>
    </article>
  )
}

export default PostContent
