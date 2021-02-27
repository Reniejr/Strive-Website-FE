import React, { useState } from "react";

//STYLE IMPORT
import "./Account.scss";

export default function Account() {
  const [login, setLogin] = useState(false);

  return (
    <div className="account">
      {login ? (
        <div className="account-container">
          <span>Batch</span>
          <span>Name</span>
          <img src="https://i.ibb.co/SXFJKwD/strive.png" alt="" />
        </div>
      ) : (
        <div className="account-container">
          <button>Log in / Sign in</button>
          <img src="https://i.ibb.co/SXFJKwD/strive.png" alt="" />
        </div>
      )}
    </div>
  );
}
