import { NavLink } from "react-router-dom";

import React from "react";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

type NavListItemProps = {
  to: string;
  label: string;
  icon: React.ReactElement;
};
function NavListItem({ to, label, icon }: NavListItemProps) {
  return (
    <li>
      <StyledNavLink to={to}>
        {icon}
        <span>{label}</span>
      </StyledNavLink>
    </li>
  );
}

export default NavListItem;
