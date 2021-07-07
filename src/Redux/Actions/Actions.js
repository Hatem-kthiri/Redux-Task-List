import { ADD_TASK,EDIT_TASK,DONE_TASK  } from "../Constants/Actions-Type";

export const addTask = (payload)=>{
    return{
        type:ADD_TASK,
        payload : payload 
    }
}

export const editTask = (id,newdescription) => {
    return { 
        type: EDIT_TASK,
         payload:{id,newdescription}
         }
}
 
export const doneTask = (task)=>{
    return{
        type:DONE_TASK,
        payload : task 
    }
}