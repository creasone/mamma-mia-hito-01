function Navbar() {
  // Estas variables simulan el estado solicitado para este primer hito.
  const token = false;
  const total = 25000;

  return (
    <nav className="navbar" aria-label="Navegación principal">
      <div className="navbar__content">
        <a className="navbar__brand" href="#inicio">
          Mamma Mía!
        </a>

        <div className="navbar__links">
          {/* Home siempre es visible, sin importar el valor del token. */}
          <a className="nav-button nav-button--active" href="#inicio">
            🍕 Home
          </a>

          {token ? (
            <>
              <button className="nav-button" type="button">
                🔓 Profile
              </button>
              <button className="nav-button" type="button">
                🔒 Logout
              </button>
            </>
          ) : (
            <>
              <button className="nav-button" type="button">
                🔐 Login
              </button>
              <button className="nav-button" type="button">
                🔐 Register
              </button>
            </>
          )}
        </div>

        {/* Total también permanece visible para ambos estados del token. */}
        <button className="total-button" type="button">
          🛒 Total: ${total.toLocaleString("es-CL")}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
