//components/Signup.js

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/users/signup', { username, password });

       // Check if response is defined and has a data property
      if (response && response.data) {
        console.log('Signup Response:', response.data); // Log the response data

        // Extract and display username and password from the response
        alert("user created successfully");

         // Navigate to the signin route upon successful login
      navigate('/signin');

      } else {
        console.log('Unexpected Response:', response); // Log the entire response if data is undefined
        alert('Unexpected response from server');
      }
      
    } catch (error) {
      // Handle the error response if available
      if (error.response && error.response.data) {
        console.log('Signup Error:', error.response.data); // Log the error data
        alert(error.response.data.error);

        
      } else {
        console.log('Error Details:', error); // Log the error details if no response data available
        alert('An unexpected error occurred');
      }
    }
  };

  
    return (
      <div className="card">
        <div className="card-header">Sign Up</div>
        <div className="card-content">
          <form onSubmit={handleSubmit}>
            <input 
              className="form-input" 
              type="text" 
              placeholder="Username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required 
            />
            <input 
              className="form-input" 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required 
            />
            <button className="form-button" type="submit">Signup</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default Signup;