
import { useContactForm } from "../../Hooks/useContactForm";
import { ContactHeader } from "./contactHeader";
import { ContactDetails } from "./contactDetails";
import { contactData } from "../../Data/contactData";
import { ContactForm } from "./contactForm";

export const ContactSection = () => {
  const {
    formData,
    errors,
    status,
    statusMessage,
    handleChange,
    handleSubmit,
    resetForm,
  } = useContactForm();

  return (
    <section className="contact-section" id="contact" aria-label="Contact and Collaboration">
      <ContactHeader
        title={contactData.header.title}
        subtitle={contactData.header.subtitle}
      />

      <div className="contact-grid">
        <ContactDetails
          directContact={contactData.directContact}
          socials={contactData.socials}
        />

        <ContactForm
          formData={formData}
          errors={errors}
          status={status}
          statusMessage={statusMessage}
          subjectOptions={contactData.subjectOptions}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onReset={resetForm}
        />
      </div>
    </section>
  );
};