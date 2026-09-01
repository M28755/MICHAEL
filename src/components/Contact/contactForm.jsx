import { FormField } from "./formField";
import { FormStatus } from "./formStatus";
import { SubjectSelect } from "./subjectSelect";
import { MessageField } from "./messageField";

export const ContactForm = ({
  formData,
  errors,
  status,
  statusMessage,
  subjectOptions,
  onChange,
  onSubmit,
  onReset,
}) => {
  const isSubmitting = status === "submitting";

  return (
    <div className="contact-form-panel">
      <FormStatus status={status} statusMessage={statusMessage} onReset={onReset} />

      <form onSubmit={onSubmit} className="contact-form" noValidate>
        <div className="form-row split-row">
          <FormField
            id="contact-name"
            name="name"
            label="Name"
            placeholder="Michael Otieno"
            value={formData.name}
            onChange={onChange}
            error={errors.name}
          />
          <FormField
            id="contact-email"
            name="email"
            type="email"
            label="Email"
            placeholder="jaguarhunter28755@gmail.com"
            value={formData.email}
            onChange={onChange}
            error={errors.email}
          />
        </div>

        <div className="form-row">
          <SubjectSelect
            id="contact-subject"
            name="subject"
            label="Subject"
            options={subjectOptions}
            value={formData.subject}
            onChange={onChange}
            error={errors.subject}
          />
        </div>

        <div className="form-row">
          <MessageField
            id="contact-message"
            name="message"
            label="Message"
            placeholder="Describe your project requirements..."
            value={formData.message}
            onChange={onChange}
            error={errors.message}
          />
        </div>

        <div className="form-footer">
          <div className="security-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span>End-to-end encrypted</span>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`submit-btn ${isSubmitting ? "submitting" : ""}`}
          >
            {isSubmitting ? (
              <span>Sending...</span>
            ) : (
              <>
                <span>Send Message</span>
                <span className="btn-icon" aria-hidden="true">➢</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};