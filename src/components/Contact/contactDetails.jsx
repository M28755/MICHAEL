import { ContactInfoItem } from "./contactInfoItem";
import { SocialLinks } from "./socialLinks";

export const ContactDetails = ({ directContact, socials }) => {
  return (
    <aside className="contact-details-panel">
      <address className="direct-contact-widget">
        <h2 className="widget-title">Direct Contact</h2>
        <div className="info-items-list">
          {directContact.map((item) => (
            <ContactInfoItem key={item.id} {...item} />
          ))}
        </div>
      </address>

      <SocialLinks socials={socials} />
    </aside>
  );
};