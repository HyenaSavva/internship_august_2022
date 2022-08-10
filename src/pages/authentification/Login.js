import { LogBlock, Log, ImageBlock, Main, H1, Img, P } from "./style";
import Or from "./custom/Or";
import CustomInput from "./custom/CustomInput";
import {CustomButtonStyle} from './custom/CustomStyle'
import Button from "@mui/material/Button";

import img from "../../assets/logo-assist-tagline.svg";

const Login = ({ id }) => {
  return (
    <Main>
      <LogBlock>
        <Log>
          <Img src={img} alt="desc" />
          <H1>Create account</H1>
          <P>Sing up for free and become member.</P>
          <Or />
          <CustomInput label="Email" id={"email"} placeholder="Email" />
          <CustomInput label="Password" id={"password"} placeholder="Password" />
          <Button sx={CustomButtonStyle} variant="contained">Sing up</Button>
          <P>Already have an accout ? Log in</P>
        </Log>
      </LogBlock>
      <ImageBlock />
    </Main>
  );
};

export default Login;
