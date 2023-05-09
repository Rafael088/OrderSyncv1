import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    orderSelect: false
}

export const OrderSelect = createSlice({
    name : "orderSelect",
    initialState,
    reducers:{
        addOrder: (state, action) => {
            state.orderSelect = action.payload
        },
        deleteOrder: state => {
            state.orderSelect = false
        },
    }
})

export const {addOrder, deleteOrder} = OrderSelect.actions

export default OrderSelect.reducer