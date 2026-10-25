import { Star } from './Ornaments'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>
          <span>DARIA OSYPOVA</span> © 2026 Daria Osypova
        </p>
        <p>
          MADE WITH CARE <Star className="footer-flower" size={20} /> IN DUBLIN
        </p>
        <a href="#home" aria-label="Back to top">
          BACK TO TOP ↑
        </a>
      </div>
    </footer>
  )
}
