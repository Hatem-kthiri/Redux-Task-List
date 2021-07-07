import React from 'react'
import { useDispatch } from 'react-redux';
import { addTask } from '../../Redux/Actions/Actions';
import {useState} from 'react'
import { connect } from 'react-redux';
import { Button } from "react-bootstrap"
import './TaskInput.css'
const mapDispatchToProps = dispatch => {
    return {
        addTask: task => dispatch(addTask(task))
    }
}

function TaskInput(props) {
    const [description, setDescription] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()
       props.addTask({ description :description})
    }
    return (
        <form onSubmit={handleSubmit} className="form">
            <div>
                <input type="text" placeholder="Enter Your Description Here ... " id="description" onChange={e => setDescription(e.target.value)}/>
            </div>
            <div>
                <Button type="submit" variant="success" className="Button-add">Add</Button>
            </div>
        </form>
    )
}

export default connect(null, mapDispatchToProps)(TaskInput)
