
export const SubjectSelect = ({ label, id, name, value, onChange, options, error }) => {
  const errorId = `${id}-error`;

  return (
    <div className="form-field">
      <label htmlFor={id} className="field-label">
        {label}
      </label>
      <div className="select-wrapper">
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className={`field-input field-select ${error ? "has-error" : ""}`}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? errorId : undefined}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <span className="select-arrow" aria-hidden="true">
          ▾
        </span>
      </div>
      {error && (
        <p id={errorId} className="field-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};