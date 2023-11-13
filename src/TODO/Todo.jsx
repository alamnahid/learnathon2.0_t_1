import { useEffect, useState } from "react";
import Card from "../Components/Card/Card";


const Todo = () => {
    const [todoData, setTodoData] = useState([])

    useEffect(() => {
        try {
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(res => res.json())
                .then(data => setTodoData(data))
        }
        catch (error) {
            console.error('error')
        }
    }, [])

    return (
        <div>
           {
            todoData.map((card, index)=> <Card key={index} card={card}></Card>)
           }
        </div>
    );
};

export default Todo;