import React from 'react'
import { useNavigate } from 'react-router-dom'

const Info = () => {
    const history = useNavigate();
    
  return (
    <div>
        <h1>Info</h1>
        <button type="button" onClick={()=>history('/')}>Home페이지로 이동</button>
    </div>
  )
}

export default Info