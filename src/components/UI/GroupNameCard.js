import './GroupNameCard.css';
import './TaskCard.js';
import { useState, useEffect } from "react";

function GroupNameCard({group}) {
  //Initialisation -------------------
  //Store groupID in variable
  //Also store userID in variable
  const loggedInUserID = 31;
  const endpoint = `/groups/users/tasks/${loggedInUserID},${group.GroupID}`
  // State ---------------------------------------
  const [tasks, setTasks] = useState(null);

  // Methods -------------------------------------
  const apiCall = async (endpoint) => {
  const URL = 'http://localhost:5000/api';
  const endpointAddress = URL + endpoint;
  const response = await fetch(endpointAddress)
  const result = await response.json();
  setTasks(result);
  }
  
  useEffect(() => { apiCall(endpoint) }, []);

  
  
  return (

    <div className="GroupNameCard">
    
    <p>Group {group.GroupID}: {group.GroupName}</p>
      
      <div className='TaskCard'>
        {tasks.map((task) => {
          return (
            <div>
              <ul>
                <li>{task.TaskTitle}</li>
              </ul>
            </div>
          );
        })}
      </div>

    </div>
    
  )
};

export default GroupNameCard;