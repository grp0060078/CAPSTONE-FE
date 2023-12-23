// App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QueryForm from './components/QueryForm';
import QueryList from './components/QueryList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import
import Signup from './components/Signup';
import Signin from './components/Signin';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const [queries, setQueries] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/queries/list')
      .then(res => setQueries(res.data))
      .catch(error => console.error(error));
  }, []);

  const handleQuerySubmit = (data) => {
    axios.post('http://localhost:3001/queries/create', data)
      .then(res => setQueries([...queries, res.data]))
      .catch(error => console.error(error));
  };

  const handleQuerySolve = (id, solution) => {
    axios.put(`http://localhost:3001/queries/solve/${id}`, { solution })
      .then(res => {
        const updatedQueries = queries.map(query => (query._id === id ? res.data : query));
        setQueries(updatedQueries);
      })
      .catch(error => console.error(error));
  };
  

  return (
    <Router>
      <div className="App">
        <h1>Dashboard </h1>
        <Routes> 
          <Route path="/" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/queryform" element={
            <>
              <QueryForm onSubmit={handleQuerySubmit} /></>
             } />
           <Route path="/querylist" element={
            <>
              <QueryList queries={queries} onSolve={handleQuerySolve} /></>
             } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

