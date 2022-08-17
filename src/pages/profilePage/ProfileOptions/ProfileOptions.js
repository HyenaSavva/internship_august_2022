import Option from "../Option/Option";
import CustomInput from "../../authentification/custom/CustomInput";
import { CustomButton } from "../../../UI/button/CustomButton";
import css, { Component, button } from "../Option/OptionStyle";

const user = {
  Id: "1234567890",
  FullName: "James Milner",
  Email: "example@example.com",
  Password: "1234567890",
  Gender: "male", // enum type with male/female
  Phone: "1234567890",
  Role: "user", // enum type with admin and user
  NotificationPreferences: [], //serialized json
  Date_Of_Birth: "20.01.2001",
  Address: "address@gmail.com",
  Photo: "url for image",
  UserActivities: "have no idea",
  Token: "token JWS adkadaofaofafj",
  CreatedAt: "16.08.2022",
  UpdatedAt: "16.08.2022",
  IsActive: true,
};

const ProfileOptions = () => {
  return (
    <>
      <div className="title">Profile</div>
      <Option
        children={
          <>
            <section className="inputs">
              <div id="firstInput">
                <CustomInput error={false} topLabel="First Name" />
              </div>
              <div id="secondInput">
                <CustomInput error={false} topLabel="Last Name" />
              </div>
            </section>
            <CustomButton sx={button}>Save</CustomButton>
          </>
        }
        sx={Component}
        subTitle={user.FullName}
        optionName={"Full Name"}
      />
      <Option
        children={
          <>
            <section className="inputs">
              <div id="firstInput">
                <CustomInput error={false} topLabel="Gender" />
              </div>
            </section>
            <CustomButton sx={button}>Save</CustomButton>
          </>
        }
        sx={Component}
        subTitle={user.Gender}
        optionName={"Gender"}
      />
      <Option
        children={
          <>
            <section className="inputs">
              <div id="firstInput">
                <CustomInput error={false} topLabel="First Name" />
              </div>
            </section>
            <CustomButton sx={button}>Save</CustomButton>
          </>
        }
        sx={Component}
        subTitle={user.Date_Of_Birth}
        optionName={"Date of birth"}
      />
      <Option
        children={
          <>
            <section className="inputs">
              <div id="firstInput">
                <CustomInput error={false} topLabel="First Name" />
              </div>
            </section>
            <CustomButton sx={button}>Save</CustomButton>
          </>
        }
        sx={Component}
        subTitle={user.Email}
        optionName={"Email address"}
      />
      <Option
        children={
          <>
            <section className="inputs">
              <div id="firstInput">
                <CustomInput error={false} topLabel="First Name" />
              </div>
            </section>
            <CustomButton sx={button}>Save</CustomButton>
          </>
        }
        sx={Component}
        subTitle={user.Phone}
        optionName={"Phone number"}
      />
      <Option
        children={
          <>
            <section className="inputs">
              <div id="firstInput">
                <CustomInput error={false} topLabel="First Name" />
              </div>
            </section>
            <CustomButton sx={button}>Save</CustomButton>
          </>
        }
        sx={Component}
        subTitle={user.Address}
        optionName={"Address"}
      />
      <style jsx>{css}</style>
    </>
  );
};
export default ProfileOptions;
