import React, {useState} from 'react';
import {addUser} from './UserReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



function Create() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        //This is to access the length of the id and plus 1 to that.
        dispatch(addUser({id: users[users.length - 1]. id + 1, name, email}))
        navigate('/')
    }
    return(
        <div className='create'>
            <div className='createHead'>
                <h3>Add New User</h3>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input type="text" name='name' className='form-control' placeholder='enter name'
                        onChange={e => setName(e.target.value)}/>
                    </div>
                    <div>
                        <label htmlFor='name'>Email:</label>
                        <input type="email" name='email' className='form-control' placeholder='enter email'
                        onChange={e => setEmail(e.target.value)}/>
                    </div><br />
                    <button className='createButton'>Complete</button>
                </form>

            </div>

        </div>
    )
}

export default Create