
import React, { useState } from 'react'
import apiClient from '../api/apiClient';
import { isAxiosError } from "axios";
const LoginForm = () => {
  
    const [formData, setFormData] = useState({
        email:"",
        password:""
    });
 const [error, setError] = useState(null);
    const handleDataChange = (e)=>{
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    
      const resp = await apiClient.post("/auth/Login", formData);
    } catch (error) {
      if (isAxiosError(error)) {
        if (error.request) {
          setError("Network error");
        } else if (error.response) {
          setError(error.response.data.error);
        }
      }else{
        setError("Unknown error");
      }
      
    }
  };
  return (
    <div>
        <form onSubmit={handleSubmit} className='auth-container'>
            <label htmlFor="email">Email</label>
            <input type="email" name='email' id='email' onChange={handleDataChange}/>
            <label htmlFor="password">Password</label>
            <input type="password" name='password' id='password' onChange={handleDataChange}/>

            <button type='submit' onChange={handleSubmit}>Login</button>
        </form>
    </div>
  )
}

export default LoginForm