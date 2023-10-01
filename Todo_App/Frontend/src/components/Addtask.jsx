import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Addtask = () => {
    const [time, setTime] = useState('')
    const [task, setTask] = useState('')
    const [priority, setPriority] = useState('')
    const navigate = useNavigate();

    const Submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5052/addTask', { time, task, priority })
            .then(result => {
                console.log(result)
                setTime('');
                setTask('');
                setPriority('');
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='d-flex vh-100 bg-whitesmoke justify-content-center align-items-center'>
            <div className="shadow p-3 mb-5 w-50 bg-white rounded p-3">
                <form onSubmit={Submit}>
                    <h2>Add Task</h2>
                    <div className="mb-2">
                        <label htmlFor="">Time</label>
                        <input type="time" placeholder='8:00' className='form-control'
                            onChange={(e) => setTime(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Task</label>
                        <input type="text" placeholder='Eg. Going to gym' className='form-control'
                            onChange={(e) => setTask(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Priority</label>
                        <input type="text" placeholder='Eg.High' className='form-control'
                            onChange={(e) => setPriority(e.target.value)} />
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>

        </div>
    )
}

export default Addtask