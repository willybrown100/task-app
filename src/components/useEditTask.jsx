import { QueryClient, useMutation, useQueryClient } from "@tanstack/react-query";
import { createTask, editTasks } from "../services/getTasks";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function useEditTask() {
 const navigate = useNavigate()
  const queryClient = useQueryClient();
  const { mutate: editTask, isLoading: isEditing } = useMutation({
    mutationFn: ({ newTaskData, id }) => editTasks(newTaskData, id),
    onSuccess: () => {
      toast.success("task sucesfully edited");
      queryClient.invalidateQueries({ querykey: ["task"] });
      // reset();

      navigate("/alltask");
    },
    onError: (err) => toast.error(err.message),
  });
  return { editTask, isEditing };
}

export default useEditTask
