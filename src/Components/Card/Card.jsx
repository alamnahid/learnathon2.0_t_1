
import TaskStatus from "../Button/TaskStatus";
import "./Card.css"

const Card = ({card}) => {

    const {userId, title, completed} = card;

    return (
        <div className="card">
            <div>
                User ID: {userId}
            </div>
           <section className="content-section">
           <div className="card-content">
            <h3>Title: </h3>
            <h3>{title}</h3>
            </div>

            <div className="complete">
                <TaskStatus completed={completed}></TaskStatus>
            </div>
           </section>
        </div>
    );
};

export default Card;