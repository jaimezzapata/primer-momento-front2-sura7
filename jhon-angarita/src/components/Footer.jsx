const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content app-container">
        
        {/* Columna 1: Logo y Eslogan */}
        <div className="footer-section">
          <h2 className="logo">Tech<span className="logo-cyan">Store</span></h2>
          <p>Tu tienda de tecnología favorita con el mejor estilo.</p>
        </div>

        {/* Columna 2: Enlaces rápidos */}
        <div className="footer-section">
          <h3>Enlaces</h3>
          <ul>
            <li><a href="#">Catálogo</a></li>
            <li><a href="#">Horario</a></li>
            <li><a href="#">Discord</a></li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div className="footer-section">
          <h3>Contacto</h3>
          <p>📧 soporte@techstore.com</p>
          <p>📍 Medellín, Colombia</p>
        </div>

      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 TechStore. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;