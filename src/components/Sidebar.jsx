import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { MdOutlineCreateNewFolder } from "react-icons/md";
import { FaExchangeAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";  
const Sidebar = () => {
  
  return (
    <div className='w-[20%]  shadow-xl rounded-xl p-4 flex flex-col space-y-10 h-96'>
      <h2 className='font-bold bg-gradient-to-r from-pink-500 to-blue-500  bg-clip-text text-transparent'>Handle Your Product !</h2>
      <div className='flex'>
<MdOutlineCreateNewFolder className='ml-20' size={32}/>
  <Link className='ml-0' to={"/create"}>Create product</Link>
      </div>
<div className='flex'>
 <FaExchangeAlt className='ml-18' size={32} />
 <Link className='ml-0' to={"/change"}>Change product</Link>
</div>
<div className='flex'>
 <MdDelete className='ml-20' size={32}/>
 <Link className='ml-0' to={"/delete"}>Delete product</Link>
</div>
    </div>
  )
}

export default Sidebar
