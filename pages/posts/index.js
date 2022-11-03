import AllPosts from "../../components/posts/all-posts"

const DUMMY_DATA = [
    {
      slug: "getting-started-with-next-js",
      title: "getting started with next js",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJs is the react framework for production - it makes fullstack react apps and sites breeze and ships with build-in SSR.",
      date: "2022-10-02",
    },
    {
      slug: "getting-started-with-next-js2",
      title: "getting started with next js",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJs is the react framework for production - it makes fullstack react apps and sites breeze and ships with build-in SSR.",
      date: "2022-10-02",
    },
    {
      slug: "getting-started-with-next-js3",
      title: "getting started with next js",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJs is the react framework for production - it makes fullstack react apps and sites breeze and ships with build-in SSR.",
      date: "2022-10-02",
    },
    {
      slug: "getting-started-with-next-js4",
      title: "getting started with next js",
      image: "getting-started-nextjs.png",
      excerpt:
        "NextJs is the react framework for production - it makes fullstack react apps and sites breeze and ships with build-in SSR.",
      date: "2022-10-02",
    },
  ]
const AllPostsPage = () => {
  return (
<div>
    <AllPosts posts={DUMMY_DATA} />
</div>
  )
}

export default AllPostsPage
