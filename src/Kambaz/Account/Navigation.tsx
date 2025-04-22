import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export default function CourseNavigation() {
  const currentUser = useSelector((state: any) => state.accountReducer.currentUser);
  const { pathname } = useLocation();
  const active = (path: string) => (pathname.includes(path) ? "active" : "");

  return (
    
    
    <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
      {currentUser && currentUser.role === "FACULTY" && (
      <Link to={`/Kambaz/Account/Users`} className={`list-group-item ${active("Users")}`}> Users </Link> )}
      <Link to="/Kambaz/Account/Signin" id="wd-course-home-link"
        className="list-group-item active border border-0"> Signin </Link>
      <Link to="/Kambaz/Account/Signup" id="wd-course-modules-link"
        className="list-group-item text-danger border border-0"> Signup </Link>
      <Link to="/Kambaz/Account/Profile" id="wd-course-piazza-link"
        className="list-group-item text-danger border border-0"> Profile </Link>
     
      
    
 
     
    </div>
);}