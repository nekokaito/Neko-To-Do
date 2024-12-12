import { useContext, useEffect, useState } from "react";
import ToDoCard from "./components/ToDoCard"
import axios from "axios";
import { AuthContext } from "./provider/Auth";
import GoogleLogin from "./components/GoogleLogin";
import UserProfile from "./components/UserProfile";


const App = () => {

  const { user } = useContext(AuthContext);
  const [todos, setTodos] = useState([]);

  const userEmail = user?.email
  const handleToDo = async (e) => {
    e.preventDefault();

    const inputTodo = e.target.todo_title.value;
    

    await axios.post('http://localhost:4000/add-todo', { title: inputTodo, email: userEmail }).then(res => console.log(res.data))

    e.target.todo_title.value = "";
    location.reload();
  }

  useEffect(() => {
    const getData = async () => {
      if (!userEmail) return; 
      try {
        const response = await axios.get(`http://localhost:4000/todos/${userEmail}`);
        setTodos(response.data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };
    getData();
  }, [userEmail]); 


  console.log(todos)

  return (
    <div className="flex mt-20 flex-col items-center justify-center ">
      {
        user ? (<UserProfile></UserProfile>) : (<GoogleLogin></GoogleLogin>)
      }

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
