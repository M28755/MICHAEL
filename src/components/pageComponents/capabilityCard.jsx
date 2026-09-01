

export const CapabilityCard  = ({capability}) =>{

    return(
        <article className="capability-card">
      <div
        className={`capability-icon capability-icon-${capability.icon}`}
        aria-hidden="true"
      >
        {capability.icon}
      </div>

      <div className="capability-content">

        {/* Capability title */}
        <h3 className="capability-title">
          {capability.title}
        </h3>

        {/* Capability description */}
        <p className="capability-description">
          {capability.description}
        </p>

      </div>
    </article>

    )
}