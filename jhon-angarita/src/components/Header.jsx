const Header = ({ searchTerm, setSearchTerm }) => {
  return (
  <header className="main-header">
      <div className="header-content">
        <div className="logo">
          Tech<span className="logo-cyan">Store</span>
        </div>
        
        <div className="search-bar-container">
          <input 
            type="text" 
            placeholder="Buscar productos..." 
            className="search-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="header-actions">
          <span>Contacto</span>
          <span>no se</span>
          <span>👤 Login</span>
        </div>
      </div>
    </header>
  );
};

export default Header;