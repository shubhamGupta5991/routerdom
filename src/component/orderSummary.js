import React from 'react'
import { useNavigate } from 'react-router-dom'

const OrderSummary = () => {
    const navigate = useNavigate()
  return (
    <>

    <div>Your Order-Summary is here</div>
    <button onClick={()=>navigate(-1)}>Go back</button> 
    {/* // -1 is used to go back to home page */}
    </>
  )
}
// this is example of navigate programmatically

export default OrderSummary