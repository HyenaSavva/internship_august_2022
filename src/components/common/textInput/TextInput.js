import TextInputStyle from "./TextInputStyle";

export const TextInput = ({
  label,
  name,
  type,
  value,
  placeholder,
  wrapper,
  onChange,
  error,
  inputstyle,
}) => {
  return (
    <>
      <div className={`text-input__wrapper ${wrapper}`}>
        <label htmlFor={name} className="text-input__label">
          {label}
        </label>
        <input
          name={name}
          type={type}
          onChange={onChange}
          value={value}
          placeholder={placeholder}
          className={
            error ? "text-input text-input-error" : `text-input ${inputstyle}`
          }
        />
        {error ? <div className="error">{error}</div> : null}

        <style jsx>{TextInputStyle}</style>
      </div>
    </>
  );
};
