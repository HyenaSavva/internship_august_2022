import { useEffect, useState } from "react";

import Option from "../Option/Option";
import ProfileOptionsStyle from "./ProfileOptionsStyle";
import FullName from "./FullName/FullName";
import Gender from "./Gender/Gender";
import DateOfBirth from "./DateOfBirth/DateOfBirth";
import EmailAddress from "./EmailAddress/EmailAddress";
import PhoneNumber from "./PhoneNumber/PhoneNumber";
import Address from "./Address/Address";
import { putUserProfile, patchUserProfile } from "services/userProfile";

const ProfileOptions = ({ allData }) => {
  const [isOpened, setIsOpened] = useState(false);
  const clickHandler = () => {
    setIsOpened((last) => !last);
  };

  const fullOne = allData.fullName ? allData.fullName : " ";
  const [firstName, seccondName] = fullOne.split(" ");

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gender, setGender] = useState("none");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  let newDate = new Date(dateOfBirth?.slice(0, 10));
  try {
    newDate = newDate?.toISOString().split("T")[0];
  } catch (e) {}
  newDate = newDate?.toString();

  const genderList = ["female", "male", "none"];
  for (let i = 0; i < 3; i++) {
    if (allData.gender === i) {
      allData.gender = genderList[i];
    }
  }

  useEffect(() => {
    if (!Object.keys(allData).length) return;

    try {
      setName(firstName);
      setLastName(seccondName);
      setGender(allData.gender);
      setDateOfBirth(allData.dateOfBirth);
      setEmail(allData.mail);
      setPhone(allData.phone);
      setAddress(allData.address);
    } catch (e) {}
  }, [allData, firstName, seccondName]);

  const saveAllHandler = (field) => {
    let genderCount;
    if (field.Gender) {
      if (gender === "female") genderCount = 0;
      if (gender === "male") genderCount = 1;
      if (gender === "none") genderCount = 2;
      field.Gender = genderCount;
    }

    console.log(field);
    patchUserProfile(field);
  };

  return (
    <>
      <div className="title">Profile</div>
      <Option
        optionName={"Full Name"}
        subTitle={allData.fullName}
        disabled={isOpened}
        clickHandler={clickHandler}
        children={
          <FullName
            saveAllHandler={saveAllHandler}
            setValue={setName}
            setSecValue={setLastName}
            name={name}
            lastName={lastName}
          />
        }
      />
      <Option
        optionName={"Gender"}
        subTitle={allData.gender}
        disabled={isOpened}
        clickHandler={clickHandler}
        children={
          <Gender
            saveAllHandler={saveAllHandler}
            setValue={setGender}
            gender={gender}
          />
        }
      />
      <Option
        optionName={"Date of birth"}
        subTitle={newDate}
        disabled={isOpened}
        clickHandler={clickHandler}
        inputHandler={""}
        children={
          <DateOfBirth
            saveAllHandler={saveAllHandler}
            setValue={setDateOfBirth}
            date={dateOfBirth}
          />
        }
      />
      <Option
        optionName={"Email address"}
        subTitle={allData.mail}
        disabled={isOpened}
        clickHandler={clickHandler}
        inputHandler={""}
        children={
          <EmailAddress
            saveAllHandler={saveAllHandler}
            setValue={setEmail}
            email={email}
          />
        }
      />

      <Option
        optionName={"Phone number"}
        subTitle={allData.phone}
        disabled={isOpened}
        clickHandler={clickHandler}
        inputHandler={""}
        children={
          <PhoneNumber
            saveAllHandler={saveAllHandler}
            setValue={setPhone}
            number={phone}
          />
        }
      />

      <Option
        optionName={"Address"}
        subTitle={allData.address}
        disabled={isOpened}
        clickHandler={clickHandler}
        inputHandler={""}
        children={
          <Address
            saveAllHandler={saveAllHandler}
            setValue={setAddress}
            address={address}
          />
        }
      />
      <style jsx>{ProfileOptionsStyle}</style>
    </>
  );
};

export default ProfileOptions;
