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

          <option value="small houses">Small Houses</option>

          <option value="offices">Offices</option>

          <option value="apartments">Apartments</option>
        </select>

        {error ? <div className="error">{error}</div> : null}
      </div>

      <style jsx>{SelectStyle}</style>
    </>
  );
};
