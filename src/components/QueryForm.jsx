//components/QueryForm.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import '../styles/App.css';
import { useNavigate } from 'react-router-dom';

const QueryForm = ({ onSubmit }) => {
  const [student, setStudent] = useState('');
  const [category, setCategory] = useState('');
  const [voiceCommunicationLanguage, setVoiceCommunicationLanguage] = useState('');
  const [queryTitle, setQueryTitle] = useState('');
  const [queryDescription, setQueryDescription] = useState('');
  const [availableTimeFrom, setAvailableTimeFrom] = useState('');
  const [availableTimeTill, setAvailableTimeTill] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      student,
      category,
      voiceCommunicationLanguage,
      queryTitle,
      queryDescription,
      availableTime: { from: availableTimeFrom, till: availableTimeTill },
      
    });
     // Navigate to the querylist  route upon successful create
    navigate('/querylist');
    // Reset form fields
    setStudent('');
    setCategory('');
    setVoiceCommunicationLanguage('');
    setQueryTitle('');
    setQueryDescription('');
    setAvailableTimeFrom('');
    setAvailableTimeTill('');
  };

  return (
    <div className="card">
       <div className="card-header">Query Form</div>
    <form onSubmit={handleSubmit}>
      <div className="form-group">
      <label>
        Student:
        <input type="text" value={student} onChange={(e) => setStudent(e.target.value)} required />
      </label>
      </div>

      
      <div className="form-group">
       
      <label>
        Category:
        <select  className ='option' value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="">---Select Category---</option>
          <option value="zenclass doubt">Zenclass Doubt</option>
          <option value="coordination related">Coordination Related</option>
          <option value="placement related">Placement Related</option>
        </select>
      </label>
      </div>

           
      <div className="form-group">
      <label>
        Voice Communication Language:
        <select
          className ='option'
          value={voiceCommunicationLanguage}
          onChange={(e) => setVoiceCommunicationLanguage(e.target.value)}
          required
        >
          <option value="">---Select Language---</option>
          <option value="tamil">Tamil</option>
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
      </label>
      </div>
      

      <div className="form-group">
      <label>
        Query Title:
        <input type="text" placeholder='Enter the query title' value={queryTitle} onChange={(e) => setQueryTitle(e.target.value)} required />
      </label>
      <label>
        Query Description:
        <textarea
          value={queryDescription} placeholder='Enter the Description'
          onChange={(e) => setQueryDescription(e.target.value)}
          required
        />
      </label>
      </div>

      <div className="form-group">
      <label>
        Available Time (From):
        <input
          type="text"
          value={availableTimeFrom}
          onChange={(e) => setAvailableTimeFrom(e.target.value)}
          required
        />
      </label>
      </div>

      <div className="form-group">
      <label>
        Available Time (Till):
        <input
          type="text"
          value={availableTimeTill}
          onChange={(e) => setAvailableTimeTill(e.target.value)}
          required
        />
      </label>
      </div>
      <button className="btn-submit" type="submit">Create Query</button>
    </form>
    </div>
  );
};

export default QueryForm;