import { useEffect, useState } from "react";


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

            <h1>this is todo</h1>

        </div>
    );
};

export default Todo;