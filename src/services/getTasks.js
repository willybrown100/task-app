import supabase from "./supabase";

export async function getTasks(){
 
const  { data: TASKS, error } = await supabase.from("TASKS").select("*");
if(error){
 throw new Error("couldnt find tasks")
}
console.log(TASKS)
return TASKS
}
export async function createTasks(newTask){
 
const { data, error } = await supabase
  .from("TASKS")
  .insert([newTask])
  .select();
  
if (error) {
  throw new Error("couldnt create tasks");
}
return data
}
export async function editTasks(newTask,id){

const { data, error } = await supabase
  .from("TASKS")
  .update(newTask)
  .eq("id", id)
  .select();

if (error) {
  throw new Error("couldnt edit tasks");
}
return data
}
export async function deleteTask(id){
const { error } = await supabase
  .from("TASKS")
  .delete()
  .eq("id",id);

if (error) {
  throw new Error("couldnt delete tasks");
}

}


function test({item,number}){
console.log(item,number)
}
test({item:"williams",number:1})