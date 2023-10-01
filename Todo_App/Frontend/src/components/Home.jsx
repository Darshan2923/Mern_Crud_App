import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const [task, setTask] = useState([])
    return (
        <div className='d-flex vh-100 bg-whitesmoke justify-content-center align-items-center '>
            <div className="shadow p-3 mb-5 w-50 bg-white rounded p-3">
                <Link to={`create`} className='btn btn-success'>Add +</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Task</th>
                            <th>Priority</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            task.map((t) => {
                                <tr>
                                    <td>{t.Time}</td>
                                    <td>{t.Task}</td>
                                    <td>{t.Priority}</td>
                                    <td>
                                        <Link to={`update/${user._id}`} className='btn btn-primary'>Update</Link>
                                        <button className="btn btn-danger"><i className="fa-solid fa-trash-can"></i></button>
                                    </td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default Home