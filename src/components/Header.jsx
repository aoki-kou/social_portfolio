import { useState } from 'react'

function Header() {
  const [isDark, setIsDark] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
  const toggleTheme = () => {
    setIsDark(!isDark)
    document.body.classList.toggle('dark')
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return(
    <header>
      <h1>青木功多</h1>

      <div className="menu-container">
        <button
          className="theme-toggle"
          aria-label="テーマ切り替え"
          onClick={toggleTheme}
        >
          <span className="theme-icon">
            {isDark ? '☼' : '☾'}
          </span>
        </button>

        <button
          id="menu-toggle"
          className="menu-toggle"
          aria-label="メニュー切り替え"
          onClick={toggleMenu}
        >
          <span className="menu-icon">
            {isMenuOpen ? '×' : '☰' }
          </span>
        </button>
      
        {isMenuOpen && (
          <nav className="navigation">
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#works">Works</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )

}

export default Header
