/* eslint-disable react/prop-types */
import axios from "axios";
import { useState } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import baseURL from "../hooks/baseURL";



const ToDoCard = ({ deleteTodo, tempTodo, todo }) => {

     const { _id, title } = todo;

     const [newTitle, setNewTitle] = useState(title);



     const handleEdit = async (e) => {
          const updatedTitle = e.target.innerText;

          try {
               await axios.put(`${baseURL}/todos/${_id}`, {
                    title: updatedTitle,
               });



               setNewTitle(updatedTitle);
          } catch (error) {
               console.error("Error updating todo:", error);

          }


          console.log(updatedTitle)
     };


     const handleRemove = async () => {

          deleteTodo(_id);


     }




     return (
          <div className="card bg-primary text-primary-content flex justify-center items-center w-96 h-20">
               <div className="flex gap-6">
                    <h1 className="text-2xl w-40 border-none" contentEditable="true" suppressContentEditableWarning={true}
                         onBlur={handleEdit}>


                         {newTitle == 'undefined' ? tempTodo : newTitle}

                    </h1>
                    <div className="">

                         <button onClick={handleRemove} className="btn hover:bg-red-600 hover:text-black hover:border-no"><MdOutlineDeleteForever /></button>

                    </div>
               </div>
          </div>
     );
};

export default ToDoCard;