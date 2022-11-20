import './GroupNameCard.css';
import './TaskCard.js';
import { useState, useEffect } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import AddTasksPage from '../pages/AddTasksPage';

function GroupNameCard({group, userID}) {
  //Initialisation -------------------

  const endpoint = `/groups/${group.GroupID}/users/${userID}/tasks`
  const navigate = useNavigate();
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

  const NavigateToAddTasksForm = (groupID) => {

    const testValue = 1;
    //include navigate statement with params
      <AddTasksPage
      groupCode = {testValue}
      />

      navigate('../GroupPage/AddTaskPage');
      
  
  }

  function NavigateTest(groupCode) {
    navigate("../GroupPage/AddTaskPage")
  }

  const navigateToViewGroupTasks = () => {
  navigate("../")
  }
  
  
  return (

    <div className="GroupNameCard">

    
    <p onClick={NavigateToAddTasksForm}>Group {group.GroupID}: {group.GroupName}</p>
    
      
      <div className='TaskCard'>
        {/*tasks.map((task) => {
          return (
            <div>
              <ul>
                <li>{task.TaskTitle}</li>
              </ul>
            </div>
          );
        })*/}
      </div>
      
    </div>
    
  )
};

export default GroupNameCard;