import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
  const params = useParams();
  const userId = params.userId;
  return (
    <div>
        UserDetails of {userId} is here
    </div>
  )
}
// useParams returns an object and is used to display data of user based on userId;

export default UserDetails