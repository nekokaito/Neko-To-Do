import { useEffect, useState } from "react";
import ToDoCard from "./components/ToDoCard"
import axios from "axios";


const App = () => {

  const [todos, setTodos] = useState([]);


  const handleToDo = async (e) => {
    e.preventDefault();

    const inputTodo = e.target.todo_title.value;


    await axios.post('http://localhost:4000/add-todo', { title: inputTodo }).then(res => console.log(res.data))

    e.target.todo_title.value = "";
    location.reload();
  }

  useEffect(() => {
    const getData = async () => {
      await axios.get('http://localhost:4000/todos').then(res => setTodos(res.data))
    }
    getData()
  }, [])

  

  return (
    <div className="flex mt-20 flex-col items-center justify-center ">
      <div className="">
        <form className="flex gap-5" onSubmit={handleToDo}>
          <input name="todo_title" className="input border-white" type="text" />
          <button className="btn" type="submit">Create</button>
        </form>
      </div>
      <div className="mt-10 flex flex-col gap-5">
        {
          todos.map(todo => <ToDoCard key={todo._id} todo={todo}></ToDoCard>)
        }

        

      </div>
    </div>
  )
}

export default App
