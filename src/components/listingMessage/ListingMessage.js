import { useState } from "react";
import TextareaAutosize from "@mui/material/TextareaAutosize";

import { Text } from "UI/text/Text";
import { CustomButton } from "UI/button/CustomButton";
import useTextareaValidation from "hooks/useTextareaValidation";

import ListingMessageStyle, {
  messageTitle,
  sendBtn,
  textareaStyle,
  textareaErrorStyle,
} from "./ListingMessageStyle";

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
        aria-label="maximum height"
        placeholder="Enter your message"
        style={messageHasError ? textareaErrorStyle : textareaStyle}
        value={message}
        onChange={messageChangeHandler}
        onBlur={messageBlurHanlder}
      />

      {messageHasError && (
        <Text variant="body2">This field must not be empty!</Text>
      )}

      <CustomButton
        variant="outlined"
        sx={sendBtn}
        component=""
        disabled={!messageIsValid}
      >
        Send
      </CustomButton>

      <style jsx>{ListingMessageStyle}</style>
    </form>
  );
};
