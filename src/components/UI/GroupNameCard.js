import './GroupNameCard.css';

function GroupNameCard({group}) {


  return (

    <div className="GroupNameCard">
    
    <p>Group: {group.GroupName}</p>
      <div className='TaskCard'>
        <ul>
          <li>Hard Coded Task 1</li>
          <li>Hard Coded Task 2</li>
          <li>Hard Coded Task 3</li>
        </ul>
      </div>
    </div>
    
  )
};

export default GroupNameCard;