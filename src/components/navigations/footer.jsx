
export const Footer = () => {

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Column: Brand & Copyright */}
        <div className="footer-left">
          <div className="footer-brand">
            Jaguar<span className="brand-accent">Tech</span>
          </div>
          <p className="footer-copyright">
            © 2026 JaguarTech. Built with precision.
          </p>
        </div>

        {/* Right Column: Links */}
        <div className="footer-right">
          <span className="footer-label">LINKS</span>
          <nav className="footer-nav">
            <a href="#privacy" className="footer-link">Privacy Policy</a>
            <a href="#terms" className="footer-link">Terms of Service</a>
            <a href="https://github.com/M28755" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
            <a href="www.linkedin.com/in/michael-otieno-b86703382" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
            <a href="mailto:omondimichael3087@gmail.com" className="footer-link">Email</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};