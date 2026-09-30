import React from 'react'
import { useProductApi } from '../hooks/productHooks'

const Filter = ({setRerender}) => {

    let {filterProducts} = useProductApi()

  return (
    <div className='p-3  flex  items-center gap-6 w-full border rounded border-gray-500'>
      <div className='w-full justify-between flex gap-8 '>
        <input onChange={(e)=>filterProducts(e.target.value)} className='w-full p-2 outline-0 border rounded' type="text" placeholder='Search Products...' />
      <button onClick={()=>{setRerender(prev=>!prev)}} className='p-2 bg-white text-black rounded border-0'>Search</button>
      </div>
    <div >
        <span>Select Categories</span>
      <select className='p-2 bg-white text-black rounded border-0 outline-0'>
        <option value="groceries">Groceries</option>
        <option value="furniture">Furniture</option>
        <option value="qfragrances">Fragrances</option>
        <option value="beauty">Beauty</option>
      </select>
    </div>
    </div>
  )
}

export default Filter