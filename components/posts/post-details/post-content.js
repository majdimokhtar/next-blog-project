import styles from "./post-content.module.css"
import PostHeader from "./post-header"
import ReactMarkdown from "react-markdown"

const DUMMY_POST = {
  slug: "getting-started-with-next-js",
  title: "getting started with next js",
  image: "getting-started-nextjs.png",
  content: "# This is first text",
  date: "2022-10-02",
}

const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_POST.slug}/${DUMMY_POST.image}`
  return (
    <article className={styles.content}>
      <PostHeader title={DUMMY_POST.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_POST.content}</ReactMarkdown>
    </article>
  )
}

export default PostContent
