import { useState } from 'react'
import reactLogo from './assets/react.svg'

import{ useSelector,useDispatch} from "react-redux";
import {addByValue, addCount,subCount} from "./slice/counterSlice"
import Layout from './components/Layout';


function App() {
  const [value,setValue]=useState(0);
  const count=useSelector(state=>state.counter.count);
  const dispatch=useDispatch();
  const add=()=>{
    dispatch(addCount());
  }
  const minus=()=>{
    dispatch(subCount());
  }
  const handleAdd=()=>{
    dispatch(addByValue());
  }
  
  return (
   <>
   <Layout/>
   
   </>
  )
}

export default App
