import "./write.css";

export default function Write() {
  return (
    <div className="write">
      <img
        className="write-img"
        src="https://images.unsplash.com/photo-1519643381401-22c77e60520e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1053&q=80"
        alt="write-img"
      />
      <form className="write-form">
        <div className="write-form-group">
          <label htmlFor="file-input">
            <i className="write-icon fas fa-plus"></i>
          </label>
          <input id="file-input" type="file" style={{ display: "none" }} />
          <input
            className="write-input"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <div className="write-form-group">
          <textarea
            className="write-input wite-text"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="write-submit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
