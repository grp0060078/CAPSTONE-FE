// src/Routes.js
import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin'; // Import Signin component

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" Component={Signup} />
        <Route path="/signin" Component={Signin} /> {/* Add this line to route to Signin component */}
      </Routes>
    </Router>
  );
}

export default AppRoutes;
