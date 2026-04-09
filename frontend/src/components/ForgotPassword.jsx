import React, { useState } from "react"
export default function  ForgotPassword(){
const [email,setEmail]=useState("")
return(
    <>
    <form>
    <h1>reset password</h1>
    <label htmlFor="email">email</label>
    <input type="email" id="email" name="email" onChange={(e)=>{setEmail(e.target.value)}}/>
    <button type="submit">submit</button>
    </form>
    </>
)
}