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
          <option value="Default">Select a category</option>

          <option value="Big">Big Houses</option>

          <option value="Small">Small Houses</option>

          <option value="Offices">Offices</option>

          <option value="Apartments">Apartments</option>
        </select>

        {error ? <div className="error">{error}</div> : null}
      </div>

      <style jsx>{SelectStyle}</style>
    </>
  );
};
