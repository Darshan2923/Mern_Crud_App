import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [name, SetName] = useState('');
    const [age, SetAge] = useState('');
    const [email, SetEmail] = useState('');
    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5050/createUser', { name, email, age })
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
                <form>
                    <h2>Add User</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter The Name' className='form-control'
                            onChange={(e) => SetName(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='Enter The Email' className='form-control'
                            onChange={(e) => SetEmail(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Age</label>
                        <input type="text" placeholder='Enter The Age' className='form-control'
                            onChange={(e) => SetAge(e.target.value)} />
                    </div>
                    <button className="btn btn-success" onClick={Submit}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Create