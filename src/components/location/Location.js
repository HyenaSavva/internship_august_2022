import location from "assets/images/location.png";

import { Text } from "UI/text/Text";

import { appTheme } from "themes/themes";
import LocationStyle, {
  locationTitle,
  locationSubtitle,
} from "./LocationStyle";

export const Location = ({ className, children }) => {
  return (
    <div className={`location ${className}`}>
      <Text variant="body2" sx={locationTitle}>
        Location
      </Text>

      <Text
        variant="body2"
        color={appTheme.palette.secondary.light}
        sx={locationSubtitle}
      >
        {children}
      </Text>

      <img className="location__image" src={location} alt="Location" />

      <style jsx>{LocationStyle}</style>
    </div>
  );
};
