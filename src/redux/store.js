import { configureStore } from '@reduxjs/toolkit'
import auth from './reducers/auth'
import orderSelect from './reducers/orderSelect'
export const store = configureStore({
  reducer: {
    auth : auth,
    orderSelect : orderSelect
  },
})