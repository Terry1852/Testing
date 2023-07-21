//We'll be passing everything into this file.
import { createSlice } from '@reduxjs/toolkit';
import { userList } from './Data';

const userSlice = createSlice({
    name: "users",
    initialState: userList,
    reducers:{
        addUser: (state, action) => {
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            const {id, name, email} = action.payload;
            //uu = updateUser 
            const uu = state.find(user => user.id == id)
            //If the id is found or already existing just update it
            if(uu){
                uu.name = name;
                uu.email = email;
            }

        },
        deleteUser: (state, action) => {
            const {id} = action.payload;
            const uu = state.find(user => user.id == id);
            if (uu) {
                return state.filter(f => f.id !== id);
            }
        }


    }
})

export const{addUser, updateUser, deleteUser} = userSlice.actions
export default userSlice.reducer