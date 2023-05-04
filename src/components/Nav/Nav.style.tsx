import styled from 'styled-components'

const NavStyle = styled.nav`
  display: flex;
  padding: 20px 40px;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${(props) => props.theme.primary};
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    a {
      font-size: 16px;
      font-weight: 800;
      color: ${(props) => props.theme.textNav};
      text-decoration: none;
    }
  }
  .nav__dropdowns {
    display: flex;
    gap: 10px;
  }
`
export default NavStyle
