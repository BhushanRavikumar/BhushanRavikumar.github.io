export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-logo">
            Bhushan<span>.</span>
          </p>
          <p className="footer-tag">
            Robotics &amp; Test Engineer · Minneapolis, MN.
          </p>
        </div>
        <div className="footer-links">
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-social">
          <a
            href="https://github.com/BhushanRavikumar"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/bhushanrk"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="mailto:ravik039@umn.edu" aria-label="Email">
            ravik039@umn.edu
          </a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {year} Bhushan Ravikumar. All rights reserved.</span>
        <span>Crafted with care.</span>
      </div>
    </footer>
  );
}
