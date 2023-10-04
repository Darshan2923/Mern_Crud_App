import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [task, setTask] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5052/getTask/')
            .then(result => setTask(result.data))
            .catch(err => console.log(err))
    }, []);

    const handleDelete = (id) => {
        axios.delete('http://localhost:5052/deleteTask/' + id)
            .then(res => {
                console.log(res)
                window.location.reload()
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='d-flex vh-100 bg-whitesmoke justify-content-center align-items-center'>
            <div className="shadow p-3 mb-5 w-50 h-50 bg-white rounded p-3 .overflow-auto ">
                <Link to={`create`} className='btn btn-success'>Add +</Link>
                <table className='table .overflow-auto h-50'>
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Task</th>
                            <th>Priority</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            task.map((t) => (
                                <tr key={t._id}>
                                    <td>{t.time}</td>
                                    <td>{t.task}</td>
                                    <td>{t.priority}</td>
                                    <td>
                                        <Link to={`update/${t._id}`} className='btn btn-primary'>Update</Link>
                                        <button className="btn btn-danger" onClick={(e) => handleDelete(t._id)}><i className="fa-solid fa-trash-can"></i></button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Home;
