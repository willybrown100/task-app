import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css'
import { HiBars3 } from "react-icons/hi2";
import { useState } from 'react';
import Avatar from './Avatar';
function Navbar() {
  const [isOpen,setIsOpen]=useState(false)
  const handleClick = function(){
    setIsOpen(!isOpen)
  }
 return (
   <nav>
     <div className={styles.navCenter}>
       <div className={styles.navHeader}>
         <NavLink className={styles.logo} to="/">
           task duty
         </NavLink>
         <button className={styles.bar} onClick={handleClick}>
           <HiBars3 />
         </button>
       </div>
       <ul className={`${styles.navLinks} ${isOpen ? styles.showBar : ""}`}>
         <li>
           <NavLink to="/newtask">new task</NavLink>
         </li>
         <li>
           <NavLink to="/alltask">all task</NavLink>
         </li>
         <li>
           <Avatar/>
         </li>
       </ul>
     </div>
   </nav>
 );
}

export default Navbar
