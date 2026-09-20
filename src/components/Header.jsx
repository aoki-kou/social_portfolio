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

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Works', href: '#works' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' }
  ]

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
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )

}

export default Header
