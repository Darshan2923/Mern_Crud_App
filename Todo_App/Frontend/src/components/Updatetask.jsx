import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Updatetask = () => {
    const { id } = useParams();
    const [time, setTime] = useState('');
    const [task, setTask] = useState('');
    const [priority, setPriority] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:5052/getUser/' + id)
            .then(result => {
                console.log(result);
                setTime(result.data.time);
                setTask(result.data.task);
                setPriority(result.data.priority);
            })
            .catch(err => console.log(err))
    }, []);

    const Usubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:5052/updateTask/' + id, { time, task, priority }) //sends all the data to updateUser route created on the server side
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
        <>
            <div className='d-flex vh-100 bg-whitesmoke justify-content-center align-items-center'>
                <div className="shadow p-3 mb-5 w-50 bg-white rounded p-3">
                    <form onSubmit={Usubmit}>
                        <h2>Update Task</h2>
                        <div className="mb-2">
                            <label htmlFor="">Time</label>
                            <input type="time" placeholder='8:00' className='form-control'
                                value={time} onChange={(e) => setTime(e.target.value)} />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="">Task</label>
                            <input type="text" placeholder='Eg. Going to gym' className='form-control'
                                value={task} onChange={(e) => setTask(e.target.value)} />
                        </div>
                        <div className="mb-2">
                            <label htmlFor="">Priority</label>
                            <input type="text" placeholder='Eg.High' className='form-control'
                                value={priority} onChange={(e) => setPriority(e.target.value)} />
                        </div>
                        <button className="btn btn-success">Submit</button>
                    </form>
                </div>

            </div>
        </>
    )
}

export default Updatetask