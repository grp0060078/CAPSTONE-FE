// src/components/Signin.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Get the navigate function from react-router-dom

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a POST request to your backend for authentication
      const response = await axios.post('https://capstone-be-mnv7.onrender.com/users/signin', {
        username,
        password
      });

      


    console.log('user signin successfully!!')

      // backend sends a token upon successful login
      const token = response.data.token;

      // Store the token in local storage 
      localStorage.setItem('token', token);
      
      // Check if response is defined and has a data property
      if (response && response.data) {
        console.log('Signup Response:', response.data); // Log the response data

        // Extract and display username and password from the response
        alert("user created successfully");

      // Navigate to the queryform  route upon successful login
      navigate('/queryform');
      
    } else {
      console.log('Unexpected Response:', response); // Log the entire response if data is undefined
      alert('Unexpected response from server');
    }
      
    } catch (error) {
      // Handle any authentication errors here
      console.error('Error signing in:', error);
      alert('Failed to sign in. Please check your credentials.');
    }
  };

  return (
    <div className="card">
    <div className="card-header">Sign In</div>
      <form className='signin' onSubmit={handleSubmit}>
        <div className="form-group"> 
          <label>
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </label>
        </div>
        <div className="form-group">
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <button  className="btn-submit" type="submit">Sign In</button>
        </div>
      </form>
    </div>
  );
}

export default Signin;
