import { useEffect, useState } from "react";
import Card from "../Components/Card/Card";
import Loading from "../Components/Loading/Loading";


const Todo = () => {
    const [todoData, setTodoData] = useState([])
    const [loading, setLoading] = useState(true)
    const [status, setStatus] = useState('all');
    const [showData, setShowData] = useState([])

    useEffect(() => {
        try {
            fetch('https://jsonplaceholder.typicode.com/todos')
                .then(res => res.json())
                .then(data => {
                    setTodoData(data)
                    setLoading(false)
                })
                .catch((error)=>console.log(error))
        }
        catch (error) {
            console.error('error')
        }
    }, [])

  const handleFilter = (e)=>{
    e.preventDefault()
    const filter = e.target.value;
    console.log(filter)
    if(filter==='true'){
      setStatus('true')
    setShowData(todoData.filter(todo=>todo.completed===true))
    }
    if(filter==="false"){
      setStatus('false')
      setShowData(todoData.filter(todo=>todo.completed===false))
    }
    if(filter==="all"){
      setStatus('all')
      setShowData(todoData)
    }

  }

  useEffect(()=>{
    if(status==='all'){
      setShowData(todoData)
    }
  }, [status, todoData])
    
    if(loading){
        return <Loading></Loading>
    }

    return (
        <div>

        <label>
        Show Completed:
        <select
         name="filter"
         onChange={handleFilter}
         defaultValue={'all'}
        >
          <option value="all">All</option>
          <option value="true">Complete</option>
          <option value="false">Filter</option>
        </select>
      </label>

            <div>
            {
                showData.map((card, index) => <Card key={index} card={card}></Card>)
            }
        </div>
        </div>
    );
};

export default Todo;