import { Text } from "UI/text/Text";

import DescriptionStyle, {
  propertyDescriptionTitle,
  propertyDescriptionParagraph,
} from "./DescriptionStyle";

export const Description = ({ descriptionStyles, children }) => {
  return (
    <>
      <div className={`description ${descriptionStyles}`}>
        <Text variant="body2" sx={propertyDescriptionTitle}>
          Description
        </Text>

        <Text variant="body2" sx={propertyDescriptionParagraph}>
          {children}
        </Text>
      </div>

      <style jsx>{DescriptionStyle}</style>
    </>
  );
};
