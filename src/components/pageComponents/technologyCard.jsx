

export const TechnologyCard = ({ technology }) => {
  return (
    <article className="technology-card">

      
      <div
        className={`technology-icon technology-icon-${technology.icon.toLowerCase()}`}
        aria-hidden="true"
      >
      </div>

      <span className="technology-name">
        {technology.name}
      </span>

 
      <span className="technology-label">
        {technology.label}
      </span>

    </article>
  );
};

