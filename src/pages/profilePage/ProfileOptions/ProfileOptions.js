import { useState } from "react";

import Option from "../Option/Option";
import ProfileOptionsStyle, { options } from "./ProfileOptionsStyle";

const ProfileOptions = () => {
  const [isOpened, setIsOpened] = useState(false);
  const clickHandler = (event) => {
    setIsOpened((last) => !last);
  };

  return (
    <>
      <div className="title">Profile</div>
      {options.map((option, index) => {
        return (
          <Option
            optionName={option.optionName}
            subTitle={option.subTitle}
            children={option.children}
            childStyle={option.childStyle}
            disabled={isOpened}
            clickHandler={clickHandler}
            key={index}
          />
        );
      })}
      <style jsx>{ProfileOptionsStyle}</style>
    </>
  );
};
export default ProfileOptions;
