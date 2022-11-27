import { Button, MenuItem, Select, Slider, TextField ,Stack} from '@mui/material'

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { searchByName, setCategory, setCompany,setRange,cleanfilters } from '../slice/ProductSlice.js';

const Filter = () => {
 const{name,price,color,company,category}=useSelector(state=>state.products.filters);
 const{companies,categories}=useSelector(state=>state.products)
  const dispatch= useDispatch();
  
  return (
   <Stack spacing={2}>
    <div>
      <h3>search</h3>
        <TextField fullWidth value={name} onChange={e=>dispatch(searchByName(e.target.value))}/>
    </div>
    <div>
      <h3>price</h3>
        <Slider value={price} min={0} max={3500} steps={500}  valueLabelDisplay="auto" onChange={(e)=>dispatch(setRange(e.target.value))}/>
    </div>
    <div>
      <h3> color</h3>
    <Select
     
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={color}
    label=""
    fullWidth

  >
    <MenuItem value={"all"}>all</MenuItem>
    <MenuItem value={"black"}>black</MenuItem>
    <MenuItem value={"red"}>red</MenuItem>
    <MenuItem value={"yellow"}>yellow</MenuItem>
  </Select>
    </div>
    <div>
      <h3> Company</h3>
    <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={company}
    label=""
    fullWidth
    onChange={(e)=>dispatch(setCompany(e.target.value))}  
  >
    <MenuItem value={"All"}>All</MenuItem>
    {
      companies.map((v,index)=> <MenuItem key={index} value={v}>{v}</MenuItem>)
    }
  </Select>
    </div>
    <div>
      <h3> categories</h3>
      <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={category}
    label=""
    fullWidth
    onChange={(e)=>dispatch(setCategory(e.target.value))}
  >
    
    <MenuItem value={"All"}>all</MenuItem>
    {
      categories.map((v,index)=> <MenuItem key={index} value={v}>{v}</MenuItem>)
    }
  </Select>
    </div>
    <Button variant='outlined' onClick={(e)=>dispatch(cleanfilters(e.target.value))}>clear filters</Button>
   </Stack>
  )
}

export default Filter