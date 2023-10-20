import React, { useState } from 'react'

const RegisterPage = () => {

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');

    async function register(e){
        e.preventDefault();
        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({username, password}),
            headers: {'Content-Type': 'application/json'}
        })
        if(response.status === 200){
            alert("Registration Successful");
        }
        else{
            alert("Registration Failed!");
        }
    }
  return (
    <form className='register' onSubmit={register}>
        <h1>Register Here</h1>
            <input type="text"
            placeholder='username'
            value={username}
            onChange={(e) =>setUserName(e.target.value)}
            />
            <input type="password"
            placeholder='enter password'
            value={password}
            onChange={(e) =>setPassword(e.target.value)}
            />
            <button>Register</button>
        </form>
  )
}

export default RegisterPage