import Head from 'next/head'
import Header from '../components/Header'
import { getPosts } from './api/main'
import { useEffect, useState } from 'react'
import Post from '../components/Post'
import Link from 'next/link'
import styles from '../styles/Feed.module.css'

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
    <div className={styles.container}>
      <Head>
        <title>Feed</title>
        <meta name='description' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        ></meta>
      </Head>

      <Header />
      <div className={styles.home_link_container}>
        <Link href='/'>Go Back to Home Page</Link>
      </div>

      <div className={styles.posts_container}>
        {posts.map((post,index)=> {
          return <Post key = {index} data={post} />
        })}
      </div>
    </div>
  )
}

export default Feed
