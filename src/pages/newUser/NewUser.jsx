import "./newUser.css";
import { Link } from "react-router-dom";

export default function NewUser() {
  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="abc" />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="abc" />
        </div>
        <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="abc@gmail.com" />
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <Link to="/users">
          <button className="newUserButton">Create</button>
        </Link>
      </form>
    </div>
  );
}
