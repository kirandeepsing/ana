import React from 'react'
import { useSelector } from 'react-redux'
import Sidebar from './Sidebar'
import Rightbar from './Rightbar'


const Admin = () => {
  return (
    <>
    <div className='flex'>
    <Sidebar/>
<Rightbar/>
    </div>
    </>

  )
}

export default Admin
