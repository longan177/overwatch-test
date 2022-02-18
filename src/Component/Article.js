import React, { useState } from "react";
import { useUserContext } from "../context";
function Article() {
  const { user } = useUserContext();

  return (
    <article>
      <div className="fixed-container display-container">
        {user && <UserInfo user={user}></UserInfo>}
        {user && <EditUser user={user}></EditUser>}
      </div>
    </article>
  );
}

export default Article;

function UserInfo({ user }) {
  const { data } = user;
  const { email, first_name, last_name, avatar } = data;

  return (
    <div className="userinfo border">
      <div className="img-container">
        <img src="/assets/Mask Group 2.png"></img>
      </div>
      <div className="display-user">
        <div>
          <h3>
            {first_name} {last_name}
          </h3>
          <h4>{email}</h4>
        </div>
        <div className="btn-container">
          <button className="btn-primary">Connect</button>
          <button className="btn-primary">Message</button>
        </div>
      </div>
      <div className="profile-container">
        <img src={avatar}></img>
      </div>
    </div>
  );
}
function EditUser({ user }) {
  const { data } = user;
  const { email, first_name, last_name } = data;
  const [firstName, setfirstName] = useState(first_name);
  const [lastName, setlastName] = useState(last_name);
  const [userEmail, setUserEmail] = useState(email);

  return (
    <div className="editinfo border">
      <div className="edit-header">
        <h2>Edit Profile</h2>
      </div>
      <form>
        <div className="name-input ">
          <div className="input-control">
            <div>First Name</div>
            <input
              onChange={(e) => setfirstName(e.target.value)}
              className="border"
              type="text"
              value={firstName}
            ></input>
          </div>
          <div className="input-control">
            <div>Last Name</div>
            <input
              onChange={(e) => setlastName(e.target.value)}
              className="border"
              type="text"
              value={lastName}
            ></input>
          </div>
        </div>
        <div className="email-input">
          <div className="input-control">
            <div>Email</div>
            <input
              onChange={(e) => setUserEmail(e.target.value)}
              className="border"
              type="text"
              value={userEmail}
            ></input>
          </div>
        </div>
        <div className="edit-profile-btn-container">
          <button className="btn-primary"> Confirm</button>
        </div>
      </form>
    </div>
  );
}
