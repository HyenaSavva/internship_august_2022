import Option from "../Option/Option";
import Password from "./Password/Password";
import css from "../LoginAndSecurity/LoginAndSecurityStyle";
import SocialAccounts from "./SocialAccounts/SocialAccounts";
import RecentActivity from "./RecentActivity/RecentActivity";
import Account from "./Account/Account";

const LoginAndSecurity = () => {
  const editHandler = () => {};

  return (
    <>
      <div className="title">Login & security</div>
      <Option
        optionName={"Password"}
        subTitle={"Updated 3 weeks ago."}
        children={<Password />}
        clickHandler={editHandler}
      />
      <div className="subTitle">Social accounts</div>
      <SocialAccounts />
      <div className="subTitle">Recent login activity</div>
      <RecentActivity />
      <div className="subTitle">Account</div>
      <Account optionName="" subTitle="Deactivate your account" />
      <style jsx>{css}</style>
    </>
  );
};
export default LoginAndSecurity;
