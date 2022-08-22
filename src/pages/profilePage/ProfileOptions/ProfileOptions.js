import { useState } from "react";

import Option from "../Option/Option";
import ProfileOptionsStyle from "./ProfileOptionsStyle";
import FullName from "./FullName/FullName";
import Gender from "./Gender/Gender";
import DateOfBirth from "./DateOfBirth/DateOfBirth";
import EmailAddress from "./EmailAddress/EmailAddress";
import PhoneNumber from "./PhoneNumber/PhoneNumber";
import Address from "./Address/Address";

const ProfileOptions = ({ allData }) => {
  const [isOpened, setIsOpened] = useState(false);
  const clickHandler = (e) => {
    setIsOpened((last) => !last);
  };

  return (
    <>
      <div className="title">Profile</div>
      <Option
        optionName={"Full Name"}
        subTitle={allData.fullName}
        disabled={isOpened}
        clickHandler={clickHandler}
        children={<FullName />}
      />
      <Option
        optionName={"Gender"}
        subTitle={allData.gender}
        disabled={isOpened}
        clickHandler={clickHandler}
        children={<Gender />}
      />
      <Option
        optionName={"Date of birth"}
        subTitle={allData.dateOfBirth}
        disabled={isOpened}
        clickHandler={clickHandler}
        inputHandler={""}
        children={<DateOfBirth />}
      />
      <Option
        optionName={"Email address"}
        subTitle={allData.mail}
        disabled={isOpened}
        clickHandler={clickHandler}
        inputHandler={""}
        children={<EmailAddress />}
      />

      <Option
        optionName={"Phone number"}
        subTitle={allData.phone}
        disabled={isOpened}
        clickHandler={clickHandler}
        inputHandler={""}
        children={<PhoneNumber />}
      />

      <Option
        optionName={"Address"}
        subTitle={allData.address}
        disabled={isOpened}
        clickHandler={clickHandler}
        inputHandler={""}
        children={<Address />}
      />
      <style jsx>{ProfileOptionsStyle}</style>
    </>
  );
};

export default ProfileOptions;
