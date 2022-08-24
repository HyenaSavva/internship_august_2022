import Account from "./Account/Account";
import css from "./SocialAccountsStyle";

const SocialAccounts = () => {
  return (
    <>
      <Account optionName="Facebook" status={"Not connected"} />
      <Account optionName="Google" status={"Not connected"} />
      <style jsx>{css}</style>
    </>
  );
};

export default SocialAccounts;
