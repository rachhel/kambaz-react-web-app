import { Routes, Route, Navigate } from "react-router";
import Signin from "./Signin";
import Profile from "./Profile";
import Signup from "./Signup";
import "../styles.css";
import Navigation from "./Navigation";
import { useSelector } from "react-redux";


export default function Account() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    
    <div id="wd-accounts">

    <div className="d-none d-md-block">
    </div>
    <div className="d-flex vh-100">
    <Navigation />

    <Routes>
    <Route path="/" element={<Navigate to={ currentUser ? "/Kambaz/Account/Profile" : "/Kambaz/Account/Signin" }/>}/>
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </div>
</div>
  );
}