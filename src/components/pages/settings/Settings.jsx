import "./settings.css";
import Sidebar from "../../sidebar/Sidebar";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settings-wrapper">
        <div className="settings-title">
          <span className="settings-title-update">Update Your Account</span>
          <span className="settings-title-delete">Delete Account</span>
        </div>
        <form className="settings-form">
          <label>Profile Picture</label>
          <div className="settings-ppicture">
            <img
              src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt=""
            />
            <label htmlFor="file-input">
              <i className="settings-picture-icon far fa-user-circle"></i>
            </label>
            <input
              id="file-input"
              type="file"
              style={{ display: "none" }}
              className="settings-picture-input"
            />
          </div>
          <label>Username</label>
          <input type="text" placeholder="Bruna" name="name" />
          <label>Email</label>
          <input type="email" placeholder="bruna@gmail.com" name="email" />
          <label>Password</label>
          <input type="password" placeholder="Password" name="password" />
          <button className="settings-submit" type="submit">
            Update
          </button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
