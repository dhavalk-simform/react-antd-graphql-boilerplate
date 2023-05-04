import { Select } from '../Ant'
import NavLogo from '../../assets/images/LogoFull.svg'
import NavStyle from './Nav.style'

export default {
  title: 'Custom/Nav',
  component: NavStyle
}

function Template() {
  return (
    <NavStyle className="nav">
      <div className="nav__logo">
        <img src={NavLogo} alt="logo" />
      </div>
      <ul className="nav__list">
        <li>
          <a to="/">Home</a>
        </li>
        <li>
          <a to="/about">About</a>
        </li>
        <li>
          <a to="/contact">Contact</a>
        </li>
      </ul>
      <div className="nav__dropdowns">
        <Select
          style={{ width: 120 }}
          placeholder="Language"
          defaultValue="en"
          options={[
            { value: 'en', label: 'English', key: 'en' },
            { value: 'fr', label: 'French', key: 'fr' }
          ]}
        />
        <Select
          defaultValue="default"
          style={{ width: 120 }}
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

export const Default = Template.bind({})
Default.args = {}
