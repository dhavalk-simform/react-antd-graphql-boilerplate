import { Link } from 'react-router-dom'
import i18next from 'i18next'
import { Select } from '../Ant'
import NavLogo from '../../assets/images/LogoFull.svg'
import NavStyle from './Nav.style'
import { useTheme } from '../../context/ThemeContext'

function Nav() {
  const [, handleChange] = useTheme()
  const handleLangChange = (value: string) => {
    i18next.changeLanguage(value)
  }
  return (
    <NavStyle className="nav">
      <div className="nav__logo">
        <img src={NavLogo} alt="logo" />
      </div>
      <ul className="nav__list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="nav__dropdowns">
        <Select
          style={{ width: 120 }}
          onChange={handleLangChange}
          placeholder="Language"
          defaultValue={localStorage.getItem('language') || 'en'}
          options={[
            { value: 'en', label: 'English', key: 'en' },
            { value: 'fr', label: 'French', key: 'fr' }
          ]}
        />
        <Select
          defaultValue="default"
          style={{ width: 120 }}
          onChange={handleChange}
          placeholder="Theme"
          options={[
            { value: 'default', label: 'Default' },
            { value: 'dark', label: 'Dark' },
            { value: 'green', label: 'Green' }
          ]}
        />
      </div>
    </NavStyle>
  )
}

export default Nav
