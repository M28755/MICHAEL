import { Menu , X } from "lucide-react";
export const MobileMenuButton = ({ onClick, isOpen }) => {
  return (
    <button
      type="button"
      className="mobile-menu-button"
      onClick={onClick}
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      aria-expanded={isOpen}
    >
      {isOpen ? <X size={28}/> : <Menu size={28}/>}
    </button>
  );
};

