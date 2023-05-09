import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    auth: false
}

export const Auth = createSlice({
    name : "auth",
    initialState,
    reducers:{
        addData: (state, action) => {
            state.auth = action.payload
        },
        deleteData: state => {
            state.auth = false
        },
    }
})

export const {addData, deleteData} = Auth.actions

export default Auth.reducer