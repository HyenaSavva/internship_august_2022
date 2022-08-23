import Avatar from "@mui/material/Avatar";

import { Text } from "UI/text/Text";

import SellerStyle, { sellerName, sellerAvatar } from "./SellerStyle";
import { appTheme } from "themes/themes";

export const Seller = ({ className }) => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className={`seller ${className}`}>
      <Avatar alt="Seller name" src={user?.photo} sx={sellerAvatar} />

      <div className="seller__infos">
        <Text variant="body2" sx={sellerName}>
          {user?.fullName}
        </Text>

        <Text variant="body2" color={appTheme.palette.secondary.light}>
          Joined in July 2022
        </Text>

        <Text variant="body2" color={appTheme.palette.secondary.light}>
          Response rate: 97%
        </Text>

        <Text variant="body2" color={appTheme.palette.secondary.light}>
          Response time:within an hour
        </Text>
      </div>

      <style jsx>{SellerStyle}</style>
    </div>
  );
};
