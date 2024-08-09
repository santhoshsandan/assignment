import React, { useState } from 'react';
import '../App.css';

function UserData() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTabClick = (index) => {
    setActiveIndex(index);
  };

  const tabs = ['Migration', 'Management', 'Optimization', 'Big Data', 'Data Science'];

  const renderContent = (service) => {
    if (service === 'Management') {
      return (
        <div>
          <h1>End-to-end Cloud Operations</h1>
          <p>Advanced Tools for Unified Control, Optimization, and Real-Time Insights across Your Cloud Environment.</p>
          <div className="row">
            <div className="column">
              <strong>Monitoring and Logging:</strong>
              <ul>
                <li>Cloud Monitoring</li>
                <li>Cloud Logging</li>
                <li>Custom Metrics</li>
                <li>Alerting and Notifications</li>
              </ul>
            </div>
            <div className="column">
              <strong>Debugging and Profiling:</strong>
              <ul>
                <li>Cloud Debugger</li>
                <li>Cloud Profiler</li>
                <li>Error Reporting</li>
                <li>Performance Tracing</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="column">
              <strong>Resource Management:</strong>
              <ul>
                <li>Resource Management</li>
                <li>Instance Rightsizing</li>
                <li>Automated Policies</li>
                <li>Resource Utilization Reports</li>
              </ul>
            </div>
            <div className="column">
              <strong>Automation and Orchestration:</strong>
              <ul>
                <li>Cloud Functions</li>
                <li>Cloud Tasks</li>
                <li>Deployment Manager</li>
                <li>Managed Instance Groups</li>
              </ul>
            </div>
          </div>
        </div>
      );
    } else {
      return <p>Details about {service} services...</p>;
    }
  };

  return (
    <div>
      <div className="header_section">
      <p className="A_sub">We Are Specialized in ------</p>
      <h5 className="A_subject font-size">Cloud Services</h5>
     
     
      <div className="container">
     
      </div>
      
      <div className="dash_tab">
        <div className="tabs">
          {tabs.map((service, index) => (
            <div
              key={index}
              className={`heading_subject ${index === activeIndex ? 'active' : 'in-active'}`}
              onClick={() => handleTabClick(index)}
            >
              <span className="tab_cir_top"></span>
              {service}
              <span className="tab_cir_bottom"></span>
            </div>
          ))}
        </div>
        <div className="tab_desc_inside">
          {renderContent(tabs[activeIndex])}
        </div>
      </div>
      </div>
    </div>
  );
}

export default UserData;
