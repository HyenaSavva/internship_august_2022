import Option from "../Option/Option";
import CustomInput from "../../authentification/custom/CustomInput";
import { CustomButton } from "../../../UI/button/CustomButton";
import { Component, button } from "../Option/OptionStyle";

const ProfileOptions = () => {
return (
    <>
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
              name={"James Miler"}
              optionName={'Full Name'}
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
              name={"Male"}
              optionName={'Gender'}
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
              name={"05.05.2000"}
              optionName={'Date of birth'}
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
              name={"james.milner@example.com "}
              optionName={'Email address'}
            />
    </>
)
}
export default ProfileOptions