import styles from '../styles/Header.module.css'
import Image from 'next/image'
import remedyLogo from '../asset/remedyHealthLogo.png'

const Header = () => {
  return (
    <div className={styles.header}>
      <Image
        className={styles.logo}
        src={remedyLogo}
        alt='logo'
        width={120}
        height={40}
      />
    </div>
  )
}

export default Header
