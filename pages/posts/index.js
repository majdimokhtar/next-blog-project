import AllPosts from "../../components/posts/all-posts"
import { getAllPosts } from "../../lib/posts.util"


const AllPostsPage = ({posts}) => {
  return (
<div>
    <AllPosts posts={posts} />
</div>
  )
}

export default AllPostsPage


export function getStaticProps() {
  const allPosts = getAllPosts()

  return {
    props: {
      posts : allPosts
    }
  }
}