import ToDoCard from "./components/ToDoCard"


const App = () => {

  const handleToDo = () => {
    console.log('todo handle');
  }


  return (
    <div className="flex mt-20 flex-col items-center justify-center ">
      <div className="flex">
        <button onClick={handleToDo}>Create</button>
      </div>
      <div className="">

        <ToDoCard></ToDoCard>

      </div>
    </div>
  )
}

export default App
