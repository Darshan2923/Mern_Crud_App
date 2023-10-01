import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Update = () => {
    const { id } = useParams();
    const [name, SetName] = useState('');
    const [age, SetAge] = useState('');
    const [email, SetEmail] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:5050/getUser/' + id)
            .then(result => {
                console.log(result);
                SetName(result.data.name);
                SetEmail(result.data.email);
                SetAge(result.data.age);
            })
            .catch(err => console.log(err))
    }, []);

    const Usubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:5050/updateUser/' + id, { name, email, age }) //sends all the data to updateUser route created on the server side
            .then(result => {
                console.log(result)
                SetName('');
                SetEmail('');
                SetAge('');
                navigate('/')
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='d-flex vh-100 bg-success justify-content-center align-items-center'>
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={Usubmit}>
                    <h2>Update User</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter The Name' className='form-control'
                            value={name} onChange={(e) => SetName(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='Enter The Email' className='form-control'
                            value={email} onChange={(e) => SetEmail(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Age</label>
                        <input type="text" placeholder='Enter The Age' className='form-control'
                            value={age} onChange={(e) => SetAge(e.target.value)} />
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Update