import React from "react"
import { useState } from "react"

const LoginForm = () => {
    const [form, setForm] = useState({email : "", password: ""});

    const handleChange = (e)=> {
        const {name, value} = e.target;
        setForm({...form, [name] : value}); // i don't understand the lines of code 

    }

    // Handle Submit 
    const handleSubmit = (e) => {
  e.preventDefault();

  if (!form.email || !form.password) {
    alert("All fields are required");
    return; // ⬅️ STOP execution
  }

  console.log("Form submitted", form);
};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='email' name="email" value={form.email} onChange={handleChange} placeholder='Enter you email' />
        <input type='password' name="password" value={form.password} onChange={handleChange} placeholder='Enter you password' />
        <button type='submit'>Submit</button>
      </form>
     
    </div>
  )
}

export default LoginForm
