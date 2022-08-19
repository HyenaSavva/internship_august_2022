import { Textarea } from "components/common/textarea/Textarea";
import { Text } from "UI/text/Text";

import AddDescriptionStyle, { helperText } from "./AddDescriptionStyle";

export const AddDescription = ({ onChange, value, error }) => {
  return (
    <>
      <div className="add-description">
        <div className="add-description__title-subtitle">
          <Text variant="h6">Description</Text>
          <Text variant="body2">
            Lörem ipsum trede relig, oktig. Tism rallylydnad.
          </Text>
        </div>

        <div className="add-description__description-textarea">
          <Textarea
            label="Description details"
            name="description"
            value={value}
            onChange={onChange}
            error={error}
          />
        </div>
      </div>

      <style jsx>{AddDescriptionStyle}</style>
    </>
  );
};
