import "./TaskStatus.css"


const TaskStatus = ({completed}) => {
    return (
        <div>
            <p>{completed===true? 'Complete' : 'Pending'}</p>
            
        </div>
    );
};

export default TaskStatus;