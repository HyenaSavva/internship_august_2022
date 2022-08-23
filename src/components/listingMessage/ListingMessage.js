import TextareaAutosize from "@mui/material/TextareaAutosize";

import { Text } from "UI/text/Text";
import { CustomButton } from "UI/button/CustomButton";
import useTextareaValidation from "hooks/useTextareaValidation";

import ListingMessageStyle, {
  messageTitle,
  sendBtn,
  textareaStyle,
  textareaErrorStyle,
  errorMessage,
} from "./ListingMessageStyle";
import { defaultBtn } from "UI/button/CustomButtonStyle";

export const ListingMessage = () => {
  const {
    value: message,
    isValid: messageIsValid,
    error: messageHasError,
    valueChangeHandler: messageChangeHandler,
    valueBlurHandler: messageBlurHanlder,
    reset: messageReset,
  } = useTextareaValidation((value) => value.trim() !== "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (messageIsValid) {
      messageReset();
    }
  };
  return (
    <form className="listing-message" onSubmit={handleSubmit}>
      <Text variant="body2" sx={messageTitle}>
        Message the seller
      </Text>

      <TextareaAutosize
        minRows={8}
        placeholder="Enter your message"
        style={
          messageHasError
            ? { ...textareaStyle, ...textareaErrorStyle }
            : textareaStyle
        }
        value={message}
        onChange={messageChangeHandler}
        onBlur={messageBlurHanlder}
      />

      {messageHasError && (
        <Text variant="body2" sx={errorMessage}>
          This field must not be empty!
        </Text>
      )}

      <CustomButton
        variant="outlined"
        sx={{ ...defaultBtn, ...sendBtn }}
        component=""
        disabled={!messageIsValid}
      >
        Send
      </CustomButton>

      <style jsx>{ListingMessageStyle}</style>
    </form>
  );
};
