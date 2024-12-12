import { useContext } from "react";
import { AuthContext } from "../provider/Auth";

const UserProfile = () => {

     const {user} = useContext(AuthContext);
     return (
          <div>
               <h1>{user?.email}</h1>
          </div>
     );
};

export default UserProfile;