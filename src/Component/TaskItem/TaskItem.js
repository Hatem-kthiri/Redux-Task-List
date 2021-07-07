import React from 'react'
import {Button} from "react-bootstrap"
import {useDispatch} from 'react-redux'
import {doneTask } from '../../Redux/Actions/Actions';
import EditTask from '../EditTask/EditTask'
import './TaskItem.css'
function TaskItem({task}) {
     const dispatch = useDispatch();
    return (
        <div className='items'>
            <div id={task.id} className="item">
            <h4>{task.description}</h4>
            
            <Button variant={ task.isDone ? "danger" : "success" } 
                className="Button"
                onClick={()=>{dispatch(doneTask({ id: task.id, isDone: !task.isDone }))}}>
               {task.isDone ? "Back" : "Done"}
            </Button>
            
            <EditTask task={task} />
            
            </div>
         
        </div>
    )
}

export default  (TaskItem)

