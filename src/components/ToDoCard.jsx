import { useState } from "react";
import { MdOutlineDeleteForever } from "react-icons/md";


const ToDoCard = ({ todo }) => {
     const { _id, title } = todo;

     const [newTitle, setNewTitle] = useState(title);



     const handleEdit = async (e) => {
          const updatedTitle = e.target.innerText;
          
          setNewTitle(updatedTitle); 
     
     }

     console.log(newTitle);

     



     return (
          <div className="card bg-primary text-primary-content flex justify-center items-center w-96 h-20">
               <div className="flex gap-6">
                    <h1 className="text-2xl w-40" contentEditable="true" suppressContentEditableWarning={true} 
                         onBlur={handleEdit}>{title}</h1>
                    <div className="">
                         
                         <button className="btn"><MdOutlineDeleteForever /></button>
                         
                    </div>
               </div>
          </div>
     );
};

export default ToDoCard;