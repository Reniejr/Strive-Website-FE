import React from "react";

//PERSONAL COMPONENTS IMPORTS
import SignIn from "./Sub_Components/SignIn/SignIn";
import BG01 from "../../_Main/Backgrounds/BG01/BG01";

//STYLE IMPORT
import "./SignInPage.scss";

export default function SignInPage() {
  return (
    <div id="sign-in-page">
      <BG01 />
      <SignIn />
    </div>
  );
}
