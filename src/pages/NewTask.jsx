import { useForm } from "react-hook-form";
import Navbar from "../components/Navbar"
import styles from './NewTask.module.css'
import { HiChevronLeft } from "react-icons/hi2";
import {  useMutation, useQueryClient } from "@tanstack/react-query";
import { createTasks, editTasks } from "../services/getTasks";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

function NewTask() {
  //receiving data from url
  const {search}=useLocation()
  const params = new URLSearchParams(search);
  const serializedData = params.get("data")
  //parsing received data back into an object esle we return an empty obj
  const taskData = serializedData?JSON.parse(decodeURIComponent(serializedData)):{}
  


  const {id:editId,...editvalue}=taskData
  const isEditSession = Boolean(editId)
  console.log(serializedData,taskData,editId,editvalue)

  const navigate = useNavigate()
    const { register, handleSubmit,reset } = useForm({defaultValues:isEditSession?editvalue:{}});

  const queryClient = useQueryClient()
  const {mutate:createTask,isLoading}=useMutation({
mutationFn:createTasks,
onSuccess:()=>{
  toast.success("new task sucesfully created")
  queryClient.invalidateQueries({querykey:["task"]})
  reset()
 
  navigate("/alltask")
},
onError:(err)=>toast.error(err.message)
  })

//editTask//
  const { mutate: editTask, isLoading: isEditing } = useMutation({
    mutationFn: ({ newTaskData, id }) => editTasks(newTaskData, id),
    onSuccess: () => {
      toast.success("task sucesfully edited");
      queryClient.invalidateQueries({ querykey: ["task"] });
      reset();

      navigate("/alltask");
    },
    onError: (err) => toast.error(err.message),
  });

const isWorking = isEditing || isLoading;

  function onSubmit(data){
    if(isEditSession) editTask({newTaskData:{...data},id:editId})
    else
createTask(data);
  }
 return (
   <section>
     <Navbar />
     <article className={styles.formSection}>
         <div className={styles.btnContainer}>
           <button className={styles.chevronleft} onClick={()=>navigate(-1)}>
             <HiChevronLeft className={styles.backbtn} />
           </button>
           <h3>{isEditSession ? "edit task" : "new task"}</h3>
         </div>
       <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
         <div className={styles.formControl}>
           <input
             type="text"
             id="title"
             className={styles.input}
             {...register("title")}
             disabled={isWorking}
             placeholder="eg business,project"
           />
           <label >task title</label>
         </div>
         <div className={styles.formControl}>
           <label>description</label>
           <textarea
             type="text"
             id="description"
             placeholder="briefly describe your task here"
             className={styles.input}
             {...register("description")}
             disabled={isWorking}
           />
         </div>
         <div className={styles.formControl}>
           <label className="">Tags</label>
           <select className={styles.input} id="tag" {...register("tag")}>
             <option value="urgent">urgent</option>
             <option value="important">important</option>
           </select>
         </div>
         <button className={styles.submitBtn} disabled={isWorking}>
          done
         </button>
       </form>
     </article>
   </section>
 );
}

export default NewTask


    //  <div className='relative' id='textInput'>
    //             <input className='border pt-[1.2rem] pb-[.5rem] px-[1rem] rounded-md w-full' 
    //             type="text"
    //             id='title'
    //              placeholder='E.g. Project Defense, Assignment....'
    //              {...register("title", { required: true, maxLength: 20 })}
    //              aria-invalid={errors.title ? "true" : "false"}
    //             />
    //             {errors.title?.type === "required" && (
    //                 <p className='font-medium pt-2 text-[18px] text-red-500' role="alert">Title is required</p>
    //             )}
    //             <label className=' md
    //             md:text-[20px]  absolute bg-white -top-6 left-6 p-[.6rem] text-[#9c9c9c] font-semibold' htmlFor="text">Task Title</label>
    //         </div>