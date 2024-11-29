import { useSelector } from "react-redux";
import { Outlet, Navigate} from "react-router-dom";

export default function PrivateRouter() {
  const {currentUser} = useSelector((state) => state.user)
  return currentUser ? <Outlet/> : <Navigate to = '/signin'/>
  
}
