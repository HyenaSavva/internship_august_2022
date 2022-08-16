import Avatar from "@mui/material/Avatar";

import { Text } from "UI/text/Text";
import avatar from "assets/images/avatar.png";

import SellerStyle, { sellerName, sellerAvatar } from "./SellerStyle";
import { appTheme } from "themes/themes";

export const Seller = ({ className }) => {
  return (
    <div className={`seller ${className}`}>
      <Avatar alt="Seller name" src={avatar} sx={sellerAvatar} />

      <div className="seller__infos">
        <Text variant="body2" sx={sellerName}>
          Jordan Henderson
        </Text>

        <Text variant="body2" color={appTheme.palette.secondary.light}>
          Joined in July 2014
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
