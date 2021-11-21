import styles from '../styles/Feed.module.css'
const Post = ({ data }) => {
  return (
    <div className={styles.post}>
      <h2 className={styles.post_name}> {data.name} </h2>
      <p className={styles.post_message}> {data.message} </p>
    </div>
  )
}

export default Post
