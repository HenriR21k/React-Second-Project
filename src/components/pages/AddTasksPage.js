import GroupList from "../UI/GroupList";
import GroupForm from "../entities/GroupForm.js";
import { API } from "../api/apiRequest";


const AddTasksPage = () => {
  // Properties ----------------------------

  /*
  Contextual Value = groupID
  groupID is passed when we navigate to another page
  however since I haven't figured out how to do that,
  I'm setting the groupID to be 1

  */
  const accessedGroupID = 1;
  // Hooks ---------------------------------
  // Methods -------------------------------
  /* 
  Implement the API.Post code here.
  */

  const handleGroupTaskPost = async (newTask) => {

    console.log("input of post: "+JSON.stringify(newTask)); 
    const outcome = await API.post('tasks', newTask);
    
    console.log("outcome of post: "+JSON.stringify(outcome.response));
    //fetchGroupTasks(); will be passed in as a handler throug props to redisplay groupTasks.
  }
  // View ----------------------------------

  return (
      <>
      <GroupForm
      groupID = {accessedGroupID}
      onPost = {handleGroupTaskPost}
      /> {/**Pass in the groupID as a parameter */}
      

      </>

  )

}

export default AddTasksPage;