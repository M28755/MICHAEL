
export const SocialLink = ({ name, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="social-btn"
      aria-label={`Visit ${name} profile`}
    >
      {name}
    </a>
  );
};