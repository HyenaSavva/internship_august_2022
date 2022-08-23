import { useState } from "react";

import css from "./AccountStyle";

const Account = ({ optionName, subTitle }) => {
  const [isClosed, setIsClosed] = useState(false);

  const editHandler = () => {
    setIsClosed((prev) => !prev);
  };
  return (
    <>
      <div className="summary">
        <div className="info">
          <div className="status">
            <label>{optionName}</label>
            <p>{subTitle}</p>
          </div>
        </div>
        <div className="logDevice" onClick={editHandler}>
          {isClosed ? "Activate" : "Deactivate"}
        </div>
      </div>
      <style jsx>{css}</style>
    </>
  );
};
export default Account;
