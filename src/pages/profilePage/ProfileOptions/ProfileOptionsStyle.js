import CustomInput from "../../authentification/custom/CustomInput";
import { CustomButton } from "../../../UI/button/CustomButton";
import { button } from "../Option/OptionStyle";
import css from "styled-jsx/css";

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

export default css`
  .title {
    margin: 0 0 12px 0;
    font-weight: 700;
    font-size: 24px;
    color: #1c1c1e;
  }

  .inputs {
    display: flex;
    width: 100%;
  }

  .inputs div {
    width: 100%;
    font-size: 12px;
  }

  .inputs #firstInput {
    margin-right: 30px;
  }
`;

export const options = [
  {
    optionName: "Full Name",
    subTitle: user.FullName,
    disabled: false,
    children: (
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
    ),
    childStyle: {
      ".inputs": {
        display: "flex",
        width: "100%",
      },
      ".inputs div": {
        width: "100%",
        fontSize: "12px",
      },
      ".inputs #firstInput": {
        marginRight: "30px",
      },
    },
  },
  {
    optionName: "Gender",
    subTitle: user.Gender,
    disabled: false,
    children: (
      <>
        <section className="inputs">
          <div id="firstInput">
            <CustomInput error={false} topLabel="Gender" sx={{}} />
          </div>
        </section>
        <CustomButton sx={button}>Save</CustomButton>
      </>
    ),
    childStyle: {},
  },
  {
    optionName: "Date of birth",
    subTitle: user.Date_Of_Birth,
    disabled: false,
    children: (
      <>
        <section className="inputs">
          <div id="firstInput">
            <CustomInput error={false} topLabel="First Name" />
          </div>
        </section>
        <CustomButton sx={button}>Save</CustomButton>
      </>
    ),
  },
  {
    optionName: "Email address",
    subTitle: user.Email,
    disabled: false,
    children: (
      <>
        <section className="inputs">
          <div id="firstInput">
            <CustomInput error={false} topLabel="First Name" />
          </div>
        </section>
        <CustomButton sx={button}>Save</CustomButton>
      </>
    ),
  },
  {
    optionName: "Phone number",
    subTitle: user.Phone,
    disabled: false,
    children: (
      <>
        <section className="inputs">
          <div id="firstInput">
            <CustomInput error={false} topLabel="First Name" />
          </div>
        </section>
        <CustomButton sx={button}>Save</CustomButton>
      </>
    ),
  },
  {
    optionName: "Address",
    subTitle: user.Address,
    disabled: false,
    children: (
      <>
        <section className="inputs">
          <div id="firstInput">
            <CustomInput error={false} topLabel="First Name" />
          </div>
        </section>
        <CustomButton sx={button}>Save</CustomButton>
      </>
    ),
  },
];
