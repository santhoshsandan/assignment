import React, { useState } from 'react';
import '../App.css';

function App() {
  const [activeService, setActiveService] = useState(null);

  const handleServiceClick = (service) => {
    setActiveService(service === activeService ? null : service);
  };

  const renderPopup = (service) => {
    if (activeService === service) {
      return (
        <div className="popup">
       
        {service === 'Management' ? (
          <div>
            <h2>End-to-end Cloud Operations</h2>
            <p>Advanced Tools for Unified Control, Optimization, and Real-Time Insights across Your Cloud Environment.</p>
            <ul>
              <li>
                <strong>Monitoring and Logging:</strong>
                <ul>
                  <li>Cloud Monitoring</li>
                  <li>Cloud Logging</li>
                  <li>Custom Metrics</li>
                  <li>Alerting and Notifications</li>
                </ul>
              </li>
              <li>
                <strong>Debugging and Profiling:</strong>
                <ul>
                  <li>Cloud Debugger</li>
                  <li>Cloud Profiler</li>
                  <li>Error Reporting</li>
                  <li>Performance Tracing</li>
                </ul>
              </li>
              <li>
                <strong>Resource Management:</strong>
                <ul>
                  <li>Resource Management</li>
                  <li>Instance Rightsizing</li>
                  <li>Automated Policies</li>
                  <li>Resource Utilization Reports</li>
                </ul>
              </li>
              <li>
                <strong>Automation and Orchestration:</strong>
                <ul>
                  <li>Cloud Functions</li>
                  <li>Cloud Tasks</li>
                  <li>Deployment Manager</li>
                  <li>Managed Instance Groups</li>
                </ul>
              </li>
            </ul>
          </div>
        ) : (
          <p>Details about {service} services...</p>
        )}
      </div>
    );
  }
  return null;
};

  return (
    <div className="container">
      <div className="left-section">
      <p >We Are Specialized in ------</p>
        <h1>Cloud Services</h1>
        <div className="service-list">
          {['Migration', 'Management', 'Optimization', 'Big Data', 'Data Science'].map((service) => (
            <div key={service} className="service-item" onClick={() => handleServiceClick(service)}>
                 <span className="plus">{activeService === service ? '-' : '+'}</span>
              <h3>{service}</h3>
           
              {renderPopup(service)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
