function Header() {
  return(
    <header>
      <h1>青木功多</h1>

      <div className="header-actions">
        <button
          id="theme-toggle"
          className="theme-toggle"
          aria-label="テーマ切り替え"
        >
          <span className="theme-icon">☾</span>
        </button>
      </div>
    </header>
  )

}

export default Header
