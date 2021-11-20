import { getPosts } from './api/main'
import { useEffect, useState } from 'react'
import Post from '../components/Post'
import Link from "next/link";

const Feed = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts()

      if (posts.success) {
        setPosts(posts.data)
      }
      if (posts.error) {
        alert(post.data)
      }
    }

    fetchPosts()
  }, [])
  return (
    <div>
      
      <Link href="/">Go to Home Page</Link>
      {posts.map(post => {
        return <Post data={post} />
      })}
    </div>
  )
}

export default Feed;
