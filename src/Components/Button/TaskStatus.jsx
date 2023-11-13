import "./TaskStatus.css"


const TaskStatus = ({completed}) => {
    return (
        <div className={`${completed===true? 'status' : 'pending'}`}>
            <p>{completed===true? 'Complete' : 'Pending'}</p>
            
        </div>
    );
};

export default TaskStatus;