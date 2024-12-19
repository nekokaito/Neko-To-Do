import { useContext } from "react";
import { AuthContext } from "../provider/Auth";
import Login from "../pages/Login";


const Private = ({ children }) => {

     const { user } = useContext(AuthContext);

     if (user) {
          return children;
     }
     else {
          return <Login></Login>
     }

};

export default Private;