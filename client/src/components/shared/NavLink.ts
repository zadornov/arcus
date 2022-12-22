// @ts-expect-error TS(7016): Could not find a declaration file for module 'styl... Remove this comment to see the full error message
import styled from 'styled-components/macro';
// @ts-expect-error TS(7016): Could not find a declaration file for module 'reac... Remove this comment to see the full error message
import { NavLink as RouterNavLink } from 'react-router-dom';
import { link, transition } from './helpers';

const activeClassName = 'active';

const NavLink = styled(RouterNavLink).attrs({ activeClassName })`
  ${link};

  position: relative;

  ::after {
    ${transition('opacity')};

    content: '';
    position: absolute;
    opacity: 0;
  }

  &.${activeClassName} {
    background-color: ${(props: any) => props.theme.activeBackground};

    ::after {
      opacity: 1;
    }
  }
`;

export default NavLink;
