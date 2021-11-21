import PropTypes from 'prop-types'
import styles from '../styles/Message.module.css'

const ErrorMessage = ({ message }) => {
  return (
    <div className={`${styles.message_container} ${styles.success_bg}`}>
      <p className={styles.message_description}>{message}</p>
    </div>
  )
}

ErrorMessage.propTypes = {
  message: PropTypes.string.isRequired
}

export default ErrorMessage
