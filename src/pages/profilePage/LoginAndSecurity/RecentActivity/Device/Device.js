import { useState } from "react";

import css from "./DeviceStyle";

const Device = ({ optionName, location, deviceIcon }) => {
  const [isClosed, setIsClosed] = useState(true);

  const editHandler = () => {
    setIsClosed((prev) => !prev);
  };

  return (
    <>
      <div className="summary">
        <div className="info">
          <div className="device">{deviceIcon}</div>
          <div className="status">
            <label>{optionName}</label>
            <p>{location}</p>
          </div>
        </div>
        <div className="logDevice" onClick={editHandler}>
          {isClosed ? "Log in device" : "Log out device"}
        </div>
      </div>
      <style jsx>{css}</style>
    </>
  );
};

export default Device;
