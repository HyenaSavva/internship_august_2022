import { TextInput } from "components/common/textInput/TextInput";
import { Text } from "UI/text/Text";

import AddContactInfoStyle from "./AddContactInfoStyle";

export const AddContactInfo = ({ locationValue, ...rest }) => {
  return (
    <>
      <div className="add-contact-info">
        <div className="add-contact-info__title-subtitle">
          <Text variant="h6">Contact info</Text>

          <Text variant="body2">Be as thorough as you can.</Text>
        </div>

        <div className="add-contact-info__inputs">
          <TextInput
            label="Location"
            name="location"
            placeholder=""
            type="text"
            wrapper="add-contact-info__location"
            value={locationValue}
            onChange={rest.onChange}
            error={rest.locationError}
          />

          <TextInput
            label="Phone number"
            name="phoneNumber"
            placeholder=""
            type="text"
            wrapper="add-contact-info__phone"
            value={rest.phoneValue}
            onChange={rest.onChange}
            error={rest.phoneError}
          />
        </div>
      </div>

      <style jsx>{AddContactInfoStyle}</style>
    </>
  );
};
