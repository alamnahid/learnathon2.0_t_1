import { useEffect, useState } from "react";
import Card from "../Components/Card/Card";
import Loading from "../Components/Loading/Loading";


const Todo = () => {
    const [todoData, setTodoData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        try {
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(res => res.json())
                .then(data => {
                    setTodoData(data)
                    setLoading(false)
                })
        }
        catch (error) {
            console.error('error')
        }
    }, [])

    if(loading){
        return <Loading></Loading>
    }

    return (
        <div>
            {
                todoData.map((card, index) => <Card key={index} card={card}></Card>)
            }
        </div>
    );
};

export default Todo;