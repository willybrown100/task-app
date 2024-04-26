
import styles from './Avatar.module.css'
function Avatar() {
 return (
  <div className={styles.AvatarContainer}>
   <img src="/images/avatar1.jpeg" alt="avatar" className={styles.avatar}/>
  </div>
 )
}

export default Avatar
