
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
            <h2>Title: </h2>
            <h2>{title}</h2>
            </div>

            <div className="complete">
                <TaskStatus completed={completed}></TaskStatus>
            </div>
           </section>
        </div>
    );
};

export default Card;