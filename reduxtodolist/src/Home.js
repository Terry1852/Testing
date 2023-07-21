import { React } from 'react';

//This gives access to the index.js file.
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {deleteUser} from './UserReducer'
import { useDispatch } from 'react-redux';

function Home() {
   
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteUser({id: id}))

    }
   
    return (
        <div className='container'>
            <h2>Editor Message</h2>
            <Link to="/create" className='createButton'>Create + </Link>
            <table className='table'>
                <thead className="tableHead">
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className='tableBody' style={{color: 'grey', fontFamily: 'serif'}}>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>
                                <Link to={`/edit/${user.id}`} className='editButton'>Edit</Link>
                                <Link onClick={() => handleDelete(user.id)} className='deleteButton'>Delete</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default Home