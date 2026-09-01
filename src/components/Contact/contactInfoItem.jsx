

export const ContactInfoItem = ({ label, value, subtext, href, iconType }) => {
  const renderIcon = () => {
    switch (iconType) {
      case "email":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
        );
      case "phone":
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
        );
      case "location":
      default:
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        );
    }
  };

  const Content = (
    <>
      <div className="info-icon" aria-hidden="true">{renderIcon()}</div>
      <div className="info-details">
        <span className="info-value">{value}</span>
        {subtext && <span className="info-subtext">{subtext}</span>}
      </div>
    </>
  );

  return (
    <div className="contact-info-item">
      {href ? (
        <a href={href} className="info-link" aria-label={`${label}: ${value}`}>
          {Content}
        </a>
      ) : (
        <div className="info-static">{Content}</div>
      )}
    </div>
  );
};