import { HiPencil, HiTrash } from "react-icons/hi2";
import styles from './Tasks.module.css'

import useDeleteTask from "./useDeleteTask";
import useTasks from "./useTasks";
import { Link } from "react-router-dom";
function Tasks({ item }) {
 const { task,  } = useTasks();

 const serializedData=encodeURIComponent(JSON.stringify(item))
 console.log(serializedData)
 console.log(task)
 const  {mutate,isLoading:isDeleting}=useDeleteTask()

  return (
    <li className={styles.taskContainer}>
      <div className={styles.taskHeader}>
        <span
          className={`${item.tag === "urgent" ? styles.red : styles.green}`}
        >
          {item.tag}
        </span>
        <div className={styles.taskOperations}>
          <Link to={`/NewTask?data=${serializedData}`} className={styles.editBtn}>
            <HiPencil /> <span>edit</span>
          </Link>
          <button
            className={styles.deleteBtn}
            disabled={isDeleting}
            onClick={() => mutate(item.id)}
          >
            <HiTrash /> <span>delete</span>
          </button>
        </div>
      </div>
      <div className="p-2">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </li>
  );
}

export default Tasks;
