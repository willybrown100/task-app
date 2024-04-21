import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"
import Tasks from "../components/Tasks";
import styles from './AllTask.module.css'


import useTasks from "../components/useTasks";

import BacktoTop from "../components/BacktoTop";

function AllTask() {
const {task,isLoading}=useTasks()
console.log(task)
// if(isLoading)return <Loader/>

 return (
   <>
     <Navbar />
     <section>
       <article className={styles.sectionCenter}>
         <div className={styles.taskbtnContainer}>
           <h3>my tasks</h3>
           <Link className={styles.addNewTask} to="/newtask">
             {" "}
             + add new task
           </Link>
         </div>
         <div></div>
         {isLoading ? (
           <p className={styles.load}>loading...</p>
         ) : (
           <ul className="space-y-2">
             {task.map((item) => (
               <Tasks item={item} key={item.description} />
             ))}
           </ul>
         )}
       </article>
       <BacktoTop/>
     </section>
   </>
 );
}

export default AllTask
