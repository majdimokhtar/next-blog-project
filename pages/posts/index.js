import AllPosts from "../../components/posts/all-posts"
import { getAllPosts } from "../../lib/posts.util"
import Head from "next/head"

const AllPostsPage = ({ posts }) => {
  return (
    <>
      <Head>
        <title>All my posts</title>
        <meta
          name="description"
          content="A list of all programing related tutorials"
        />
      </Head>
      <AllPosts posts={posts} />
    </>
  )
}

export default AllPostsPage

export function getStaticProps() {
  const allPosts = getAllPosts()

  return {
    props: {
      posts: allPosts,
    },
  }
}
