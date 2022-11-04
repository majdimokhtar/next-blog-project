import PostContent from "../../components/posts/post-details/post-content"
import { getPostData, getPostsFiles } from "../../lib/posts.util"

const PostDetailsPage = ({ post }) => {
  return <PostContent post={post} />
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
