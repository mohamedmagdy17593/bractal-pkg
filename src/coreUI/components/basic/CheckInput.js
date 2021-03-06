/* eslint-disable indent */
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import PropTypes from 'prop-types';
import withMedia from '~/core/utils/mediaHelpers/withMedia';
import { Row } from '~/coreUI/components/layouts/helpers/LinearLayout';
import Spacer from '~/coreUI/components/layouts/helpers/Spacer';
import { propsForPrefix, infereControlType, infereNamedFontSize, responsiveStyle, infereBorderRadius, colorStyles, disabledColorStyles } from '~/coreUI/utils/infereStyle';
import Icon from '~/coreUI/components/basic/Icon';
import spaceStyles from '~/coreUI/utils/styleSystem';

import { Label } from './Labels';

const RootContainer = styled(Row)`
  cursor: pointer;
`;

const RealHiddenCheckInput = styled.input`
  opacity: 0;
  position: absolute;
  left: -999px;

  & + div {
    ${props => responsiveStyle(props, 'size', size => css`
      /* Workaround for Flexbox & Grid inconsistencies when using only width/height */
      min-width: ${1.3 * infereNamedFontSize(props, size)}px;
      max-width: ${1.3 * infereNamedFontSize(props, size)}px;
      min-height: ${1.3 * infereNamedFontSize(props, size)}px;
      max-height: ${1.3 * infereNamedFontSize(props, size)}px;
      font-size: ${0.7 * infereNamedFontSize(props, size)}px;
    `)};

    border: 1px solid;
    border-radius: ${props => infereBorderRadius(props)}px; 
    
    ${props => spaceStyles(props)}
    ${props => (props.disabled ? disabledColorStyles(props) : colorStyles(props))}
  }

  &:focus + div {
    border-color: ${props => props.theme.new.inputs.focusBorderColor[infereControlType(props)]};
  }
`;

// CheckInput work for both checkbox and radio button
function CheckInputEl({
  renderIcon = () => <Icon className="fas fa-check" />,
  checked = false,
  onClick = () => {},
  onChange = onClick,
  type,
  ...props
}) {
  return (
    <RootContainer
      centerAligned
      onClick={onClick}
    >
      <RealHiddenCheckInput
        type={type}
        id={props.elemID}
        {...props}
        inverted={props.inverted || !checked}
        checked={checked}
        onChange={onChange}
      />
      <Row
        fullWidth
        fullHeight
        centerAligned
        centerJustified
        type={type}
        {...props}
      >
        {checked && renderIcon(props)}
      </Row>
      {props.label &&
        <React.Fragment>
          <Spacer />
          <Label
            size={props.size}
            bold={props.bold}
            {...propsForPrefix(props, 'label_')}
          >
            {props.label}
          </Label>
        </React.Fragment>
      }
    </RootContainer>
  );
}

CheckInputEl.propTypes = PropTypes.shape({
  elemID: PropTypes.string.isRequired,
}).isRequired;

const CheckInput = withMedia(CheckInputEl);

export default CheckInput;
