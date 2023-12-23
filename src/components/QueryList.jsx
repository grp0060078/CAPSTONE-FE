// components/QueryList.jsx

import React, { useState } from 'react';
import '../styles/App.css';
import { useNavigate } from 'react-router-dom';

const QueryList = ({ queries, onSolve }) => {
  const [solutions, setSolutions] = useState({});
  const navigate = useNavigate();

  const handleSolve = (queryId) => {
    const solution = solutions[queryId];  // Define the solution here
    if (solution) {
      onSolve(queryId, solution);
      //Clear the solution textarea after solving
      setSolutions({ ...solutions, [queryId]: '' });

 // Navigate to the signup route upon successful solved
      navigate('/');

    } else {
      // Handle case where solution is empty
      console.error('Solution cannot be empty');
    }
  };

  return (
    <div className="query-card">
        <div className="query-header">Query List</div>
      <ul>
        {queries.map((query) => (
          <li key={query._id} className="query-item">
           <p><strong>Student:</strong> {query.student}</p>
            <p><strong>Category:</strong> {query.category}</p>
            <p><strong>Communication Language:</strong> {query.voiceCommunicationLanguage}</p>
            <p><strong>Query Title:</strong> {query.queryTitle}</p>
            <p><strong>Query Description:</strong> {query.queryDescription}</p>
            <p><strong>Available Time:</strong> {query.availableTime.from} - {query.availableTime.till}</p>
            <p><strong>Solution:</strong> {query.solution || 'Not solved yet'}</p>
            {!query.solution && (
              <div >
                <textarea
                  className='text'
                  value={solutions[query._id] || ''}  
                  onChange={(e) => setSolutions({ ...solutions, [query._id]: e.target.value })}
                  placeholder="Enter the solution..."
                  rows="3"
                />
                <br />
                <button className="btn" onClick={() => handleSolve(query._id)}>
                  Solve Query
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QueryList;