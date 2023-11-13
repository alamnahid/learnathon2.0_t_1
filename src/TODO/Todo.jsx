import { useEffect, useState } from "react";
import Card from "../Components/Card/Card";
import Loading from "../Components/Loading/Loading";
import image from "../assets/image.png"
import "./Todo.css"
import Error from "../Components/Error/Error";

const Todo = () => {
  const [todoData, setTodoData] = useState([])
  const [loading, setLoading] = useState(true)
  const [status, setStatus] = useState('all');
  const [showData, setShowData] = useState([])
  const [error, setErros] = useState(false)

  useEffect(() => {
    try {
      fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => {
          setTodoData(data)
          setLoading(false)
        })
        .catch((error) => setErros(true))
    }
    catch (error) {
      console.error(error)
    }
  }, [])

  const handleFilter = (e) => {
    e.preventDefault()
    const filter = e.target.value;
    console.log(filter)
    if (filter === 'true') {
      setStatus('true')
      setShowData(todoData.filter(todo => todo.completed === true))
    }
    if (filter === "false") {
      setStatus('false')
      setShowData(todoData.filter(todo => todo.completed === false))
    }
    if (filter === "all") {
      setStatus('all')
      setShowData(todoData)
    }

  }

  useEffect(() => {
    if (status === 'all') {
      setShowData(todoData)
    }
  }, [status, todoData])

  if (loading) {
    return <Loading></Loading>
  }
  if (error) {
    return <Error></Error>
  }

  return (
    <div>

      {/* header section  */}
      <section className="header-section">
      <div className="header">
        <img className="header_image" src={image} alt="" />
        <label className="dropdown-level">
          Check by Task Status
          <select
            name="filter"
            onChange={handleFilter}
            defaultValue={'all'}
          >
            <option value="all">All Task</option>
            <option value="true">Complete Tasks</option>
            <option value="false">Pending Tasks</option>
          </select>
        </label>
      </div>
      </section>

      <div className="card_container">
        {
          showData.map((card, index) => <Card key={index} card={card}></Card>)
        }
      </div>
    </div>
  );
};

export default Todo;