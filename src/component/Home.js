import React from 'react'
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <p>this is home</p>
<button onClick={()=>navigate('order-summary')}>Place Order</button>
    </div>
  )
}
// if we use replace:true we will go back to starting page on going back programmatically; that replace method is optional

export default Home;