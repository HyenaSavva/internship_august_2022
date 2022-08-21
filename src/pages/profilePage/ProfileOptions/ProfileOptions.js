import { useState } from "react";

import Option from "../Option/Option";
import ProfileOptionsStyle, {
  childStyle,
  firstInput,
} from "./ProfileOptionsStyle";
import CustomInput from "../../authentification/custom/CustomInput";
import useOptionsValidation from "hooks/useOptionsValidation";

const ProfileOptions = () => {
  const [isOpened, setIsOpened] = useState(false);
  const clickHandler = (event) => {
    setIsOpened((last) => !last);
  };

  const props = useOptionsValidation({
    optionName: [
      "Full Name",
      "Gender",
      "Date of birth",
      "Email address",
      "Phone number",
      "Address",
    ],
  });

  return (
    <>
      <div className="title">Profile</div>
      <Option
        optionName={"Full Name"}
        subTitle={props[0].name + " " + props[0].lastName}
        disabled={isOpened}
        clickHandler={clickHandler}
        inputHandler={props[0].handler}
        children={
          <>
            <section className="inputs">
              <div id="firstInput">
                <CustomInput
                  error={props[0].error}
                  topLabel="First Name"
                  setEmail={props[0].setEnteredName}
                />
              </div>
              <div id="secondInput">
                <CustomInput
                  error={props[0].error}
                  topLabel="Last Name"
                  setEmail={props[0].setEnteredLastName}
                />
              </div>
            </section>
          </>
        }
        childStyle={childStyle}
      />
      <Option
        optionName={"Gender"}
        subTitle={props[1].gender}
        disabled={isOpened}
        clickHandler={clickHandler}
        inputHandler={props[1].handler}
        children={
          <>
            <div id="firstInput">
              <CustomInput
                error={props[1].error}
                topLabel="Gender"
                setEmail={props[1].setEnteredGender}
                listName={"data"}
                list={
                  <>
                    <datalist id="data">
                      <option value="male" />
                      <option value="female" />
                    </datalist>
                  </>
                }
              />
            </div>
          </>
        }
        childStyle={firstInput}
      />
      <Option
        optionName={"Date of birth"}
        subTitle={props[2].dateOfBirth}
        disabled={isOpened}
        clickHandler={clickHandler}
        inputHandler={props[2].handler}
        children={
          <>
            <div id="firstInput">
              <CustomInput
                error={props[2].error}
                topLabel="Date"
                setEmail={props[2].setEnteredDate}
                type={"date"}
              />
            </div>
          </>
        }
        childStyle={firstInput}
      />
      <Option
        optionName={"Email address"}
        subTitle={props[3].email}
        disabled={isOpened}
        clickHandler={clickHandler}
        inputHandler={props[3].handler}
        children={
          <>
            <div id="firstInput">
              <CustomInput
                error={props[3].error}
                topLabel="Email"
                setEmail={props[3].setEnteredEmail}
              />
            </div>
          </>
        }
        childStyle={firstInput}
      />
      <Option
        optionName={"Phone number"}
        subTitle={props[4].phone}
        disabled={isOpened}
        clickHandler={clickHandler}
        inputHandler={props[4].handler}
        children={
          <>
            <div id="firstInput">
              <CustomInput
                error={props[4].error}
                topLabel="Phone"
                setEmail={props[4].setEnteredPhone}
                type={"tel"}
              />
            </div>
          </>
        }
        childStyle={firstInput}
      />
      <Option
        optionName={"Address"}
        subTitle={props[5].address}
        disabled={isOpened}
        clickHandler={clickHandler}
        inputHandler={props[5].handler}
        children={
          <>
            <section className="inputs">
              <div id="firstInput">
                <CustomInput
                  error={props[5].error}
                  topLabel="Address"
                  setEmail={props[5].setEnteredAddress}
                />
              </div>
            </section>
          </>
        }
        childStyle={firstInput}
      />
      <style jsx>{ProfileOptionsStyle}</style>
    </>
  );
};

export default ProfileOptions;
