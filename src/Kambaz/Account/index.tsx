import { Routes, Route, Navigate } from "react-router";
import Signin from "./Signin";
import Profile from "./Profile";
import Signup from "./Signup";
import "../styles.css";

export default function Account() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/Kambaz/Account/Signin" />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </div>
  );
}
