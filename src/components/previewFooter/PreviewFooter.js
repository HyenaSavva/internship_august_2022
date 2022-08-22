import { CustomButton } from "UI/button/CustomButton";
import { Text } from "UI/text/Text";

import { defaultBtn, primaryBtn } from "UI/button/CustomButtonStyle";
import PreviewFooterStyle, { footerTitle } from "./PreviewFooterStyle";

export const PreviewFooter = ({ redirectToEdit, sendToBack }) => {
  return (
    <>
      <div className="preview-footer">
        <Text variant="body1" sx={footerTitle}>
          This is a preview of your listing
        </Text>

        <div className="preview-footer__buttons">
          <CustomButton
            variant="outlined"
            sx={defaultBtn}
            onClick={redirectToEdit}
          >
            Edit
          </CustomButton>

          <CustomButton variant="text" sx={primaryBtn} onClick={sendToBack}>
            Publish
          </CustomButton>
        </div>
      </div>

      <style jsx>{PreviewFooterStyle}</style>
    </>
  );
};
