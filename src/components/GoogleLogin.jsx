import { useContext } from "react";
import { GrGoogle } from "react-icons/gr";
import { AuthContext } from "../provider/Auth";


const GoogleLogin = () => {

      const {googleLogin} = useContext(AuthContext);

      const handleGoogle = () => {
             googleLogin();
      }


     return (
          <div>
               <button onClick={handleGoogle} className="btn"><GrGoogle></GrGoogle></button>
          </div>
     );
};

export default GoogleLogin;