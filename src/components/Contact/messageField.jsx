
export const MessageField = ({ label, id, name, value, onChange, error, placeholder }) => {
  const errorId = `${id}-error`;
  const maxLength = 2000;

  return (
    <div className="form-field">
      <div className="label-counter-row">
        <label htmlFor={id} className="field-label">
          {label}
        </label>
        <span className="character-counter">
          {value.length} / {maxLength}
        </span>
      </div>
      <textarea
        id={id}
        name={name}
        rows="6"
        maxLength={maxLength}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`field-input field-textarea ${error ? "has-error" : ""}`}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
      />
      {error && (
        <p id={errorId} className="field-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};