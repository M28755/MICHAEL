

export const ContactHeader = ({ title, subtitle }) => {
  return (
    <header className="contact-header">
      <h1 className="contact-title">{title}</h1>
      <p className="contact-subtitle">{subtitle}</p>
    </header>
  );
};