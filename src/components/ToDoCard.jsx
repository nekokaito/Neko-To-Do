import axios from "axios";
import { useState } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";


const ToDoCard = ({ tempTodo, todo }) => {
     const { _id, title } = todo;

     const [newTitle, setNewTitle] = useState(title);



     const handleEdit = async (e) => {
          const updatedTitle = e.target.innerText;

          try {
               await axios.put(`http://localhost:4000/todos/${_id}`, {
                    title: updatedTitle,
               });



               setNewTitle(updatedTitle);
          } catch (error) {
               console.error("Error updating todo:", error);

          }


          console.log(updatedTitle)
     };


     const handleRemove = () => {


     }


     console.log(newTitle);


     return (
          <div className="card bg-primary text-primary-content flex justify-center items-center w-96 h-20">
               <div className="flex gap-6">
                    <h1 className="text-2xl w-40" contentEditable="true" suppressContentEditableWarning={true}
                         onBlur={handleEdit}>


                         {newTitle == 'undefined' ? tempTodo : newTitle}

                    </h1>
                    <div className="">

                         <button onClick={handleRemove} className="btn"><MdOutlineDeleteForever /></button>

                    </div>
               </div>
          </div>
     );
};

export default ToDoCard;