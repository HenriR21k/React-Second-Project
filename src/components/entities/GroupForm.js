import {Form, FormInput, FormSelect} from "./Form";
import Button from "../UI/Button";
import { useState } from "react";


export default function GroupForm(props) {

  //Initialisation
  //State
  const [task, setTask] = useState(null);
  //Methods



  const handleChange = (event) => {
    const updatedTask = {...task, [event.target.name]: event.target.value};
    setTask(updatedTask);
    
  };

  const handleSubmit = async (event) => {
    event.preventDefault()
    task['GroupID'] = props.groupID;
    props.onPost(task);
  
  }

  //View
  return (
    <>
    <h1>Add Task form:</h1>
    <p>{props.groupID}</p>


    <Form onSubmit={handleSubmit}>
        <FormInput name = "TaskTitle" placeholder = "Programming..." label = "Task Title" onChange={handleChange}   />
        <FormInput name = "TaskDescription" placeholder = "Enter task description (max 300 char)..." label = "Task Description" onChange={handleChange}  />
        <FormInput name = "TaskStatus" placeholder = "Outstanding" label = "Task Status" onChange={handleChange}  />
        <FormInput name = "TaskSetDate" placeholder = "YYYY/MM/DDT00:00:00Z" label = "Task Set Date" onChange={handleChange} />
        <FormInput name = "TaskDeadline" placeholder = "YYYY/MM/DDT00:00:00Z" label = "Task Deadline" onChange={handleChange} />
        

        <Button
          className = "submitBtn"
          img = ""
          alt = ""
          title = "Submit"
          onClick = {handleSubmit}
          type = "Button"
        ></Button>

      </Form>




    </>
  )

}

