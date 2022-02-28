import React from "react";

function InputForm() {
  return (
    <div className="InputForm">
      <div className="IF">
        <input type="text" placeholder="Email address or phone number" />
      </div>
      <div className="IF">
        <input type="password" placeholder="Password" />
      </div>
      <input className="IFlogin" type="submit" value={"Login"} />
      <span className="IFsapn">
        <a href="#">Forgotten your password?</a>
      </span>
      <div className="IFCheckBox">
        <input type="checkbox" /> <span>Keep me signed in</span>
      </div>
    </div>
  );
}
export default InputForm;
