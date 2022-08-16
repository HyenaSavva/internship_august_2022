import location from "assets/images/location.png";

import { Text } from "UI/text/Text";

import { appTheme } from "themes/themes";
import LocationStyle, {
  locationTitle,
  locationSubtitle,
} from "./LocationStyle";

export const Location = () => {
  return (
    <div className="location">
      <Text variant="body2" sx={locationTitle}>
        Location
      </Text>

      <Text
        variant="body2"
        color={appTheme.palette.secondary.light}
        sx={locationSubtitle}
      >
        City, County
      </Text>

      <img className="location__image" src={location} alt="Location" />

      <style jsx>{LocationStyle}</style>
    </div>
  );
};
