import React from 'react'
import { useState } from 'react'

const InternTask = () => {

    const [form, setForm] = useState({
        email: "",
        password: "",

    })

    const handlechange = (e)=> {
        const {name , value} = e.target;
        setForm({...form, [name] : value});
    }

    const handleSubmit = (e) => {
    e.preventDefault(); // ✅ FIX 1

    if (!form.email) {
      alert("Email is required");
      return;
    }

    if (form.password.length < 8) { // ✅ FIX 2
      alert("Password must be 8 or more characters");
      return; // ✅ FIX 3
    }

    console.log("Form submitted", form);
    alert("Form submitted successfully ✅");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name='email' value={form.email} onChange={handlechange} placeholder='Enter your Email' />
        <input type="password" name='password' value={form.password} onChange={handlechange} placeholder='Enter your Password' />
        <button type='Submit'>Submit</button>
      </form>
    </div>
  )
}

export default InternTask
