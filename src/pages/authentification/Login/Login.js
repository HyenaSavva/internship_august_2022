import { Link, useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

import CustomInput from "../custom/CustomInput";
import PasswordInput from "../../../UI/inputs/PasswordInput";
import { CustomButton } from "UI/button/CustomButton";
import { GoogleButton } from "../custom/GoogleButton";
import logo from "../../../assets/logo-assist-tagline.svg";
import { CustomButtonStyle } from "../custom/CustomStyles";
import LoginStyle from "./LoginStyle";
import useInputValidation from "hooks/useInputValidation";
import { loginUser } from "services/auth";

import { useDispatch, useSelector } from "react-redux";
import { authActions } from "store/authSlice";
import { fetchUser, refreshUser } from "services/listingsFetch";
import { userActions } from "store/userSlice";
import jwtDecode from "jwt-decode";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isLoading } = useSelector((state) => state.auth);

  const { email, password, setEmail, setPassword, error, setError, isValid } =
    useInputValidation();

  const submitHandler = async (e) => {
    e.preventDefault();
    const hasError = isValid(email, password);
    setError(hasError);
    if (!hasError.emailError && !hasError.passwordError) {
      const data = await loginUser(email, password);

      localStorage.setItem("token", data.data);

      refreshUser();
      dispatch(userActions.getUserSuccess(jwtDecode(data.data)));
      fetchUser();
    }

    // from PETRU
    dispatch(authActions.loginPending());

    try {
      const isAuth = await loginUser(email, password);

      if (isAuth.name === "AxiosError") {
        return dispatch(authActions.loginFail(isAuth.message));
      }

      dispatch(authActions.loginSuccess());
      navigate("/");
    } catch (error) {
      dispatch(authActions.loginFail(error.message));
    }
  };

  return (
    <main>
      <section className="logBlock">
        <form className="log" onSubmit={submitHandler}>
          <img src={logo} alt="desc" />
          <h1>Login</h1>
          <p>Enter your account details below.</p>
          {error.message && <Alert severity="error">{error.message}</Alert>}
          <CustomInput
            error={error}
            setEmail={setEmail}
            topLabel="Email"
            id="Email"
            placeholder="Email"
            type=""
          />
          <PasswordInput
            error={error}
            setPassword={setPassword}
            bottomLabel="At least 8 characters and one number."
            id="Password"
            placeholder="Password"
            topLabel="Password"
            type="password"
          />
          <div className="logInLabel">
            <div className="checkbox">
              <input type="checkbox" id="checkbox" />
              <label>Remember me</label>
            </div>
            <Link to={"/forgot-password"} style={{ textDecoration: "none" }}>
              <span className="login">Forgot Password ?</span>
            </Link>
          </div>

          <div className="logIn">
            <CustomButton
              sx={CustomButtonStyle}
              variant="contained"
              component={""}
            >
              Log in
            </CustomButton>
            {isLoading && <CircularProgress />}
          </div>
          <div className="googleBtn">
            <GoogleButton>Log in with Google</GoogleButton>
          </div>
          <p className="switch">
            Don't have an account ?
            <Link to={"/create-account"} style={{ textDecoration: "none" }}>
              <span className="login">Sign up</span>
            </Link>
          </p>
        </form>
      </section>
      <div className="imageBlock" />
      <style jsx>{LoginStyle}</style>
    </main>
  );
};

export default Login;
