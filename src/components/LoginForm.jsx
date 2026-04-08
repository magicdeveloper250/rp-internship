
import React, { useState } from 'react'

const LoginForm = () => {

    const [formData, setFormData] = useState({
        email:"",
        password:""
    });

    const handleDataChange = (e)=>{
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(`Data is arriving with Email: ${formData.email}`);     
    }
  return (
    <div>
        <form onSubmit={handleSubmit} className='auth-container'>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' id='email' onChange={handleDataChange}/>
            <label htmlFor="password">Password</label>
            <input type="password" name='password' id='password' onChange={handleDataChange}/>

            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default LoginForm