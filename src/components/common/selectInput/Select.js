import SelectStyle from "./SelectStyle";

export const Select = ({ label, name, value, onChange, error }) => {
  return (
    <>
      <div className="select__wrapper">
        <label htmlFor={name} className="select__label">
          {label}
        </label>
        <select
          value={value}
          className={error ? "select select-error" : "select"}
          onChange={onChange}
          name={name}
        >
          <option value="default">Select a category</option>

          <option value="big houses">Big Houses</option>

          <option value="2">Small Houses</option>

          <option value="3">Offices</option>

          <option value="4">Apartmanets</option>
        </select>

        {error ? <div className="error">{error}</div> : null}
      </div>

      <style jsx>{SelectStyle}</style>
    </>
  );
};
