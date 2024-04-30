import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledHeader = styled.header`
  background-color: #525d63;
  padding: 3.2rem 5.8rem;
  border-bottom: 1px solid var(--color-grey-200);
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
  justify-content: end;
  background-color: var(--color-dark--2);
  border-radius: 7px;
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  color: var(--color-grey-50);
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 700;
  padding: 0.5rem 2rem;
  border-radius: 5px;
  background-color: var(--color-orange-600);
  &:link,
  &:visited {
    color: var(--color-grey-100);
  }

  &.active {
    background-color: var(--color-dark--0);
  }

  &:hover {
    background-color: var(--color-orange-500);
  }
`;

function Header() {
  return (
    <StyledHeader>
      <NavList>
        <li>
          <StyledNavLink to="/login">Login</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/Register">Register</StyledNavLink>
        </li>
      </NavList>
    </StyledHeader>
  );
}

export default Header;
