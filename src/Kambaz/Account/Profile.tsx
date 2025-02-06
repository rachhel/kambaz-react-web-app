import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
export default function Profile() {
  return (
    <div id="wd-profile-screen" style={{ width: "300px" }}>
      <h1>Profile</h1>
      <Form.Control id="wd-username"
            defaultValue="alice" placeholder="username"className="mb-2"/>
      <Form.Control id="wd-password"
            defaultValue="123"   placeholder="password" type="password"
            className="wd-password"/>
      <Form.Control id="wd-firstname" 
            defaultValue="Alice" placeholder="First Name" />
      <Form.Control id="wd-lastname" 
            defaultValue="Wonderland" placeholder="Last Name"/>
      <Form.Control id="wd-dob" 
            defaultValue="2000-01-01" type="date"/>
      <Form.Control id="wd-email" 
            defaultValue="alice@wonderland" type="email" />
      <Form.Control id="wd-role" 
            defaultValue="User" type="role"  />
      <Link id="wd-signin-btn"
            to="/Kambaz/Account/Profile"
            className="btn btn-danger w-100 mb-2">
            Sign out </Link>
    </div> );}









