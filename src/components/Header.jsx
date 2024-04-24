import Button from "../ui/Button";
import styles from './Header.module.css'
function Header() {

 return (
   <header className={`${styles.header} `}>
     <div className={styles.headerInfo}>
       <h2>
         manage your tasks on <br />
         <span className={styles.duty}>Tasks duty</span>
       </h2>
       <p>
         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic quaerat
         totam ipsa odit. Eligendi, tenetur culpa ab qui, reiciendis deleniti
         saepe sunt quisquam enim veritatis laborum animi, quas modi doloremque!
       </p>
       <Button>go to my tasks</Button>
     </div>
     <div className=" md:block">
       <img src="images/task-img2.png" alt="task-img" className={styles.taskImg} />
     </div>
   </header>
 );
}

export default Header
