import React, { useState } from 'react'

const User = () => {
    const [users, setUsers] = useState([{
        Name: "chiku", Email: "ch@gmail.com", Age: 18
    }]);
    return (
        <div className='d-flex vh-100 bg-success justify-content-center align-items-center'>
            <div className="w-50 bg-white rounded p-3">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map
                        }
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default User