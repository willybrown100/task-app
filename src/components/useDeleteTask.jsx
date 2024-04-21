import {  useMutation, useQueryClient } from "@tanstack/react-query"
import { deleteTask } from "../services/getTasks"
import toast from "react-hot-toast"

function useDeleteTask() {
 const queryClient = useQueryClient()
const {mutate,isLoading}= useMutation({
  mutationFn:deleteTask,
  onSuccess:()=>{
queryClient.invalidateQueries({queryKey:["task"]})
toast.success("task sucessfully deleted")
  }
 })
 return {mutate,isLoading}
}

export default useDeleteTask
