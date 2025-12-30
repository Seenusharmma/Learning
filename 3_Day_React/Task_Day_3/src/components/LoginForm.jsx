import React from 'react'
import { useState } from 'react'

const LoginForm = () => {

    const [form, setForm] = useState({
        email:"",
        password:"",
    });

    const handleChange = (e)=>{
        const {name, value} = e.target;
        setForm({...form,[name]:value});

    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        if(!form.email || !form.password){
            alert("all filds are required");
             return
        }
       console.log("Form Submmited",form);

    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name='email' value={form.email} onChange={handleChange} placeholder='Enter your Email' />
        <input type="password" name='password' value={form.password} onChange={handleChange} placeholder='Enter your Password' />
        <button type='Submit'>Submit</button>
      </form>
    </div>
  )
}

export default LoginForm
