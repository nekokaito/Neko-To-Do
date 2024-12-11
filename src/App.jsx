import ToDoCard from "./components/ToDoCard"


const App = () => {

  const handleToDo = () => {
    console.log('todo handle');
  }


  return (
    <div className="flex mt-20 flex-col items-center justify-center ">
      <div className="flex gap-3">
        <input className="input border-white" type="text" />
        <button className="btn" onClick={handleToDo}>Create</button>
      </div>
      <div className="mt-10">

        <ToDoCard></ToDoCard>

      </div>
    </div>
  )
}

export default App
