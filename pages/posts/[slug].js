import PostContent from "../../components/posts/post-details/post-content"
import { getPostData, getPostsFiles } from "../../lib/posts.util"
import Head from "next/head"

const PostDetailsPage = ({ post }) => {
  return (
    <>
      <Head>
        <title>{post.title} </title>
        <meta
          name="description"
          content={post.excerpt}
        />
      </Head>
      <PostContent post={post} />
    </>
  )
}

export function getStaticProps(context) {
  const { params } = context
  const { slug } = params
  const postData = getPostData(slug)
  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  }
}

export function getStaticPaths() {
  const postFilesNames = getPostsFiles()
  const slugs = postFilesNames.map((fileName) => fileName.replace(/\.md$/, ""))
  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  }
}
export default PostDetailsPage
