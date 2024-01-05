import styled from 'styled-components';

const PrimaryNavContainer = styled.nav`
  padding: 1rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  @media (min-width: 1120px) {
    flex-direction: row;
  }
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;

  @media (min-width: 1120px) {
    flex-direction: row;
  }
`;

const NavItem = styled.li`
  margin: 1rem 0;

  @media (min-width: 1120px) {
    margin: 0 0.5rem;
  }
`;

const NavLink = styled.a`
  color: var(--secondary-color);
  font-weight: var(--font-medium);
  font-family: var(--font-default);
  line-height: normal;
  font-size: var(--font-default-size);
  text-align: center;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  text-decoration: none;
  padding-bottom: 1rem;

  &:hover {
    text-decoration: underline;
    color: var(--primary-color);
    transition: all 300ms ease-in-out;
  }

  @media (min-width: 1120px) {
    font-size: 1.25rem;
    text-align: left;
  }
`;

const PrimaryNav = ({ links }) => {
  return (
    <PrimaryNavContainer>
      <NavList>
        {links.map((linkItem) => (
          <NavItem key={linkItem.id}>
            <NavLink href={linkItem.link}>{linkItem.text}</NavLink>
          </NavItem>
        ))}
      </NavList>
    </PrimaryNavContainer>
  );
};

export default PrimaryNav;
