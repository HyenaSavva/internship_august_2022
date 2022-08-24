import { Text } from "UI/text/Text";

import TextareaStyle, { helperText } from "./TextareaStyle";

export const Textarea = ({ label, name, value, error, onChange }) => {
  const messageCharacters = () => {
    let result;
    if (value.length > 100 || value.length === 0) {
      result = 0;
    } else {
      result = 100 - value.length;
    }
    return result;
  };
  const chars = messageCharacters();
  return (
    <div className="textarea-wrapper">
      <label htmlFor={name} className="textarea__label">
        {label}
      </label>
      <textarea
        className={error ? "textarea textarea-error" : "textarea"}
        name={name}
        value={value}
        onChange={onChange}
      />

      {error ? (
        <div className="error">{`${chars}/100 mandatory characters`}</div>
      ) : (
        <Text variant="body2" sx={helperText}>
          {`${chars}/100 mandatory characters`}
        </Text>
      )}

      <style jsx>{TextareaStyle}</style>
    </div>
  );
};
