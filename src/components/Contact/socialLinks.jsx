

import { SocialLink } from "./socialLink";

export const SocialLinks = ({ socials }) => {
  return (
    <div className="socials-widget">
      <h2 className="widget-title">Socials</h2>
      <div className="socials-grid">
        {socials.map((social) => (
          <SocialLink key={social.name} name={social.name} url={social.url} />
        ))}
      </div>
    </div>
  );
};