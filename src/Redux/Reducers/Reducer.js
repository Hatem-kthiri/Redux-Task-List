import { ADD_TASK,EDIT_TASK,DONE_TASK  } from "../Constants/Actions-Type";

const initialState = {
    tasks: []
}


export let Reducer = (state=initialState,action) =>{
    const { type, payload } = action;

    switch (type) {
        case ADD_TASK:
            return {
                tasks: [...state.tasks, { id: Date.now(), description: payload.description, isDone: false },]
            }
        case EDIT_TASK:
            return {
                tasks: state.tasks.map((task) =>
                    task.id === payload.id
                        ? { ...task, description: payload.newdescription }
                        : task
                ),
            };
        case DONE_TASK:
            return {
                tasks: state.tasks.map((task) =>
                    task.id === payload.id
                        ? { ...task, isDone: payload.isDone }
                        : task
                ),
            };
        
        default:
            return state
    }
}
 