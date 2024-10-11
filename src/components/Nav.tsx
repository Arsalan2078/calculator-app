function Nav () {
  return (
    <nav className="nav">
      <h1 className="calculator-logo">
        calc
      </h1>

      <div className="theme-toggle-container">
        <p className="theme-tag">
          THEME
        </p>

        <div className="theme-toggle-labels">
          <label htmlFor="theme-1">1</label>
          <label htmlFor="theme-2">2</label>
          <label htmlFor="theme-3">3</label>
        </div>

        <div className="theme-toggle-inputs">
          <input type="checkbox" name="theme-1" id="theme-1" />
          <input type="checkbox" name="theme-2" id="theme-2" />
          <input type="checkbox" name="theme-3" id="theme-3" />
        </div>
      </div>
    </nav>
  )
}

export default Nav