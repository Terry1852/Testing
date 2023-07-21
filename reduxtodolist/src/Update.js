import React, {useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {useSelector} from 'react-redux';
import {updateUser}  from './UserReducer';
import { useDispatch } from 'react-redux'



function Update() {

    const {id} = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.filter(f => f.id == id);
    const {name, email} = existingUser[0];
    const [uname, setName] = useState(name)
    const [uemail, setEmail] = useState(email)
    const dispatch = useDispatch();
    //This code should take us back to the home page.
    const navigate = useNavigate();

    const handleUpdate = (event) => {
        event.preventDefault();
        dispatch(updateUser({
            id: id,
            name: uname,
            email: uemail
        }))
        navigate('/')
    }
    return(
        <div className='create'>
        <div className='createHead'>
            <h3>Update info</h3>
            <form onSubmit={handleUpdate}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type="text" name='name' className='form-control' placeholder='enter name'
                    value={uname} onChange={e => setName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor='name'>Email:</label>
                    <input type="email" name='email' className='form-control' placeholder='enter email'
                    value={uemail} onChange={e => setEmail(e.target.value)}/>
                </div><br />
                <button className='editButton'>Edit</button>
            </form>

        </div>

    </div>

    )
}

export default Update