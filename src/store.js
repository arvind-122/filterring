import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "./slice/counterSlice"
import productReducers from "./slice/ProductSlice"

const store=configureStore({
  reducer:{ counter: counterReducer,
    products:productReducers,
  }
})


export default store;