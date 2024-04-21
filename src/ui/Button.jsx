
import { Link } from 'react-router-dom'
import styles from './Button.module.css'
function Button({children}) {
 return (
  <Link className={styles.btn} to="alltask">
   {children}
  </Link>
 )
}

export default Button
