/** @jsx jsx */
import {jsx, keyframes} from '@emotion/core'

import styled from '@emotion/styled'
import PropTypes from 'prop-types'

import {FaSpinner} from 'react-icons/fa'

import * as R from 'ramda'
import Color from 'color'

// import classNames from 'classnames'

// import {
//   // darken,
//   infereButtonColors,
//   responsiveStyle,
//   infereIntraSpacingSize,
//   infereFontWeight,
//   propsForPrefix,
//   infereFontSize,
//   inferePaddingSize,
//   infereBorderRadius,
//   colorStyles,
//   disabledColorStyles,
// } from '~/coreUI/utils/infereStyle'

const darken = R.curry((color, ratio) =>
  Color(color)
    .darken(ratio)
    .toString(),
)
const lighten = R.curry((color, ratio) =>
  Color(color)
    .lighten(ratio)
    .toString(),
)

const btn = {
  position: 'relative',
  color: 'black',
  padding: '10px 20px',
  borderRadius: '5px',
  boxShadow: 'rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
  transition: '0.3s all ease',
  cursor: 'pointer',
}

const fullWidth = {
  width: '100%',
}

const btnBlock = ({block}) => block && fullWidth

const sizeTypes = {
  xs: {
    font: 11,
    space: 6,
  },
  md: {
    font: 14,
    space: 10,
  },
  lg: {
    font: 24,
    space: 18,
  },
}
const btnSize = ({size = 'md', px = 1, tight}) => {
  const ratio = tight ? 0.4 : 1
  const {font, space} = sizeTypes[size]
  return {
    fontSize: `${font}px`,
    padding: `${space * ratio}px ${space * 2 * px * ratio}px`,
    lineHeight: `${1.5 * font}px`,
  }
}

const appearanceTypes = {
  success: '#11cc00',
  danger: '#dd1010',
  primary: '#45b1e5',
  warning: '#ffe52b',
  info: '#6bddef',
}

const btnAppearance = ({appearance = 'primary', outline, active, disabled}) => {
  const color = appearanceTypes[appearance]
  return [
    {
      color: 'white',
      backgroundColor: color,
      border: `1px solid ${color}`,
    },

    !disabled && {
      '&:hover': {backgroundColor: darken(color, 0.15)},
    },

    outline && {
      backgroundColor: 'white',
      border: `1px solid ${color}`,
      color: color,
      '&:hover': {
        color: 'white',
      },
    },

    active && [
      {backgroundColor: darken(color, 0.15)},
      outline && {
        backgroundColor: color,
        color: 'white',
      },
    ],

    disabled && [
      {
        cursor: 'not-allowed',
        backgroundColor: lighten(color, 0.3),
        border: `1px solid ${lighten(color, 0.3)}`,
      },
      outline && {
        cursor: 'not-allowed',
        backgroundColor: 'white',
        color: lighten(color, 0.3),
        '&:hover': {
          backgroundColor: '#fcfcfc',
        },
      },
    ],
  ]
}

const fullRound = {
  borderRadius: 999,
}

const btnRound = ({round}) => round && fullRound

const StyledButton = styled.button(
  btn,
  btnBlock,
  btnSize,
  btnRound,
  btnAppearance,
)

const OverCenterSpan = styled.span({
  margin: 0,
  display: 'block',
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
})

const spinnerAnimation = keyframes({
  '100%': {
    transform: 'rotate(360deg)',
  },
})

function Button({loading, disabled = loading, children, ...restProps}) {
  return (
    <StyledButton disabled={disabled} {...restProps}>
      <span css={loading && {visibility: 'hidden'}}>{children}</span>
      {loading && (
        <OverCenterSpan>
          <FaSpinner
            css={{animation: `${spinnerAnimation} 1s linear infinite`}}
          />
        </OverCenterSpan>
      )}
    </StyledButton>
  )
}

Button.propTypes = {
  block: PropTypes.bool,
  size: PropTypes.string,
}

export default Button
