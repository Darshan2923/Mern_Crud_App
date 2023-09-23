import React from 'react'

const Update = () => {
    return (
        <div className='d-flex vh-100 bg-success justify-content-center align-items-center'>
            <div className="w-50 bg-white rounded p-3">
                <form>
                    <h2>Update User</h2>
                    <div className="mb-2">
                        <label htmlFor="">Name</label>
                        <input type="text" placeholder='Enter The Name' className='form-control' />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='Enter The Email' className='form-control' />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="">Age</label>
                        <input type="text" placeholder='Enter The Age' className='form-control' />
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Update