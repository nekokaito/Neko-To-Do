import { useContext } from "react";
import { AuthContext } from "../provider/Auth";

const UserProfile = () => {

     const { user } = useContext(AuthContext);
     return (
          <div className="flex my-10 gap-10 items-center justify-center">
                
               <img className="rounded-[10px]" src={user?.photoURL} alt="" />

               <button className="btn">Log Out</button>
          </div>
     );
};

export default UserProfile;