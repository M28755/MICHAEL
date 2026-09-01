

export const FormStatus = ({ status, statusMessage, onReset }) => {
  if (status === "idle" || status === "submitting") return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className={`form-status-banner status-${status}`}
    >
      <p className="status-message">{statusMessage}</p>
      {status === "success" && (
        <button type="button" onClick={onReset} className="status-reset-btn">
          Send another message
        </button>
      )}
    </div>
  );
};