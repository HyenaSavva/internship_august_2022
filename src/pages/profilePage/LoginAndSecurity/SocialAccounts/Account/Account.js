import { useState } from "react";

import css from "./AccountStyle";

const Account = ({ optionName, status }) => {
  const [isClosed, setIsClosed] = useState(true);

  const editHandler = () => {
    setIsClosed((prev) => !prev);
  };

  return (
    <>
      <div className="summary">
        <div className="info">
          <label>{optionName}</label>
          <p>{status}</p>
        </div>
        <div className="connect" onClick={editHandler}>
          {isClosed ? "Connect" : "Disconnect"}
        </div>
      </div>
      <style jsx>{css}</style>
    </>
  );
};

export default Account;
