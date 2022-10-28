import GroupNameCard from './GroupNameCard';
import classes from './GroupList.css';
import CardContainer from './CardContainer';


export function GroupList(props) {
    return (
        <CardContainer className={classes.list}>
            {
                props.groups.map(group => 
                    <GroupNameCard 
                        key={group.GroupID} 
                        group = {group} 
                    />
                )
            }
        </CardContainer>
    );
}

export default GroupList;