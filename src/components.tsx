// Komponenter för Mikael Eriksson webbplats

export const Navigation = () => {
  return (
    <header>
      <div className="nav-container">
        <a href="/" className="logo">
          Mikael Eriksson
        </a>
        <nav>
          <ul className="nav-menu">
            <li><a href="/" className="nav-link">Hem</a></li>
            <li><a href="/biografi" className="nav-link">Biografi</a></li>
            <li><a href="/berlin" className="nav-link">Berlin</a></li>
            <li><a href="/utstallningar" className="nav-link">Utställningar</a></li>
            <li><a href="/konst" className="nav-link">Konst</a></li>
            <li><a href="/kontakt" className="nav-link">Kontakt</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <p className="footer-text">
            Mikael Eriksson - Konstnär från Flen, Sörmland
          </p>
          <p className="footer-text">
            "Jag ville inte måla bilder; jag ville bygga en parallell värld..."
          </p>
          <div className="footer-links">
            <a href="https://www.instagram.com/kompactlivingspace" target="_blank" className="footer-link">Instagram</a>
            <a href="/kontakt" className="footer-link">Kontakt</a>
            <a href="/utstallningar" className="footer-link">Utställningar</a>
          </div>
          <p className="text-small" style={{ marginTop: '2rem', opacity: '0.5' }}>
            © 2025 Mikael Eriksson. Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  )
}

export const TimelineItem = ({ year, title, description, location }: {
  year: string;
  title: string;
  description: string;
  location?: string;
}) => {
  return (
    <div className="timeline-item">
      <div className="timeline-year">{year}</div>
      <div className="timeline-content">
        <h3>{title}</h3>
        {location && <p className="text-gray-600 font-semibold mb-2">{location}</p>}
        <p>{description}</p>
      </div>
    </div>
  )
}

export const ExhibitionCard = ({ title, venue, date, description, isActive }: {
  title: string;
  venue: string;
  date: string;
  description: string;
  isActive?: boolean;
}) => {
  return (
    <div className={`card exhibition-card ${isActive ? 'border-red-500 bg-red-50' : ''}`}>
      {isActive && (
        <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm inline-block mb-2">
          <i className="fas fa-star mr-1"></i> Aktuell utställning
        </div>
      )}
      <div className="exhibition-date">{date}</div>
      <h3>{title}</h3>
      <div className="exhibition-venue">{venue}</div>
      <p className="mt-2">{description}</p>
    </div>
  )
}

export const ArtworkCard = ({ title, year, medium, description }: {
  title: string;
  year: string;
  medium: string;
  description: string;
}) => {
  return (
    <div className="gallery-item">
      <div className="gallery-placeholder">
        <i className="fas fa-image text-4xl"></i>
      </div>
      <div className="gallery-info">
        <h4 className="font-semibold text-lg">{title}</h4>
        <p className="text-gray-600">{year} - {medium}</p>
        <p className="text-sm mt-2">{description}</p>
      </div>
    </div>
  )
}