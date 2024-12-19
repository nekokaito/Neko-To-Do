import { useEffect, useState } from "react";
import { BsGoogle } from "react-icons/bs";


const Login = () => {

     const [baka, setBaka] = useState(true);
     useEffect(() => {

          const timer = setTimeout(() => {
               setBaka(false);
          }, 5000);

          return () => clearTimeout(timer);
     }, []);
     return (
          <div className="flex items-center justify-center h-screen">
               <div className="flex items-center justify-center gap-10">
                    <div className="relative">
                         <div className="w-96 hover:border-[#ffffffb4] flex justify-center items-center border border-white h-96 rounded-3xl">
                              <BsGoogle size={32}></BsGoogle>
                         </div>
                         <img className="w-52 absolute bottom-1" src="/bb.gif" alt="" />
                         {
                              baka && (<div className="animate-bounce chat chat-start absolute bottom-32 left-10">
                                   <div className="chat-bubble bg-[#ffffff23]">
                                        Login Plzzz iwi
                                   </div>
                              </div>)
                         }

                    </div>


               </div>

          </div>
     );
};

export default Login;