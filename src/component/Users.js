import React from 'react'
import { Outlet,useSearchParams } from 'react-router-dom'


const Users = () => {
  const[searchParams,setSearchParams]=useSearchParams();
  let activeUsers = searchParams.get('filter')==='active';
  return (
    <div><h2>User 1</h2>
    <h2>User 2</h2>
    <h2>User 3</h2>
    <Outlet/>
    <div>
    <button onClick={()=>setSearchParams({filter:'active'})}>Show Active users</button>
    <button onClick = {()=>setSearchParams({})}>Show All users</button>
    </div>
    {activeUsers?<h2>Showing active users</h2>:<h2>showing all users</h2>}
    </div>
  )
}
// searchParams are generally used for filtering purposes

export default Users