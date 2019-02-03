import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Icon from '~/coreUI/components/basic/Icon';
import withSideMenuTracker from '~/core/utils/sideMenuHelpers/withSideMenuTracker';

const LargeBurgerIcon = styled(Icon)`
  font-size: ${props => props.theme.fonts.sizes.xLarge}px;
`;

const SideMenuToggler = ({ toggleSideMenuVisibility }) => (
  <LargeBurgerIcon
    className="fas fa-bars"
    onClick={() => toggleSideMenuVisibility()}
  />
);

SideMenuToggler.propTypes = {
  toggleSideMenuVisibility: PropTypes.func.isRequired,
};

export default withSideMenuTracker(SideMenuToggler);
