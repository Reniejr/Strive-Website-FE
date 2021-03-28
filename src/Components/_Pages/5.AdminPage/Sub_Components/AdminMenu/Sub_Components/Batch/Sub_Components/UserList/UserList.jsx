import React from "react";

//STYLE IMPORT
import "./UserList.scss";

export default function UserList({ state, functions }) {
  return (
    <div className="user-list">
      <h4 style={{ display: state.listName === "" ? "none" : "" }}>
        <span>/</span>
        {state.listName}
      </h4>
      <ul>
        {state.list.length > 0 ? (
          state.list.map((user, userI) => {
            return <li key={user._id}>{user.firstName}</li>;
          })
        ) : (
          <p>No user in the list</p>
        )}
      </ul>
    </div>
  );
}
