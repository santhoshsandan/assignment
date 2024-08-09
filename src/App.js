import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';   
import Home from './components/home';
import Login from './components/login';
import Homepage from './components/Homepage';  

function App() {
  const [data, setData] = useState([]); // State for storing fetched data

  useEffect(() => {
      fetch('http://localhost:8081/users')
          .then(res => res.json()) // Convert response to JSON
          .then(data => setData(data)) // Set data state
          .catch(err => console.error(err)); // Handle errors
  }, []); // Dependency array ensures useEffect runs only once on mount

  return (
    <div>
     
     {/* <button><a href="/home" className="button">Home</a></button>  */}
 
      {/* <table>
        <thead>
          <tr> 
            <th>id</th> 
            <th>Username</th>
            <th>Password</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={i}>
              <td>{d.id}</td>
              <td>{d.username}</td>
              <td>{d.password}</td>
              <td>{d.role}</td>
            </tr>
          ))}
        </tbody>
      </table> */}

      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Login data={data} />} />
          <Route path="/homepage" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
