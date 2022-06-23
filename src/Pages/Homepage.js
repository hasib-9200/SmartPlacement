import React from 'react'
import { Redirect } from 'react-router-dom'
import "../Style/homepage.css";
const Homepage = ({authorized}) => {
    if(!authorized){
        return <Redirect to="/login"/>;
    }
  return (
    <div className="banner">
        <div className="logout">
            <a href="/#">Log Out</a>
        </div>
        <div className="navbar">
            {/* <img src="images/My project.png" className="logo" /> */}
            <ul>
                <li><a href="/#">Home</a></li>
                <li><a href="/#">Status</a></li>
                <li><a href="/#">Requirements</a></li>
                <li><a href="/#">Applications</a></li>
                <li><a href="/#">Student Records</a></li>
                <li><a href="/#">Calendar</a></li>
            </ul>
        </div>
        <div className="content">
            <h2>STUDENT PLACEMENT PORTAL</h2>
            <p>Stay up to date with your placement applications!</p>
            <div>
                <button className='newButton'><span></span>Pending Tasks</button>
                <button className='newButton'><span></span>Notifications</button>
            </div>
        </div>
  </div>
  )
}

export default Homepage