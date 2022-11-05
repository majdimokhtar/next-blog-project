import styles from "./post-content.module.css"
import PostHeader from "./post-header"
import ReactMarkdown from "react-markdown"
import Image from "next/image"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism"

// const DUMMY_POST = {
//   slug: "getting-started-with-nextjs",
//   title: "getting started with next js",
//   image: "getting-started-with-nextjs.png",
//   content: "# This is first text",
//   date: "2022-10-02",
// }

function PostContent({ post }) {
  const imagePath = `/images/posts/${post.slug}/${post.image}`
  const customRenderes = {
    // img(image) {
    //   // console.log(image);
    //   return (
    //     <div>
    //       <Image
    //         src={`/images/posts/${post.slug}/${image.src}`}
    //         alt={image.alt}
    //         width={600}
    //         height={300}
    //       />
    //     </div>
    //   )
    // },
    p(paragraph) {
      const { node } = paragraph
      if (node.children[0].tagName === "img") {
        const image = node.children[0]
        return (
          <div className={styles.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        )
      }
      return <p>{paragraph.children} </p>
    },
    code(code) {
      const { className, children } = code
      const language = className.split("-")[1]
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={children}
        />
      )
    },
  }
  return (
    <article className={styles.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderes}>{post.content}</ReactMarkdown>
    </article>
  )
}

export default PostContent
