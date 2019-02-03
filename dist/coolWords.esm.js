import React from 'react';
import { ThemeProvider, withTheme } from 'emotion-theming';
import _styled from '@emotion/styled-base';
import _ from 'lodash';
import cuid from 'cuid';
import Color from 'color';
import { css } from '@emotion/core';
import changeCase from 'change-case';
import { withMedia, MediaQueryProvider } from 'react-media-query-hoc-with-context';
import PropTypes from 'prop-types';
import PulseLoader from 'react-spinners/PulseLoader';

const Theme = {
  new: {
    inputs: {
      focusBorderColor: {
        primary: '#0065b3',
        secondary: '#e28203'
      },
      placeholderColor: 'rgba(0,0,0,0.22)'
    },
    colors: {
      buttons: {
        primary: {
          background: '#33a8ff',
          backgroundinverted: '#FFFFFF',
          line: '#FFFFFF',
          lineInverted: '#33a8ff'
        },
        secondary: {
          background: '#fb9410',
          backgroundinverted: '#FFFFFF',
          line: '#FFFFFF',
          lineInverted: '#fb9410'
        },
        passive: {
          background: '#e5e5e5',
          backgroundinverted: '#FFFFFF',
          line: 'rgba(0, 0, 0, 0.7)',
          lineInverted: '#aaaaaa'
        },
        disabled: {
          background: '#aaaaaa',
          backgroundinverted: '#FFFFFF',
          line: '#FFFFFF',
          lineInverted: '#aaaaaa'
        },
        error: {
          background: '#d32f2f',
          backgroundinverted: '#FFFFFF',
          line: '#FFFFFF',
          lineInverted: '#d32f2f'
        }
      },
      labels: {
        normal: {
          primary: '#33a8ff',
          secondary: '#fb9410',
          important: '#000000',
          emphasized: 'rgba(0, 0, 0, 0.7)',
          normal: 'rgba(0, 0, 0, 0.5)',
          subtle: 'rgba(0, 0, 0, 0.35)',
          hint: 'rgba(0, 0, 0, 0.22)',
          error: '#d32f2f'
        },
        inverted: {
          primary: 'white',
          secondary: 'white',
          important: 'white',
          emphasized: 'rgba(255, 255, 255, 0.7)',
          normal: 'rgba(255, 255, 255, 0.5)',
          subtle: 'rgba(255, 255, 255, 0.4)',
          hint: 'rgba(255, 255, 255, 0.3)',
          error: 'red'
        },
        borders: {
          normal: {
            hint: 'rgba(0,0,0,0.05)',
            subtle: 'rgba(0,0,0,0.1)',
            normal: 'rgba(0,0,0,0.3)',
            dark: 'rgba(0,0,0,0.5)',
            important: 'black'
          },
          inverted: {
            important: 'white',
            normal: 'rgba(255, 255, 255, 0.7)',
            subtle: 'rgba(255, 255, 255, 0.5)',
            hint: 'rgba(255, 255, 255, 0.3)'
          }
        }
      },
      backgrounds: {
        background: '#fdfdfd',
        darkBackground: '#dcdcdc',
        panelHeader: '#f2f2f2',
        panel: '#f9f9f9',
        lightPanelHeader: '#e5e5e5'
      },
      named: {
        primary: '#33a8ff',
        secondary: '#fb9410',
        error: '#d32f2f',
        info: '#5c9ec0',
        success: '#7CB342',
        warning: '#FFB300',
        default: '#708090',
        inverted: '#FFFFFF',
        foreGround: '#FFFFFF'
      }
    },
    spacer: 10,
    fonts: {
      sizes: {
        header: 36,
        xxl: 25,
        xl: 20,
        lg: 18,
        md: 16,
        sm: 14,
        xs: 12,
        xxs: 10
      },
      weights: {
        extraBold: 900,
        bold: 700,
        semiBold: 600,
        regular: 400,
        light: 300,
        normal: 'normal'
      }
    },
    borders: {
      size: {
        thin: 1,
        normal: 2,
        bold: 3
      },
      color: {
        extraLight: 'rgba(0,0,0,0.05)',
        light: 'rgba(0,0,0,0.1)',
        normal: 'rgba(0,0,0,0.3)',
        dark: 'rgba(0,0,0,0.5)',
        lightGray: '#e5e5e5'
      },
      radius: {
        sm: 3,
        md: 5,
        lg: 10,
        xl: 18,
        xxl: 21
      }
    }
  },
  colors: {
    primary: '#33a8ff',
    primaryHover: '#1e97f0',
    primaryClicked: '#0a7bcd',
    primaryDark: '#2c8bd2',
    secondary: '#fb9410',
    secondaryHover: '#f08a07',
    secondaryClicked: '#e5870f',
    secondaryDark: '#cc790e',
    error: '#D32f2f',
    success: 'green',
    cellHoverColor: 'rgba(48, 157, 224, 0.1)',
    cellHoverColorAlt: 'rgba(48, 157, 224, 0.2)',
    link: '#fb9410',
    backgroundColor: '#f9f9f9',
    icon: '#7f7f7f',
    labels: {
      important: '#000000',
      normal: 'rgba(0, 0, 0, 0.5)',
      emphasized: 'rgba(0, 0, 0, 0.7)',
      subtle: 'rgba(0, 0, 0, 0.35)',
      hint: 'rgba(0, 0, 0, 0.22)'
    },
    invertedLabels: {
      important: 'white',
      normal: 'rgba(255, 255, 255, 0.7)',
      subtle: 'rgba(255, 255, 255, 0.5)',
      hint: 'rgba(255, 255, 255, 0.3)'
    },
    named: {
      white: '#FFFFFF',
      grey: 'rgba(229, 229, 229, 0.7)',
      extraLightGrey: '#fbfbfa'
    }
  },
  fonts: {
    sizes: {
      xxxLarge: 48,
      xxLarge: 36,
      xLarge: 25,
      large: 18,
      medium: 16,
      small: 14,
      xSmall: 12,
      xxSmall: 11,
      xxxSmall: 9.5
    },
    weights: {
      extraBold: 900,
      bold: 700,
      semiBold: 600,
      regular: 400,
      normal: 'normal'
    }
  },
  paddings: {
    xxSmall: 1,
    xSmall: 2,
    small: 5,
    normal: 7,
    medium: 10,
    large: 15,
    xLarge: 20,
    xxLarge: 25,
    xxxLarge: 30,
    xxxxLarge: 35,
    xxxxxLarge: 40
  },
  borders: {
    size: {
      thin: 1,
      normal: 2,
      bold: 3
    },
    color: {
      extraLight: 'rgba(0,0,0,0.05)',
      light: 'rgba(0,0,0,0.1)',
      normal: 'rgba(0,0,0,0.3)',
      dark: 'rgba(0,0,0,0.5)',
      lightGray: '#e5e5e5'
    },
    radius: {
      small: 3,
      normal: 5,
      large: 10,
      xLarge: 18,
      xxLarge: 21
    }
  },
  inputs: {
    radius: 25,
    fontSize: 14,
    placeholderColor: 'rgba(0,0,0,0.22)',
    borderColor: 'rgba(0,0,0,0.22)',
    borderColorActive: '#33a8ff',
    color: 'rgba(0, 0, 0)',
    padding: {
      top: 12,
      bottom: 12,
      left: 15,
      right: 15
    },
    borderWidth: 1
  },
  buttons: {
    radius: 5,
    fontSize: 16,
    padding: 12,
    border: 1,
    // Only applicable in the inverted state
    disabled: {
      backgroundColor: {
        normal: '#999999',
        inverted: '#cccccc'
      }
    }
  }
};
var defaultTheme = Theme;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/* eslint-disable function-paren-newline */

const generateMissingKeys = element => element.props.key ? element : React.cloneElement(element, {
  key: cuid()
});

var injectElementBetweenChildElements = ((items, separator, generateKeysIfNeeded) => {
  if (!separator) {
    return items;
  }

  if (!items) {
    return [];
  } else if (items.length === 0 || !_.isArray(items)) {
    return [items];
  }

  let elementItems = items.filter(element => _.isArray(element) && element.length > 0 || React.isValidElement(element) || _.isString(element) && element.trim().length > 0);
  elementItems = _.flatten(elementItems);

  const keyedSeparator = () => generateKeysIfNeeded ? generateMissingKeys(separator) : separator;

  const itemsWithExtraSeparator = [..._.flatten(elementItems.map(item => item ? [item, keyedSeparator()] : null))];
  return itemsWithExtraSeparator.slice(0, itemsWithExtraSeparator.length - 1);
});

function assert(condition, message) {
  if (!condition) {
    const errorMessage = message || 'Assertion failed';

    if (typeof Error !== 'undefined') {
      throw new Error(errorMessage);
    }

    throw errorMessage; // Fallback
  }
}

const generateSequenceFromTo = (from, to) => from < to ? [...Array(to - from).keys()].map(i => i + from) : [...Array(from - to).keys()].map(i => from - i);

const SIZE_PROP_NAMES = ['xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'header'];

const themeProp = propName => propName.replace('s_', '');

const darken = (color, ratio) => ratio >= 0 ? Color(color).darken(ratio).string() : Color(color).lighten(-1 * ratio).string();

const modesColors = (type, theme, props) => {
  const colors = theme.new.colors.buttons[type];
  return {
    normal: {
      lineColor: colors.line,
      borderColor: props.forceInvertedBorder ? colors.line : colors.background,
      backgroundColor: colors.background
    },
    inverted: {
      lineColor: colors.lineInverted,
      borderColor: props.forceInvertedBorder ? colors.backgroundinverted : colors.lineInverted,
      backgroundColor: colors.backgroundinverted
    }
  };
};

const boxModesColors = (type, theme) => ({
  normal: {
    lineColor: theme.new.colors.named.inverted,
    borderColor: theme.new.colors.named.inverted,
    backgroundColor: theme.new.colors.named[type]
  },
  inverted: {
    lineColor: theme.new.colors.named[type],
    borderColor: theme.new.colors.named[type],
    backgroundColor: theme.new.colors.panels.background
  }
});
const infereControlType = props => {
  if (props.disabled) {
    return 'disabled';
  } else if (props.passive) {
    return 'passive';
  } else if (props.secondary) {
    return 'secondary';
  }

  return 'primary';
};
const infereControlMode = props => {
  if (props.inverted) {
    return 'inverted';
  }

  return 'normal';
};

const infereBoxColors = props => {
  if (props.colors) {
    return props.colors;
  }

  if (!props.boxType || !props.theme.new.colors.named[props.boxType]) {
    return {};
  }

  const type = props.boxType;
  const mode = infereControlMode(props);
  return boxModesColors(type, props.theme)[mode];
};

const boxColorsStyles = props =>
/*#__PURE__*/
css("color:", infereBoxColors(props).lineColor, ";border-color:", infereBoxColors(props).borderColor, ";background-color:", infereBoxColors(props).backgroundColor, ";label:boxColorsStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZmVyZVN0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStGMkMiLCJmaWxlIjoiaW5mZXJlU3R5bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29sb3IgZnJvbSAnY29sb3InXG5pbXBvcnQge2Nzc30gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IGFzc2VydCBmcm9tICd+L2NvcmUvdXRpbHMvanNIZWxwZXJzL2Fzc2VydCdcblxuaW1wb3J0IGdlbmVyYXRlU2VxdWVuY2VGcm9tVG8gZnJvbSAnfi9jb3JlL3V0aWxzL2pzSGVscGVycy9nZW5lcmF0ZVNlcXVlbmNlJ1xuXG5jb25zdCBTSVpFX1BST1BfTkFNRVMgPSBbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJywgJ3h4bCcsICdoZWFkZXInXVxuXG5jb25zdCBGT05UX0NPTE9SUyA9IFtcbiAgJ3ByaW1hcnknLFxuICAnc2Vjb25kYXJ5JyxcbiAgJ2ltcG9ydGFudCcsXG4gICdub3JtYWwnLFxuICAnZW1waGFzaXplZCcsXG4gICdzdWJ0bGUnLFxuICAnaGludCcsXG4gICdlcnJvcicsXG5dXG5cbmNvbnN0IHRoZW1lUHJvcCA9IHByb3BOYW1lID0+IHByb3BOYW1lLnJlcGxhY2UoJ3NfJywgJycpXG5cbmV4cG9ydCBjb25zdCBkYXJrZW4gPSAoY29sb3IsIHJhdGlvKSA9PlxuICByYXRpbyA+PSAwXG4gICAgPyBDb2xvcihjb2xvcilcbiAgICAgICAgLmRhcmtlbihyYXRpbylcbiAgICAgICAgLnN0cmluZygpXG4gICAgOiBDb2xvcihjb2xvcilcbiAgICAgICAgLmxpZ2h0ZW4oLTEgKiByYXRpbylcbiAgICAgICAgLnN0cmluZygpXG5cbmNvbnN0IG1vZGVzQ29sb3JzID0gKHR5cGUsIHRoZW1lLCBwcm9wcykgPT4ge1xuICBjb25zdCBjb2xvcnMgPSB0aGVtZS5uZXcuY29sb3JzLmJ1dHRvbnNbdHlwZV1cblxuICByZXR1cm4ge1xuICAgIG5vcm1hbDoge1xuICAgICAgbGluZUNvbG9yOiBjb2xvcnMubGluZSxcbiAgICAgIGJvcmRlckNvbG9yOiBwcm9wcy5mb3JjZUludmVydGVkQm9yZGVyID8gY29sb3JzLmxpbmUgOiBjb2xvcnMuYmFja2dyb3VuZCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmJhY2tncm91bmQsXG4gICAgfSxcbiAgICBpbnZlcnRlZDoge1xuICAgICAgbGluZUNvbG9yOiBjb2xvcnMubGluZUludmVydGVkLFxuICAgICAgYm9yZGVyQ29sb3I6IHByb3BzLmZvcmNlSW52ZXJ0ZWRCb3JkZXJcbiAgICAgICAgPyBjb2xvcnMuYmFja2dyb3VuZGludmVydGVkXG4gICAgICAgIDogY29sb3JzLmxpbmVJbnZlcnRlZCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmJhY2tncm91bmRpbnZlcnRlZCxcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBib3hNb2Rlc0NvbG9ycyA9ICh0eXBlLCB0aGVtZSkgPT4gKHtcbiAgbm9ybWFsOiB7XG4gICAgbGluZUNvbG9yOiB0aGVtZS5uZXcuY29sb3JzLm5hbWVkLmludmVydGVkLFxuICAgIGJvcmRlckNvbG9yOiB0aGVtZS5uZXcuY29sb3JzLm5hbWVkLmludmVydGVkLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUubmV3LmNvbG9ycy5uYW1lZFt0eXBlXSxcbiAgfSxcbiAgaW52ZXJ0ZWQ6IHtcbiAgICBsaW5lQ29sb3I6IHRoZW1lLm5ldy5jb2xvcnMubmFtZWRbdHlwZV0sXG4gICAgYm9yZGVyQ29sb3I6IHRoZW1lLm5ldy5jb2xvcnMubmFtZWRbdHlwZV0sXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5uZXcuY29sb3JzLnBhbmVscy5iYWNrZ3JvdW5kLFxuICB9LFxufSlcblxuZXhwb3J0IGNvbnN0IGluZmVyZUNvbnRyb2xUeXBlID0gcHJvcHMgPT4ge1xuICBpZiAocHJvcHMuZGlzYWJsZWQpIHtcbiAgICByZXR1cm4gJ2Rpc2FibGVkJ1xuICB9IGVsc2UgaWYgKHByb3BzLnBhc3NpdmUpIHtcbiAgICByZXR1cm4gJ3Bhc3NpdmUnXG4gIH0gZWxzZSBpZiAocHJvcHMuc2Vjb25kYXJ5KSB7XG4gICAgcmV0dXJuICdzZWNvbmRhcnknXG4gIH1cbiAgcmV0dXJuICdwcmltYXJ5J1xufVxuXG5leHBvcnQgY29uc3QgaW5mZXJlQ29udHJvbE1vZGUgPSBwcm9wcyA9PiB7XG4gIGlmIChwcm9wcy5pbnZlcnRlZCkge1xuICAgIHJldHVybiAnaW52ZXJ0ZWQnXG4gIH1cbiAgcmV0dXJuICdub3JtYWwnXG59XG5cbmNvbnN0IGluZmVyZUJveENvbG9ycyA9IHByb3BzID0+IHtcbiAgaWYgKHByb3BzLmNvbG9ycykge1xuICAgIHJldHVybiBwcm9wcy5jb2xvcnNcbiAgfVxuICBpZiAoIXByb3BzLmJveFR5cGUgfHwgIXByb3BzLnRoZW1lLm5ldy5jb2xvcnMubmFtZWRbcHJvcHMuYm94VHlwZV0pIHtcbiAgICByZXR1cm4ge31cbiAgfVxuICBjb25zdCB0eXBlID0gcHJvcHMuYm94VHlwZVxuICBjb25zdCBtb2RlID0gaW5mZXJlQ29udHJvbE1vZGUocHJvcHMpXG5cbiAgcmV0dXJuIGJveE1vZGVzQ29sb3JzKHR5cGUsIHByb3BzLnRoZW1lKVttb2RlXVxufVxuXG5leHBvcnQgY29uc3QgYm94Q29sb3JzU3R5bGVzID0gcHJvcHMgPT4gY3NzYFxuICBjb2xvcjogJHtpbmZlcmVCb3hDb2xvcnMocHJvcHMpLmxpbmVDb2xvcn07XG4gIGJvcmRlci1jb2xvcjogJHtpbmZlcmVCb3hDb2xvcnMocHJvcHMpLmJvcmRlckNvbG9yfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtpbmZlcmVCb3hDb2xvcnMocHJvcHMpLmJhY2tncm91bmRDb2xvcn07XG5gXG5cbmV4cG9ydCBjb25zdCBpbmZlcmVCdXR0b25Db2xvcnMgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHR5cGUgPSBpbmZlcmVDb250cm9sVHlwZShwcm9wcylcbiAgY29uc3QgbW9kZSA9IGluZmVyZUNvbnRyb2xNb2RlKHByb3BzKVxuXG4gIHJldHVybiBwcm9wcy5jb2xvcnMgfHwgbW9kZXNDb2xvcnModHlwZSwgcHJvcHMudGhlbWUsIHByb3BzKVttb2RlXVxufVxuXG5jb25zdCBjb2xvcnMgPSAocHJvcHMsIGRhcmtSYXRpbykgPT4gY3NzYFxuICBjb2xvcjogJHtkYXJrZW4oXG4gICAgcHJvcHMuY29sb3IgfHwgaW5mZXJlQnV0dG9uQ29sb3JzKHByb3BzKS5saW5lQ29sb3IsXG4gICAgZGFya1JhdGlvLFxuICApfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtkYXJrZW4oXG4gICAgcHJvcHMuYmFja2dyb3VuZENvbG9yIHx8IGluZmVyZUJ1dHRvbkNvbG9ycyhwcm9wcykuYmFja2dyb3VuZENvbG9yLFxuICAgIGRhcmtSYXRpbyxcbiAgKX07XG4gIGJvcmRlci1jb2xvcjogJHtkYXJrZW4oXG4gICAgcHJvcHMuYm9yZGVyQ29sb3IgfHwgaW5mZXJlQnV0dG9uQ29sb3JzKHByb3BzKS5ib3JkZXJDb2xvcixcbiAgICBkYXJrUmF0aW8sXG4gICl9O1xuYFxuXG5leHBvcnQgY29uc3QgY29sb3JTdHlsZXMgPSBwcm9wcyA9PiBjc3NgXG4gICR7Y29sb3JzKHByb3BzLCAwKX1cblxuICAmOmhvdmVyIHtcbiAgICAke2NvbG9ycyhwcm9wcywgMC4wNSl9XG4gIH1cbiAgJjphY3RpdmUge1xuICAgICR7Y29sb3JzKHByb3BzLCAwLjEpfVxuICB9XG4gICY6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogJHtkYXJrZW4oaW5mZXJlQnV0dG9uQ29sb3JzKHByb3BzKS5ib3JkZXJDb2xvciwgMC4zKX07XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkQ29sb3JTdHlsZXMgPSBwcm9wcyA9PiBjc3NgXG4gICR7Y29sb3JzKHByb3BzLCAwKX1cbmBcblxuZXhwb3J0IGNvbnN0IGdldE5hbWVkRm9udFNpemUgPSBzaXplID0+XG4gIFNJWkVfUFJPUF9OQU1FUy5maW5kKHNpemVQcm9wID0+IHNpemUgPT09IHNpemVQcm9wKVxuXG5leHBvcnQgY29uc3QgaW5mZXJlU2l6ZSA9IHByb3BzID0+XG4gIGdldE5hbWVkRm9udFNpemUocHJvcHMuc2l6ZSkgfHxcbiAgU0laRV9QUk9QX05BTUVTLmZpbmQoc2l6ZVByb3AgPT4gcHJvcHNbc2l6ZVByb3BdKVxuXG5leHBvcnQgY29uc3QgaW5mZXJlU3BhY2VTaXplID0gKHByb3BzLCBzaXplKSA9PiB7XG4gIGlmIChfLmlzTnVtYmVyKHNpemUpKSB7XG4gICAgcmV0dXJuIGAke3NpemUgKiBwcm9wcy50aGVtZS5uZXcuc3BhY2VyfXB4YFxuICB9IGVsc2UgaWYgKHNpemUgJiYgcGFyc2VGbG9hdChzaXplLnRvU3RyaW5nKCkpID09PSBzaXplKSB7XG4gICAgcmV0dXJuIGAke3BhcnNlRmxvYXQoc2l6ZS50b1N0cmluZygpKSAqIHByb3BzLnRoZW1lLm5ldy5zcGFjZXJ9cHhgXG4gIH1cbiAgcmV0dXJuIHNpemVcbn1cblxuZXhwb3J0IGNvbnN0IGluZmVyZUZvbnRDb2xvciA9IChwcm9wcywgZGVmYXVsdENvbG9yKSA9PiB7XG4gIGxldCBjb2xvciA9IG51bGxcbiAgaWYgKHByb3BzLmNvbG9yKSB7XG4gICAgY29sb3IgPSBGT05UX0NPTE9SUy5maW5kKGZvbnRDb2xvciA9PiBmb250Q29sb3IgPT09IHByb3BzLmNvbG9yKVxuICAgIGlmICghY29sb3IpIHtcbiAgICAgIHJldHVybiBwcm9wcy5jb2xvclxuICAgIH1cbiAgfVxuICBjb2xvciA9XG4gICAgY29sb3IgfHwgRk9OVF9DT0xPUlMuZmluZChmb250Q29sb3IgPT4gcHJvcHNbZm9udENvbG9yXSkgfHwgZGVmYXVsdENvbG9yXG5cbiAgY29uc3QgbW9kZSA9IGluZmVyZUNvbnRyb2xNb2RlKHByb3BzKVxuXG4gIHJldHVybiBwcm9wcy50aGVtZS5uZXcuY29sb3JzLmxhYmVsc1ttb2RlXVtjb2xvcl1cbn1cblxuZXhwb3J0IGNvbnN0IGluZmVyZUZvbnRTaXplID0gKHByb3BzLCBzaXplKSA9PiB7XG4gIGxldCBpbmZlcmVkU2l6ZSA9IGluZmVyZVNpemUocHJvcHMpXG4gIGNvbnN0IHJlY2VpdmVkU2l6ZSA9IHNpemUgfHwgcHJvcHMuc2l6ZVxuXG4gIGlmICghcmVjZWl2ZWRTaXplICYmICFpbmZlcmVkU2l6ZSkge1xuICAgIGluZmVyZWRTaXplID0gJ21kJ1xuICB9XG5cbiAgaWYgKF8uaXNOdW1iZXIocmVjZWl2ZWRTaXplKSkge1xuICAgIHJldHVybiBgJHtyZWNlaXZlZFNpemUgKiBwcm9wcy50aGVtZS5uZXcuc3BhY2VyfXB4YFxuICB9IGVsc2UgaWYgKFxuICAgIHJlY2VpdmVkU2l6ZSAmJlxuICAgIHBhcnNlRmxvYXQocmVjZWl2ZWRTaXplLnRvU3RyaW5nKCkpID09PSByZWNlaXZlZFNpemVcbiAgKSB7XG4gICAgcmV0dXJuIGAke3BhcnNlRmxvYXQocmVjZWl2ZWRTaXplKS50b1N0cmluZygpICogcHJvcHMudGhlbWUubmV3LnNwYWNlcn1weGBcbiAgfSBlbHNlIGlmIChnZXROYW1lZEZvbnRTaXplKHJlY2VpdmVkU2l6ZSkpIHtcbiAgICByZXR1cm4gYCR7cHJvcHMudGhlbWUubmV3LmZvbnRzLnNpemVzW3RoZW1lUHJvcChyZWNlaXZlZFNpemUpXX1weGBcbiAgfSBlbHNlIGlmIChpbmZlcmVkU2l6ZSkge1xuICAgIHJldHVybiBgJHtwcm9wcy50aGVtZS5uZXcuZm9udHMuc2l6ZXNbdGhlbWVQcm9wKGluZmVyZWRTaXplKV19cHhgXG4gIH1cblxuICByZXR1cm4gcmVjZWl2ZWRTaXplXG59XG5cbmV4cG9ydCBjb25zdCBpbmZlcmVOYW1lZEZvbnRTaXplID0gKHByb3BzLCBzaXplKSA9PiB7XG4gIGNvbnN0IGluZmVyZWRTaXplID0gc2l6ZSB8fCBpbmZlcmVTaXplKHByb3BzKSB8fCAnbWQnXG4gIHJldHVybiBwcm9wcy50aGVtZS5uZXcuZm9udHMuc2l6ZXNbdGhlbWVQcm9wKGluZmVyZWRTaXplKV0gfHwgaW5mZXJlZFNpemVcbn1cblxuZXhwb3J0IGNvbnN0IGluZmVyZUZvbnRXZWlnaHQgPSBwcm9wcyA9PiB7XG4gIGlmIChwcm9wcy5leHRyYUJvbGQpIHtcbiAgICByZXR1cm4gcHJvcHMudGhlbWUubmV3LmZvbnRzLndlaWdodHMuZXh0cmFCb2xkXG4gIH0gZWxzZSBpZiAocHJvcHMuYm9sZCkge1xuICAgIHJldHVybiBwcm9wcy50aGVtZS5uZXcuZm9udHMud2VpZ2h0cy5ib2xkXG4gIH0gZWxzZSBpZiAocHJvcHMuc2VtaUJvbGQpIHtcbiAgICByZXR1cm4gcHJvcHMudGhlbWUubmV3LmZvbnRzLndlaWdodHMuc2VtaUJvbGRcbiAgfVxuICByZXR1cm4gbnVsbCAvLyBOb3JtYWxcbn1cblxuZXhwb3J0IGNvbnN0IGluZmVyZUJvcmRlclJhZGl1cyA9IChwcm9wcywgc2l6ZSkgPT4ge1xuICBpZiAocHJvcHMuZnVsbFJvdW5kKSB7XG4gICAgcmV0dXJuIDEwMDBcbiAgfSBlbHNlIGlmIChwcm9wcy5yYWRpdXMpIHtcbiAgICByZXR1cm4gcHJvcHMucmFkaXVzXG4gIH1cblxuICBjb25zdCBpbmZlcmVkU2l6ZSA9IGluZmVyZU5hbWVkRm9udFNpemUocHJvcHMsIHNpemUpXG4gIHJldHVybiBpbmZlcmVkU2l6ZSAvIDIuNVxufVxuXG5leHBvcnQgY29uc3QgaW5mZXJlUGFkZGluZ1NpemUgPSAocHJvcHMsIHNpemUpID0+IHtcbiAgY29uc3QgaW5mZXJlZFNpemUgPSAwLjUzICogaW5mZXJlTmFtZWRGb250U2l6ZShwcm9wcywgc2l6ZSlcbiAgcmV0dXJuIHByb3BzLnRpZ2h0ID8gaW5mZXJlZFNpemUgLyAyIDogaW5mZXJlZFNpemVcbn1cblxuZXhwb3J0IGNvbnN0IGluZmVyZUludHJhU3BhY2luZ1NpemUgPSAocHJvcHMsIHNpemUpID0+IHtcbiAgY29uc3QgaW5mZXJlZFNpemUgPSAwLjUzICogaW5mZXJlTmFtZWRGb250U2l6ZShwcm9wcywgc2l6ZSlcbiAgcmV0dXJuIHByb3BzLnRpZ2h0ID8gaW5mZXJlZFNpemUgLyAyIDogaW5mZXJlZFNpemVcbn1cblxuZXhwb3J0IGNvbnN0IHByb3BzRm9yUHJlZml4ID0gKHByb3BzLCBwcmVmaXgpID0+XG4gIF8ubWFwS2V5cyhcbiAgICBfLnBpY2tCeShwcm9wcywgKHByb3BWYWx1ZSwgcHJvcE5hbWUpID0+IHByb3BOYW1lLmluZGV4T2YocHJlZml4KSA9PT0gMCksXG4gICAgKHRyaWdnZXJQcm9wVmFsdWUsIHRyaWdnZXJQcm9wS2V5KSA9PiB0cmlnZ2VyUHJvcEtleS5yZXBsYWNlKHByZWZpeCwgJycpLFxuICApXG5cbmNvbnN0IHJlc3BvbnNpdmVKU1F1ZXJpZXMgPSBtZWRpYSA9PiBbXG4gIG1lZGlhLnhzbWFsbCxcbiAgbWVkaWEubWluTW9iaWxlLFxuICBtZWRpYS5taW5UYWJsZXQsXG4gIG1lZGlhLm1pbkRlc2t0b3AsXG4gIG1lZGlhLmxhcmdlRGVza3RvcCxcbl1cblxuZXhwb3J0IGNvbnN0IHJlc3BvbnNpdmVTdHlsZSA9IChwcm9wcywgdGFyZ2V0UHJvcCwgY2FsbEJhY2ssIGRlZmF1bHRWYWx1ZSkgPT4ge1xuICBsZXQgcHJvcFZhbHVlID0gbnVsbFxuICBpZiAodGFyZ2V0UHJvcCA9PT0gJ3NpemUnKSB7XG4gICAgaWYgKHByb3BzLnNpemUpIHtcbiAgICAgIHByb3BWYWx1ZSA9IHByb3BzLnNpemVcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcFZhbHVlID0gaW5mZXJlU2l6ZShwcm9wcykgfHwgJ21kJ1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBwcm9wVmFsdWUgPSBwcm9wc1t0YXJnZXRQcm9wXVxuICB9XG5cbiAgaWYgKCFwcm9wVmFsdWUpIHtcbiAgICBpZiAoZGVmYXVsdFZhbHVlKSB7XG4gICAgICByZXR1cm4gY2FsbEJhY2soZGVmYXVsdFZhbHVlKVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgaWYgKF8uaXNBcnJheShwcm9wVmFsdWUpICYmIHByb3BWYWx1ZS5sZW5ndGggPj0gMikge1xuICAgIGFzc2VydChcbiAgICAgIHByb3BzLm1lZGlhLFxuICAgICAgXCJNZWRpYSBpc24ndCBmb3VuZC4gTWFrZSBzdXJlIHRvIHN1cnJvdW5kIHdpdGggd2l0aE1lZGlhXCIsXG4gICAgKVxuICAgIGNvbnN0IGN1cnJlbnRTaXplSW5kZXggPSBnZW5lcmF0ZVNlcXVlbmNlRnJvbVRvKDQsIC0xKS5maW5kKFxuICAgICAgaSA9PiByZXNwb25zaXZlSlNRdWVyaWVzKHByb3BzLm1lZGlhKVtpXSAmJiBpIDwgcHJvcFZhbHVlLmxlbmd0aCxcbiAgICApXG4gICAgaWYgKCFjdXJyZW50U2l6ZUluZGV4ICYmIGN1cnJlbnRTaXplSW5kZXggIT09IDApIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICByZXR1cm4gY2FsbEJhY2socHJvcFZhbHVlW2N1cnJlbnRTaXplSW5kZXhdKVxuICB9XG4gIHJldHVybiBfLmlzQXJyYXkocHJvcFZhbHVlKSAmJiBwcm9wVmFsdWUubGVuZ3RoID09PSAxXG4gICAgPyBjYWxsQmFjayhwcm9wVmFsdWVbMF0pXG4gICAgOiBjYWxsQmFjayhwcm9wVmFsdWUpXG59XG5cbmV4cG9ydCBjb25zdCByZXNwb25zaXZlRm9udFNpemVTdHlsZSA9IHByb3BzID0+XG4gIHJlc3BvbnNpdmVTdHlsZShcbiAgICBwcm9wcyxcbiAgICAnc2l6ZScsXG4gICAgc2l6ZSA9PiBjc3NgXG4gICAgICBmb250LXNpemU6ICR7aW5mZXJlRm9udFNpemUocHJvcHMsIHNpemUpfTtcbiAgICBgLFxuICApXG4iXX0= */"));
const infereButtonColors = props => {
  const type = infereControlType(props);
  const mode = infereControlMode(props);
  return props.colors || modesColors(type, props.theme, props)[mode];
};

const colors = (props, darkRatio) =>
/*#__PURE__*/
css("color:", darken(props.color || infereButtonColors(props).lineColor, darkRatio), ";background-color:", darken(props.backgroundColor || infereButtonColors(props).backgroundColor, darkRatio), ";border-color:", darken(props.borderColor || infereButtonColors(props).borderColor, darkRatio), ";label:colors;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZmVyZVN0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRHd0MiLCJmaWxlIjoiaW5mZXJlU3R5bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29sb3IgZnJvbSAnY29sb3InXG5pbXBvcnQge2Nzc30gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IGFzc2VydCBmcm9tICd+L2NvcmUvdXRpbHMvanNIZWxwZXJzL2Fzc2VydCdcblxuaW1wb3J0IGdlbmVyYXRlU2VxdWVuY2VGcm9tVG8gZnJvbSAnfi9jb3JlL3V0aWxzL2pzSGVscGVycy9nZW5lcmF0ZVNlcXVlbmNlJ1xuXG5jb25zdCBTSVpFX1BST1BfTkFNRVMgPSBbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJywgJ3h4bCcsICdoZWFkZXInXVxuXG5jb25zdCBGT05UX0NPTE9SUyA9IFtcbiAgJ3ByaW1hcnknLFxuICAnc2Vjb25kYXJ5JyxcbiAgJ2ltcG9ydGFudCcsXG4gICdub3JtYWwnLFxuICAnZW1waGFzaXplZCcsXG4gICdzdWJ0bGUnLFxuICAnaGludCcsXG4gICdlcnJvcicsXG5dXG5cbmNvbnN0IHRoZW1lUHJvcCA9IHByb3BOYW1lID0+IHByb3BOYW1lLnJlcGxhY2UoJ3NfJywgJycpXG5cbmV4cG9ydCBjb25zdCBkYXJrZW4gPSAoY29sb3IsIHJhdGlvKSA9PlxuICByYXRpbyA+PSAwXG4gICAgPyBDb2xvcihjb2xvcilcbiAgICAgICAgLmRhcmtlbihyYXRpbylcbiAgICAgICAgLnN0cmluZygpXG4gICAgOiBDb2xvcihjb2xvcilcbiAgICAgICAgLmxpZ2h0ZW4oLTEgKiByYXRpbylcbiAgICAgICAgLnN0cmluZygpXG5cbmNvbnN0IG1vZGVzQ29sb3JzID0gKHR5cGUsIHRoZW1lLCBwcm9wcykgPT4ge1xuICBjb25zdCBjb2xvcnMgPSB0aGVtZS5uZXcuY29sb3JzLmJ1dHRvbnNbdHlwZV1cblxuICByZXR1cm4ge1xuICAgIG5vcm1hbDoge1xuICAgICAgbGluZUNvbG9yOiBjb2xvcnMubGluZSxcbiAgICAgIGJvcmRlckNvbG9yOiBwcm9wcy5mb3JjZUludmVydGVkQm9yZGVyID8gY29sb3JzLmxpbmUgOiBjb2xvcnMuYmFja2dyb3VuZCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmJhY2tncm91bmQsXG4gICAgfSxcbiAgICBpbnZlcnRlZDoge1xuICAgICAgbGluZUNvbG9yOiBjb2xvcnMubGluZUludmVydGVkLFxuICAgICAgYm9yZGVyQ29sb3I6IHByb3BzLmZvcmNlSW52ZXJ0ZWRCb3JkZXJcbiAgICAgICAgPyBjb2xvcnMuYmFja2dyb3VuZGludmVydGVkXG4gICAgICAgIDogY29sb3JzLmxpbmVJbnZlcnRlZCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmJhY2tncm91bmRpbnZlcnRlZCxcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBib3hNb2Rlc0NvbG9ycyA9ICh0eXBlLCB0aGVtZSkgPT4gKHtcbiAgbm9ybWFsOiB7XG4gICAgbGluZUNvbG9yOiB0aGVtZS5uZXcuY29sb3JzLm5hbWVkLmludmVydGVkLFxuICAgIGJvcmRlckNvbG9yOiB0aGVtZS5uZXcuY29sb3JzLm5hbWVkLmludmVydGVkLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUubmV3LmNvbG9ycy5uYW1lZFt0eXBlXSxcbiAgfSxcbiAgaW52ZXJ0ZWQ6IHtcbiAgICBsaW5lQ29sb3I6IHRoZW1lLm5ldy5jb2xvcnMubmFtZWRbdHlwZV0sXG4gICAgYm9yZGVyQ29sb3I6IHRoZW1lLm5ldy5jb2xvcnMubmFtZWRbdHlwZV0sXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5uZXcuY29sb3JzLnBhbmVscy5iYWNrZ3JvdW5kLFxuICB9LFxufSlcblxuZXhwb3J0IGNvbnN0IGluZmVyZUNvbnRyb2xUeXBlID0gcHJvcHMgPT4ge1xuICBpZiAocHJvcHMuZGlzYWJsZWQpIHtcbiAgICByZXR1cm4gJ2Rpc2FibGVkJ1xuICB9IGVsc2UgaWYgKHByb3BzLnBhc3NpdmUpIHtcbiAgICByZXR1cm4gJ3Bhc3NpdmUnXG4gIH0gZWxzZSBpZiAocHJvcHMuc2Vjb25kYXJ5KSB7XG4gICAgcmV0dXJuICdzZWNvbmRhcnknXG4gIH1cbiAgcmV0dXJuICdwcmltYXJ5J1xufVxuXG5leHBvcnQgY29uc3QgaW5mZXJlQ29udHJvbE1vZGUgPSBwcm9wcyA9PiB7XG4gIGlmIChwcm9wcy5pbnZlcnRlZCkge1xuICAgIHJldHVybiAnaW52ZXJ0ZWQnXG4gIH1cbiAgcmV0dXJuICdub3JtYWwnXG59XG5cbmNvbnN0IGluZmVyZUJveENvbG9ycyA9IHByb3BzID0+IHtcbiAgaWYgKHByb3BzLmNvbG9ycykge1xuICAgIHJldHVybiBwcm9wcy5jb2xvcnNcbiAgfVxuICBpZiAoIXByb3BzLmJveFR5cGUgfHwgIXByb3BzLnRoZW1lLm5ldy5jb2xvcnMubmFtZWRbcHJvcHMuYm94VHlwZV0pIHtcbiAgICByZXR1cm4ge31cbiAgfVxuICBjb25zdCB0eXBlID0gcHJvcHMuYm94VHlwZVxuICBjb25zdCBtb2RlID0gaW5mZXJlQ29udHJvbE1vZGUocHJvcHMpXG5cbiAgcmV0dXJuIGJveE1vZGVzQ29sb3JzKHR5cGUsIHByb3BzLnRoZW1lKVttb2RlXVxufVxuXG5leHBvcnQgY29uc3QgYm94Q29sb3JzU3R5bGVzID0gcHJvcHMgPT4gY3NzYFxuICBjb2xvcjogJHtpbmZlcmVCb3hDb2xvcnMocHJvcHMpLmxpbmVDb2xvcn07XG4gIGJvcmRlci1jb2xvcjogJHtpbmZlcmVCb3hDb2xvcnMocHJvcHMpLmJvcmRlckNvbG9yfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtpbmZlcmVCb3hDb2xvcnMocHJvcHMpLmJhY2tncm91bmRDb2xvcn07XG5gXG5cbmV4cG9ydCBjb25zdCBpbmZlcmVCdXR0b25Db2xvcnMgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHR5cGUgPSBpbmZlcmVDb250cm9sVHlwZShwcm9wcylcbiAgY29uc3QgbW9kZSA9IGluZmVyZUNvbnRyb2xNb2RlKHByb3BzKVxuXG4gIHJldHVybiBwcm9wcy5jb2xvcnMgfHwgbW9kZXNDb2xvcnModHlwZSwgcHJvcHMudGhlbWUsIHByb3BzKVttb2RlXVxufVxuXG5jb25zdCBjb2xvcnMgPSAocHJvcHMsIGRhcmtSYXRpbykgPT4gY3NzYFxuICBjb2xvcjogJHtkYXJrZW4oXG4gICAgcHJvcHMuY29sb3IgfHwgaW5mZXJlQnV0dG9uQ29sb3JzKHByb3BzKS5saW5lQ29sb3IsXG4gICAgZGFya1JhdGlvLFxuICApfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtkYXJrZW4oXG4gICAgcHJvcHMuYmFja2dyb3VuZENvbG9yIHx8IGluZmVyZUJ1dHRvbkNvbG9ycyhwcm9wcykuYmFja2dyb3VuZENvbG9yLFxuICAgIGRhcmtSYXRpbyxcbiAgKX07XG4gIGJvcmRlci1jb2xvcjogJHtkYXJrZW4oXG4gICAgcHJvcHMuYm9yZGVyQ29sb3IgfHwgaW5mZXJlQnV0dG9uQ29sb3JzKHByb3BzKS5ib3JkZXJDb2xvcixcbiAgICBkYXJrUmF0aW8sXG4gICl9O1xuYFxuXG5leHBvcnQgY29uc3QgY29sb3JTdHlsZXMgPSBwcm9wcyA9PiBjc3NgXG4gICR7Y29sb3JzKHByb3BzLCAwKX1cblxuICAmOmhvdmVyIHtcbiAgICAke2NvbG9ycyhwcm9wcywgMC4wNSl9XG4gIH1cbiAgJjphY3RpdmUge1xuICAgICR7Y29sb3JzKHByb3BzLCAwLjEpfVxuICB9XG4gICY6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogJHtkYXJrZW4oaW5mZXJlQnV0dG9uQ29sb3JzKHByb3BzKS5ib3JkZXJDb2xvciwgMC4zKX07XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkQ29sb3JTdHlsZXMgPSBwcm9wcyA9PiBjc3NgXG4gICR7Y29sb3JzKHByb3BzLCAwKX1cbmBcblxuZXhwb3J0IGNvbnN0IGdldE5hbWVkRm9udFNpemUgPSBzaXplID0+XG4gIFNJWkVfUFJPUF9OQU1FUy5maW5kKHNpemVQcm9wID0+IHNpemUgPT09IHNpemVQcm9wKVxuXG5leHBvcnQgY29uc3QgaW5mZXJlU2l6ZSA9IHByb3BzID0+XG4gIGdldE5hbWVkRm9udFNpemUocHJvcHMuc2l6ZSkgfHxcbiAgU0laRV9QUk9QX05BTUVTLmZpbmQoc2l6ZVByb3AgPT4gcHJvcHNbc2l6ZVByb3BdKVxuXG5leHBvcnQgY29uc3QgaW5mZXJlU3BhY2VTaXplID0gKHByb3BzLCBzaXplKSA9PiB7XG4gIGlmIChfLmlzTnVtYmVyKHNpemUpKSB7XG4gICAgcmV0dXJuIGAke3NpemUgKiBwcm9wcy50aGVtZS5uZXcuc3BhY2VyfXB4YFxuICB9IGVsc2UgaWYgKHNpemUgJiYgcGFyc2VGbG9hdChzaXplLnRvU3RyaW5nKCkpID09PSBzaXplKSB7XG4gICAgcmV0dXJuIGAke3BhcnNlRmxvYXQoc2l6ZS50b1N0cmluZygpKSAqIHByb3BzLnRoZW1lLm5ldy5zcGFjZXJ9cHhgXG4gIH1cbiAgcmV0dXJuIHNpemVcbn1cblxuZXhwb3J0IGNvbnN0IGluZmVyZUZvbnRDb2xvciA9IChwcm9wcywgZGVmYXVsdENvbG9yKSA9PiB7XG4gIGxldCBjb2xvciA9IG51bGxcbiAgaWYgKHByb3BzLmNvbG9yKSB7XG4gICAgY29sb3IgPSBGT05UX0NPTE9SUy5maW5kKGZvbnRDb2xvciA9PiBmb250Q29sb3IgPT09IHByb3BzLmNvbG9yKVxuICAgIGlmICghY29sb3IpIHtcbiAgICAgIHJldHVybiBwcm9wcy5jb2xvclxuICAgIH1cbiAgfVxuICBjb2xvciA9XG4gICAgY29sb3IgfHwgRk9OVF9DT0xPUlMuZmluZChmb250Q29sb3IgPT4gcHJvcHNbZm9udENvbG9yXSkgfHwgZGVmYXVsdENvbG9yXG5cbiAgY29uc3QgbW9kZSA9IGluZmVyZUNvbnRyb2xNb2RlKHByb3BzKVxuXG4gIHJldHVybiBwcm9wcy50aGVtZS5uZXcuY29sb3JzLmxhYmVsc1ttb2RlXVtjb2xvcl1cbn1cblxuZXhwb3J0IGNvbnN0IGluZmVyZUZvbnRTaXplID0gKHByb3BzLCBzaXplKSA9PiB7XG4gIGxldCBpbmZlcmVkU2l6ZSA9IGluZmVyZVNpemUocHJvcHMpXG4gIGNvbnN0IHJlY2VpdmVkU2l6ZSA9IHNpemUgfHwgcHJvcHMuc2l6ZVxuXG4gIGlmICghcmVjZWl2ZWRTaXplICYmICFpbmZlcmVkU2l6ZSkge1xuICAgIGluZmVyZWRTaXplID0gJ21kJ1xuICB9XG5cbiAgaWYgKF8uaXNOdW1iZXIocmVjZWl2ZWRTaXplKSkge1xuICAgIHJldHVybiBgJHtyZWNlaXZlZFNpemUgKiBwcm9wcy50aGVtZS5uZXcuc3BhY2VyfXB4YFxuICB9IGVsc2UgaWYgKFxuICAgIHJlY2VpdmVkU2l6ZSAmJlxuICAgIHBhcnNlRmxvYXQocmVjZWl2ZWRTaXplLnRvU3RyaW5nKCkpID09PSByZWNlaXZlZFNpemVcbiAgKSB7XG4gICAgcmV0dXJuIGAke3BhcnNlRmxvYXQocmVjZWl2ZWRTaXplKS50b1N0cmluZygpICogcHJvcHMudGhlbWUubmV3LnNwYWNlcn1weGBcbiAgfSBlbHNlIGlmIChnZXROYW1lZEZvbnRTaXplKHJlY2VpdmVkU2l6ZSkpIHtcbiAgICByZXR1cm4gYCR7cHJvcHMudGhlbWUubmV3LmZvbnRzLnNpemVzW3RoZW1lUHJvcChyZWNlaXZlZFNpemUpXX1weGBcbiAgfSBlbHNlIGlmIChpbmZlcmVkU2l6ZSkge1xuICAgIHJldHVybiBgJHtwcm9wcy50aGVtZS5uZXcuZm9udHMuc2l6ZXNbdGhlbWVQcm9wKGluZmVyZWRTaXplKV19cHhgXG4gIH1cblxuICByZXR1cm4gcmVjZWl2ZWRTaXplXG59XG5cbmV4cG9ydCBjb25zdCBpbmZlcmVOYW1lZEZvbnRTaXplID0gKHByb3BzLCBzaXplKSA9PiB7XG4gIGNvbnN0IGluZmVyZWRTaXplID0gc2l6ZSB8fCBpbmZlcmVTaXplKHByb3BzKSB8fCAnbWQnXG4gIHJldHVybiBwcm9wcy50aGVtZS5uZXcuZm9udHMuc2l6ZXNbdGhlbWVQcm9wKGluZmVyZWRTaXplKV0gfHwgaW5mZXJlZFNpemVcbn1cblxuZXhwb3J0IGNvbnN0IGluZmVyZUZvbnRXZWlnaHQgPSBwcm9wcyA9PiB7XG4gIGlmIChwcm9wcy5leHRyYUJvbGQpIHtcbiAgICByZXR1cm4gcHJvcHMudGhlbWUubmV3LmZvbnRzLndlaWdodHMuZXh0cmFCb2xkXG4gIH0gZWxzZSBpZiAocHJvcHMuYm9sZCkge1xuICAgIHJldHVybiBwcm9wcy50aGVtZS5uZXcuZm9udHMud2VpZ2h0cy5ib2xkXG4gIH0gZWxzZSBpZiAocHJvcHMuc2VtaUJvbGQpIHtcbiAgICByZXR1cm4gcHJvcHMudGhlbWUubmV3LmZvbnRzLndlaWdodHMuc2VtaUJvbGRcbiAgfVxuICByZXR1cm4gbnVsbCAvLyBOb3JtYWxcbn1cblxuZXhwb3J0IGNvbnN0IGluZmVyZUJvcmRlclJhZGl1cyA9IChwcm9wcywgc2l6ZSkgPT4ge1xuICBpZiAocHJvcHMuZnVsbFJvdW5kKSB7XG4gICAgcmV0dXJuIDEwMDBcbiAgfSBlbHNlIGlmIChwcm9wcy5yYWRpdXMpIHtcbiAgICByZXR1cm4gcHJvcHMucmFkaXVzXG4gIH1cblxuICBjb25zdCBpbmZlcmVkU2l6ZSA9IGluZmVyZU5hbWVkRm9udFNpemUocHJvcHMsIHNpemUpXG4gIHJldHVybiBpbmZlcmVkU2l6ZSAvIDIuNVxufVxuXG5leHBvcnQgY29uc3QgaW5mZXJlUGFkZGluZ1NpemUgPSAocHJvcHMsIHNpemUpID0+IHtcbiAgY29uc3QgaW5mZXJlZFNpemUgPSAwLjUzICogaW5mZXJlTmFtZWRGb250U2l6ZShwcm9wcywgc2l6ZSlcbiAgcmV0dXJuIHByb3BzLnRpZ2h0ID8gaW5mZXJlZFNpemUgLyAyIDogaW5mZXJlZFNpemVcbn1cblxuZXhwb3J0IGNvbnN0IGluZmVyZUludHJhU3BhY2luZ1NpemUgPSAocHJvcHMsIHNpemUpID0+IHtcbiAgY29uc3QgaW5mZXJlZFNpemUgPSAwLjUzICogaW5mZXJlTmFtZWRGb250U2l6ZShwcm9wcywgc2l6ZSlcbiAgcmV0dXJuIHByb3BzLnRpZ2h0ID8gaW5mZXJlZFNpemUgLyAyIDogaW5mZXJlZFNpemVcbn1cblxuZXhwb3J0IGNvbnN0IHByb3BzRm9yUHJlZml4ID0gKHByb3BzLCBwcmVmaXgpID0+XG4gIF8ubWFwS2V5cyhcbiAgICBfLnBpY2tCeShwcm9wcywgKHByb3BWYWx1ZSwgcHJvcE5hbWUpID0+IHByb3BOYW1lLmluZGV4T2YocHJlZml4KSA9PT0gMCksXG4gICAgKHRyaWdnZXJQcm9wVmFsdWUsIHRyaWdnZXJQcm9wS2V5KSA9PiB0cmlnZ2VyUHJvcEtleS5yZXBsYWNlKHByZWZpeCwgJycpLFxuICApXG5cbmNvbnN0IHJlc3BvbnNpdmVKU1F1ZXJpZXMgPSBtZWRpYSA9PiBbXG4gIG1lZGlhLnhzbWFsbCxcbiAgbWVkaWEubWluTW9iaWxlLFxuICBtZWRpYS5taW5UYWJsZXQsXG4gIG1lZGlhLm1pbkRlc2t0b3AsXG4gIG1lZGlhLmxhcmdlRGVza3RvcCxcbl1cblxuZXhwb3J0IGNvbnN0IHJlc3BvbnNpdmVTdHlsZSA9IChwcm9wcywgdGFyZ2V0UHJvcCwgY2FsbEJhY2ssIGRlZmF1bHRWYWx1ZSkgPT4ge1xuICBsZXQgcHJvcFZhbHVlID0gbnVsbFxuICBpZiAodGFyZ2V0UHJvcCA9PT0gJ3NpemUnKSB7XG4gICAgaWYgKHByb3BzLnNpemUpIHtcbiAgICAgIHByb3BWYWx1ZSA9IHByb3BzLnNpemVcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcFZhbHVlID0gaW5mZXJlU2l6ZShwcm9wcykgfHwgJ21kJ1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBwcm9wVmFsdWUgPSBwcm9wc1t0YXJnZXRQcm9wXVxuICB9XG5cbiAgaWYgKCFwcm9wVmFsdWUpIHtcbiAgICBpZiAoZGVmYXVsdFZhbHVlKSB7XG4gICAgICByZXR1cm4gY2FsbEJhY2soZGVmYXVsdFZhbHVlKVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgaWYgKF8uaXNBcnJheShwcm9wVmFsdWUpICYmIHByb3BWYWx1ZS5sZW5ndGggPj0gMikge1xuICAgIGFzc2VydChcbiAgICAgIHByb3BzLm1lZGlhLFxuICAgICAgXCJNZWRpYSBpc24ndCBmb3VuZC4gTWFrZSBzdXJlIHRvIHN1cnJvdW5kIHdpdGggd2l0aE1lZGlhXCIsXG4gICAgKVxuICAgIGNvbnN0IGN1cnJlbnRTaXplSW5kZXggPSBnZW5lcmF0ZVNlcXVlbmNlRnJvbVRvKDQsIC0xKS5maW5kKFxuICAgICAgaSA9PiByZXNwb25zaXZlSlNRdWVyaWVzKHByb3BzLm1lZGlhKVtpXSAmJiBpIDwgcHJvcFZhbHVlLmxlbmd0aCxcbiAgICApXG4gICAgaWYgKCFjdXJyZW50U2l6ZUluZGV4ICYmIGN1cnJlbnRTaXplSW5kZXggIT09IDApIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICByZXR1cm4gY2FsbEJhY2socHJvcFZhbHVlW2N1cnJlbnRTaXplSW5kZXhdKVxuICB9XG4gIHJldHVybiBfLmlzQXJyYXkocHJvcFZhbHVlKSAmJiBwcm9wVmFsdWUubGVuZ3RoID09PSAxXG4gICAgPyBjYWxsQmFjayhwcm9wVmFsdWVbMF0pXG4gICAgOiBjYWxsQmFjayhwcm9wVmFsdWUpXG59XG5cbmV4cG9ydCBjb25zdCByZXNwb25zaXZlRm9udFNpemVTdHlsZSA9IHByb3BzID0+XG4gIHJlc3BvbnNpdmVTdHlsZShcbiAgICBwcm9wcyxcbiAgICAnc2l6ZScsXG4gICAgc2l6ZSA9PiBjc3NgXG4gICAgICBmb250LXNpemU6ICR7aW5mZXJlRm9udFNpemUocHJvcHMsIHNpemUpfTtcbiAgICBgLFxuICApXG4iXX0= */"));

const colorStyles = props =>
/*#__PURE__*/
css(colors(props, 0), " &:hover{", colors(props, 0.05), "}&:active{", colors(props, 0.1), "}&:focus{border-color:", darken(infereButtonColors(props).borderColor, 0.3), ";}label:colorStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZmVyZVN0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJIdUMiLCJmaWxlIjoiaW5mZXJlU3R5bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29sb3IgZnJvbSAnY29sb3InXG5pbXBvcnQge2Nzc30gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IGFzc2VydCBmcm9tICd+L2NvcmUvdXRpbHMvanNIZWxwZXJzL2Fzc2VydCdcblxuaW1wb3J0IGdlbmVyYXRlU2VxdWVuY2VGcm9tVG8gZnJvbSAnfi9jb3JlL3V0aWxzL2pzSGVscGVycy9nZW5lcmF0ZVNlcXVlbmNlJ1xuXG5jb25zdCBTSVpFX1BST1BfTkFNRVMgPSBbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJywgJ3h4bCcsICdoZWFkZXInXVxuXG5jb25zdCBGT05UX0NPTE9SUyA9IFtcbiAgJ3ByaW1hcnknLFxuICAnc2Vjb25kYXJ5JyxcbiAgJ2ltcG9ydGFudCcsXG4gICdub3JtYWwnLFxuICAnZW1waGFzaXplZCcsXG4gICdzdWJ0bGUnLFxuICAnaGludCcsXG4gICdlcnJvcicsXG5dXG5cbmNvbnN0IHRoZW1lUHJvcCA9IHByb3BOYW1lID0+IHByb3BOYW1lLnJlcGxhY2UoJ3NfJywgJycpXG5cbmV4cG9ydCBjb25zdCBkYXJrZW4gPSAoY29sb3IsIHJhdGlvKSA9PlxuICByYXRpbyA+PSAwXG4gICAgPyBDb2xvcihjb2xvcilcbiAgICAgICAgLmRhcmtlbihyYXRpbylcbiAgICAgICAgLnN0cmluZygpXG4gICAgOiBDb2xvcihjb2xvcilcbiAgICAgICAgLmxpZ2h0ZW4oLTEgKiByYXRpbylcbiAgICAgICAgLnN0cmluZygpXG5cbmNvbnN0IG1vZGVzQ29sb3JzID0gKHR5cGUsIHRoZW1lLCBwcm9wcykgPT4ge1xuICBjb25zdCBjb2xvcnMgPSB0aGVtZS5uZXcuY29sb3JzLmJ1dHRvbnNbdHlwZV1cblxuICByZXR1cm4ge1xuICAgIG5vcm1hbDoge1xuICAgICAgbGluZUNvbG9yOiBjb2xvcnMubGluZSxcbiAgICAgIGJvcmRlckNvbG9yOiBwcm9wcy5mb3JjZUludmVydGVkQm9yZGVyID8gY29sb3JzLmxpbmUgOiBjb2xvcnMuYmFja2dyb3VuZCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmJhY2tncm91bmQsXG4gICAgfSxcbiAgICBpbnZlcnRlZDoge1xuICAgICAgbGluZUNvbG9yOiBjb2xvcnMubGluZUludmVydGVkLFxuICAgICAgYm9yZGVyQ29sb3I6IHByb3BzLmZvcmNlSW52ZXJ0ZWRCb3JkZXJcbiAgICAgICAgPyBjb2xvcnMuYmFja2dyb3VuZGludmVydGVkXG4gICAgICAgIDogY29sb3JzLmxpbmVJbnZlcnRlZCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmJhY2tncm91bmRpbnZlcnRlZCxcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBib3hNb2Rlc0NvbG9ycyA9ICh0eXBlLCB0aGVtZSkgPT4gKHtcbiAgbm9ybWFsOiB7XG4gICAgbGluZUNvbG9yOiB0aGVtZS5uZXcuY29sb3JzLm5hbWVkLmludmVydGVkLFxuICAgIGJvcmRlckNvbG9yOiB0aGVtZS5uZXcuY29sb3JzLm5hbWVkLmludmVydGVkLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUubmV3LmNvbG9ycy5uYW1lZFt0eXBlXSxcbiAgfSxcbiAgaW52ZXJ0ZWQ6IHtcbiAgICBsaW5lQ29sb3I6IHRoZW1lLm5ldy5jb2xvcnMubmFtZWRbdHlwZV0sXG4gICAgYm9yZGVyQ29sb3I6IHRoZW1lLm5ldy5jb2xvcnMubmFtZWRbdHlwZV0sXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5uZXcuY29sb3JzLnBhbmVscy5iYWNrZ3JvdW5kLFxuICB9LFxufSlcblxuZXhwb3J0IGNvbnN0IGluZmVyZUNvbnRyb2xUeXBlID0gcHJvcHMgPT4ge1xuICBpZiAocHJvcHMuZGlzYWJsZWQpIHtcbiAgICByZXR1cm4gJ2Rpc2FibGVkJ1xuICB9IGVsc2UgaWYgKHByb3BzLnBhc3NpdmUpIHtcbiAgICByZXR1cm4gJ3Bhc3NpdmUnXG4gIH0gZWxzZSBpZiAocHJvcHMuc2Vjb25kYXJ5KSB7XG4gICAgcmV0dXJuICdzZWNvbmRhcnknXG4gIH1cbiAgcmV0dXJuICdwcmltYXJ5J1xufVxuXG5leHBvcnQgY29uc3QgaW5mZXJlQ29udHJvbE1vZGUgPSBwcm9wcyA9PiB7XG4gIGlmIChwcm9wcy5pbnZlcnRlZCkge1xuICAgIHJldHVybiAnaW52ZXJ0ZWQnXG4gIH1cbiAgcmV0dXJuICdub3JtYWwnXG59XG5cbmNvbnN0IGluZmVyZUJveENvbG9ycyA9IHByb3BzID0+IHtcbiAgaWYgKHByb3BzLmNvbG9ycykge1xuICAgIHJldHVybiBwcm9wcy5jb2xvcnNcbiAgfVxuICBpZiAoIXByb3BzLmJveFR5cGUgfHwgIXByb3BzLnRoZW1lLm5ldy5jb2xvcnMubmFtZWRbcHJvcHMuYm94VHlwZV0pIHtcbiAgICByZXR1cm4ge31cbiAgfVxuICBjb25zdCB0eXBlID0gcHJvcHMuYm94VHlwZVxuICBjb25zdCBtb2RlID0gaW5mZXJlQ29udHJvbE1vZGUocHJvcHMpXG5cbiAgcmV0dXJuIGJveE1vZGVzQ29sb3JzKHR5cGUsIHByb3BzLnRoZW1lKVttb2RlXVxufVxuXG5leHBvcnQgY29uc3QgYm94Q29sb3JzU3R5bGVzID0gcHJvcHMgPT4gY3NzYFxuICBjb2xvcjogJHtpbmZlcmVCb3hDb2xvcnMocHJvcHMpLmxpbmVDb2xvcn07XG4gIGJvcmRlci1jb2xvcjogJHtpbmZlcmVCb3hDb2xvcnMocHJvcHMpLmJvcmRlckNvbG9yfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtpbmZlcmVCb3hDb2xvcnMocHJvcHMpLmJhY2tncm91bmRDb2xvcn07XG5gXG5cbmV4cG9ydCBjb25zdCBpbmZlcmVCdXR0b25Db2xvcnMgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHR5cGUgPSBpbmZlcmVDb250cm9sVHlwZShwcm9wcylcbiAgY29uc3QgbW9kZSA9IGluZmVyZUNvbnRyb2xNb2RlKHByb3BzKVxuXG4gIHJldHVybiBwcm9wcy5jb2xvcnMgfHwgbW9kZXNDb2xvcnModHlwZSwgcHJvcHMudGhlbWUsIHByb3BzKVttb2RlXVxufVxuXG5jb25zdCBjb2xvcnMgPSAocHJvcHMsIGRhcmtSYXRpbykgPT4gY3NzYFxuICBjb2xvcjogJHtkYXJrZW4oXG4gICAgcHJvcHMuY29sb3IgfHwgaW5mZXJlQnV0dG9uQ29sb3JzKHByb3BzKS5saW5lQ29sb3IsXG4gICAgZGFya1JhdGlvLFxuICApfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtkYXJrZW4oXG4gICAgcHJvcHMuYmFja2dyb3VuZENvbG9yIHx8IGluZmVyZUJ1dHRvbkNvbG9ycyhwcm9wcykuYmFja2dyb3VuZENvbG9yLFxuICAgIGRhcmtSYXRpbyxcbiAgKX07XG4gIGJvcmRlci1jb2xvcjogJHtkYXJrZW4oXG4gICAgcHJvcHMuYm9yZGVyQ29sb3IgfHwgaW5mZXJlQnV0dG9uQ29sb3JzKHByb3BzKS5ib3JkZXJDb2xvcixcbiAgICBkYXJrUmF0aW8sXG4gICl9O1xuYFxuXG5leHBvcnQgY29uc3QgY29sb3JTdHlsZXMgPSBwcm9wcyA9PiBjc3NgXG4gICR7Y29sb3JzKHByb3BzLCAwKX1cblxuICAmOmhvdmVyIHtcbiAgICAke2NvbG9ycyhwcm9wcywgMC4wNSl9XG4gIH1cbiAgJjphY3RpdmUge1xuICAgICR7Y29sb3JzKHByb3BzLCAwLjEpfVxuICB9XG4gICY6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogJHtkYXJrZW4oaW5mZXJlQnV0dG9uQ29sb3JzKHByb3BzKS5ib3JkZXJDb2xvciwgMC4zKX07XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkQ29sb3JTdHlsZXMgPSBwcm9wcyA9PiBjc3NgXG4gICR7Y29sb3JzKHByb3BzLCAwKX1cbmBcblxuZXhwb3J0IGNvbnN0IGdldE5hbWVkRm9udFNpemUgPSBzaXplID0+XG4gIFNJWkVfUFJPUF9OQU1FUy5maW5kKHNpemVQcm9wID0+IHNpemUgPT09IHNpemVQcm9wKVxuXG5leHBvcnQgY29uc3QgaW5mZXJlU2l6ZSA9IHByb3BzID0+XG4gIGdldE5hbWVkRm9udFNpemUocHJvcHMuc2l6ZSkgfHxcbiAgU0laRV9QUk9QX05BTUVTLmZpbmQoc2l6ZVByb3AgPT4gcHJvcHNbc2l6ZVByb3BdKVxuXG5leHBvcnQgY29uc3QgaW5mZXJlU3BhY2VTaXplID0gKHByb3BzLCBzaXplKSA9PiB7XG4gIGlmIChfLmlzTnVtYmVyKHNpemUpKSB7XG4gICAgcmV0dXJuIGAke3NpemUgKiBwcm9wcy50aGVtZS5uZXcuc3BhY2VyfXB4YFxuICB9IGVsc2UgaWYgKHNpemUgJiYgcGFyc2VGbG9hdChzaXplLnRvU3RyaW5nKCkpID09PSBzaXplKSB7XG4gICAgcmV0dXJuIGAke3BhcnNlRmxvYXQoc2l6ZS50b1N0cmluZygpKSAqIHByb3BzLnRoZW1lLm5ldy5zcGFjZXJ9cHhgXG4gIH1cbiAgcmV0dXJuIHNpemVcbn1cblxuZXhwb3J0IGNvbnN0IGluZmVyZUZvbnRDb2xvciA9IChwcm9wcywgZGVmYXVsdENvbG9yKSA9PiB7XG4gIGxldCBjb2xvciA9IG51bGxcbiAgaWYgKHByb3BzLmNvbG9yKSB7XG4gICAgY29sb3IgPSBGT05UX0NPTE9SUy5maW5kKGZvbnRDb2xvciA9PiBmb250Q29sb3IgPT09IHByb3BzLmNvbG9yKVxuICAgIGlmICghY29sb3IpIHtcbiAgICAgIHJldHVybiBwcm9wcy5jb2xvclxuICAgIH1cbiAgfVxuICBjb2xvciA9XG4gICAgY29sb3IgfHwgRk9OVF9DT0xPUlMuZmluZChmb250Q29sb3IgPT4gcHJvcHNbZm9udENvbG9yXSkgfHwgZGVmYXVsdENvbG9yXG5cbiAgY29uc3QgbW9kZSA9IGluZmVyZUNvbnRyb2xNb2RlKHByb3BzKVxuXG4gIHJldHVybiBwcm9wcy50aGVtZS5uZXcuY29sb3JzLmxhYmVsc1ttb2RlXVtjb2xvcl1cbn1cblxuZXhwb3J0IGNvbnN0IGluZmVyZUZvbnRTaXplID0gKHByb3BzLCBzaXplKSA9PiB7XG4gIGxldCBpbmZlcmVkU2l6ZSA9IGluZmVyZVNpemUocHJvcHMpXG4gIGNvbnN0IHJlY2VpdmVkU2l6ZSA9IHNpemUgfHwgcHJvcHMuc2l6ZVxuXG4gIGlmICghcmVjZWl2ZWRTaXplICYmICFpbmZlcmVkU2l6ZSkge1xuICAgIGluZmVyZWRTaXplID0gJ21kJ1xuICB9XG5cbiAgaWYgKF8uaXNOdW1iZXIocmVjZWl2ZWRTaXplKSkge1xuICAgIHJldHVybiBgJHtyZWNlaXZlZFNpemUgKiBwcm9wcy50aGVtZS5uZXcuc3BhY2VyfXB4YFxuICB9IGVsc2UgaWYgKFxuICAgIHJlY2VpdmVkU2l6ZSAmJlxuICAgIHBhcnNlRmxvYXQocmVjZWl2ZWRTaXplLnRvU3RyaW5nKCkpID09PSByZWNlaXZlZFNpemVcbiAgKSB7XG4gICAgcmV0dXJuIGAke3BhcnNlRmxvYXQocmVjZWl2ZWRTaXplKS50b1N0cmluZygpICogcHJvcHMudGhlbWUubmV3LnNwYWNlcn1weGBcbiAgfSBlbHNlIGlmIChnZXROYW1lZEZvbnRTaXplKHJlY2VpdmVkU2l6ZSkpIHtcbiAgICByZXR1cm4gYCR7cHJvcHMudGhlbWUubmV3LmZvbnRzLnNpemVzW3RoZW1lUHJvcChyZWNlaXZlZFNpemUpXX1weGBcbiAgfSBlbHNlIGlmIChpbmZlcmVkU2l6ZSkge1xuICAgIHJldHVybiBgJHtwcm9wcy50aGVtZS5uZXcuZm9udHMuc2l6ZXNbdGhlbWVQcm9wKGluZmVyZWRTaXplKV19cHhgXG4gIH1cblxuICByZXR1cm4gcmVjZWl2ZWRTaXplXG59XG5cbmV4cG9ydCBjb25zdCBpbmZlcmVOYW1lZEZvbnRTaXplID0gKHByb3BzLCBzaXplKSA9PiB7XG4gIGNvbnN0IGluZmVyZWRTaXplID0gc2l6ZSB8fCBpbmZlcmVTaXplKHByb3BzKSB8fCAnbWQnXG4gIHJldHVybiBwcm9wcy50aGVtZS5uZXcuZm9udHMuc2l6ZXNbdGhlbWVQcm9wKGluZmVyZWRTaXplKV0gfHwgaW5mZXJlZFNpemVcbn1cblxuZXhwb3J0IGNvbnN0IGluZmVyZUZvbnRXZWlnaHQgPSBwcm9wcyA9PiB7XG4gIGlmIChwcm9wcy5leHRyYUJvbGQpIHtcbiAgICByZXR1cm4gcHJvcHMudGhlbWUubmV3LmZvbnRzLndlaWdodHMuZXh0cmFCb2xkXG4gIH0gZWxzZSBpZiAocHJvcHMuYm9sZCkge1xuICAgIHJldHVybiBwcm9wcy50aGVtZS5uZXcuZm9udHMud2VpZ2h0cy5ib2xkXG4gIH0gZWxzZSBpZiAocHJvcHMuc2VtaUJvbGQpIHtcbiAgICByZXR1cm4gcHJvcHMudGhlbWUubmV3LmZvbnRzLndlaWdodHMuc2VtaUJvbGRcbiAgfVxuICByZXR1cm4gbnVsbCAvLyBOb3JtYWxcbn1cblxuZXhwb3J0IGNvbnN0IGluZmVyZUJvcmRlclJhZGl1cyA9IChwcm9wcywgc2l6ZSkgPT4ge1xuICBpZiAocHJvcHMuZnVsbFJvdW5kKSB7XG4gICAgcmV0dXJuIDEwMDBcbiAgfSBlbHNlIGlmIChwcm9wcy5yYWRpdXMpIHtcbiAgICByZXR1cm4gcHJvcHMucmFkaXVzXG4gIH1cblxuICBjb25zdCBpbmZlcmVkU2l6ZSA9IGluZmVyZU5hbWVkRm9udFNpemUocHJvcHMsIHNpemUpXG4gIHJldHVybiBpbmZlcmVkU2l6ZSAvIDIuNVxufVxuXG5leHBvcnQgY29uc3QgaW5mZXJlUGFkZGluZ1NpemUgPSAocHJvcHMsIHNpemUpID0+IHtcbiAgY29uc3QgaW5mZXJlZFNpemUgPSAwLjUzICogaW5mZXJlTmFtZWRGb250U2l6ZShwcm9wcywgc2l6ZSlcbiAgcmV0dXJuIHByb3BzLnRpZ2h0ID8gaW5mZXJlZFNpemUgLyAyIDogaW5mZXJlZFNpemVcbn1cblxuZXhwb3J0IGNvbnN0IGluZmVyZUludHJhU3BhY2luZ1NpemUgPSAocHJvcHMsIHNpemUpID0+IHtcbiAgY29uc3QgaW5mZXJlZFNpemUgPSAwLjUzICogaW5mZXJlTmFtZWRGb250U2l6ZShwcm9wcywgc2l6ZSlcbiAgcmV0dXJuIHByb3BzLnRpZ2h0ID8gaW5mZXJlZFNpemUgLyAyIDogaW5mZXJlZFNpemVcbn1cblxuZXhwb3J0IGNvbnN0IHByb3BzRm9yUHJlZml4ID0gKHByb3BzLCBwcmVmaXgpID0+XG4gIF8ubWFwS2V5cyhcbiAgICBfLnBpY2tCeShwcm9wcywgKHByb3BWYWx1ZSwgcHJvcE5hbWUpID0+IHByb3BOYW1lLmluZGV4T2YocHJlZml4KSA9PT0gMCksXG4gICAgKHRyaWdnZXJQcm9wVmFsdWUsIHRyaWdnZXJQcm9wS2V5KSA9PiB0cmlnZ2VyUHJvcEtleS5yZXBsYWNlKHByZWZpeCwgJycpLFxuICApXG5cbmNvbnN0IHJlc3BvbnNpdmVKU1F1ZXJpZXMgPSBtZWRpYSA9PiBbXG4gIG1lZGlhLnhzbWFsbCxcbiAgbWVkaWEubWluTW9iaWxlLFxuICBtZWRpYS5taW5UYWJsZXQsXG4gIG1lZGlhLm1pbkRlc2t0b3AsXG4gIG1lZGlhLmxhcmdlRGVza3RvcCxcbl1cblxuZXhwb3J0IGNvbnN0IHJlc3BvbnNpdmVTdHlsZSA9IChwcm9wcywgdGFyZ2V0UHJvcCwgY2FsbEJhY2ssIGRlZmF1bHRWYWx1ZSkgPT4ge1xuICBsZXQgcHJvcFZhbHVlID0gbnVsbFxuICBpZiAodGFyZ2V0UHJvcCA9PT0gJ3NpemUnKSB7XG4gICAgaWYgKHByb3BzLnNpemUpIHtcbiAgICAgIHByb3BWYWx1ZSA9IHByb3BzLnNpemVcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcFZhbHVlID0gaW5mZXJlU2l6ZShwcm9wcykgfHwgJ21kJ1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBwcm9wVmFsdWUgPSBwcm9wc1t0YXJnZXRQcm9wXVxuICB9XG5cbiAgaWYgKCFwcm9wVmFsdWUpIHtcbiAgICBpZiAoZGVmYXVsdFZhbHVlKSB7XG4gICAgICByZXR1cm4gY2FsbEJhY2soZGVmYXVsdFZhbHVlKVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgaWYgKF8uaXNBcnJheShwcm9wVmFsdWUpICYmIHByb3BWYWx1ZS5sZW5ndGggPj0gMikge1xuICAgIGFzc2VydChcbiAgICAgIHByb3BzLm1lZGlhLFxuICAgICAgXCJNZWRpYSBpc24ndCBmb3VuZC4gTWFrZSBzdXJlIHRvIHN1cnJvdW5kIHdpdGggd2l0aE1lZGlhXCIsXG4gICAgKVxuICAgIGNvbnN0IGN1cnJlbnRTaXplSW5kZXggPSBnZW5lcmF0ZVNlcXVlbmNlRnJvbVRvKDQsIC0xKS5maW5kKFxuICAgICAgaSA9PiByZXNwb25zaXZlSlNRdWVyaWVzKHByb3BzLm1lZGlhKVtpXSAmJiBpIDwgcHJvcFZhbHVlLmxlbmd0aCxcbiAgICApXG4gICAgaWYgKCFjdXJyZW50U2l6ZUluZGV4ICYmIGN1cnJlbnRTaXplSW5kZXggIT09IDApIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICByZXR1cm4gY2FsbEJhY2socHJvcFZhbHVlW2N1cnJlbnRTaXplSW5kZXhdKVxuICB9XG4gIHJldHVybiBfLmlzQXJyYXkocHJvcFZhbHVlKSAmJiBwcm9wVmFsdWUubGVuZ3RoID09PSAxXG4gICAgPyBjYWxsQmFjayhwcm9wVmFsdWVbMF0pXG4gICAgOiBjYWxsQmFjayhwcm9wVmFsdWUpXG59XG5cbmV4cG9ydCBjb25zdCByZXNwb25zaXZlRm9udFNpemVTdHlsZSA9IHByb3BzID0+XG4gIHJlc3BvbnNpdmVTdHlsZShcbiAgICBwcm9wcyxcbiAgICAnc2l6ZScsXG4gICAgc2l6ZSA9PiBjc3NgXG4gICAgICBmb250LXNpemU6ICR7aW5mZXJlRm9udFNpemUocHJvcHMsIHNpemUpfTtcbiAgICBgLFxuICApXG4iXX0= */"));
const disabledColorStyles = props =>
/*#__PURE__*/
css(colors(props, 0), "label:disabledColorStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZmVyZVN0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlJK0MiLCJmaWxlIjoiaW5mZXJlU3R5bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29sb3IgZnJvbSAnY29sb3InXG5pbXBvcnQge2Nzc30gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IGFzc2VydCBmcm9tICd+L2NvcmUvdXRpbHMvanNIZWxwZXJzL2Fzc2VydCdcblxuaW1wb3J0IGdlbmVyYXRlU2VxdWVuY2VGcm9tVG8gZnJvbSAnfi9jb3JlL3V0aWxzL2pzSGVscGVycy9nZW5lcmF0ZVNlcXVlbmNlJ1xuXG5jb25zdCBTSVpFX1BST1BfTkFNRVMgPSBbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJywgJ3h4bCcsICdoZWFkZXInXVxuXG5jb25zdCBGT05UX0NPTE9SUyA9IFtcbiAgJ3ByaW1hcnknLFxuICAnc2Vjb25kYXJ5JyxcbiAgJ2ltcG9ydGFudCcsXG4gICdub3JtYWwnLFxuICAnZW1waGFzaXplZCcsXG4gICdzdWJ0bGUnLFxuICAnaGludCcsXG4gICdlcnJvcicsXG5dXG5cbmNvbnN0IHRoZW1lUHJvcCA9IHByb3BOYW1lID0+IHByb3BOYW1lLnJlcGxhY2UoJ3NfJywgJycpXG5cbmV4cG9ydCBjb25zdCBkYXJrZW4gPSAoY29sb3IsIHJhdGlvKSA9PlxuICByYXRpbyA+PSAwXG4gICAgPyBDb2xvcihjb2xvcilcbiAgICAgICAgLmRhcmtlbihyYXRpbylcbiAgICAgICAgLnN0cmluZygpXG4gICAgOiBDb2xvcihjb2xvcilcbiAgICAgICAgLmxpZ2h0ZW4oLTEgKiByYXRpbylcbiAgICAgICAgLnN0cmluZygpXG5cbmNvbnN0IG1vZGVzQ29sb3JzID0gKHR5cGUsIHRoZW1lLCBwcm9wcykgPT4ge1xuICBjb25zdCBjb2xvcnMgPSB0aGVtZS5uZXcuY29sb3JzLmJ1dHRvbnNbdHlwZV1cblxuICByZXR1cm4ge1xuICAgIG5vcm1hbDoge1xuICAgICAgbGluZUNvbG9yOiBjb2xvcnMubGluZSxcbiAgICAgIGJvcmRlckNvbG9yOiBwcm9wcy5mb3JjZUludmVydGVkQm9yZGVyID8gY29sb3JzLmxpbmUgOiBjb2xvcnMuYmFja2dyb3VuZCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmJhY2tncm91bmQsXG4gICAgfSxcbiAgICBpbnZlcnRlZDoge1xuICAgICAgbGluZUNvbG9yOiBjb2xvcnMubGluZUludmVydGVkLFxuICAgICAgYm9yZGVyQ29sb3I6IHByb3BzLmZvcmNlSW52ZXJ0ZWRCb3JkZXJcbiAgICAgICAgPyBjb2xvcnMuYmFja2dyb3VuZGludmVydGVkXG4gICAgICAgIDogY29sb3JzLmxpbmVJbnZlcnRlZCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmJhY2tncm91bmRpbnZlcnRlZCxcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBib3hNb2Rlc0NvbG9ycyA9ICh0eXBlLCB0aGVtZSkgPT4gKHtcbiAgbm9ybWFsOiB7XG4gICAgbGluZUNvbG9yOiB0aGVtZS5uZXcuY29sb3JzLm5hbWVkLmludmVydGVkLFxuICAgIGJvcmRlckNvbG9yOiB0aGVtZS5uZXcuY29sb3JzLm5hbWVkLmludmVydGVkLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUubmV3LmNvbG9ycy5uYW1lZFt0eXBlXSxcbiAgfSxcbiAgaW52ZXJ0ZWQ6IHtcbiAgICBsaW5lQ29sb3I6IHRoZW1lLm5ldy5jb2xvcnMubmFtZWRbdHlwZV0sXG4gICAgYm9yZGVyQ29sb3I6IHRoZW1lLm5ldy5jb2xvcnMubmFtZWRbdHlwZV0sXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5uZXcuY29sb3JzLnBhbmVscy5iYWNrZ3JvdW5kLFxuICB9LFxufSlcblxuZXhwb3J0IGNvbnN0IGluZmVyZUNvbnRyb2xUeXBlID0gcHJvcHMgPT4ge1xuICBpZiAocHJvcHMuZGlzYWJsZWQpIHtcbiAgICByZXR1cm4gJ2Rpc2FibGVkJ1xuICB9IGVsc2UgaWYgKHByb3BzLnBhc3NpdmUpIHtcbiAgICByZXR1cm4gJ3Bhc3NpdmUnXG4gIH0gZWxzZSBpZiAocHJvcHMuc2Vjb25kYXJ5KSB7XG4gICAgcmV0dXJuICdzZWNvbmRhcnknXG4gIH1cbiAgcmV0dXJuICdwcmltYXJ5J1xufVxuXG5leHBvcnQgY29uc3QgaW5mZXJlQ29udHJvbE1vZGUgPSBwcm9wcyA9PiB7XG4gIGlmIChwcm9wcy5pbnZlcnRlZCkge1xuICAgIHJldHVybiAnaW52ZXJ0ZWQnXG4gIH1cbiAgcmV0dXJuICdub3JtYWwnXG59XG5cbmNvbnN0IGluZmVyZUJveENvbG9ycyA9IHByb3BzID0+IHtcbiAgaWYgKHByb3BzLmNvbG9ycykge1xuICAgIHJldHVybiBwcm9wcy5jb2xvcnNcbiAgfVxuICBpZiAoIXByb3BzLmJveFR5cGUgfHwgIXByb3BzLnRoZW1lLm5ldy5jb2xvcnMubmFtZWRbcHJvcHMuYm94VHlwZV0pIHtcbiAgICByZXR1cm4ge31cbiAgfVxuICBjb25zdCB0eXBlID0gcHJvcHMuYm94VHlwZVxuICBjb25zdCBtb2RlID0gaW5mZXJlQ29udHJvbE1vZGUocHJvcHMpXG5cbiAgcmV0dXJuIGJveE1vZGVzQ29sb3JzKHR5cGUsIHByb3BzLnRoZW1lKVttb2RlXVxufVxuXG5leHBvcnQgY29uc3QgYm94Q29sb3JzU3R5bGVzID0gcHJvcHMgPT4gY3NzYFxuICBjb2xvcjogJHtpbmZlcmVCb3hDb2xvcnMocHJvcHMpLmxpbmVDb2xvcn07XG4gIGJvcmRlci1jb2xvcjogJHtpbmZlcmVCb3hDb2xvcnMocHJvcHMpLmJvcmRlckNvbG9yfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtpbmZlcmVCb3hDb2xvcnMocHJvcHMpLmJhY2tncm91bmRDb2xvcn07XG5gXG5cbmV4cG9ydCBjb25zdCBpbmZlcmVCdXR0b25Db2xvcnMgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHR5cGUgPSBpbmZlcmVDb250cm9sVHlwZShwcm9wcylcbiAgY29uc3QgbW9kZSA9IGluZmVyZUNvbnRyb2xNb2RlKHByb3BzKVxuXG4gIHJldHVybiBwcm9wcy5jb2xvcnMgfHwgbW9kZXNDb2xvcnModHlwZSwgcHJvcHMudGhlbWUsIHByb3BzKVttb2RlXVxufVxuXG5jb25zdCBjb2xvcnMgPSAocHJvcHMsIGRhcmtSYXRpbykgPT4gY3NzYFxuICBjb2xvcjogJHtkYXJrZW4oXG4gICAgcHJvcHMuY29sb3IgfHwgaW5mZXJlQnV0dG9uQ29sb3JzKHByb3BzKS5saW5lQ29sb3IsXG4gICAgZGFya1JhdGlvLFxuICApfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtkYXJrZW4oXG4gICAgcHJvcHMuYmFja2dyb3VuZENvbG9yIHx8IGluZmVyZUJ1dHRvbkNvbG9ycyhwcm9wcykuYmFja2dyb3VuZENvbG9yLFxuICAgIGRhcmtSYXRpbyxcbiAgKX07XG4gIGJvcmRlci1jb2xvcjogJHtkYXJrZW4oXG4gICAgcHJvcHMuYm9yZGVyQ29sb3IgfHwgaW5mZXJlQnV0dG9uQ29sb3JzKHByb3BzKS5ib3JkZXJDb2xvcixcbiAgICBkYXJrUmF0aW8sXG4gICl9O1xuYFxuXG5leHBvcnQgY29uc3QgY29sb3JTdHlsZXMgPSBwcm9wcyA9PiBjc3NgXG4gICR7Y29sb3JzKHByb3BzLCAwKX1cblxuICAmOmhvdmVyIHtcbiAgICAke2NvbG9ycyhwcm9wcywgMC4wNSl9XG4gIH1cbiAgJjphY3RpdmUge1xuICAgICR7Y29sb3JzKHByb3BzLCAwLjEpfVxuICB9XG4gICY6Zm9jdXMge1xuICAgIGJvcmRlci1jb2xvcjogJHtkYXJrZW4oaW5mZXJlQnV0dG9uQ29sb3JzKHByb3BzKS5ib3JkZXJDb2xvciwgMC4zKX07XG4gIH1cbmBcblxuZXhwb3J0IGNvbnN0IGRpc2FibGVkQ29sb3JTdHlsZXMgPSBwcm9wcyA9PiBjc3NgXG4gICR7Y29sb3JzKHByb3BzLCAwKX1cbmBcblxuZXhwb3J0IGNvbnN0IGdldE5hbWVkRm9udFNpemUgPSBzaXplID0+XG4gIFNJWkVfUFJPUF9OQU1FUy5maW5kKHNpemVQcm9wID0+IHNpemUgPT09IHNpemVQcm9wKVxuXG5leHBvcnQgY29uc3QgaW5mZXJlU2l6ZSA9IHByb3BzID0+XG4gIGdldE5hbWVkRm9udFNpemUocHJvcHMuc2l6ZSkgfHxcbiAgU0laRV9QUk9QX05BTUVTLmZpbmQoc2l6ZVByb3AgPT4gcHJvcHNbc2l6ZVByb3BdKVxuXG5leHBvcnQgY29uc3QgaW5mZXJlU3BhY2VTaXplID0gKHByb3BzLCBzaXplKSA9PiB7XG4gIGlmIChfLmlzTnVtYmVyKHNpemUpKSB7XG4gICAgcmV0dXJuIGAke3NpemUgKiBwcm9wcy50aGVtZS5uZXcuc3BhY2VyfXB4YFxuICB9IGVsc2UgaWYgKHNpemUgJiYgcGFyc2VGbG9hdChzaXplLnRvU3RyaW5nKCkpID09PSBzaXplKSB7XG4gICAgcmV0dXJuIGAke3BhcnNlRmxvYXQoc2l6ZS50b1N0cmluZygpKSAqIHByb3BzLnRoZW1lLm5ldy5zcGFjZXJ9cHhgXG4gIH1cbiAgcmV0dXJuIHNpemVcbn1cblxuZXhwb3J0IGNvbnN0IGluZmVyZUZvbnRDb2xvciA9IChwcm9wcywgZGVmYXVsdENvbG9yKSA9PiB7XG4gIGxldCBjb2xvciA9IG51bGxcbiAgaWYgKHByb3BzLmNvbG9yKSB7XG4gICAgY29sb3IgPSBGT05UX0NPTE9SUy5maW5kKGZvbnRDb2xvciA9PiBmb250Q29sb3IgPT09IHByb3BzLmNvbG9yKVxuICAgIGlmICghY29sb3IpIHtcbiAgICAgIHJldHVybiBwcm9wcy5jb2xvclxuICAgIH1cbiAgfVxuICBjb2xvciA9XG4gICAgY29sb3IgfHwgRk9OVF9DT0xPUlMuZmluZChmb250Q29sb3IgPT4gcHJvcHNbZm9udENvbG9yXSkgfHwgZGVmYXVsdENvbG9yXG5cbiAgY29uc3QgbW9kZSA9IGluZmVyZUNvbnRyb2xNb2RlKHByb3BzKVxuXG4gIHJldHVybiBwcm9wcy50aGVtZS5uZXcuY29sb3JzLmxhYmVsc1ttb2RlXVtjb2xvcl1cbn1cblxuZXhwb3J0IGNvbnN0IGluZmVyZUZvbnRTaXplID0gKHByb3BzLCBzaXplKSA9PiB7XG4gIGxldCBpbmZlcmVkU2l6ZSA9IGluZmVyZVNpemUocHJvcHMpXG4gIGNvbnN0IHJlY2VpdmVkU2l6ZSA9IHNpemUgfHwgcHJvcHMuc2l6ZVxuXG4gIGlmICghcmVjZWl2ZWRTaXplICYmICFpbmZlcmVkU2l6ZSkge1xuICAgIGluZmVyZWRTaXplID0gJ21kJ1xuICB9XG5cbiAgaWYgKF8uaXNOdW1iZXIocmVjZWl2ZWRTaXplKSkge1xuICAgIHJldHVybiBgJHtyZWNlaXZlZFNpemUgKiBwcm9wcy50aGVtZS5uZXcuc3BhY2VyfXB4YFxuICB9IGVsc2UgaWYgKFxuICAgIHJlY2VpdmVkU2l6ZSAmJlxuICAgIHBhcnNlRmxvYXQocmVjZWl2ZWRTaXplLnRvU3RyaW5nKCkpID09PSByZWNlaXZlZFNpemVcbiAgKSB7XG4gICAgcmV0dXJuIGAke3BhcnNlRmxvYXQocmVjZWl2ZWRTaXplKS50b1N0cmluZygpICogcHJvcHMudGhlbWUubmV3LnNwYWNlcn1weGBcbiAgfSBlbHNlIGlmIChnZXROYW1lZEZvbnRTaXplKHJlY2VpdmVkU2l6ZSkpIHtcbiAgICByZXR1cm4gYCR7cHJvcHMudGhlbWUubmV3LmZvbnRzLnNpemVzW3RoZW1lUHJvcChyZWNlaXZlZFNpemUpXX1weGBcbiAgfSBlbHNlIGlmIChpbmZlcmVkU2l6ZSkge1xuICAgIHJldHVybiBgJHtwcm9wcy50aGVtZS5uZXcuZm9udHMuc2l6ZXNbdGhlbWVQcm9wKGluZmVyZWRTaXplKV19cHhgXG4gIH1cblxuICByZXR1cm4gcmVjZWl2ZWRTaXplXG59XG5cbmV4cG9ydCBjb25zdCBpbmZlcmVOYW1lZEZvbnRTaXplID0gKHByb3BzLCBzaXplKSA9PiB7XG4gIGNvbnN0IGluZmVyZWRTaXplID0gc2l6ZSB8fCBpbmZlcmVTaXplKHByb3BzKSB8fCAnbWQnXG4gIHJldHVybiBwcm9wcy50aGVtZS5uZXcuZm9udHMuc2l6ZXNbdGhlbWVQcm9wKGluZmVyZWRTaXplKV0gfHwgaW5mZXJlZFNpemVcbn1cblxuZXhwb3J0IGNvbnN0IGluZmVyZUZvbnRXZWlnaHQgPSBwcm9wcyA9PiB7XG4gIGlmIChwcm9wcy5leHRyYUJvbGQpIHtcbiAgICByZXR1cm4gcHJvcHMudGhlbWUubmV3LmZvbnRzLndlaWdodHMuZXh0cmFCb2xkXG4gIH0gZWxzZSBpZiAocHJvcHMuYm9sZCkge1xuICAgIHJldHVybiBwcm9wcy50aGVtZS5uZXcuZm9udHMud2VpZ2h0cy5ib2xkXG4gIH0gZWxzZSBpZiAocHJvcHMuc2VtaUJvbGQpIHtcbiAgICByZXR1cm4gcHJvcHMudGhlbWUubmV3LmZvbnRzLndlaWdodHMuc2VtaUJvbGRcbiAgfVxuICByZXR1cm4gbnVsbCAvLyBOb3JtYWxcbn1cblxuZXhwb3J0IGNvbnN0IGluZmVyZUJvcmRlclJhZGl1cyA9IChwcm9wcywgc2l6ZSkgPT4ge1xuICBpZiAocHJvcHMuZnVsbFJvdW5kKSB7XG4gICAgcmV0dXJuIDEwMDBcbiAgfSBlbHNlIGlmIChwcm9wcy5yYWRpdXMpIHtcbiAgICByZXR1cm4gcHJvcHMucmFkaXVzXG4gIH1cblxuICBjb25zdCBpbmZlcmVkU2l6ZSA9IGluZmVyZU5hbWVkRm9udFNpemUocHJvcHMsIHNpemUpXG4gIHJldHVybiBpbmZlcmVkU2l6ZSAvIDIuNVxufVxuXG5leHBvcnQgY29uc3QgaW5mZXJlUGFkZGluZ1NpemUgPSAocHJvcHMsIHNpemUpID0+IHtcbiAgY29uc3QgaW5mZXJlZFNpemUgPSAwLjUzICogaW5mZXJlTmFtZWRGb250U2l6ZShwcm9wcywgc2l6ZSlcbiAgcmV0dXJuIHByb3BzLnRpZ2h0ID8gaW5mZXJlZFNpemUgLyAyIDogaW5mZXJlZFNpemVcbn1cblxuZXhwb3J0IGNvbnN0IGluZmVyZUludHJhU3BhY2luZ1NpemUgPSAocHJvcHMsIHNpemUpID0+IHtcbiAgY29uc3QgaW5mZXJlZFNpemUgPSAwLjUzICogaW5mZXJlTmFtZWRGb250U2l6ZShwcm9wcywgc2l6ZSlcbiAgcmV0dXJuIHByb3BzLnRpZ2h0ID8gaW5mZXJlZFNpemUgLyAyIDogaW5mZXJlZFNpemVcbn1cblxuZXhwb3J0IGNvbnN0IHByb3BzRm9yUHJlZml4ID0gKHByb3BzLCBwcmVmaXgpID0+XG4gIF8ubWFwS2V5cyhcbiAgICBfLnBpY2tCeShwcm9wcywgKHByb3BWYWx1ZSwgcHJvcE5hbWUpID0+IHByb3BOYW1lLmluZGV4T2YocHJlZml4KSA9PT0gMCksXG4gICAgKHRyaWdnZXJQcm9wVmFsdWUsIHRyaWdnZXJQcm9wS2V5KSA9PiB0cmlnZ2VyUHJvcEtleS5yZXBsYWNlKHByZWZpeCwgJycpLFxuICApXG5cbmNvbnN0IHJlc3BvbnNpdmVKU1F1ZXJpZXMgPSBtZWRpYSA9PiBbXG4gIG1lZGlhLnhzbWFsbCxcbiAgbWVkaWEubWluTW9iaWxlLFxuICBtZWRpYS5taW5UYWJsZXQsXG4gIG1lZGlhLm1pbkRlc2t0b3AsXG4gIG1lZGlhLmxhcmdlRGVza3RvcCxcbl1cblxuZXhwb3J0IGNvbnN0IHJlc3BvbnNpdmVTdHlsZSA9IChwcm9wcywgdGFyZ2V0UHJvcCwgY2FsbEJhY2ssIGRlZmF1bHRWYWx1ZSkgPT4ge1xuICBsZXQgcHJvcFZhbHVlID0gbnVsbFxuICBpZiAodGFyZ2V0UHJvcCA9PT0gJ3NpemUnKSB7XG4gICAgaWYgKHByb3BzLnNpemUpIHtcbiAgICAgIHByb3BWYWx1ZSA9IHByb3BzLnNpemVcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvcFZhbHVlID0gaW5mZXJlU2l6ZShwcm9wcykgfHwgJ21kJ1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBwcm9wVmFsdWUgPSBwcm9wc1t0YXJnZXRQcm9wXVxuICB9XG5cbiAgaWYgKCFwcm9wVmFsdWUpIHtcbiAgICBpZiAoZGVmYXVsdFZhbHVlKSB7XG4gICAgICByZXR1cm4gY2FsbEJhY2soZGVmYXVsdFZhbHVlKVxuICAgIH1cbiAgICByZXR1cm4gbnVsbFxuICB9XG5cbiAgaWYgKF8uaXNBcnJheShwcm9wVmFsdWUpICYmIHByb3BWYWx1ZS5sZW5ndGggPj0gMikge1xuICAgIGFzc2VydChcbiAgICAgIHByb3BzLm1lZGlhLFxuICAgICAgXCJNZWRpYSBpc24ndCBmb3VuZC4gTWFrZSBzdXJlIHRvIHN1cnJvdW5kIHdpdGggd2l0aE1lZGlhXCIsXG4gICAgKVxuICAgIGNvbnN0IGN1cnJlbnRTaXplSW5kZXggPSBnZW5lcmF0ZVNlcXVlbmNlRnJvbVRvKDQsIC0xKS5maW5kKFxuICAgICAgaSA9PiByZXNwb25zaXZlSlNRdWVyaWVzKHByb3BzLm1lZGlhKVtpXSAmJiBpIDwgcHJvcFZhbHVlLmxlbmd0aCxcbiAgICApXG4gICAgaWYgKCFjdXJyZW50U2l6ZUluZGV4ICYmIGN1cnJlbnRTaXplSW5kZXggIT09IDApIHtcbiAgICAgIHJldHVybiAnJ1xuICAgIH1cbiAgICByZXR1cm4gY2FsbEJhY2socHJvcFZhbHVlW2N1cnJlbnRTaXplSW5kZXhdKVxuICB9XG4gIHJldHVybiBfLmlzQXJyYXkocHJvcFZhbHVlKSAmJiBwcm9wVmFsdWUubGVuZ3RoID09PSAxXG4gICAgPyBjYWxsQmFjayhwcm9wVmFsdWVbMF0pXG4gICAgOiBjYWxsQmFjayhwcm9wVmFsdWUpXG59XG5cbmV4cG9ydCBjb25zdCByZXNwb25zaXZlRm9udFNpemVTdHlsZSA9IHByb3BzID0+XG4gIHJlc3BvbnNpdmVTdHlsZShcbiAgICBwcm9wcyxcbiAgICAnc2l6ZScsXG4gICAgc2l6ZSA9PiBjc3NgXG4gICAgICBmb250LXNpemU6ICR7aW5mZXJlRm9udFNpemUocHJvcHMsIHNpemUpfTtcbiAgICBgLFxuICApXG4iXX0= */"));
const getNamedFontSize = size => SIZE_PROP_NAMES.find(sizeProp => size === sizeProp);
const infereSize = props => getNamedFontSize(props.size) || SIZE_PROP_NAMES.find(sizeProp => props[sizeProp]);
const infereSpaceSize = (props, size) => {
  if (_.isNumber(size)) {
    return `${size * props.theme.new.spacer}px`;
  } else if (size && parseFloat(size.toString()) === size) {
    return `${parseFloat(size.toString()) * props.theme.new.spacer}px`;
  }

  return size;
};
const infereFontSize = (props, size) => {
  let inferedSize = infereSize(props);
  const receivedSize = size || props.size;

  if (!receivedSize && !inferedSize) {
    inferedSize = 'md';
  }

  if (_.isNumber(receivedSize)) {
    return `${receivedSize * props.theme.new.spacer}px`;
  } else if (receivedSize && parseFloat(receivedSize.toString()) === receivedSize) {
    return `${parseFloat(receivedSize).toString() * props.theme.new.spacer}px`;
  } else if (getNamedFontSize(receivedSize)) {
    return `${props.theme.new.fonts.sizes[themeProp(receivedSize)]}px`;
  } else if (inferedSize) {
    return `${props.theme.new.fonts.sizes[themeProp(inferedSize)]}px`;
  }

  return receivedSize;
};
const infereNamedFontSize = (props, size) => {
  const inferedSize = size || infereSize(props) || 'md';
  return props.theme.new.fonts.sizes[themeProp(inferedSize)] || inferedSize;
};
const infereFontWeight = props => {
  if (props.extraBold) {
    return props.theme.new.fonts.weights.extraBold;
  } else if (props.bold) {
    return props.theme.new.fonts.weights.bold;
  } else if (props.semiBold) {
    return props.theme.new.fonts.weights.semiBold;
  }

  return null; // Normal
};
const infereBorderRadius = (props, size) => {
  if (props.fullRound) {
    return 1000;
  } else if (props.radius) {
    return props.radius;
  }

  const inferedSize = infereNamedFontSize(props, size);
  return inferedSize / 2.5;
};
const inferePaddingSize = (props, size) => {
  const inferedSize = 0.53 * infereNamedFontSize(props, size);
  return props.tight ? inferedSize / 2 : inferedSize;
};
const infereIntraSpacingSize = (props, size) => {
  const inferedSize = 0.53 * infereNamedFontSize(props, size);
  return props.tight ? inferedSize / 2 : inferedSize;
};
const propsForPrefix = (props, prefix) => _.mapKeys(_.pickBy(props, (propValue, propName) => propName.indexOf(prefix) === 0), (triggerPropValue, triggerPropKey) => triggerPropKey.replace(prefix, ''));

const responsiveJSQueries = media => [media.xsmall, media.minMobile, media.minTablet, media.minDesktop, media.largeDesktop];

const responsiveStyle = (props, targetProp, callBack, defaultValue) => {
  let propValue = null;

  if (targetProp === 'size') {
    if (props.size) {
      propValue = props.size;
    } else {
      propValue = infereSize(props) || 'md';
    }
  } else {
    propValue = props[targetProp];
  }

  if (!propValue) {
    if (defaultValue) {
      return callBack(defaultValue);
    }

    return null;
  }

  if (_.isArray(propValue) && propValue.length >= 2) {
    assert(props.media, "Media isn't found. Make sure to surround with withMedia");
    const currentSizeIndex = generateSequenceFromTo(4, -1).find(i => responsiveJSQueries(props.media)[i] && i < propValue.length);

    if (!currentSizeIndex && currentSizeIndex !== 0) {
      return '';
    }

    return callBack(propValue[currentSizeIndex]);
  }

  return _.isArray(propValue) && propValue.length === 1 ? callBack(propValue[0]) : callBack(propValue);
};

const styleAliases = [['width', 'w'], ['height', 'h'], ['minWidth'], ['minHeight'], ['maxWidth'], ['maxHeight'], ['padding', 'p'], ['paddingTop', 'pt'], ['paddingBottom', 'pb'], ['paddingLeft', 'pl'], ['paddingRight', 'pr'], ['margin', 'm'], ['marginTop', 'mt'], ['marginBottom', 'mb'], ['marginLeft', 'ml'], ['marginRight', 'mr']];

const styleExists = (props, style) => style.some(styleName => props[styleName]);

const getSize = (props, size) => {
  if (_.isNumber(size)) {
    return `${size * props.theme.new.spacer}px`;
  } else if (size && parseFloat(size).toString() === size) {
    return `${parseFloat(size.toString()) * props.theme.new.spacer}px`;
  }

  return size;
};
var spaceStyles = (props =>
/*#__PURE__*/
css(_.flatten(styleAliases.filter(aliasGroup => styleExists(props, aliasGroup)).map(aliasGroup => {
  const styleName = aliasGroup[0];
  return aliasGroup.map(styleAlias => props[styleAlias] && responsiveStyle(props, styleAlias, size =>
  /*#__PURE__*/
  css(changeCase.paramCase(styleName), ":", getSize(props, size), ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlU3lzdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDb0QiLCJmaWxlIjoic3R5bGVTeXN0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IHJlc3BvbnNpdmVTdHlsZSB9IGZyb20gJ34vY29yZVVJL3V0aWxzL2luZmVyZVN0eWxlJztcbmltcG9ydCBjaGFuZ2VDYXNlIGZyb20gJ2NoYW5nZS1jYXNlJztcblxuY29uc3Qgc3R5bGVBbGlhc2VzID0gW1xuICBbJ3dpZHRoJywgJ3cnXSxcbiAgWydoZWlnaHQnLCAnaCddLFxuICBbJ21pbldpZHRoJ10sXG4gIFsnbWluSGVpZ2h0J10sXG4gIFsnbWF4V2lkdGgnXSxcbiAgWydtYXhIZWlnaHQnXSxcbiAgWydwYWRkaW5nJywgJ3AnXSxcbiAgWydwYWRkaW5nVG9wJywgJ3B0J10sXG4gIFsncGFkZGluZ0JvdHRvbScsICdwYiddLFxuICBbJ3BhZGRpbmdMZWZ0JywgJ3BsJ10sXG4gIFsncGFkZGluZ1JpZ2h0JywgJ3ByJ10sXG4gIFsnbWFyZ2luJywgJ20nXSxcbiAgWydtYXJnaW5Ub3AnLCAnbXQnXSxcbiAgWydtYXJnaW5Cb3R0b20nLCAnbWInXSxcbiAgWydtYXJnaW5MZWZ0JywgJ21sJ10sXG4gIFsnbWFyZ2luUmlnaHQnLCAnbXInXSxcbl07XG5cbmNvbnN0IHN0eWxlRXhpc3RzID0gKHByb3BzLCBzdHlsZSkgPT5cbiAgc3R5bGUuc29tZShzdHlsZU5hbWUgPT4gcHJvcHNbc3R5bGVOYW1lXSk7XG5cbmV4cG9ydCBjb25zdCBnZXRTaXplID0gKHByb3BzLCBzaXplKSA9PiB7XG4gIGlmIChfLmlzTnVtYmVyKHNpemUpKSB7XG4gICAgcmV0dXJuIGAke3NpemUgKiBwcm9wcy50aGVtZS5uZXcuc3BhY2VyfXB4YDtcbiAgfSBlbHNlIGlmIChzaXplICYmIHBhcnNlRmxvYXQoc2l6ZSkudG9TdHJpbmcoKSA9PT0gc2l6ZSkge1xuICAgIHJldHVybiBgJHtwYXJzZUZsb2F0KHNpemUudG9TdHJpbmcoKSkgKiBwcm9wcy50aGVtZS5uZXcuc3BhY2VyfXB4YDtcbiAgfVxuICByZXR1cm4gc2l6ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb3BzID0+IGNzc2BcbiAgJHtfLmZsYXR0ZW4oc3R5bGVBbGlhc2VzLmZpbHRlcihhbGlhc0dyb3VwID0+IHN0eWxlRXhpc3RzKHByb3BzLCBhbGlhc0dyb3VwKSkubWFwKChhbGlhc0dyb3VwKSA9PiB7XG4gICAgY29uc3Qgc3R5bGVOYW1lID0gYWxpYXNHcm91cFswXTtcbiAgICByZXR1cm4gYWxpYXNHcm91cC5tYXAoc3R5bGVBbGlhcyA9PiBwcm9wc1tzdHlsZUFsaWFzXSAmJlxuICAgICAgcmVzcG9uc2l2ZVN0eWxlKHByb3BzLCBzdHlsZUFsaWFzLCBzaXplID0+IGNzc2BcbiAgICAgICAgJHtjaGFuZ2VDYXNlLnBhcmFtQ2FzZShzdHlsZU5hbWUpfTogJHtnZXRTaXplKHByb3BzLCBzaXplKX07XG4gICAgICBgKSk7XG4gIH0pKX07XG4gIGA7XG4iXX0= */"))));
})), ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlU3lzdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDMkIiLCJmaWxlIjoic3R5bGVTeXN0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IHJlc3BvbnNpdmVTdHlsZSB9IGZyb20gJ34vY29yZVVJL3V0aWxzL2luZmVyZVN0eWxlJztcbmltcG9ydCBjaGFuZ2VDYXNlIGZyb20gJ2NoYW5nZS1jYXNlJztcblxuY29uc3Qgc3R5bGVBbGlhc2VzID0gW1xuICBbJ3dpZHRoJywgJ3cnXSxcbiAgWydoZWlnaHQnLCAnaCddLFxuICBbJ21pbldpZHRoJ10sXG4gIFsnbWluSGVpZ2h0J10sXG4gIFsnbWF4V2lkdGgnXSxcbiAgWydtYXhIZWlnaHQnXSxcbiAgWydwYWRkaW5nJywgJ3AnXSxcbiAgWydwYWRkaW5nVG9wJywgJ3B0J10sXG4gIFsncGFkZGluZ0JvdHRvbScsICdwYiddLFxuICBbJ3BhZGRpbmdMZWZ0JywgJ3BsJ10sXG4gIFsncGFkZGluZ1JpZ2h0JywgJ3ByJ10sXG4gIFsnbWFyZ2luJywgJ20nXSxcbiAgWydtYXJnaW5Ub3AnLCAnbXQnXSxcbiAgWydtYXJnaW5Cb3R0b20nLCAnbWInXSxcbiAgWydtYXJnaW5MZWZ0JywgJ21sJ10sXG4gIFsnbWFyZ2luUmlnaHQnLCAnbXInXSxcbl07XG5cbmNvbnN0IHN0eWxlRXhpc3RzID0gKHByb3BzLCBzdHlsZSkgPT5cbiAgc3R5bGUuc29tZShzdHlsZU5hbWUgPT4gcHJvcHNbc3R5bGVOYW1lXSk7XG5cbmV4cG9ydCBjb25zdCBnZXRTaXplID0gKHByb3BzLCBzaXplKSA9PiB7XG4gIGlmIChfLmlzTnVtYmVyKHNpemUpKSB7XG4gICAgcmV0dXJuIGAke3NpemUgKiBwcm9wcy50aGVtZS5uZXcuc3BhY2VyfXB4YDtcbiAgfSBlbHNlIGlmIChzaXplICYmIHBhcnNlRmxvYXQoc2l6ZSkudG9TdHJpbmcoKSA9PT0gc2l6ZSkge1xuICAgIHJldHVybiBgJHtwYXJzZUZsb2F0KHNpemUudG9TdHJpbmcoKSkgKiBwcm9wcy50aGVtZS5uZXcuc3BhY2VyfXB4YDtcbiAgfVxuICByZXR1cm4gc2l6ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb3BzID0+IGNzc2BcbiAgJHtfLmZsYXR0ZW4oc3R5bGVBbGlhc2VzLmZpbHRlcihhbGlhc0dyb3VwID0+IHN0eWxlRXhpc3RzKHByb3BzLCBhbGlhc0dyb3VwKSkubWFwKChhbGlhc0dyb3VwKSA9PiB7XG4gICAgY29uc3Qgc3R5bGVOYW1lID0gYWxpYXNHcm91cFswXTtcbiAgICByZXR1cm4gYWxpYXNHcm91cC5tYXAoc3R5bGVBbGlhcyA9PiBwcm9wc1tzdHlsZUFsaWFzXSAmJlxuICAgICAgcmVzcG9uc2l2ZVN0eWxlKHByb3BzLCBzdHlsZUFsaWFzLCBzaXplID0+IGNzc2BcbiAgICAgICAgJHtjaGFuZ2VDYXNlLnBhcmFtQ2FzZShzdHlsZU5hbWUpfTogJHtnZXRTaXplKHByb3BzLCBzaXplKX07XG4gICAgICBgKSk7XG4gIH0pKX07XG4gIGA7XG4iXX0= */")));

var ForceMediaContext = React.createContext();

const patchTargets = {
  xsmall: ['minXsamll', 'xsmall', 'maxMobile', 'maxTablet', 'maxDesktop', 'maxLargeDesktop'],
  mobile: ['minXsmall', 'minMobile', 'mobile', 'maxMobile', 'maxTablet', 'maxDesktop', 'maxLargeDesktop'],
  tablet: ['minXsmall', 'minMobile', 'minTablet', 'tablet', 'maxTablet', 'maxDesktop', 'maxLargeDesktop'],
  desktop: ['minXsmall', 'minMobile', 'minTablet', 'minDesktop', 'desktop', 'maxDesktop', 'maxLargeDesktop'],
  largeDesktop: ['minXsmall', 'minMobile', 'minTablet', 'minDesktop', 'largeDesktop', 'maxLargeDesktop']
};
var withMedia$1 = (WrappedComponent => withMedia(props => React.createElement(ForceMediaContext.Consumer, null, forceMediaQuery => {
  let patchedMedia = props.media;

  if (forceMediaQuery) {
    patchedMedia = _.mapValues(props.media, (mediaQueryMatched, mediaQueryName) => patchTargets[forceMediaQuery].includes(mediaQueryName));
  }

  return React.createElement(WrappedComponent, _extends({}, props, {
    media: patchedMedia,
    forceMediaQuery: forceMediaQuery
  }), props.children);
})));

const StyledSpacer = _styled("div", {
  target: "efenfnd0",
  label: "StyledSpacer"
})("flex-grow:", props => props.grow ? 1 : null, ";", props => responsiveStyle(props, 'size', size =>
/*#__PURE__*/
css("min-width:", infereSpaceSize(props, size), ";min-height:", infereSpaceSize(props, size), ";label:StyledSpacer;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNwYWNlci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV3VEIiwiZmlsZSI6IlNwYWNlci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgcmVzcG9uc2l2ZVN0eWxlLCBpbmZlcmVTcGFjZVNpemUgfSBmcm9tICd+L2NvcmVVSS91dGlscy9pbmZlcmVTdHlsZSc7XG5cbmltcG9ydCBzcGFjZVN0eWxlcyBmcm9tICd+L2NvcmVVSS91dGlscy9zdHlsZVN5c3RlbSc7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRTcGFjZXIgPSBzdHlsZWQuZGl2YFxuICBmbGV4LWdyb3c6ICR7cHJvcHMgPT4gKHByb3BzLmdyb3cgPyAxIDogbnVsbCl9O1xuICBcbiAgJHtwcm9wcyA9PiByZXNwb25zaXZlU3R5bGUocHJvcHMsICdzaXplJywgc2l6ZSA9PiBjc3NgXG4gICAgbWluLXdpZHRoOiAke2luZmVyZVNwYWNlU2l6ZShwcm9wcywgc2l6ZSl9O1xuICAgIG1pbi1oZWlnaHQ6ICR7aW5mZXJlU3BhY2VTaXplKHByb3BzLCBzaXplKX07XG4gIGApfTtcblxuICAke3Byb3BzID0+IHNwYWNlU3R5bGVzKHByb3BzKX1cbmA7XG5cbmNvbnN0IFNwYWNlciA9IHByb3BzID0+IDxTdHlsZWRTcGFjZXIgey4uLnByb3BzfSAvPjtcblxuU3BhY2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2l6ZTogMSxcbn07XG5cblNwYWNlci5wcm9wVHlwZXMgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBzaXplOiBQcm9wVHlwZXMubnVtYmVyLFxufSkuaXNSZXF1aXJlZDtcblxuZXhwb3J0IGRlZmF1bHQgU3BhY2VyO1xuXG5leHBvcnQgY29uc3QgSFNwYWNlciA9IHByb3BzID0+IChcbiAgPFNwYWNlciBtaW5IZWlnaHQ9XCIxcHhcIiB7Li4ucHJvcHN9IC8+XG4pO1xuXG5leHBvcnQgY29uc3QgVlNwYWNlciA9IHByb3BzID0+IChcbiAgPFNwYWNlciBtaW5XaWR0aD1cIjFweFwiIHsuLi5wcm9wc30gLz5cbik7XG4iXX0= */"))), ";", props => spaceStyles(props), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNwYWNlci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUXNDIiwiZmlsZSI6IlNwYWNlci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgcmVzcG9uc2l2ZVN0eWxlLCBpbmZlcmVTcGFjZVNpemUgfSBmcm9tICd+L2NvcmVVSS91dGlscy9pbmZlcmVTdHlsZSc7XG5cbmltcG9ydCBzcGFjZVN0eWxlcyBmcm9tICd+L2NvcmVVSS91dGlscy9zdHlsZVN5c3RlbSc7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRTcGFjZXIgPSBzdHlsZWQuZGl2YFxuICBmbGV4LWdyb3c6ICR7cHJvcHMgPT4gKHByb3BzLmdyb3cgPyAxIDogbnVsbCl9O1xuICBcbiAgJHtwcm9wcyA9PiByZXNwb25zaXZlU3R5bGUocHJvcHMsICdzaXplJywgc2l6ZSA9PiBjc3NgXG4gICAgbWluLXdpZHRoOiAke2luZmVyZVNwYWNlU2l6ZShwcm9wcywgc2l6ZSl9O1xuICAgIG1pbi1oZWlnaHQ6ICR7aW5mZXJlU3BhY2VTaXplKHByb3BzLCBzaXplKX07XG4gIGApfTtcblxuICAke3Byb3BzID0+IHNwYWNlU3R5bGVzKHByb3BzKX1cbmA7XG5cbmNvbnN0IFNwYWNlciA9IHByb3BzID0+IDxTdHlsZWRTcGFjZXIgey4uLnByb3BzfSAvPjtcblxuU3BhY2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2l6ZTogMSxcbn07XG5cblNwYWNlci5wcm9wVHlwZXMgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBzaXplOiBQcm9wVHlwZXMubnVtYmVyLFxufSkuaXNSZXF1aXJlZDtcblxuZXhwb3J0IGRlZmF1bHQgU3BhY2VyO1xuXG5leHBvcnQgY29uc3QgSFNwYWNlciA9IHByb3BzID0+IChcbiAgPFNwYWNlciBtaW5IZWlnaHQ9XCIxcHhcIiB7Li4ucHJvcHN9IC8+XG4pO1xuXG5leHBvcnQgY29uc3QgVlNwYWNlciA9IHByb3BzID0+IChcbiAgPFNwYWNlciBtaW5XaWR0aD1cIjFweFwiIHsuLi5wcm9wc30gLz5cbik7XG4iXX0= */");

const Spacer = props => React.createElement(StyledSpacer, props);

Spacer.defaultProps = {
  size: 1
};
Spacer.propTypes = PropTypes.shape({
  size: PropTypes.number
}).isRequired;

const getIntraItemsSpacer = props => {
  let sizeProp = null; // eslint-disable-next-line react/prop-types

  sizeProp = props.spaceBetween ? parseFloat(props.spaceBetween) : null;

  if (!sizeProp) {
    return null;
  }

  return React.createElement(Spacer, {
    size: sizeProp
  });
};

const getBorderColor = props => {
  let color = 'light';

  if (props.borderColor) {
    color = props.borderColor;
  }

  return props.theme.borders.color[color] || props.borderColor;
};

const getBorderWeight = props => {
  let weight = 'thin';

  if (props.borderWeight) {
    weight = props.borderWeight;
  }

  return props.theme.borders.size[weight];
};

const getBorderRadius = props => {
  let radius = 'normal';

  if (props.borderRadius) {
    radius = props.borderRadius;
  }

  return props.theme.borders.radius[radius] || radius;
};

const getJustifyContent = props => {
  if (props.spaceEvenlyJustified) {
    return 'space-evenly';
  } else if (props.spaceAroundJustified) {
    return 'space-around';
  } else if (props.spaceBetweenJustified) {
    return 'space-between';
  } else if (props.stretchJustified) {
    return 'stretch';
  } else if (props.topJustified) {
    return 'flex-start';
  } else if (props.centerJustified) {
    return 'center';
  } else if (props.bottomJustified) {
    return 'flex-end';
  } else if (props.leftJustified) {
    return 'flex-start';
  } else if (props.rightJustified) {
    return 'flex-end';
  }

  return null;
};

const getAlignItems = props => {
  if (props.stretchAligned) {
    return 'stretch';
  } else if (props.centerAligned) {
    return 'center';
  } else if (props.topAligned) {
    return 'flex-start';
  } else if (props.bottomAligned) {
    return 'flex-end';
  } else if (props.leftAligned) {
    return 'flex-start';
  } else if (props.rightAligned) {
    return 'flex-end';
  }

  return null;
};

const StyledLinearLayout = withMedia$1(_styled("div", {
  target: "efzshtt0",
  label: "StyledLinearLayout"
})("width:", props => props.fullWidth ? '100%' : props.width, ";height:", props => props.fullHeight ? '100%' : props.height, ";box-sizing:border-box;display:flex;flex-direction:", props => props.row ? 'row' : 'column', ";flex-grow:", props => props.grow ? 1 : null, ";justify-content:", props => getJustifyContent(props) || 'flex-start', ";align-items:", props => getAlignItems(props) || 'center', ";border:", props => props.bordered && `solid ${getBorderWeight(props)}px ${getBorderColor(props)}`, ";border-radius:", props => getBorderRadius(props), "px;border-top:", props => props.topBordered && `solid ${getBorderWeight(props)}px ${getBorderColor(props)}`, ";border-left:", props => props.leftBordered && `solid ${getBorderWeight(props)}px ${getBorderColor(props)}`, ";border-bottom:", props => props.bottomBordered && `solid ${getBorderWeight(props)}px ${getBorderColor(props)}`, ";border-right:", props => props.rightBordered && `solid ${getBorderWeight(props)}px ${getBorderColor(props)}`, ";padding:", props => props.padding * props.theme.new.spacer, "px;padding-left:", props => props.paddingLeft * props.theme.new.spacer, "px;padding-right:", props => props.paddingRight * props.theme.new.spacer, "px;padding-top:", props => props.paddingTop * props.theme.new.spacer, "px;padding-bottom:", props => props.paddingBottom * props.theme.new.spacer, "px;", props => spaceStyles(props), " ", props => boxColorsStyles(props), " ", props => props.customStyles && props.customStyles(props), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxpbmVhckxheW91dC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0YrQyIsImZpbGUiOiJMaW5lYXJMYXlvdXQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBpbmplY3RFbGVtZW50QmV0d2VlbkNoaWxkRWxlbWVudHMgZnJvbSAnfi9jb3JlL3V0aWxzL2pzSGVscGVycy9pbmplY3RFbGVtZW50QmV0d2VlbkNoaWxkRWxlbWVudHMnO1xuaW1wb3J0IHsgYm94Q29sb3JzU3R5bGVzIH0gZnJvbSAnfi9jb3JlVUkvdXRpbHMvaW5mZXJlU3R5bGUnO1xuaW1wb3J0IHNwYWNlU3R5bGVzIGZyb20gJ34vY29yZVVJL3V0aWxzL3N0eWxlU3lzdGVtJztcbmltcG9ydCB3aXRoTWVkaWEgZnJvbSAnfi9jb3JlL3V0aWxzL21lZGlhSGVscGVycy93aXRoTWVkaWEnO1xuXG5pbXBvcnQgU3BhY2VyIGZyb20gJy4vU3BhY2VyJztcblxuY29uc3QgZ2V0SW50cmFJdGVtc1NwYWNlciA9IChwcm9wcykgPT4ge1xuICBsZXQgc2l6ZVByb3AgPSBudWxsO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuICBzaXplUHJvcCA9IHByb3BzLnNwYWNlQmV0d2VlbiA/IHBhcnNlRmxvYXQocHJvcHMuc3BhY2VCZXR3ZWVuKSA6IG51bGw7XG4gIGlmICghc2l6ZVByb3ApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gPFNwYWNlciBzaXplPXtzaXplUHJvcH0gLz47XG59O1xuXG5jb25zdCBnZXRCb3JkZXJDb2xvciA9IChwcm9wcykgPT4ge1xuICBsZXQgY29sb3IgPSAnbGlnaHQnO1xuICBpZiAocHJvcHMuYm9yZGVyQ29sb3IpIHtcbiAgICBjb2xvciA9IHByb3BzLmJvcmRlckNvbG9yO1xuICB9XG5cbiAgcmV0dXJuIHByb3BzLnRoZW1lLmJvcmRlcnMuY29sb3JbY29sb3JdIHx8IHByb3BzLmJvcmRlckNvbG9yO1xufTtcblxuY29uc3QgZ2V0Qm9yZGVyV2VpZ2h0ID0gKHByb3BzKSA9PiB7XG4gIGxldCB3ZWlnaHQgPSAndGhpbic7XG4gIGlmIChwcm9wcy5ib3JkZXJXZWlnaHQpIHtcbiAgICB3ZWlnaHQgPSBwcm9wcy5ib3JkZXJXZWlnaHQ7XG4gIH1cblxuICByZXR1cm4gcHJvcHMudGhlbWUuYm9yZGVycy5zaXplW3dlaWdodF07XG59O1xuXG5jb25zdCBnZXRCb3JkZXJSYWRpdXMgPSAocHJvcHMpID0+IHtcbiAgbGV0IHJhZGl1cyA9ICdub3JtYWwnO1xuICBpZiAocHJvcHMuYm9yZGVyUmFkaXVzKSB7XG4gICAgcmFkaXVzID0gcHJvcHMuYm9yZGVyUmFkaXVzO1xuICB9XG5cbiAgcmV0dXJuIHByb3BzLnRoZW1lLmJvcmRlcnMucmFkaXVzW3JhZGl1c10gfHwgcmFkaXVzO1xufTtcblxuY29uc3QgZ2V0SnVzdGlmeUNvbnRlbnQgPSAocHJvcHMpID0+IHtcbiAgaWYgKHByb3BzLnNwYWNlRXZlbmx5SnVzdGlmaWVkKSB7XG4gICAgcmV0dXJuICdzcGFjZS1ldmVubHknO1xuICB9IGVsc2UgaWYgKHByb3BzLnNwYWNlQXJvdW5kSnVzdGlmaWVkKSB7XG4gICAgcmV0dXJuICdzcGFjZS1hcm91bmQnO1xuICB9IGVsc2UgaWYgKHByb3BzLnNwYWNlQmV0d2Vlbkp1c3RpZmllZCkge1xuICAgIHJldHVybiAnc3BhY2UtYmV0d2Vlbic7XG4gIH0gZWxzZSBpZiAocHJvcHMuc3RyZXRjaEp1c3RpZmllZCkge1xuICAgIHJldHVybiAnc3RyZXRjaCc7XG4gIH0gZWxzZSBpZiAocHJvcHMudG9wSnVzdGlmaWVkKSB7XG4gICAgcmV0dXJuICdmbGV4LXN0YXJ0JztcbiAgfSBlbHNlIGlmIChwcm9wcy5jZW50ZXJKdXN0aWZpZWQpIHtcbiAgICByZXR1cm4gJ2NlbnRlcic7XG4gIH0gZWxzZSBpZiAocHJvcHMuYm90dG9tSnVzdGlmaWVkKSB7XG4gICAgcmV0dXJuICdmbGV4LWVuZCc7XG4gIH0gZWxzZSBpZiAocHJvcHMubGVmdEp1c3RpZmllZCkge1xuICAgIHJldHVybiAnZmxleC1zdGFydCc7XG4gIH0gZWxzZSBpZiAocHJvcHMucmlnaHRKdXN0aWZpZWQpIHtcbiAgICByZXR1cm4gJ2ZsZXgtZW5kJztcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbmNvbnN0IGdldEFsaWduSXRlbXMgPSAocHJvcHMpID0+IHtcbiAgaWYgKHByb3BzLnN0cmV0Y2hBbGlnbmVkKSB7XG4gICAgcmV0dXJuICdzdHJldGNoJztcbiAgfSBlbHNlIGlmIChwcm9wcy5jZW50ZXJBbGlnbmVkKSB7XG4gICAgcmV0dXJuICdjZW50ZXInO1xuICB9IGVsc2UgaWYgKHByb3BzLnRvcEFsaWduZWQpIHtcbiAgICByZXR1cm4gJ2ZsZXgtc3RhcnQnO1xuICB9IGVsc2UgaWYgKHByb3BzLmJvdHRvbUFsaWduZWQpIHtcbiAgICByZXR1cm4gJ2ZsZXgtZW5kJztcbiAgfSBlbHNlIGlmIChwcm9wcy5sZWZ0QWxpZ25lZCkge1xuICAgIHJldHVybiAnZmxleC1zdGFydCc7XG4gIH0gZWxzZSBpZiAocHJvcHMucmlnaHRBbGlnbmVkKSB7XG4gICAgcmV0dXJuICdmbGV4LWVuZCc7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5jb25zdCBTdHlsZWRMaW5lYXJMYXlvdXQgPSB3aXRoTWVkaWEoc3R5bGVkLmRpdmBcbiAgd2lkdGg6ICR7cHJvcHMgPT4gKHByb3BzLmZ1bGxXaWR0aCA/ICcxMDAlJyA6IHByb3BzLndpZHRoKX07XG4gIGhlaWdodDogJHtwcm9wcyA9PiAocHJvcHMuZnVsbEhlaWdodCA/ICcxMDAlJyA6IHByb3BzLmhlaWdodCl9O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiAke3Byb3BzID0+IChwcm9wcy5yb3cgPyAncm93JyA6ICdjb2x1bW4nKX07XG4gIGZsZXgtZ3JvdzogJHtwcm9wcyA9PiAocHJvcHMuZ3JvdyA/IDEgOiBudWxsKX07XG4gIGp1c3RpZnktY29udGVudDogJHtwcm9wcyA9PiBnZXRKdXN0aWZ5Q29udGVudChwcm9wcykgfHwgJ2ZsZXgtc3RhcnQnfTtcbiAgYWxpZ24taXRlbXM6ICR7cHJvcHMgPT4gZ2V0QWxpZ25JdGVtcyhwcm9wcykgfHwgJ2NlbnRlcid9O1xuXG4gIGJvcmRlcjogJHtwcm9wcyA9PiBwcm9wcy5ib3JkZXJlZCAmJiBgc29saWQgJHtnZXRCb3JkZXJXZWlnaHQocHJvcHMpfXB4ICR7Z2V0Qm9yZGVyQ29sb3IocHJvcHMpfWB9O1xuICBib3JkZXItcmFkaXVzOiAke3Byb3BzID0+IGdldEJvcmRlclJhZGl1cyhwcm9wcyl9cHg7XG4gIGJvcmRlci10b3A6ICR7cHJvcHMgPT4gcHJvcHMudG9wQm9yZGVyZWQgJiYgYHNvbGlkICR7Z2V0Qm9yZGVyV2VpZ2h0KHByb3BzKX1weCAke2dldEJvcmRlckNvbG9yKHByb3BzKX1gfTtcbiAgYm9yZGVyLWxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMubGVmdEJvcmRlcmVkICYmIGBzb2xpZCAke2dldEJvcmRlcldlaWdodChwcm9wcyl9cHggJHtnZXRCb3JkZXJDb2xvcihwcm9wcyl9YH07XG4gIGJvcmRlci1ib3R0b206ICR7cHJvcHMgPT4gcHJvcHMuYm90dG9tQm9yZGVyZWQgJiYgYHNvbGlkICR7Z2V0Qm9yZGVyV2VpZ2h0KHByb3BzKX1weCAke2dldEJvcmRlckNvbG9yKHByb3BzKX1gfTtcbiAgYm9yZGVyLXJpZ2h0OiAke3Byb3BzID0+IHByb3BzLnJpZ2h0Qm9yZGVyZWQgJiYgYHNvbGlkICR7Z2V0Qm9yZGVyV2VpZ2h0KHByb3BzKX1weCAke2dldEJvcmRlckNvbG9yKHByb3BzKX1gfTtcblxuICBwYWRkaW5nOiAke3Byb3BzID0+IHByb3BzLnBhZGRpbmcgKiBwcm9wcy50aGVtZS5uZXcuc3BhY2VyfXB4O1xuICBwYWRkaW5nLWxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMucGFkZGluZ0xlZnQgKiBwcm9wcy50aGVtZS5uZXcuc3BhY2VyfXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAke3Byb3BzID0+IHByb3BzLnBhZGRpbmdSaWdodCAqIHByb3BzLnRoZW1lLm5ldy5zcGFjZXJ9cHg7XG4gIHBhZGRpbmctdG9wOiAke3Byb3BzID0+IHByb3BzLnBhZGRpbmdUb3AgKiBwcm9wcy50aGVtZS5uZXcuc3BhY2VyfXB4O1xuICBwYWRkaW5nLWJvdHRvbTogJHtwcm9wcyA9PiBwcm9wcy5wYWRkaW5nQm90dG9tICogcHJvcHMudGhlbWUubmV3LnNwYWNlcn1weDtcblxuICAke3Byb3BzID0+IHNwYWNlU3R5bGVzKHByb3BzKX1cbiAgJHtwcm9wcyA9PiBib3hDb2xvcnNTdHlsZXMocHJvcHMpfVxuICAke3Byb3BzID0+IHByb3BzLmN1c3RvbVN0eWxlcyAmJiBwcm9wcy5jdXN0b21TdHlsZXMocHJvcHMpfVxuYCk7XG5cbmV4cG9ydCBjb25zdCBMaW5lYXJMYXlvdXQgPSBwcm9wcyA9PiAoXG4gIDxTdHlsZWRMaW5lYXJMYXlvdXQgey4uLnByb3BzfT5cbiAgICB7aW5qZWN0RWxlbWVudEJldHdlZW5DaGlsZEVsZW1lbnRzKFxuICAgICAgcHJvcHMuY2hpbGRyZW4sIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuICAgICAgZ2V0SW50cmFJdGVtc1NwYWNlcihwcm9wcyksXG4gICAgICB0cnVlLFxuICAgICl9XG4gIDwvU3R5bGVkTGluZWFyTGF5b3V0PlxuKTtcblxuZXhwb3J0IGNvbnN0IENvbHVtbiA9IHByb3BzID0+IChcbiAgPExpbmVhckxheW91dCBjb2x1bW4gey4uLnByb3BzfSAvPlxuKTtcblxuZXhwb3J0IGNvbnN0IFJvdyA9IHByb3BzID0+IChcbiAgPExpbmVhckxheW91dCByb3cgey4uLnByb3BzfSAvPlxuKTtcblxuZXhwb3J0IGNvbnN0IEJveCA9IHByb3BzID0+IChcbiAgPExpbmVhckxheW91dCB7Li4ucHJvcHN9IC8+XG4pO1xuIl19 */"));
const LinearLayout = props => React.createElement(StyledLinearLayout, props, injectElementBetweenChildElements(props.children, // eslint-disable-line react/prop-types
getIntraItemsSpacer(props), true));
const Row = props => React.createElement(LinearLayout, _extends({
  row: true
}, props));
const Box = props => React.createElement(LinearLayout, props);

// these sizes are arbitrary and you can set them to whatever you wish
const mediaSizesMax = {
  largeDesktop: 10240,
  desktop: 1600,
  tablet: 1100,
  mobile: 800,
  xsmall: 500
};
const mediaSizesMin = {
  largeDesktop: 1600,
  desktop: 1100,
  tablet: 800,
  mobile: 500,
  xsmall: 250
};

const emSizeString = (mediaName, isMax) => isMax ? // use em in breakpoints to work properly cross-browser and support users
// changing their browsers font-size: https://zellwk.com/blog/media-query-units/
`${mediaSizesMax[mediaName] / 16}em` : `${mediaSizesMin[mediaName] / 16}em`;
const mediaQueryMax = mediaName => `(max-width: ${emSizeString(mediaName, true)})`;
const mediaQueryMin = mediaName => `(min-width: ${emSizeString(mediaName, false)})`;
const mediaQueryExact = mediaName => `(min-width: ${emSizeString(mediaName, false)}) and (max-width: ${emSizeString(mediaName, true)})`;

/* eslint-disable react/prop-types */
const queries = {
  largeDesktop: mediaQueryMin('largeDesktop'),
  maxLargeDesktop: mediaQueryMax('largeDesktop'),
  desktop: mediaQueryExact('desktop'),
  minDesktop: mediaQueryMin('desktop'),
  maxDesktop: mediaQueryMax('desktop'),
  tablet: mediaQueryExact('tablet'),
  minTablet: mediaQueryMin('tablet'),
  maxTablet: mediaQueryMax('tablet'),
  mobile: mediaQueryExact('mobile'),
  minMobile: mediaQueryMin('mobile'),
  maxMobile: mediaQueryMax('mobile'),
  minXsmall: mediaQueryMin('xsmall'),
  xsmall: mediaQueryMax('xsmall')
};

const MediaProvider = props => React.createElement(MediaQueryProvider, {
  queries: queries
}, props.children);

function Wrapper({
  children,
  theme = defaultTheme
}) {
  return React.createElement(ThemeProvider, {
    theme: theme
  }, React.createElement(MediaProvider, null, React.createElement(LinearLayout, {
    row: true,
    leftJustified: true,
    topAligned: true
  }, children)));
}

/* eslint-disable jsx-a11y/no-noninteractive-element-interactions,
 jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */

const Icon = props => React.createElement("i", _extends({
  className: props.className
}, props, {
  onClick: props.onClick
}));

Icon.propTypes = PropTypes.shape({
  className: PropTypes.string.isRequired
}).isRequired;

const ButtonContent =
/*#__PURE__*/
_styled(Row, {
  target: "e6bxis10",
  label: "ButtonContent"
})(process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNpQyIsImZpbGUiOiJCdXR0b24uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHt3aXRoVGhlbWV9IGZyb20gJ2Vtb3Rpb24tdGhlbWluZydcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtjc3N9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgd2l0aE1lZGlhIGZyb20gJ34vY29yZS91dGlscy9tZWRpYUhlbHBlcnMvd2l0aE1lZGlhJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFB1bHNlTG9hZGVyIGZyb20gJ3JlYWN0LXNwaW5uZXJzL1B1bHNlTG9hZGVyJ1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gJ34vY29yZS91dGlscy9qc0hlbHBlcnMvYXNzZXJ0J1xuXG5pbXBvcnQge1xuICBkYXJrZW4sXG4gIGluZmVyZUJ1dHRvbkNvbG9ycyxcbiAgcmVzcG9uc2l2ZVN0eWxlLFxuICBpbmZlcmVJbnRyYVNwYWNpbmdTaXplLFxuICBpbmZlcmVGb250V2VpZ2h0LFxuICBwcm9wc0ZvclByZWZpeCxcbiAgaW5mZXJlRm9udFNpemUsXG4gIGluZmVyZVBhZGRpbmdTaXplLFxuICBpbmZlcmVCb3JkZXJSYWRpdXMsXG4gIGNvbG9yU3R5bGVzLFxuICBkaXNhYmxlZENvbG9yU3R5bGVzLFxufSBmcm9tICd+L2NvcmVVSS91dGlscy9pbmZlcmVTdHlsZSdcbmltcG9ydCBzcGFjZVN0eWxlcyBmcm9tICd+L2NvcmVVSS91dGlscy9zdHlsZVN5c3RlbSdcblxuaW1wb3J0IEljb24gZnJvbSAnfi9jb3JlVUkvY29tcG9uZW50cy9iYXNpYy9JY29uJ1xuaW1wb3J0IHtcbiAgUm93LFxuICBCb3gsXG59IGZyb20gJ34vY29yZVVJL2NvbXBvbmVudHMvbGF5b3V0cy9oZWxwZXJzL0xpbmVhckxheW91dCdcblxuY29uc3QgQnV0dG9uQ29udGVudCA9IHN0eWxlZChSb3cpYFxuICAvKiB3aGl0ZS1zcGFjZTogbm93cmFwOyAqL1xuYFxuXG4vLyBNdXN0IGJlIG9mIHJlbGF0aXZlIHBvc2l0aW9uIGZvciB0aGUgbG9hZGluZyBpY29uIHRvIGJlIGRyYXduIGNvcnJlY3RseVxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgJHtwcm9wcyA9PlxuICAgIHJlc3BvbnNpdmVTdHlsZShcbiAgICAgIHByb3BzLFxuICAgICAgJ3NpemUnLFxuICAgICAgc2l6ZSA9PiBjc3NgXG4gICAgICAgIHBhZGRpbmctdG9wOiAke2luZmVyZVBhZGRpbmdTaXplKHByb3BzLCBzaXplKX1weDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206ICR7aW5mZXJlUGFkZGluZ1NpemUocHJvcHMsIHNpemUpfXB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6ICR7KHByb3BzLnB4UmF0aW8gfHwgMikgKlxuICAgICAgICAgIGluZmVyZVBhZGRpbmdTaXplKHByb3BzLCBzaXplKX1weDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogJHsocHJvcHMucHhSYXRpbyB8fCAyKSAqXG4gICAgICAgICAgaW5mZXJlUGFkZGluZ1NpemUocHJvcHMsIHNpemUpfXB4O1xuICAgICAgYCxcbiAgICApfTtcblxuICAke3Byb3BzID0+XG4gICAgcmVzcG9uc2l2ZVN0eWxlKFxuICAgICAgcHJvcHMsXG4gICAgICAnc2l6ZScsXG4gICAgICBzaXplID0+IGNzc2BcbiAgICAgICAgZm9udC1zaXplOiAke2luZmVyZUZvbnRTaXplKHByb3BzLCBzaXplKX07XG4gICAgICBgLFxuICAgICl9O1xuICBmb250LXdlaWdodDogJHtwcm9wcyA9PiBpbmZlcmVGb250V2VpZ2h0KHByb3BzKX07XG5cbiAgYm9yZGVyOiAke3Byb3BzID0+IChwcm9wcy5ib3JkZXJMZXNzID8gMCA6IHByb3BzLnRoZW1lLmJ1dHRvbnMuYm9yZGVyIHx8IDEpfXB4XG4gICAgc29saWQ7XG4gICR7cHJvcHMgPT5cbiAgICByZXNwb25zaXZlU3R5bGUoXG4gICAgICBwcm9wcyxcbiAgICAgICdzaXplJyxcbiAgICAgIHNpemUgPT4gY3NzYFxuICAgICAgICBib3JkZXItcmFkaXVzOiAke2luZmVyZUJvcmRlclJhZGl1cyhwcm9wcywgc2l6ZSl9cHg7XG4gICAgICBgLFxuICAgICl9O1xuXG4gIG91dGxpbmUtc3R5bGU6IG5vbmU7XG5cbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICR7cHJvcHMgPT4gc3BhY2VTdHlsZXMocHJvcHMpfVxuICAke3Byb3BzID0+IChwcm9wcy5kaXNhYmxlZCA/IGRpc2FibGVkQ29sb3JTdHlsZXMocHJvcHMpIDogY29sb3JTdHlsZXMocHJvcHMpKX1cbmBcblxuY29uc3QgTG9hZGVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcblxuICAke3Byb3BzID0+XG4gICAgcmVzcG9uc2l2ZVN0eWxlKFxuICAgICAgcHJvcHMsXG4gICAgICAnc2l6ZScsXG4gICAgICBzaXplID0+IGNzc2BcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJHtpbmZlcmVCb3JkZXJSYWRpdXMocHJvcHMsIHNpemUpfXB4O1xuICAgICAgYCxcbiAgICApfTtcblxuICAmIC5idXR0b25Mb2FkZXIgPiAqIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+XG4gICAgICBkYXJrZW4ocHJvcHMuY29sb3IgfHwgaW5mZXJlQnV0dG9uQ29sb3JzKHByb3BzKS5saW5lQ29sb3IsIDApfTtcbiAgfVxuXG4gICYgLmJ1dHRvbkxvYWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIGhlaWdodDogMTFweDtcbiAgICAke3Byb3BzID0+XG4gICAgICByZXNwb25zaXZlU3R5bGUoXG4gICAgICAgIHByb3BzLFxuICAgICAgICAnc2l6ZScsXG4gICAgICAgIHNpemUgPT4gY3NzYFxuICAgICAgICAgIGJvdHRvbTogJHtpbmZlcmVQYWRkaW5nU2l6ZShwcm9wcywgc2l6ZSkgLyAyfXB4O1xuICAgICAgICBgLFxuICAgICAgKX07XG4gICAgb3BhY2l0eTogMC42O1xuICB9XG5gXG5cbmNvbnN0IEJ1dHRvbkNvbnRhaW5lciA9IHN0eWxlZChCb3gpYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAke3Byb3BzID0+IChwcm9wcy5ibG9jayA/ICcxMDAlJyA6IHByb3BzLndpZHRoKX07XG5gXG5cbmNsYXNzIElubmVyQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgLy8gRklYTUUgOiBUaGUgcmVhc29uIGZvciB0aGUgZm9sbG93aW5nIHdvcmsgYXJvdW5kLCBpcyB0aGF0IG9uQ2xpY2sgd291bGQgYmUgY2FsbGVkIG9uIHRoZVxuICAgIC8vICAgICAgICAgRXh0ZXJuYWwgY29tcG9uZW50IGZpcnN0LCBhbmQgdGh1cyBjYXVzZXMgdGhlIG9uQ2xpY2sgYmVpbmcgY2FsbGVkIHR3aWNlXG4gICAgYXNzZXJ0KFxuICAgICAgIXRoaXMucHJvcHMub25DbGljayxcbiAgICAgIFwib25DbGljayBzaG91bGRuJ3QgYmUgdXNlZCBvbiBCYXNpY0J1dHRvbiwgdXNlIG9uQ2xpY2tlZCBpbnN0ZWFkXCIsXG4gICAgKVxuICB9XG5cbiAgb25DbGljayA9IGUgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2tlZCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrZWQoZSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIgPSAoKSA9PiAoXG4gICAgPEJ1dHRvbkNvbnRhaW5lciBibG9jaz17dGhpcy5wcm9wcy5ibG9ja30+XG4gICAgICA8U3R5bGVkQnV0dG9uXG4gICAgICAgIHsuLi5fLm9taXQodGhpcy5wcm9wcywgWydvbkNsaWNrZWQnXSl9XG4gICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5vbkNsaWNrKGUpfVxuICAgICAgPlxuICAgICAgICA8QnV0dG9uQ29udGVudFxuICAgICAgICAgIGNlbnRlckp1c3RpZmllZFxuICAgICAgICAgIGNlbnRlckFsaWduZWRcbiAgICAgICAgICBzcGFjZUJldHdlZW49e1xuICAgICAgICAgICAgaW5mZXJlSW50cmFTcGFjaW5nU2l6ZSh0aGlzLnByb3BzKSAvIHRoaXMucHJvcHMudGhlbWUubmV3LnNwYWNlclxuICAgICAgICAgIH1cbiAgICAgICAgICB7Li4ucHJvcHNGb3JQcmVmaXgodGhpcy5wcm9wcywgJ2J1dHRvbkNvbnRlbnRfJyl9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5pY29uTmFtZSAmJiAoXG4gICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuaWNvbk5hbWV9XG4gICAgICAgICAgICAgIHsuLi5wcm9wc0ZvclByZWZpeCh0aGlzLnByb3BzLCAnaWNvbkJlZm9yZV8nKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5pY29uICYmIHRoaXMucHJvcHMuaWNvbn1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5pY29uQWZ0ZXJOYW1lICYmIChcbiAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5pY29uQWZ0ZXJOYW1lfVxuICAgICAgICAgICAgICB7Li4ucHJvcHNGb3JQcmVmaXgodGhpcy5wcm9wcywgJ2ljb25BZnRlcl8nKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5pY29uQWZ0ZXIgJiYgdGhpcy5wcm9wcy5pY29uQWZ0ZXJ9XG4gICAgICAgIDwvQnV0dG9uQ29udGVudD5cbiAgICAgIDwvU3R5bGVkQnV0dG9uPlxuICAgICAge3RoaXMucHJvcHMubG9hZGluZyAmJiAoXG4gICAgICAgIDxMb2FkZXJDb250YWluZXIgey4uLl8ub21pdCh0aGlzLnByb3BzLCBbJ29uQ2xpY2tlZCddKX0+XG4gICAgICAgICAgPEJveCBmdWxsV2lkdGggZnVsbEhlaWdodD5cbiAgICAgICAgICAgIDxQdWxzZUxvYWRlciBzaXplPXsyfSBjbGFzc05hbWU9XCJidXR0b25Mb2FkZXJcIiAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0xvYWRlckNvbnRhaW5lcj5cbiAgICAgICl9XG4gICAgPC9CdXR0b25Db250YWluZXI+XG4gIClcbn1cblxuSW5uZXJCdXR0b24ucHJvcFR5cGVzID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgaWNvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn0pLmlzUmVxdWlyZWRcblxuY29uc3QgQnV0dG9uID0gd2l0aE1lZGlhKFxuICB3aXRoVGhlbWUocHJvcHMgPT5cbiAgICBwcm9jZXNzLmlzU3R5bGVndWlkaXN0QWN0aXZlID8gKFxuICAgICAgPElubmVyQnV0dG9uXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgdGl0bGU9e3Jlc3BvbnNpdmVTdHlsZShwcm9wcywgJ3NpemUnLCBzaXplID0+XG4gICAgICAgICAgaW5mZXJlRm9udFNpemUocHJvcHMsIHNpemUpLFxuICAgICAgICApfVxuICAgICAgLz5cbiAgICApIDogKFxuICAgICAgPElubmVyQnV0dG9uIHsuLi5wcm9wc30gLz5cbiAgICApLFxuICApLFxuKVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cbiJdfQ== */"); // Must be of relative position for the loading icon to be drawn correctly


const StyledButton = _styled("button", {
  target: "e6bxis11",
  label: "StyledButton"
})(props => responsiveStyle(props, 'size', size =>
/*#__PURE__*/
css("padding-top:", inferePaddingSize(props, size), "px;padding-bottom:", inferePaddingSize(props, size), "px;padding-left:", (props.pxRatio || 2) * inferePaddingSize(props, size), "px;padding-right:", (props.pxRatio || 2) * inferePaddingSize(props, size), "px;label:StyledButton;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkNpQiIsImZpbGUiOiJCdXR0b24uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHt3aXRoVGhlbWV9IGZyb20gJ2Vtb3Rpb24tdGhlbWluZydcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtjc3N9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgd2l0aE1lZGlhIGZyb20gJ34vY29yZS91dGlscy9tZWRpYUhlbHBlcnMvd2l0aE1lZGlhJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFB1bHNlTG9hZGVyIGZyb20gJ3JlYWN0LXNwaW5uZXJzL1B1bHNlTG9hZGVyJ1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gJ34vY29yZS91dGlscy9qc0hlbHBlcnMvYXNzZXJ0J1xuXG5pbXBvcnQge1xuICBkYXJrZW4sXG4gIGluZmVyZUJ1dHRvbkNvbG9ycyxcbiAgcmVzcG9uc2l2ZVN0eWxlLFxuICBpbmZlcmVJbnRyYVNwYWNpbmdTaXplLFxuICBpbmZlcmVGb250V2VpZ2h0LFxuICBwcm9wc0ZvclByZWZpeCxcbiAgaW5mZXJlRm9udFNpemUsXG4gIGluZmVyZVBhZGRpbmdTaXplLFxuICBpbmZlcmVCb3JkZXJSYWRpdXMsXG4gIGNvbG9yU3R5bGVzLFxuICBkaXNhYmxlZENvbG9yU3R5bGVzLFxufSBmcm9tICd+L2NvcmVVSS91dGlscy9pbmZlcmVTdHlsZSdcbmltcG9ydCBzcGFjZVN0eWxlcyBmcm9tICd+L2NvcmVVSS91dGlscy9zdHlsZVN5c3RlbSdcblxuaW1wb3J0IEljb24gZnJvbSAnfi9jb3JlVUkvY29tcG9uZW50cy9iYXNpYy9JY29uJ1xuaW1wb3J0IHtcbiAgUm93LFxuICBCb3gsXG59IGZyb20gJ34vY29yZVVJL2NvbXBvbmVudHMvbGF5b3V0cy9oZWxwZXJzL0xpbmVhckxheW91dCdcblxuY29uc3QgQnV0dG9uQ29udGVudCA9IHN0eWxlZChSb3cpYFxuICAvKiB3aGl0ZS1zcGFjZTogbm93cmFwOyAqL1xuYFxuXG4vLyBNdXN0IGJlIG9mIHJlbGF0aXZlIHBvc2l0aW9uIGZvciB0aGUgbG9hZGluZyBpY29uIHRvIGJlIGRyYXduIGNvcnJlY3RseVxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgJHtwcm9wcyA9PlxuICAgIHJlc3BvbnNpdmVTdHlsZShcbiAgICAgIHByb3BzLFxuICAgICAgJ3NpemUnLFxuICAgICAgc2l6ZSA9PiBjc3NgXG4gICAgICAgIHBhZGRpbmctdG9wOiAke2luZmVyZVBhZGRpbmdTaXplKHByb3BzLCBzaXplKX1weDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206ICR7aW5mZXJlUGFkZGluZ1NpemUocHJvcHMsIHNpemUpfXB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6ICR7KHByb3BzLnB4UmF0aW8gfHwgMikgKlxuICAgICAgICAgIGluZmVyZVBhZGRpbmdTaXplKHByb3BzLCBzaXplKX1weDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogJHsocHJvcHMucHhSYXRpbyB8fCAyKSAqXG4gICAgICAgICAgaW5mZXJlUGFkZGluZ1NpemUocHJvcHMsIHNpemUpfXB4O1xuICAgICAgYCxcbiAgICApfTtcblxuICAke3Byb3BzID0+XG4gICAgcmVzcG9uc2l2ZVN0eWxlKFxuICAgICAgcHJvcHMsXG4gICAgICAnc2l6ZScsXG4gICAgICBzaXplID0+IGNzc2BcbiAgICAgICAgZm9udC1zaXplOiAke2luZmVyZUZvbnRTaXplKHByb3BzLCBzaXplKX07XG4gICAgICBgLFxuICAgICl9O1xuICBmb250LXdlaWdodDogJHtwcm9wcyA9PiBpbmZlcmVGb250V2VpZ2h0KHByb3BzKX07XG5cbiAgYm9yZGVyOiAke3Byb3BzID0+IChwcm9wcy5ib3JkZXJMZXNzID8gMCA6IHByb3BzLnRoZW1lLmJ1dHRvbnMuYm9yZGVyIHx8IDEpfXB4XG4gICAgc29saWQ7XG4gICR7cHJvcHMgPT5cbiAgICByZXNwb25zaXZlU3R5bGUoXG4gICAgICBwcm9wcyxcbiAgICAgICdzaXplJyxcbiAgICAgIHNpemUgPT4gY3NzYFxuICAgICAgICBib3JkZXItcmFkaXVzOiAke2luZmVyZUJvcmRlclJhZGl1cyhwcm9wcywgc2l6ZSl9cHg7XG4gICAgICBgLFxuICAgICl9O1xuXG4gIG91dGxpbmUtc3R5bGU6IG5vbmU7XG5cbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICR7cHJvcHMgPT4gc3BhY2VTdHlsZXMocHJvcHMpfVxuICAke3Byb3BzID0+IChwcm9wcy5kaXNhYmxlZCA/IGRpc2FibGVkQ29sb3JTdHlsZXMocHJvcHMpIDogY29sb3JTdHlsZXMocHJvcHMpKX1cbmBcblxuY29uc3QgTG9hZGVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcblxuICAke3Byb3BzID0+XG4gICAgcmVzcG9uc2l2ZVN0eWxlKFxuICAgICAgcHJvcHMsXG4gICAgICAnc2l6ZScsXG4gICAgICBzaXplID0+IGNzc2BcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJHtpbmZlcmVCb3JkZXJSYWRpdXMocHJvcHMsIHNpemUpfXB4O1xuICAgICAgYCxcbiAgICApfTtcblxuICAmIC5idXR0b25Mb2FkZXIgPiAqIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+XG4gICAgICBkYXJrZW4ocHJvcHMuY29sb3IgfHwgaW5mZXJlQnV0dG9uQ29sb3JzKHByb3BzKS5saW5lQ29sb3IsIDApfTtcbiAgfVxuXG4gICYgLmJ1dHRvbkxvYWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIGhlaWdodDogMTFweDtcbiAgICAke3Byb3BzID0+XG4gICAgICByZXNwb25zaXZlU3R5bGUoXG4gICAgICAgIHByb3BzLFxuICAgICAgICAnc2l6ZScsXG4gICAgICAgIHNpemUgPT4gY3NzYFxuICAgICAgICAgIGJvdHRvbTogJHtpbmZlcmVQYWRkaW5nU2l6ZShwcm9wcywgc2l6ZSkgLyAyfXB4O1xuICAgICAgICBgLFxuICAgICAgKX07XG4gICAgb3BhY2l0eTogMC42O1xuICB9XG5gXG5cbmNvbnN0IEJ1dHRvbkNvbnRhaW5lciA9IHN0eWxlZChCb3gpYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAke3Byb3BzID0+IChwcm9wcy5ibG9jayA/ICcxMDAlJyA6IHByb3BzLndpZHRoKX07XG5gXG5cbmNsYXNzIElubmVyQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgLy8gRklYTUUgOiBUaGUgcmVhc29uIGZvciB0aGUgZm9sbG93aW5nIHdvcmsgYXJvdW5kLCBpcyB0aGF0IG9uQ2xpY2sgd291bGQgYmUgY2FsbGVkIG9uIHRoZVxuICAgIC8vICAgICAgICAgRXh0ZXJuYWwgY29tcG9uZW50IGZpcnN0LCBhbmQgdGh1cyBjYXVzZXMgdGhlIG9uQ2xpY2sgYmVpbmcgY2FsbGVkIHR3aWNlXG4gICAgYXNzZXJ0KFxuICAgICAgIXRoaXMucHJvcHMub25DbGljayxcbiAgICAgIFwib25DbGljayBzaG91bGRuJ3QgYmUgdXNlZCBvbiBCYXNpY0J1dHRvbiwgdXNlIG9uQ2xpY2tlZCBpbnN0ZWFkXCIsXG4gICAgKVxuICB9XG5cbiAgb25DbGljayA9IGUgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2tlZCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrZWQoZSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIgPSAoKSA9PiAoXG4gICAgPEJ1dHRvbkNvbnRhaW5lciBibG9jaz17dGhpcy5wcm9wcy5ibG9ja30+XG4gICAgICA8U3R5bGVkQnV0dG9uXG4gICAgICAgIHsuLi5fLm9taXQodGhpcy5wcm9wcywgWydvbkNsaWNrZWQnXSl9XG4gICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5vbkNsaWNrKGUpfVxuICAgICAgPlxuICAgICAgICA8QnV0dG9uQ29udGVudFxuICAgICAgICAgIGNlbnRlckp1c3RpZmllZFxuICAgICAgICAgIGNlbnRlckFsaWduZWRcbiAgICAgICAgICBzcGFjZUJldHdlZW49e1xuICAgICAgICAgICAgaW5mZXJlSW50cmFTcGFjaW5nU2l6ZSh0aGlzLnByb3BzKSAvIHRoaXMucHJvcHMudGhlbWUubmV3LnNwYWNlclxuICAgICAgICAgIH1cbiAgICAgICAgICB7Li4ucHJvcHNGb3JQcmVmaXgodGhpcy5wcm9wcywgJ2J1dHRvbkNvbnRlbnRfJyl9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5pY29uTmFtZSAmJiAoXG4gICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuaWNvbk5hbWV9XG4gICAgICAgICAgICAgIHsuLi5wcm9wc0ZvclByZWZpeCh0aGlzLnByb3BzLCAnaWNvbkJlZm9yZV8nKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5pY29uICYmIHRoaXMucHJvcHMuaWNvbn1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5pY29uQWZ0ZXJOYW1lICYmIChcbiAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5pY29uQWZ0ZXJOYW1lfVxuICAgICAgICAgICAgICB7Li4ucHJvcHNGb3JQcmVmaXgodGhpcy5wcm9wcywgJ2ljb25BZnRlcl8nKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5pY29uQWZ0ZXIgJiYgdGhpcy5wcm9wcy5pY29uQWZ0ZXJ9XG4gICAgICAgIDwvQnV0dG9uQ29udGVudD5cbiAgICAgIDwvU3R5bGVkQnV0dG9uPlxuICAgICAge3RoaXMucHJvcHMubG9hZGluZyAmJiAoXG4gICAgICAgIDxMb2FkZXJDb250YWluZXIgey4uLl8ub21pdCh0aGlzLnByb3BzLCBbJ29uQ2xpY2tlZCddKX0+XG4gICAgICAgICAgPEJveCBmdWxsV2lkdGggZnVsbEhlaWdodD5cbiAgICAgICAgICAgIDxQdWxzZUxvYWRlciBzaXplPXsyfSBjbGFzc05hbWU9XCJidXR0b25Mb2FkZXJcIiAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0xvYWRlckNvbnRhaW5lcj5cbiAgICAgICl9XG4gICAgPC9CdXR0b25Db250YWluZXI+XG4gIClcbn1cblxuSW5uZXJCdXR0b24ucHJvcFR5cGVzID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgaWNvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn0pLmlzUmVxdWlyZWRcblxuY29uc3QgQnV0dG9uID0gd2l0aE1lZGlhKFxuICB3aXRoVGhlbWUocHJvcHMgPT5cbiAgICBwcm9jZXNzLmlzU3R5bGVndWlkaXN0QWN0aXZlID8gKFxuICAgICAgPElubmVyQnV0dG9uXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgdGl0bGU9e3Jlc3BvbnNpdmVTdHlsZShwcm9wcywgJ3NpemUnLCBzaXplID0+XG4gICAgICAgICAgaW5mZXJlRm9udFNpemUocHJvcHMsIHNpemUpLFxuICAgICAgICApfVxuICAgICAgLz5cbiAgICApIDogKFxuICAgICAgPElubmVyQnV0dG9uIHsuLi5wcm9wc30gLz5cbiAgICApLFxuICApLFxuKVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cbiJdfQ== */"))), ";", props => responsiveStyle(props, 'size', size =>
/*#__PURE__*/
css("font-size:", infereFontSize(props, size), ";label:StyledButton;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeURpQiIsImZpbGUiOiJCdXR0b24uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHt3aXRoVGhlbWV9IGZyb20gJ2Vtb3Rpb24tdGhlbWluZydcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtjc3N9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgd2l0aE1lZGlhIGZyb20gJ34vY29yZS91dGlscy9tZWRpYUhlbHBlcnMvd2l0aE1lZGlhJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFB1bHNlTG9hZGVyIGZyb20gJ3JlYWN0LXNwaW5uZXJzL1B1bHNlTG9hZGVyJ1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gJ34vY29yZS91dGlscy9qc0hlbHBlcnMvYXNzZXJ0J1xuXG5pbXBvcnQge1xuICBkYXJrZW4sXG4gIGluZmVyZUJ1dHRvbkNvbG9ycyxcbiAgcmVzcG9uc2l2ZVN0eWxlLFxuICBpbmZlcmVJbnRyYVNwYWNpbmdTaXplLFxuICBpbmZlcmVGb250V2VpZ2h0LFxuICBwcm9wc0ZvclByZWZpeCxcbiAgaW5mZXJlRm9udFNpemUsXG4gIGluZmVyZVBhZGRpbmdTaXplLFxuICBpbmZlcmVCb3JkZXJSYWRpdXMsXG4gIGNvbG9yU3R5bGVzLFxuICBkaXNhYmxlZENvbG9yU3R5bGVzLFxufSBmcm9tICd+L2NvcmVVSS91dGlscy9pbmZlcmVTdHlsZSdcbmltcG9ydCBzcGFjZVN0eWxlcyBmcm9tICd+L2NvcmVVSS91dGlscy9zdHlsZVN5c3RlbSdcblxuaW1wb3J0IEljb24gZnJvbSAnfi9jb3JlVUkvY29tcG9uZW50cy9iYXNpYy9JY29uJ1xuaW1wb3J0IHtcbiAgUm93LFxuICBCb3gsXG59IGZyb20gJ34vY29yZVVJL2NvbXBvbmVudHMvbGF5b3V0cy9oZWxwZXJzL0xpbmVhckxheW91dCdcblxuY29uc3QgQnV0dG9uQ29udGVudCA9IHN0eWxlZChSb3cpYFxuICAvKiB3aGl0ZS1zcGFjZTogbm93cmFwOyAqL1xuYFxuXG4vLyBNdXN0IGJlIG9mIHJlbGF0aXZlIHBvc2l0aW9uIGZvciB0aGUgbG9hZGluZyBpY29uIHRvIGJlIGRyYXduIGNvcnJlY3RseVxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgJHtwcm9wcyA9PlxuICAgIHJlc3BvbnNpdmVTdHlsZShcbiAgICAgIHByb3BzLFxuICAgICAgJ3NpemUnLFxuICAgICAgc2l6ZSA9PiBjc3NgXG4gICAgICAgIHBhZGRpbmctdG9wOiAke2luZmVyZVBhZGRpbmdTaXplKHByb3BzLCBzaXplKX1weDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206ICR7aW5mZXJlUGFkZGluZ1NpemUocHJvcHMsIHNpemUpfXB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6ICR7KHByb3BzLnB4UmF0aW8gfHwgMikgKlxuICAgICAgICAgIGluZmVyZVBhZGRpbmdTaXplKHByb3BzLCBzaXplKX1weDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogJHsocHJvcHMucHhSYXRpbyB8fCAyKSAqXG4gICAgICAgICAgaW5mZXJlUGFkZGluZ1NpemUocHJvcHMsIHNpemUpfXB4O1xuICAgICAgYCxcbiAgICApfTtcblxuICAke3Byb3BzID0+XG4gICAgcmVzcG9uc2l2ZVN0eWxlKFxuICAgICAgcHJvcHMsXG4gICAgICAnc2l6ZScsXG4gICAgICBzaXplID0+IGNzc2BcbiAgICAgICAgZm9udC1zaXplOiAke2luZmVyZUZvbnRTaXplKHByb3BzLCBzaXplKX07XG4gICAgICBgLFxuICAgICl9O1xuICBmb250LXdlaWdodDogJHtwcm9wcyA9PiBpbmZlcmVGb250V2VpZ2h0KHByb3BzKX07XG5cbiAgYm9yZGVyOiAke3Byb3BzID0+IChwcm9wcy5ib3JkZXJMZXNzID8gMCA6IHByb3BzLnRoZW1lLmJ1dHRvbnMuYm9yZGVyIHx8IDEpfXB4XG4gICAgc29saWQ7XG4gICR7cHJvcHMgPT5cbiAgICByZXNwb25zaXZlU3R5bGUoXG4gICAgICBwcm9wcyxcbiAgICAgICdzaXplJyxcbiAgICAgIHNpemUgPT4gY3NzYFxuICAgICAgICBib3JkZXItcmFkaXVzOiAke2luZmVyZUJvcmRlclJhZGl1cyhwcm9wcywgc2l6ZSl9cHg7XG4gICAgICBgLFxuICAgICl9O1xuXG4gIG91dGxpbmUtc3R5bGU6IG5vbmU7XG5cbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICR7cHJvcHMgPT4gc3BhY2VTdHlsZXMocHJvcHMpfVxuICAke3Byb3BzID0+IChwcm9wcy5kaXNhYmxlZCA/IGRpc2FibGVkQ29sb3JTdHlsZXMocHJvcHMpIDogY29sb3JTdHlsZXMocHJvcHMpKX1cbmBcblxuY29uc3QgTG9hZGVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcblxuICAke3Byb3BzID0+XG4gICAgcmVzcG9uc2l2ZVN0eWxlKFxuICAgICAgcHJvcHMsXG4gICAgICAnc2l6ZScsXG4gICAgICBzaXplID0+IGNzc2BcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJHtpbmZlcmVCb3JkZXJSYWRpdXMocHJvcHMsIHNpemUpfXB4O1xuICAgICAgYCxcbiAgICApfTtcblxuICAmIC5idXR0b25Mb2FkZXIgPiAqIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+XG4gICAgICBkYXJrZW4ocHJvcHMuY29sb3IgfHwgaW5mZXJlQnV0dG9uQ29sb3JzKHByb3BzKS5saW5lQ29sb3IsIDApfTtcbiAgfVxuXG4gICYgLmJ1dHRvbkxvYWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIGhlaWdodDogMTFweDtcbiAgICAke3Byb3BzID0+XG4gICAgICByZXNwb25zaXZlU3R5bGUoXG4gICAgICAgIHByb3BzLFxuICAgICAgICAnc2l6ZScsXG4gICAgICAgIHNpemUgPT4gY3NzYFxuICAgICAgICAgIGJvdHRvbTogJHtpbmZlcmVQYWRkaW5nU2l6ZShwcm9wcywgc2l6ZSkgLyAyfXB4O1xuICAgICAgICBgLFxuICAgICAgKX07XG4gICAgb3BhY2l0eTogMC42O1xuICB9XG5gXG5cbmNvbnN0IEJ1dHRvbkNvbnRhaW5lciA9IHN0eWxlZChCb3gpYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAke3Byb3BzID0+IChwcm9wcy5ibG9jayA/ICcxMDAlJyA6IHByb3BzLndpZHRoKX07XG5gXG5cbmNsYXNzIElubmVyQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgLy8gRklYTUUgOiBUaGUgcmVhc29uIGZvciB0aGUgZm9sbG93aW5nIHdvcmsgYXJvdW5kLCBpcyB0aGF0IG9uQ2xpY2sgd291bGQgYmUgY2FsbGVkIG9uIHRoZVxuICAgIC8vICAgICAgICAgRXh0ZXJuYWwgY29tcG9uZW50IGZpcnN0LCBhbmQgdGh1cyBjYXVzZXMgdGhlIG9uQ2xpY2sgYmVpbmcgY2FsbGVkIHR3aWNlXG4gICAgYXNzZXJ0KFxuICAgICAgIXRoaXMucHJvcHMub25DbGljayxcbiAgICAgIFwib25DbGljayBzaG91bGRuJ3QgYmUgdXNlZCBvbiBCYXNpY0J1dHRvbiwgdXNlIG9uQ2xpY2tlZCBpbnN0ZWFkXCIsXG4gICAgKVxuICB9XG5cbiAgb25DbGljayA9IGUgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2tlZCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrZWQoZSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIgPSAoKSA9PiAoXG4gICAgPEJ1dHRvbkNvbnRhaW5lciBibG9jaz17dGhpcy5wcm9wcy5ibG9ja30+XG4gICAgICA8U3R5bGVkQnV0dG9uXG4gICAgICAgIHsuLi5fLm9taXQodGhpcy5wcm9wcywgWydvbkNsaWNrZWQnXSl9XG4gICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5vbkNsaWNrKGUpfVxuICAgICAgPlxuICAgICAgICA8QnV0dG9uQ29udGVudFxuICAgICAgICAgIGNlbnRlckp1c3RpZmllZFxuICAgICAgICAgIGNlbnRlckFsaWduZWRcbiAgICAgICAgICBzcGFjZUJldHdlZW49e1xuICAgICAgICAgICAgaW5mZXJlSW50cmFTcGFjaW5nU2l6ZSh0aGlzLnByb3BzKSAvIHRoaXMucHJvcHMudGhlbWUubmV3LnNwYWNlclxuICAgICAgICAgIH1cbiAgICAgICAgICB7Li4ucHJvcHNGb3JQcmVmaXgodGhpcy5wcm9wcywgJ2J1dHRvbkNvbnRlbnRfJyl9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5pY29uTmFtZSAmJiAoXG4gICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuaWNvbk5hbWV9XG4gICAgICAgICAgICAgIHsuLi5wcm9wc0ZvclByZWZpeCh0aGlzLnByb3BzLCAnaWNvbkJlZm9yZV8nKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5pY29uICYmIHRoaXMucHJvcHMuaWNvbn1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5pY29uQWZ0ZXJOYW1lICYmIChcbiAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5pY29uQWZ0ZXJOYW1lfVxuICAgICAgICAgICAgICB7Li4ucHJvcHNGb3JQcmVmaXgodGhpcy5wcm9wcywgJ2ljb25BZnRlcl8nKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5pY29uQWZ0ZXIgJiYgdGhpcy5wcm9wcy5pY29uQWZ0ZXJ9XG4gICAgICAgIDwvQnV0dG9uQ29udGVudD5cbiAgICAgIDwvU3R5bGVkQnV0dG9uPlxuICAgICAge3RoaXMucHJvcHMubG9hZGluZyAmJiAoXG4gICAgICAgIDxMb2FkZXJDb250YWluZXIgey4uLl8ub21pdCh0aGlzLnByb3BzLCBbJ29uQ2xpY2tlZCddKX0+XG4gICAgICAgICAgPEJveCBmdWxsV2lkdGggZnVsbEhlaWdodD5cbiAgICAgICAgICAgIDxQdWxzZUxvYWRlciBzaXplPXsyfSBjbGFzc05hbWU9XCJidXR0b25Mb2FkZXJcIiAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0xvYWRlckNvbnRhaW5lcj5cbiAgICAgICl9XG4gICAgPC9CdXR0b25Db250YWluZXI+XG4gIClcbn1cblxuSW5uZXJCdXR0b24ucHJvcFR5cGVzID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgaWNvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn0pLmlzUmVxdWlyZWRcblxuY29uc3QgQnV0dG9uID0gd2l0aE1lZGlhKFxuICB3aXRoVGhlbWUocHJvcHMgPT5cbiAgICBwcm9jZXNzLmlzU3R5bGVndWlkaXN0QWN0aXZlID8gKFxuICAgICAgPElubmVyQnV0dG9uXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgdGl0bGU9e3Jlc3BvbnNpdmVTdHlsZShwcm9wcywgJ3NpemUnLCBzaXplID0+XG4gICAgICAgICAgaW5mZXJlRm9udFNpemUocHJvcHMsIHNpemUpLFxuICAgICAgICApfVxuICAgICAgLz5cbiAgICApIDogKFxuICAgICAgPElubmVyQnV0dG9uIHsuLi5wcm9wc30gLz5cbiAgICApLFxuICApLFxuKVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cbiJdfQ== */"))), ";font-weight:", props => infereFontWeight(props), ";border:", props => props.borderLess ? 0 : props.theme.buttons.border || 1, "px solid;", props => responsiveStyle(props, 'size', size =>
/*#__PURE__*/
css("border-radius:", infereBorderRadius(props, size), "px;label:StyledButton;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUVpQiIsImZpbGUiOiJCdXR0b24uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHt3aXRoVGhlbWV9IGZyb20gJ2Vtb3Rpb24tdGhlbWluZydcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtjc3N9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgd2l0aE1lZGlhIGZyb20gJ34vY29yZS91dGlscy9tZWRpYUhlbHBlcnMvd2l0aE1lZGlhJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFB1bHNlTG9hZGVyIGZyb20gJ3JlYWN0LXNwaW5uZXJzL1B1bHNlTG9hZGVyJ1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gJ34vY29yZS91dGlscy9qc0hlbHBlcnMvYXNzZXJ0J1xuXG5pbXBvcnQge1xuICBkYXJrZW4sXG4gIGluZmVyZUJ1dHRvbkNvbG9ycyxcbiAgcmVzcG9uc2l2ZVN0eWxlLFxuICBpbmZlcmVJbnRyYVNwYWNpbmdTaXplLFxuICBpbmZlcmVGb250V2VpZ2h0LFxuICBwcm9wc0ZvclByZWZpeCxcbiAgaW5mZXJlRm9udFNpemUsXG4gIGluZmVyZVBhZGRpbmdTaXplLFxuICBpbmZlcmVCb3JkZXJSYWRpdXMsXG4gIGNvbG9yU3R5bGVzLFxuICBkaXNhYmxlZENvbG9yU3R5bGVzLFxufSBmcm9tICd+L2NvcmVVSS91dGlscy9pbmZlcmVTdHlsZSdcbmltcG9ydCBzcGFjZVN0eWxlcyBmcm9tICd+L2NvcmVVSS91dGlscy9zdHlsZVN5c3RlbSdcblxuaW1wb3J0IEljb24gZnJvbSAnfi9jb3JlVUkvY29tcG9uZW50cy9iYXNpYy9JY29uJ1xuaW1wb3J0IHtcbiAgUm93LFxuICBCb3gsXG59IGZyb20gJ34vY29yZVVJL2NvbXBvbmVudHMvbGF5b3V0cy9oZWxwZXJzL0xpbmVhckxheW91dCdcblxuY29uc3QgQnV0dG9uQ29udGVudCA9IHN0eWxlZChSb3cpYFxuICAvKiB3aGl0ZS1zcGFjZTogbm93cmFwOyAqL1xuYFxuXG4vLyBNdXN0IGJlIG9mIHJlbGF0aXZlIHBvc2l0aW9uIGZvciB0aGUgbG9hZGluZyBpY29uIHRvIGJlIGRyYXduIGNvcnJlY3RseVxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgJHtwcm9wcyA9PlxuICAgIHJlc3BvbnNpdmVTdHlsZShcbiAgICAgIHByb3BzLFxuICAgICAgJ3NpemUnLFxuICAgICAgc2l6ZSA9PiBjc3NgXG4gICAgICAgIHBhZGRpbmctdG9wOiAke2luZmVyZVBhZGRpbmdTaXplKHByb3BzLCBzaXplKX1weDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206ICR7aW5mZXJlUGFkZGluZ1NpemUocHJvcHMsIHNpemUpfXB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6ICR7KHByb3BzLnB4UmF0aW8gfHwgMikgKlxuICAgICAgICAgIGluZmVyZVBhZGRpbmdTaXplKHByb3BzLCBzaXplKX1weDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogJHsocHJvcHMucHhSYXRpbyB8fCAyKSAqXG4gICAgICAgICAgaW5mZXJlUGFkZGluZ1NpemUocHJvcHMsIHNpemUpfXB4O1xuICAgICAgYCxcbiAgICApfTtcblxuICAke3Byb3BzID0+XG4gICAgcmVzcG9uc2l2ZVN0eWxlKFxuICAgICAgcHJvcHMsXG4gICAgICAnc2l6ZScsXG4gICAgICBzaXplID0+IGNzc2BcbiAgICAgICAgZm9udC1zaXplOiAke2luZmVyZUZvbnRTaXplKHByb3BzLCBzaXplKX07XG4gICAgICBgLFxuICAgICl9O1xuICBmb250LXdlaWdodDogJHtwcm9wcyA9PiBpbmZlcmVGb250V2VpZ2h0KHByb3BzKX07XG5cbiAgYm9yZGVyOiAke3Byb3BzID0+IChwcm9wcy5ib3JkZXJMZXNzID8gMCA6IHByb3BzLnRoZW1lLmJ1dHRvbnMuYm9yZGVyIHx8IDEpfXB4XG4gICAgc29saWQ7XG4gICR7cHJvcHMgPT5cbiAgICByZXNwb25zaXZlU3R5bGUoXG4gICAgICBwcm9wcyxcbiAgICAgICdzaXplJyxcbiAgICAgIHNpemUgPT4gY3NzYFxuICAgICAgICBib3JkZXItcmFkaXVzOiAke2luZmVyZUJvcmRlclJhZGl1cyhwcm9wcywgc2l6ZSl9cHg7XG4gICAgICBgLFxuICAgICl9O1xuXG4gIG91dGxpbmUtc3R5bGU6IG5vbmU7XG5cbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICR7cHJvcHMgPT4gc3BhY2VTdHlsZXMocHJvcHMpfVxuICAke3Byb3BzID0+IChwcm9wcy5kaXNhYmxlZCA/IGRpc2FibGVkQ29sb3JTdHlsZXMocHJvcHMpIDogY29sb3JTdHlsZXMocHJvcHMpKX1cbmBcblxuY29uc3QgTG9hZGVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcblxuICAke3Byb3BzID0+XG4gICAgcmVzcG9uc2l2ZVN0eWxlKFxuICAgICAgcHJvcHMsXG4gICAgICAnc2l6ZScsXG4gICAgICBzaXplID0+IGNzc2BcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJHtpbmZlcmVCb3JkZXJSYWRpdXMocHJvcHMsIHNpemUpfXB4O1xuICAgICAgYCxcbiAgICApfTtcblxuICAmIC5idXR0b25Mb2FkZXIgPiAqIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+XG4gICAgICBkYXJrZW4ocHJvcHMuY29sb3IgfHwgaW5mZXJlQnV0dG9uQ29sb3JzKHByb3BzKS5saW5lQ29sb3IsIDApfTtcbiAgfVxuXG4gICYgLmJ1dHRvbkxvYWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIGhlaWdodDogMTFweDtcbiAgICAke3Byb3BzID0+XG4gICAgICByZXNwb25zaXZlU3R5bGUoXG4gICAgICAgIHByb3BzLFxuICAgICAgICAnc2l6ZScsXG4gICAgICAgIHNpemUgPT4gY3NzYFxuICAgICAgICAgIGJvdHRvbTogJHtpbmZlcmVQYWRkaW5nU2l6ZShwcm9wcywgc2l6ZSkgLyAyfXB4O1xuICAgICAgICBgLFxuICAgICAgKX07XG4gICAgb3BhY2l0eTogMC42O1xuICB9XG5gXG5cbmNvbnN0IEJ1dHRvbkNvbnRhaW5lciA9IHN0eWxlZChCb3gpYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAke3Byb3BzID0+IChwcm9wcy5ibG9jayA/ICcxMDAlJyA6IHByb3BzLndpZHRoKX07XG5gXG5cbmNsYXNzIElubmVyQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgLy8gRklYTUUgOiBUaGUgcmVhc29uIGZvciB0aGUgZm9sbG93aW5nIHdvcmsgYXJvdW5kLCBpcyB0aGF0IG9uQ2xpY2sgd291bGQgYmUgY2FsbGVkIG9uIHRoZVxuICAgIC8vICAgICAgICAgRXh0ZXJuYWwgY29tcG9uZW50IGZpcnN0LCBhbmQgdGh1cyBjYXVzZXMgdGhlIG9uQ2xpY2sgYmVpbmcgY2FsbGVkIHR3aWNlXG4gICAgYXNzZXJ0KFxuICAgICAgIXRoaXMucHJvcHMub25DbGljayxcbiAgICAgIFwib25DbGljayBzaG91bGRuJ3QgYmUgdXNlZCBvbiBCYXNpY0J1dHRvbiwgdXNlIG9uQ2xpY2tlZCBpbnN0ZWFkXCIsXG4gICAgKVxuICB9XG5cbiAgb25DbGljayA9IGUgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2tlZCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrZWQoZSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIgPSAoKSA9PiAoXG4gICAgPEJ1dHRvbkNvbnRhaW5lciBibG9jaz17dGhpcy5wcm9wcy5ibG9ja30+XG4gICAgICA8U3R5bGVkQnV0dG9uXG4gICAgICAgIHsuLi5fLm9taXQodGhpcy5wcm9wcywgWydvbkNsaWNrZWQnXSl9XG4gICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5vbkNsaWNrKGUpfVxuICAgICAgPlxuICAgICAgICA8QnV0dG9uQ29udGVudFxuICAgICAgICAgIGNlbnRlckp1c3RpZmllZFxuICAgICAgICAgIGNlbnRlckFsaWduZWRcbiAgICAgICAgICBzcGFjZUJldHdlZW49e1xuICAgICAgICAgICAgaW5mZXJlSW50cmFTcGFjaW5nU2l6ZSh0aGlzLnByb3BzKSAvIHRoaXMucHJvcHMudGhlbWUubmV3LnNwYWNlclxuICAgICAgICAgIH1cbiAgICAgICAgICB7Li4ucHJvcHNGb3JQcmVmaXgodGhpcy5wcm9wcywgJ2J1dHRvbkNvbnRlbnRfJyl9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5pY29uTmFtZSAmJiAoXG4gICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuaWNvbk5hbWV9XG4gICAgICAgICAgICAgIHsuLi5wcm9wc0ZvclByZWZpeCh0aGlzLnByb3BzLCAnaWNvbkJlZm9yZV8nKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5pY29uICYmIHRoaXMucHJvcHMuaWNvbn1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5pY29uQWZ0ZXJOYW1lICYmIChcbiAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5pY29uQWZ0ZXJOYW1lfVxuICAgICAgICAgICAgICB7Li4ucHJvcHNGb3JQcmVmaXgodGhpcy5wcm9wcywgJ2ljb25BZnRlcl8nKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5pY29uQWZ0ZXIgJiYgdGhpcy5wcm9wcy5pY29uQWZ0ZXJ9XG4gICAgICAgIDwvQnV0dG9uQ29udGVudD5cbiAgICAgIDwvU3R5bGVkQnV0dG9uPlxuICAgICAge3RoaXMucHJvcHMubG9hZGluZyAmJiAoXG4gICAgICAgIDxMb2FkZXJDb250YWluZXIgey4uLl8ub21pdCh0aGlzLnByb3BzLCBbJ29uQ2xpY2tlZCddKX0+XG4gICAgICAgICAgPEJveCBmdWxsV2lkdGggZnVsbEhlaWdodD5cbiAgICAgICAgICAgIDxQdWxzZUxvYWRlciBzaXplPXsyfSBjbGFzc05hbWU9XCJidXR0b25Mb2FkZXJcIiAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0xvYWRlckNvbnRhaW5lcj5cbiAgICAgICl9XG4gICAgPC9CdXR0b25Db250YWluZXI+XG4gIClcbn1cblxuSW5uZXJCdXR0b24ucHJvcFR5cGVzID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgaWNvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn0pLmlzUmVxdWlyZWRcblxuY29uc3QgQnV0dG9uID0gd2l0aE1lZGlhKFxuICB3aXRoVGhlbWUocHJvcHMgPT5cbiAgICBwcm9jZXNzLmlzU3R5bGVndWlkaXN0QWN0aXZlID8gKFxuICAgICAgPElubmVyQnV0dG9uXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgdGl0bGU9e3Jlc3BvbnNpdmVTdHlsZShwcm9wcywgJ3NpemUnLCBzaXplID0+XG4gICAgICAgICAgaW5mZXJlRm9udFNpemUocHJvcHMsIHNpemUpLFxuICAgICAgICApfVxuICAgICAgLz5cbiAgICApIDogKFxuICAgICAgPElubmVyQnV0dG9uIHsuLi5wcm9wc30gLz5cbiAgICApLFxuICApLFxuKVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cbiJdfQ== */"))), ";outline-style:none;cursor:pointer;", props => spaceStyles(props), " ", props => props.disabled ? disabledColorStyles(props) : colorStyles(props), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0NrQyIsImZpbGUiOiJCdXR0b24uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHt3aXRoVGhlbWV9IGZyb20gJ2Vtb3Rpb24tdGhlbWluZydcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtjc3N9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgd2l0aE1lZGlhIGZyb20gJ34vY29yZS91dGlscy9tZWRpYUhlbHBlcnMvd2l0aE1lZGlhJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFB1bHNlTG9hZGVyIGZyb20gJ3JlYWN0LXNwaW5uZXJzL1B1bHNlTG9hZGVyJ1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gJ34vY29yZS91dGlscy9qc0hlbHBlcnMvYXNzZXJ0J1xuXG5pbXBvcnQge1xuICBkYXJrZW4sXG4gIGluZmVyZUJ1dHRvbkNvbG9ycyxcbiAgcmVzcG9uc2l2ZVN0eWxlLFxuICBpbmZlcmVJbnRyYVNwYWNpbmdTaXplLFxuICBpbmZlcmVGb250V2VpZ2h0LFxuICBwcm9wc0ZvclByZWZpeCxcbiAgaW5mZXJlRm9udFNpemUsXG4gIGluZmVyZVBhZGRpbmdTaXplLFxuICBpbmZlcmVCb3JkZXJSYWRpdXMsXG4gIGNvbG9yU3R5bGVzLFxuICBkaXNhYmxlZENvbG9yU3R5bGVzLFxufSBmcm9tICd+L2NvcmVVSS91dGlscy9pbmZlcmVTdHlsZSdcbmltcG9ydCBzcGFjZVN0eWxlcyBmcm9tICd+L2NvcmVVSS91dGlscy9zdHlsZVN5c3RlbSdcblxuaW1wb3J0IEljb24gZnJvbSAnfi9jb3JlVUkvY29tcG9uZW50cy9iYXNpYy9JY29uJ1xuaW1wb3J0IHtcbiAgUm93LFxuICBCb3gsXG59IGZyb20gJ34vY29yZVVJL2NvbXBvbmVudHMvbGF5b3V0cy9oZWxwZXJzL0xpbmVhckxheW91dCdcblxuY29uc3QgQnV0dG9uQ29udGVudCA9IHN0eWxlZChSb3cpYFxuICAvKiB3aGl0ZS1zcGFjZTogbm93cmFwOyAqL1xuYFxuXG4vLyBNdXN0IGJlIG9mIHJlbGF0aXZlIHBvc2l0aW9uIGZvciB0aGUgbG9hZGluZyBpY29uIHRvIGJlIGRyYXduIGNvcnJlY3RseVxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgJHtwcm9wcyA9PlxuICAgIHJlc3BvbnNpdmVTdHlsZShcbiAgICAgIHByb3BzLFxuICAgICAgJ3NpemUnLFxuICAgICAgc2l6ZSA9PiBjc3NgXG4gICAgICAgIHBhZGRpbmctdG9wOiAke2luZmVyZVBhZGRpbmdTaXplKHByb3BzLCBzaXplKX1weDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206ICR7aW5mZXJlUGFkZGluZ1NpemUocHJvcHMsIHNpemUpfXB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6ICR7KHByb3BzLnB4UmF0aW8gfHwgMikgKlxuICAgICAgICAgIGluZmVyZVBhZGRpbmdTaXplKHByb3BzLCBzaXplKX1weDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogJHsocHJvcHMucHhSYXRpbyB8fCAyKSAqXG4gICAgICAgICAgaW5mZXJlUGFkZGluZ1NpemUocHJvcHMsIHNpemUpfXB4O1xuICAgICAgYCxcbiAgICApfTtcblxuICAke3Byb3BzID0+XG4gICAgcmVzcG9uc2l2ZVN0eWxlKFxuICAgICAgcHJvcHMsXG4gICAgICAnc2l6ZScsXG4gICAgICBzaXplID0+IGNzc2BcbiAgICAgICAgZm9udC1zaXplOiAke2luZmVyZUZvbnRTaXplKHByb3BzLCBzaXplKX07XG4gICAgICBgLFxuICAgICl9O1xuICBmb250LXdlaWdodDogJHtwcm9wcyA9PiBpbmZlcmVGb250V2VpZ2h0KHByb3BzKX07XG5cbiAgYm9yZGVyOiAke3Byb3BzID0+IChwcm9wcy5ib3JkZXJMZXNzID8gMCA6IHByb3BzLnRoZW1lLmJ1dHRvbnMuYm9yZGVyIHx8IDEpfXB4XG4gICAgc29saWQ7XG4gICR7cHJvcHMgPT5cbiAgICByZXNwb25zaXZlU3R5bGUoXG4gICAgICBwcm9wcyxcbiAgICAgICdzaXplJyxcbiAgICAgIHNpemUgPT4gY3NzYFxuICAgICAgICBib3JkZXItcmFkaXVzOiAke2luZmVyZUJvcmRlclJhZGl1cyhwcm9wcywgc2l6ZSl9cHg7XG4gICAgICBgLFxuICAgICl9O1xuXG4gIG91dGxpbmUtc3R5bGU6IG5vbmU7XG5cbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICR7cHJvcHMgPT4gc3BhY2VTdHlsZXMocHJvcHMpfVxuICAke3Byb3BzID0+IChwcm9wcy5kaXNhYmxlZCA/IGRpc2FibGVkQ29sb3JTdHlsZXMocHJvcHMpIDogY29sb3JTdHlsZXMocHJvcHMpKX1cbmBcblxuY29uc3QgTG9hZGVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcblxuICAke3Byb3BzID0+XG4gICAgcmVzcG9uc2l2ZVN0eWxlKFxuICAgICAgcHJvcHMsXG4gICAgICAnc2l6ZScsXG4gICAgICBzaXplID0+IGNzc2BcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJHtpbmZlcmVCb3JkZXJSYWRpdXMocHJvcHMsIHNpemUpfXB4O1xuICAgICAgYCxcbiAgICApfTtcblxuICAmIC5idXR0b25Mb2FkZXIgPiAqIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+XG4gICAgICBkYXJrZW4ocHJvcHMuY29sb3IgfHwgaW5mZXJlQnV0dG9uQ29sb3JzKHByb3BzKS5saW5lQ29sb3IsIDApfTtcbiAgfVxuXG4gICYgLmJ1dHRvbkxvYWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIGhlaWdodDogMTFweDtcbiAgICAke3Byb3BzID0+XG4gICAgICByZXNwb25zaXZlU3R5bGUoXG4gICAgICAgIHByb3BzLFxuICAgICAgICAnc2l6ZScsXG4gICAgICAgIHNpemUgPT4gY3NzYFxuICAgICAgICAgIGJvdHRvbTogJHtpbmZlcmVQYWRkaW5nU2l6ZShwcm9wcywgc2l6ZSkgLyAyfXB4O1xuICAgICAgICBgLFxuICAgICAgKX07XG4gICAgb3BhY2l0eTogMC42O1xuICB9XG5gXG5cbmNvbnN0IEJ1dHRvbkNvbnRhaW5lciA9IHN0eWxlZChCb3gpYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAke3Byb3BzID0+IChwcm9wcy5ibG9jayA/ICcxMDAlJyA6IHByb3BzLndpZHRoKX07XG5gXG5cbmNsYXNzIElubmVyQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgLy8gRklYTUUgOiBUaGUgcmVhc29uIGZvciB0aGUgZm9sbG93aW5nIHdvcmsgYXJvdW5kLCBpcyB0aGF0IG9uQ2xpY2sgd291bGQgYmUgY2FsbGVkIG9uIHRoZVxuICAgIC8vICAgICAgICAgRXh0ZXJuYWwgY29tcG9uZW50IGZpcnN0LCBhbmQgdGh1cyBjYXVzZXMgdGhlIG9uQ2xpY2sgYmVpbmcgY2FsbGVkIHR3aWNlXG4gICAgYXNzZXJ0KFxuICAgICAgIXRoaXMucHJvcHMub25DbGljayxcbiAgICAgIFwib25DbGljayBzaG91bGRuJ3QgYmUgdXNlZCBvbiBCYXNpY0J1dHRvbiwgdXNlIG9uQ2xpY2tlZCBpbnN0ZWFkXCIsXG4gICAgKVxuICB9XG5cbiAgb25DbGljayA9IGUgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2tlZCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrZWQoZSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIgPSAoKSA9PiAoXG4gICAgPEJ1dHRvbkNvbnRhaW5lciBibG9jaz17dGhpcy5wcm9wcy5ibG9ja30+XG4gICAgICA8U3R5bGVkQnV0dG9uXG4gICAgICAgIHsuLi5fLm9taXQodGhpcy5wcm9wcywgWydvbkNsaWNrZWQnXSl9XG4gICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5vbkNsaWNrKGUpfVxuICAgICAgPlxuICAgICAgICA8QnV0dG9uQ29udGVudFxuICAgICAgICAgIGNlbnRlckp1c3RpZmllZFxuICAgICAgICAgIGNlbnRlckFsaWduZWRcbiAgICAgICAgICBzcGFjZUJldHdlZW49e1xuICAgICAgICAgICAgaW5mZXJlSW50cmFTcGFjaW5nU2l6ZSh0aGlzLnByb3BzKSAvIHRoaXMucHJvcHMudGhlbWUubmV3LnNwYWNlclxuICAgICAgICAgIH1cbiAgICAgICAgICB7Li4ucHJvcHNGb3JQcmVmaXgodGhpcy5wcm9wcywgJ2J1dHRvbkNvbnRlbnRfJyl9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5pY29uTmFtZSAmJiAoXG4gICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuaWNvbk5hbWV9XG4gICAgICAgICAgICAgIHsuLi5wcm9wc0ZvclByZWZpeCh0aGlzLnByb3BzLCAnaWNvbkJlZm9yZV8nKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5pY29uICYmIHRoaXMucHJvcHMuaWNvbn1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5pY29uQWZ0ZXJOYW1lICYmIChcbiAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5pY29uQWZ0ZXJOYW1lfVxuICAgICAgICAgICAgICB7Li4ucHJvcHNGb3JQcmVmaXgodGhpcy5wcm9wcywgJ2ljb25BZnRlcl8nKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5pY29uQWZ0ZXIgJiYgdGhpcy5wcm9wcy5pY29uQWZ0ZXJ9XG4gICAgICAgIDwvQnV0dG9uQ29udGVudD5cbiAgICAgIDwvU3R5bGVkQnV0dG9uPlxuICAgICAge3RoaXMucHJvcHMubG9hZGluZyAmJiAoXG4gICAgICAgIDxMb2FkZXJDb250YWluZXIgey4uLl8ub21pdCh0aGlzLnByb3BzLCBbJ29uQ2xpY2tlZCddKX0+XG4gICAgICAgICAgPEJveCBmdWxsV2lkdGggZnVsbEhlaWdodD5cbiAgICAgICAgICAgIDxQdWxzZUxvYWRlciBzaXplPXsyfSBjbGFzc05hbWU9XCJidXR0b25Mb2FkZXJcIiAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0xvYWRlckNvbnRhaW5lcj5cbiAgICAgICl9XG4gICAgPC9CdXR0b25Db250YWluZXI+XG4gIClcbn1cblxuSW5uZXJCdXR0b24ucHJvcFR5cGVzID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgaWNvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn0pLmlzUmVxdWlyZWRcblxuY29uc3QgQnV0dG9uID0gd2l0aE1lZGlhKFxuICB3aXRoVGhlbWUocHJvcHMgPT5cbiAgICBwcm9jZXNzLmlzU3R5bGVndWlkaXN0QWN0aXZlID8gKFxuICAgICAgPElubmVyQnV0dG9uXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgdGl0bGU9e3Jlc3BvbnNpdmVTdHlsZShwcm9wcywgJ3NpemUnLCBzaXplID0+XG4gICAgICAgICAgaW5mZXJlRm9udFNpemUocHJvcHMsIHNpemUpLFxuICAgICAgICApfVxuICAgICAgLz5cbiAgICApIDogKFxuICAgICAgPElubmVyQnV0dG9uIHsuLi5wcm9wc30gLz5cbiAgICApLFxuICApLFxuKVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cbiJdfQ== */");

const LoaderContainer = _styled("div", {
  target: "e6bxis12",
  label: "LoaderContainer"
})("position:absolute;bottom:0;top:0;left:0;right:0;background:rgba(0,0,0,0.2);", props => responsiveStyle(props, 'size', size =>
/*#__PURE__*/
css("border-radius:", infereBorderRadius(props, size), "px;label:LoaderContainer;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEZpQiIsImZpbGUiOiJCdXR0b24uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHt3aXRoVGhlbWV9IGZyb20gJ2Vtb3Rpb24tdGhlbWluZydcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtjc3N9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgd2l0aE1lZGlhIGZyb20gJ34vY29yZS91dGlscy9tZWRpYUhlbHBlcnMvd2l0aE1lZGlhJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFB1bHNlTG9hZGVyIGZyb20gJ3JlYWN0LXNwaW5uZXJzL1B1bHNlTG9hZGVyJ1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gJ34vY29yZS91dGlscy9qc0hlbHBlcnMvYXNzZXJ0J1xuXG5pbXBvcnQge1xuICBkYXJrZW4sXG4gIGluZmVyZUJ1dHRvbkNvbG9ycyxcbiAgcmVzcG9uc2l2ZVN0eWxlLFxuICBpbmZlcmVJbnRyYVNwYWNpbmdTaXplLFxuICBpbmZlcmVGb250V2VpZ2h0LFxuICBwcm9wc0ZvclByZWZpeCxcbiAgaW5mZXJlRm9udFNpemUsXG4gIGluZmVyZVBhZGRpbmdTaXplLFxuICBpbmZlcmVCb3JkZXJSYWRpdXMsXG4gIGNvbG9yU3R5bGVzLFxuICBkaXNhYmxlZENvbG9yU3R5bGVzLFxufSBmcm9tICd+L2NvcmVVSS91dGlscy9pbmZlcmVTdHlsZSdcbmltcG9ydCBzcGFjZVN0eWxlcyBmcm9tICd+L2NvcmVVSS91dGlscy9zdHlsZVN5c3RlbSdcblxuaW1wb3J0IEljb24gZnJvbSAnfi9jb3JlVUkvY29tcG9uZW50cy9iYXNpYy9JY29uJ1xuaW1wb3J0IHtcbiAgUm93LFxuICBCb3gsXG59IGZyb20gJ34vY29yZVVJL2NvbXBvbmVudHMvbGF5b3V0cy9oZWxwZXJzL0xpbmVhckxheW91dCdcblxuY29uc3QgQnV0dG9uQ29udGVudCA9IHN0eWxlZChSb3cpYFxuICAvKiB3aGl0ZS1zcGFjZTogbm93cmFwOyAqL1xuYFxuXG4vLyBNdXN0IGJlIG9mIHJlbGF0aXZlIHBvc2l0aW9uIGZvciB0aGUgbG9hZGluZyBpY29uIHRvIGJlIGRyYXduIGNvcnJlY3RseVxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgJHtwcm9wcyA9PlxuICAgIHJlc3BvbnNpdmVTdHlsZShcbiAgICAgIHByb3BzLFxuICAgICAgJ3NpemUnLFxuICAgICAgc2l6ZSA9PiBjc3NgXG4gICAgICAgIHBhZGRpbmctdG9wOiAke2luZmVyZVBhZGRpbmdTaXplKHByb3BzLCBzaXplKX1weDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206ICR7aW5mZXJlUGFkZGluZ1NpemUocHJvcHMsIHNpemUpfXB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6ICR7KHByb3BzLnB4UmF0aW8gfHwgMikgKlxuICAgICAgICAgIGluZmVyZVBhZGRpbmdTaXplKHByb3BzLCBzaXplKX1weDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogJHsocHJvcHMucHhSYXRpbyB8fCAyKSAqXG4gICAgICAgICAgaW5mZXJlUGFkZGluZ1NpemUocHJvcHMsIHNpemUpfXB4O1xuICAgICAgYCxcbiAgICApfTtcblxuICAke3Byb3BzID0+XG4gICAgcmVzcG9uc2l2ZVN0eWxlKFxuICAgICAgcHJvcHMsXG4gICAgICAnc2l6ZScsXG4gICAgICBzaXplID0+IGNzc2BcbiAgICAgICAgZm9udC1zaXplOiAke2luZmVyZUZvbnRTaXplKHByb3BzLCBzaXplKX07XG4gICAgICBgLFxuICAgICl9O1xuICBmb250LXdlaWdodDogJHtwcm9wcyA9PiBpbmZlcmVGb250V2VpZ2h0KHByb3BzKX07XG5cbiAgYm9yZGVyOiAke3Byb3BzID0+IChwcm9wcy5ib3JkZXJMZXNzID8gMCA6IHByb3BzLnRoZW1lLmJ1dHRvbnMuYm9yZGVyIHx8IDEpfXB4XG4gICAgc29saWQ7XG4gICR7cHJvcHMgPT5cbiAgICByZXNwb25zaXZlU3R5bGUoXG4gICAgICBwcm9wcyxcbiAgICAgICdzaXplJyxcbiAgICAgIHNpemUgPT4gY3NzYFxuICAgICAgICBib3JkZXItcmFkaXVzOiAke2luZmVyZUJvcmRlclJhZGl1cyhwcm9wcywgc2l6ZSl9cHg7XG4gICAgICBgLFxuICAgICl9O1xuXG4gIG91dGxpbmUtc3R5bGU6IG5vbmU7XG5cbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICR7cHJvcHMgPT4gc3BhY2VTdHlsZXMocHJvcHMpfVxuICAke3Byb3BzID0+IChwcm9wcy5kaXNhYmxlZCA/IGRpc2FibGVkQ29sb3JTdHlsZXMocHJvcHMpIDogY29sb3JTdHlsZXMocHJvcHMpKX1cbmBcblxuY29uc3QgTG9hZGVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcblxuICAke3Byb3BzID0+XG4gICAgcmVzcG9uc2l2ZVN0eWxlKFxuICAgICAgcHJvcHMsXG4gICAgICAnc2l6ZScsXG4gICAgICBzaXplID0+IGNzc2BcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJHtpbmZlcmVCb3JkZXJSYWRpdXMocHJvcHMsIHNpemUpfXB4O1xuICAgICAgYCxcbiAgICApfTtcblxuICAmIC5idXR0b25Mb2FkZXIgPiAqIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+XG4gICAgICBkYXJrZW4ocHJvcHMuY29sb3IgfHwgaW5mZXJlQnV0dG9uQ29sb3JzKHByb3BzKS5saW5lQ29sb3IsIDApfTtcbiAgfVxuXG4gICYgLmJ1dHRvbkxvYWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIGhlaWdodDogMTFweDtcbiAgICAke3Byb3BzID0+XG4gICAgICByZXNwb25zaXZlU3R5bGUoXG4gICAgICAgIHByb3BzLFxuICAgICAgICAnc2l6ZScsXG4gICAgICAgIHNpemUgPT4gY3NzYFxuICAgICAgICAgIGJvdHRvbTogJHtpbmZlcmVQYWRkaW5nU2l6ZShwcm9wcywgc2l6ZSkgLyAyfXB4O1xuICAgICAgICBgLFxuICAgICAgKX07XG4gICAgb3BhY2l0eTogMC42O1xuICB9XG5gXG5cbmNvbnN0IEJ1dHRvbkNvbnRhaW5lciA9IHN0eWxlZChCb3gpYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAke3Byb3BzID0+IChwcm9wcy5ibG9jayA/ICcxMDAlJyA6IHByb3BzLndpZHRoKX07XG5gXG5cbmNsYXNzIElubmVyQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgLy8gRklYTUUgOiBUaGUgcmVhc29uIGZvciB0aGUgZm9sbG93aW5nIHdvcmsgYXJvdW5kLCBpcyB0aGF0IG9uQ2xpY2sgd291bGQgYmUgY2FsbGVkIG9uIHRoZVxuICAgIC8vICAgICAgICAgRXh0ZXJuYWwgY29tcG9uZW50IGZpcnN0LCBhbmQgdGh1cyBjYXVzZXMgdGhlIG9uQ2xpY2sgYmVpbmcgY2FsbGVkIHR3aWNlXG4gICAgYXNzZXJ0KFxuICAgICAgIXRoaXMucHJvcHMub25DbGljayxcbiAgICAgIFwib25DbGljayBzaG91bGRuJ3QgYmUgdXNlZCBvbiBCYXNpY0J1dHRvbiwgdXNlIG9uQ2xpY2tlZCBpbnN0ZWFkXCIsXG4gICAgKVxuICB9XG5cbiAgb25DbGljayA9IGUgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2tlZCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrZWQoZSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIgPSAoKSA9PiAoXG4gICAgPEJ1dHRvbkNvbnRhaW5lciBibG9jaz17dGhpcy5wcm9wcy5ibG9ja30+XG4gICAgICA8U3R5bGVkQnV0dG9uXG4gICAgICAgIHsuLi5fLm9taXQodGhpcy5wcm9wcywgWydvbkNsaWNrZWQnXSl9XG4gICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5vbkNsaWNrKGUpfVxuICAgICAgPlxuICAgICAgICA8QnV0dG9uQ29udGVudFxuICAgICAgICAgIGNlbnRlckp1c3RpZmllZFxuICAgICAgICAgIGNlbnRlckFsaWduZWRcbiAgICAgICAgICBzcGFjZUJldHdlZW49e1xuICAgICAgICAgICAgaW5mZXJlSW50cmFTcGFjaW5nU2l6ZSh0aGlzLnByb3BzKSAvIHRoaXMucHJvcHMudGhlbWUubmV3LnNwYWNlclxuICAgICAgICAgIH1cbiAgICAgICAgICB7Li4ucHJvcHNGb3JQcmVmaXgodGhpcy5wcm9wcywgJ2J1dHRvbkNvbnRlbnRfJyl9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5pY29uTmFtZSAmJiAoXG4gICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuaWNvbk5hbWV9XG4gICAgICAgICAgICAgIHsuLi5wcm9wc0ZvclByZWZpeCh0aGlzLnByb3BzLCAnaWNvbkJlZm9yZV8nKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5pY29uICYmIHRoaXMucHJvcHMuaWNvbn1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5pY29uQWZ0ZXJOYW1lICYmIChcbiAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5pY29uQWZ0ZXJOYW1lfVxuICAgICAgICAgICAgICB7Li4ucHJvcHNGb3JQcmVmaXgodGhpcy5wcm9wcywgJ2ljb25BZnRlcl8nKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5pY29uQWZ0ZXIgJiYgdGhpcy5wcm9wcy5pY29uQWZ0ZXJ9XG4gICAgICAgIDwvQnV0dG9uQ29udGVudD5cbiAgICAgIDwvU3R5bGVkQnV0dG9uPlxuICAgICAge3RoaXMucHJvcHMubG9hZGluZyAmJiAoXG4gICAgICAgIDxMb2FkZXJDb250YWluZXIgey4uLl8ub21pdCh0aGlzLnByb3BzLCBbJ29uQ2xpY2tlZCddKX0+XG4gICAgICAgICAgPEJveCBmdWxsV2lkdGggZnVsbEhlaWdodD5cbiAgICAgICAgICAgIDxQdWxzZUxvYWRlciBzaXplPXsyfSBjbGFzc05hbWU9XCJidXR0b25Mb2FkZXJcIiAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0xvYWRlckNvbnRhaW5lcj5cbiAgICAgICl9XG4gICAgPC9CdXR0b25Db250YWluZXI+XG4gIClcbn1cblxuSW5uZXJCdXR0b24ucHJvcFR5cGVzID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgaWNvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn0pLmlzUmVxdWlyZWRcblxuY29uc3QgQnV0dG9uID0gd2l0aE1lZGlhKFxuICB3aXRoVGhlbWUocHJvcHMgPT5cbiAgICBwcm9jZXNzLmlzU3R5bGVndWlkaXN0QWN0aXZlID8gKFxuICAgICAgPElubmVyQnV0dG9uXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgdGl0bGU9e3Jlc3BvbnNpdmVTdHlsZShwcm9wcywgJ3NpemUnLCBzaXplID0+XG4gICAgICAgICAgaW5mZXJlRm9udFNpemUocHJvcHMsIHNpemUpLFxuICAgICAgICApfVxuICAgICAgLz5cbiAgICApIDogKFxuICAgICAgPElubmVyQnV0dG9uIHsuLi5wcm9wc30gLz5cbiAgICApLFxuICApLFxuKVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cbiJdfQ== */"))), ";& .buttonLoader > *{background-color:", props => darken(props.color || infereButtonColors(props).lineColor, 0), ";}& .buttonLoader{position:absolute;line-height:14px;height:11px;", props => responsiveStyle(props, 'size', size =>
/*#__PURE__*/
css("bottom:", inferePaddingSize(props, size) / 2, "px;label:LoaderContainer;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0htQiIsImZpbGUiOiJCdXR0b24uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHt3aXRoVGhlbWV9IGZyb20gJ2Vtb3Rpb24tdGhlbWluZydcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtjc3N9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgd2l0aE1lZGlhIGZyb20gJ34vY29yZS91dGlscy9tZWRpYUhlbHBlcnMvd2l0aE1lZGlhJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFB1bHNlTG9hZGVyIGZyb20gJ3JlYWN0LXNwaW5uZXJzL1B1bHNlTG9hZGVyJ1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gJ34vY29yZS91dGlscy9qc0hlbHBlcnMvYXNzZXJ0J1xuXG5pbXBvcnQge1xuICBkYXJrZW4sXG4gIGluZmVyZUJ1dHRvbkNvbG9ycyxcbiAgcmVzcG9uc2l2ZVN0eWxlLFxuICBpbmZlcmVJbnRyYVNwYWNpbmdTaXplLFxuICBpbmZlcmVGb250V2VpZ2h0LFxuICBwcm9wc0ZvclByZWZpeCxcbiAgaW5mZXJlRm9udFNpemUsXG4gIGluZmVyZVBhZGRpbmdTaXplLFxuICBpbmZlcmVCb3JkZXJSYWRpdXMsXG4gIGNvbG9yU3R5bGVzLFxuICBkaXNhYmxlZENvbG9yU3R5bGVzLFxufSBmcm9tICd+L2NvcmVVSS91dGlscy9pbmZlcmVTdHlsZSdcbmltcG9ydCBzcGFjZVN0eWxlcyBmcm9tICd+L2NvcmVVSS91dGlscy9zdHlsZVN5c3RlbSdcblxuaW1wb3J0IEljb24gZnJvbSAnfi9jb3JlVUkvY29tcG9uZW50cy9iYXNpYy9JY29uJ1xuaW1wb3J0IHtcbiAgUm93LFxuICBCb3gsXG59IGZyb20gJ34vY29yZVVJL2NvbXBvbmVudHMvbGF5b3V0cy9oZWxwZXJzL0xpbmVhckxheW91dCdcblxuY29uc3QgQnV0dG9uQ29udGVudCA9IHN0eWxlZChSb3cpYFxuICAvKiB3aGl0ZS1zcGFjZTogbm93cmFwOyAqL1xuYFxuXG4vLyBNdXN0IGJlIG9mIHJlbGF0aXZlIHBvc2l0aW9uIGZvciB0aGUgbG9hZGluZyBpY29uIHRvIGJlIGRyYXduIGNvcnJlY3RseVxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgJHtwcm9wcyA9PlxuICAgIHJlc3BvbnNpdmVTdHlsZShcbiAgICAgIHByb3BzLFxuICAgICAgJ3NpemUnLFxuICAgICAgc2l6ZSA9PiBjc3NgXG4gICAgICAgIHBhZGRpbmctdG9wOiAke2luZmVyZVBhZGRpbmdTaXplKHByb3BzLCBzaXplKX1weDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206ICR7aW5mZXJlUGFkZGluZ1NpemUocHJvcHMsIHNpemUpfXB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6ICR7KHByb3BzLnB4UmF0aW8gfHwgMikgKlxuICAgICAgICAgIGluZmVyZVBhZGRpbmdTaXplKHByb3BzLCBzaXplKX1weDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogJHsocHJvcHMucHhSYXRpbyB8fCAyKSAqXG4gICAgICAgICAgaW5mZXJlUGFkZGluZ1NpemUocHJvcHMsIHNpemUpfXB4O1xuICAgICAgYCxcbiAgICApfTtcblxuICAke3Byb3BzID0+XG4gICAgcmVzcG9uc2l2ZVN0eWxlKFxuICAgICAgcHJvcHMsXG4gICAgICAnc2l6ZScsXG4gICAgICBzaXplID0+IGNzc2BcbiAgICAgICAgZm9udC1zaXplOiAke2luZmVyZUZvbnRTaXplKHByb3BzLCBzaXplKX07XG4gICAgICBgLFxuICAgICl9O1xuICBmb250LXdlaWdodDogJHtwcm9wcyA9PiBpbmZlcmVGb250V2VpZ2h0KHByb3BzKX07XG5cbiAgYm9yZGVyOiAke3Byb3BzID0+IChwcm9wcy5ib3JkZXJMZXNzID8gMCA6IHByb3BzLnRoZW1lLmJ1dHRvbnMuYm9yZGVyIHx8IDEpfXB4XG4gICAgc29saWQ7XG4gICR7cHJvcHMgPT5cbiAgICByZXNwb25zaXZlU3R5bGUoXG4gICAgICBwcm9wcyxcbiAgICAgICdzaXplJyxcbiAgICAgIHNpemUgPT4gY3NzYFxuICAgICAgICBib3JkZXItcmFkaXVzOiAke2luZmVyZUJvcmRlclJhZGl1cyhwcm9wcywgc2l6ZSl9cHg7XG4gICAgICBgLFxuICAgICl9O1xuXG4gIG91dGxpbmUtc3R5bGU6IG5vbmU7XG5cbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICR7cHJvcHMgPT4gc3BhY2VTdHlsZXMocHJvcHMpfVxuICAke3Byb3BzID0+IChwcm9wcy5kaXNhYmxlZCA/IGRpc2FibGVkQ29sb3JTdHlsZXMocHJvcHMpIDogY29sb3JTdHlsZXMocHJvcHMpKX1cbmBcblxuY29uc3QgTG9hZGVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcblxuICAke3Byb3BzID0+XG4gICAgcmVzcG9uc2l2ZVN0eWxlKFxuICAgICAgcHJvcHMsXG4gICAgICAnc2l6ZScsXG4gICAgICBzaXplID0+IGNzc2BcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJHtpbmZlcmVCb3JkZXJSYWRpdXMocHJvcHMsIHNpemUpfXB4O1xuICAgICAgYCxcbiAgICApfTtcblxuICAmIC5idXR0b25Mb2FkZXIgPiAqIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+XG4gICAgICBkYXJrZW4ocHJvcHMuY29sb3IgfHwgaW5mZXJlQnV0dG9uQ29sb3JzKHByb3BzKS5saW5lQ29sb3IsIDApfTtcbiAgfVxuXG4gICYgLmJ1dHRvbkxvYWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIGhlaWdodDogMTFweDtcbiAgICAke3Byb3BzID0+XG4gICAgICByZXNwb25zaXZlU3R5bGUoXG4gICAgICAgIHByb3BzLFxuICAgICAgICAnc2l6ZScsXG4gICAgICAgIHNpemUgPT4gY3NzYFxuICAgICAgICAgIGJvdHRvbTogJHtpbmZlcmVQYWRkaW5nU2l6ZShwcm9wcywgc2l6ZSkgLyAyfXB4O1xuICAgICAgICBgLFxuICAgICAgKX07XG4gICAgb3BhY2l0eTogMC42O1xuICB9XG5gXG5cbmNvbnN0IEJ1dHRvbkNvbnRhaW5lciA9IHN0eWxlZChCb3gpYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAke3Byb3BzID0+IChwcm9wcy5ibG9jayA/ICcxMDAlJyA6IHByb3BzLndpZHRoKX07XG5gXG5cbmNsYXNzIElubmVyQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgLy8gRklYTUUgOiBUaGUgcmVhc29uIGZvciB0aGUgZm9sbG93aW5nIHdvcmsgYXJvdW5kLCBpcyB0aGF0IG9uQ2xpY2sgd291bGQgYmUgY2FsbGVkIG9uIHRoZVxuICAgIC8vICAgICAgICAgRXh0ZXJuYWwgY29tcG9uZW50IGZpcnN0LCBhbmQgdGh1cyBjYXVzZXMgdGhlIG9uQ2xpY2sgYmVpbmcgY2FsbGVkIHR3aWNlXG4gICAgYXNzZXJ0KFxuICAgICAgIXRoaXMucHJvcHMub25DbGljayxcbiAgICAgIFwib25DbGljayBzaG91bGRuJ3QgYmUgdXNlZCBvbiBCYXNpY0J1dHRvbiwgdXNlIG9uQ2xpY2tlZCBpbnN0ZWFkXCIsXG4gICAgKVxuICB9XG5cbiAgb25DbGljayA9IGUgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2tlZCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrZWQoZSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIgPSAoKSA9PiAoXG4gICAgPEJ1dHRvbkNvbnRhaW5lciBibG9jaz17dGhpcy5wcm9wcy5ibG9ja30+XG4gICAgICA8U3R5bGVkQnV0dG9uXG4gICAgICAgIHsuLi5fLm9taXQodGhpcy5wcm9wcywgWydvbkNsaWNrZWQnXSl9XG4gICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5vbkNsaWNrKGUpfVxuICAgICAgPlxuICAgICAgICA8QnV0dG9uQ29udGVudFxuICAgICAgICAgIGNlbnRlckp1c3RpZmllZFxuICAgICAgICAgIGNlbnRlckFsaWduZWRcbiAgICAgICAgICBzcGFjZUJldHdlZW49e1xuICAgICAgICAgICAgaW5mZXJlSW50cmFTcGFjaW5nU2l6ZSh0aGlzLnByb3BzKSAvIHRoaXMucHJvcHMudGhlbWUubmV3LnNwYWNlclxuICAgICAgICAgIH1cbiAgICAgICAgICB7Li4ucHJvcHNGb3JQcmVmaXgodGhpcy5wcm9wcywgJ2J1dHRvbkNvbnRlbnRfJyl9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5pY29uTmFtZSAmJiAoXG4gICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuaWNvbk5hbWV9XG4gICAgICAgICAgICAgIHsuLi5wcm9wc0ZvclByZWZpeCh0aGlzLnByb3BzLCAnaWNvbkJlZm9yZV8nKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5pY29uICYmIHRoaXMucHJvcHMuaWNvbn1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5pY29uQWZ0ZXJOYW1lICYmIChcbiAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5pY29uQWZ0ZXJOYW1lfVxuICAgICAgICAgICAgICB7Li4ucHJvcHNGb3JQcmVmaXgodGhpcy5wcm9wcywgJ2ljb25BZnRlcl8nKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5pY29uQWZ0ZXIgJiYgdGhpcy5wcm9wcy5pY29uQWZ0ZXJ9XG4gICAgICAgIDwvQnV0dG9uQ29udGVudD5cbiAgICAgIDwvU3R5bGVkQnV0dG9uPlxuICAgICAge3RoaXMucHJvcHMubG9hZGluZyAmJiAoXG4gICAgICAgIDxMb2FkZXJDb250YWluZXIgey4uLl8ub21pdCh0aGlzLnByb3BzLCBbJ29uQ2xpY2tlZCddKX0+XG4gICAgICAgICAgPEJveCBmdWxsV2lkdGggZnVsbEhlaWdodD5cbiAgICAgICAgICAgIDxQdWxzZUxvYWRlciBzaXplPXsyfSBjbGFzc05hbWU9XCJidXR0b25Mb2FkZXJcIiAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0xvYWRlckNvbnRhaW5lcj5cbiAgICAgICl9XG4gICAgPC9CdXR0b25Db250YWluZXI+XG4gIClcbn1cblxuSW5uZXJCdXR0b24ucHJvcFR5cGVzID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgaWNvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn0pLmlzUmVxdWlyZWRcblxuY29uc3QgQnV0dG9uID0gd2l0aE1lZGlhKFxuICB3aXRoVGhlbWUocHJvcHMgPT5cbiAgICBwcm9jZXNzLmlzU3R5bGVndWlkaXN0QWN0aXZlID8gKFxuICAgICAgPElubmVyQnV0dG9uXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgdGl0bGU9e3Jlc3BvbnNpdmVTdHlsZShwcm9wcywgJ3NpemUnLCBzaXplID0+XG4gICAgICAgICAgaW5mZXJlRm9udFNpemUocHJvcHMsIHNpemUpLFxuICAgICAgICApfVxuICAgICAgLz5cbiAgICApIDogKFxuICAgICAgPElubmVyQnV0dG9uIHsuLi5wcm9wc30gLz5cbiAgICApLFxuICApLFxuKVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cbiJdfQ== */"))), ";opacity:0.6;}" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0ZrQyIsImZpbGUiOiJCdXR0b24uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHt3aXRoVGhlbWV9IGZyb20gJ2Vtb3Rpb24tdGhlbWluZydcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtjc3N9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgd2l0aE1lZGlhIGZyb20gJ34vY29yZS91dGlscy9tZWRpYUhlbHBlcnMvd2l0aE1lZGlhJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFB1bHNlTG9hZGVyIGZyb20gJ3JlYWN0LXNwaW5uZXJzL1B1bHNlTG9hZGVyJ1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gJ34vY29yZS91dGlscy9qc0hlbHBlcnMvYXNzZXJ0J1xuXG5pbXBvcnQge1xuICBkYXJrZW4sXG4gIGluZmVyZUJ1dHRvbkNvbG9ycyxcbiAgcmVzcG9uc2l2ZVN0eWxlLFxuICBpbmZlcmVJbnRyYVNwYWNpbmdTaXplLFxuICBpbmZlcmVGb250V2VpZ2h0LFxuICBwcm9wc0ZvclByZWZpeCxcbiAgaW5mZXJlRm9udFNpemUsXG4gIGluZmVyZVBhZGRpbmdTaXplLFxuICBpbmZlcmVCb3JkZXJSYWRpdXMsXG4gIGNvbG9yU3R5bGVzLFxuICBkaXNhYmxlZENvbG9yU3R5bGVzLFxufSBmcm9tICd+L2NvcmVVSS91dGlscy9pbmZlcmVTdHlsZSdcbmltcG9ydCBzcGFjZVN0eWxlcyBmcm9tICd+L2NvcmVVSS91dGlscy9zdHlsZVN5c3RlbSdcblxuaW1wb3J0IEljb24gZnJvbSAnfi9jb3JlVUkvY29tcG9uZW50cy9iYXNpYy9JY29uJ1xuaW1wb3J0IHtcbiAgUm93LFxuICBCb3gsXG59IGZyb20gJ34vY29yZVVJL2NvbXBvbmVudHMvbGF5b3V0cy9oZWxwZXJzL0xpbmVhckxheW91dCdcblxuY29uc3QgQnV0dG9uQ29udGVudCA9IHN0eWxlZChSb3cpYFxuICAvKiB3aGl0ZS1zcGFjZTogbm93cmFwOyAqL1xuYFxuXG4vLyBNdXN0IGJlIG9mIHJlbGF0aXZlIHBvc2l0aW9uIGZvciB0aGUgbG9hZGluZyBpY29uIHRvIGJlIGRyYXduIGNvcnJlY3RseVxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgJHtwcm9wcyA9PlxuICAgIHJlc3BvbnNpdmVTdHlsZShcbiAgICAgIHByb3BzLFxuICAgICAgJ3NpemUnLFxuICAgICAgc2l6ZSA9PiBjc3NgXG4gICAgICAgIHBhZGRpbmctdG9wOiAke2luZmVyZVBhZGRpbmdTaXplKHByb3BzLCBzaXplKX1weDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206ICR7aW5mZXJlUGFkZGluZ1NpemUocHJvcHMsIHNpemUpfXB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6ICR7KHByb3BzLnB4UmF0aW8gfHwgMikgKlxuICAgICAgICAgIGluZmVyZVBhZGRpbmdTaXplKHByb3BzLCBzaXplKX1weDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogJHsocHJvcHMucHhSYXRpbyB8fCAyKSAqXG4gICAgICAgICAgaW5mZXJlUGFkZGluZ1NpemUocHJvcHMsIHNpemUpfXB4O1xuICAgICAgYCxcbiAgICApfTtcblxuICAke3Byb3BzID0+XG4gICAgcmVzcG9uc2l2ZVN0eWxlKFxuICAgICAgcHJvcHMsXG4gICAgICAnc2l6ZScsXG4gICAgICBzaXplID0+IGNzc2BcbiAgICAgICAgZm9udC1zaXplOiAke2luZmVyZUZvbnRTaXplKHByb3BzLCBzaXplKX07XG4gICAgICBgLFxuICAgICl9O1xuICBmb250LXdlaWdodDogJHtwcm9wcyA9PiBpbmZlcmVGb250V2VpZ2h0KHByb3BzKX07XG5cbiAgYm9yZGVyOiAke3Byb3BzID0+IChwcm9wcy5ib3JkZXJMZXNzID8gMCA6IHByb3BzLnRoZW1lLmJ1dHRvbnMuYm9yZGVyIHx8IDEpfXB4XG4gICAgc29saWQ7XG4gICR7cHJvcHMgPT5cbiAgICByZXNwb25zaXZlU3R5bGUoXG4gICAgICBwcm9wcyxcbiAgICAgICdzaXplJyxcbiAgICAgIHNpemUgPT4gY3NzYFxuICAgICAgICBib3JkZXItcmFkaXVzOiAke2luZmVyZUJvcmRlclJhZGl1cyhwcm9wcywgc2l6ZSl9cHg7XG4gICAgICBgLFxuICAgICl9O1xuXG4gIG91dGxpbmUtc3R5bGU6IG5vbmU7XG5cbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICR7cHJvcHMgPT4gc3BhY2VTdHlsZXMocHJvcHMpfVxuICAke3Byb3BzID0+IChwcm9wcy5kaXNhYmxlZCA/IGRpc2FibGVkQ29sb3JTdHlsZXMocHJvcHMpIDogY29sb3JTdHlsZXMocHJvcHMpKX1cbmBcblxuY29uc3QgTG9hZGVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcblxuICAke3Byb3BzID0+XG4gICAgcmVzcG9uc2l2ZVN0eWxlKFxuICAgICAgcHJvcHMsXG4gICAgICAnc2l6ZScsXG4gICAgICBzaXplID0+IGNzc2BcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJHtpbmZlcmVCb3JkZXJSYWRpdXMocHJvcHMsIHNpemUpfXB4O1xuICAgICAgYCxcbiAgICApfTtcblxuICAmIC5idXR0b25Mb2FkZXIgPiAqIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+XG4gICAgICBkYXJrZW4ocHJvcHMuY29sb3IgfHwgaW5mZXJlQnV0dG9uQ29sb3JzKHByb3BzKS5saW5lQ29sb3IsIDApfTtcbiAgfVxuXG4gICYgLmJ1dHRvbkxvYWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIGhlaWdodDogMTFweDtcbiAgICAke3Byb3BzID0+XG4gICAgICByZXNwb25zaXZlU3R5bGUoXG4gICAgICAgIHByb3BzLFxuICAgICAgICAnc2l6ZScsXG4gICAgICAgIHNpemUgPT4gY3NzYFxuICAgICAgICAgIGJvdHRvbTogJHtpbmZlcmVQYWRkaW5nU2l6ZShwcm9wcywgc2l6ZSkgLyAyfXB4O1xuICAgICAgICBgLFxuICAgICAgKX07XG4gICAgb3BhY2l0eTogMC42O1xuICB9XG5gXG5cbmNvbnN0IEJ1dHRvbkNvbnRhaW5lciA9IHN0eWxlZChCb3gpYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAke3Byb3BzID0+IChwcm9wcy5ibG9jayA/ICcxMDAlJyA6IHByb3BzLndpZHRoKX07XG5gXG5cbmNsYXNzIElubmVyQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgLy8gRklYTUUgOiBUaGUgcmVhc29uIGZvciB0aGUgZm9sbG93aW5nIHdvcmsgYXJvdW5kLCBpcyB0aGF0IG9uQ2xpY2sgd291bGQgYmUgY2FsbGVkIG9uIHRoZVxuICAgIC8vICAgICAgICAgRXh0ZXJuYWwgY29tcG9uZW50IGZpcnN0LCBhbmQgdGh1cyBjYXVzZXMgdGhlIG9uQ2xpY2sgYmVpbmcgY2FsbGVkIHR3aWNlXG4gICAgYXNzZXJ0KFxuICAgICAgIXRoaXMucHJvcHMub25DbGljayxcbiAgICAgIFwib25DbGljayBzaG91bGRuJ3QgYmUgdXNlZCBvbiBCYXNpY0J1dHRvbiwgdXNlIG9uQ2xpY2tlZCBpbnN0ZWFkXCIsXG4gICAgKVxuICB9XG5cbiAgb25DbGljayA9IGUgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2tlZCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrZWQoZSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIgPSAoKSA9PiAoXG4gICAgPEJ1dHRvbkNvbnRhaW5lciBibG9jaz17dGhpcy5wcm9wcy5ibG9ja30+XG4gICAgICA8U3R5bGVkQnV0dG9uXG4gICAgICAgIHsuLi5fLm9taXQodGhpcy5wcm9wcywgWydvbkNsaWNrZWQnXSl9XG4gICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5vbkNsaWNrKGUpfVxuICAgICAgPlxuICAgICAgICA8QnV0dG9uQ29udGVudFxuICAgICAgICAgIGNlbnRlckp1c3RpZmllZFxuICAgICAgICAgIGNlbnRlckFsaWduZWRcbiAgICAgICAgICBzcGFjZUJldHdlZW49e1xuICAgICAgICAgICAgaW5mZXJlSW50cmFTcGFjaW5nU2l6ZSh0aGlzLnByb3BzKSAvIHRoaXMucHJvcHMudGhlbWUubmV3LnNwYWNlclxuICAgICAgICAgIH1cbiAgICAgICAgICB7Li4ucHJvcHNGb3JQcmVmaXgodGhpcy5wcm9wcywgJ2J1dHRvbkNvbnRlbnRfJyl9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5pY29uTmFtZSAmJiAoXG4gICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuaWNvbk5hbWV9XG4gICAgICAgICAgICAgIHsuLi5wcm9wc0ZvclByZWZpeCh0aGlzLnByb3BzLCAnaWNvbkJlZm9yZV8nKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5pY29uICYmIHRoaXMucHJvcHMuaWNvbn1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5pY29uQWZ0ZXJOYW1lICYmIChcbiAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5pY29uQWZ0ZXJOYW1lfVxuICAgICAgICAgICAgICB7Li4ucHJvcHNGb3JQcmVmaXgodGhpcy5wcm9wcywgJ2ljb25BZnRlcl8nKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5pY29uQWZ0ZXIgJiYgdGhpcy5wcm9wcy5pY29uQWZ0ZXJ9XG4gICAgICAgIDwvQnV0dG9uQ29udGVudD5cbiAgICAgIDwvU3R5bGVkQnV0dG9uPlxuICAgICAge3RoaXMucHJvcHMubG9hZGluZyAmJiAoXG4gICAgICAgIDxMb2FkZXJDb250YWluZXIgey4uLl8ub21pdCh0aGlzLnByb3BzLCBbJ29uQ2xpY2tlZCddKX0+XG4gICAgICAgICAgPEJveCBmdWxsV2lkdGggZnVsbEhlaWdodD5cbiAgICAgICAgICAgIDxQdWxzZUxvYWRlciBzaXplPXsyfSBjbGFzc05hbWU9XCJidXR0b25Mb2FkZXJcIiAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0xvYWRlckNvbnRhaW5lcj5cbiAgICAgICl9XG4gICAgPC9CdXR0b25Db250YWluZXI+XG4gIClcbn1cblxuSW5uZXJCdXR0b24ucHJvcFR5cGVzID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgaWNvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn0pLmlzUmVxdWlyZWRcblxuY29uc3QgQnV0dG9uID0gd2l0aE1lZGlhKFxuICB3aXRoVGhlbWUocHJvcHMgPT5cbiAgICBwcm9jZXNzLmlzU3R5bGVndWlkaXN0QWN0aXZlID8gKFxuICAgICAgPElubmVyQnV0dG9uXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgdGl0bGU9e3Jlc3BvbnNpdmVTdHlsZShwcm9wcywgJ3NpemUnLCBzaXplID0+XG4gICAgICAgICAgaW5mZXJlRm9udFNpemUocHJvcHMsIHNpemUpLFxuICAgICAgICApfVxuICAgICAgLz5cbiAgICApIDogKFxuICAgICAgPElubmVyQnV0dG9uIHsuLi5wcm9wc30gLz5cbiAgICApLFxuICApLFxuKVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cbiJdfQ== */"));

const ButtonContainer =
/*#__PURE__*/
_styled(Box, {
  target: "e6bxis13",
  label: "ButtonContainer"
})("position:relative;width:", props => props.block ? '100%' : props.width, ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkJ1dHRvbi5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0htQyIsImZpbGUiOiJCdXR0b24uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJ1xuaW1wb3J0IHt3aXRoVGhlbWV9IGZyb20gJ2Vtb3Rpb24tdGhlbWluZydcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJ1xuaW1wb3J0IHtjc3N9IGZyb20gJ0BlbW90aW9uL2NvcmUnXG5pbXBvcnQgd2l0aE1lZGlhIGZyb20gJ34vY29yZS91dGlscy9tZWRpYUhlbHBlcnMvd2l0aE1lZGlhJ1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuaW1wb3J0IFB1bHNlTG9hZGVyIGZyb20gJ3JlYWN0LXNwaW5uZXJzL1B1bHNlTG9hZGVyJ1xuXG5pbXBvcnQgYXNzZXJ0IGZyb20gJ34vY29yZS91dGlscy9qc0hlbHBlcnMvYXNzZXJ0J1xuXG5pbXBvcnQge1xuICBkYXJrZW4sXG4gIGluZmVyZUJ1dHRvbkNvbG9ycyxcbiAgcmVzcG9uc2l2ZVN0eWxlLFxuICBpbmZlcmVJbnRyYVNwYWNpbmdTaXplLFxuICBpbmZlcmVGb250V2VpZ2h0LFxuICBwcm9wc0ZvclByZWZpeCxcbiAgaW5mZXJlRm9udFNpemUsXG4gIGluZmVyZVBhZGRpbmdTaXplLFxuICBpbmZlcmVCb3JkZXJSYWRpdXMsXG4gIGNvbG9yU3R5bGVzLFxuICBkaXNhYmxlZENvbG9yU3R5bGVzLFxufSBmcm9tICd+L2NvcmVVSS91dGlscy9pbmZlcmVTdHlsZSdcbmltcG9ydCBzcGFjZVN0eWxlcyBmcm9tICd+L2NvcmVVSS91dGlscy9zdHlsZVN5c3RlbSdcblxuaW1wb3J0IEljb24gZnJvbSAnfi9jb3JlVUkvY29tcG9uZW50cy9iYXNpYy9JY29uJ1xuaW1wb3J0IHtcbiAgUm93LFxuICBCb3gsXG59IGZyb20gJ34vY29yZVVJL2NvbXBvbmVudHMvbGF5b3V0cy9oZWxwZXJzL0xpbmVhckxheW91dCdcblxuY29uc3QgQnV0dG9uQ29udGVudCA9IHN0eWxlZChSb3cpYFxuICAvKiB3aGl0ZS1zcGFjZTogbm93cmFwOyAqL1xuYFxuXG4vLyBNdXN0IGJlIG9mIHJlbGF0aXZlIHBvc2l0aW9uIGZvciB0aGUgbG9hZGluZyBpY29uIHRvIGJlIGRyYXduIGNvcnJlY3RseVxuY29uc3QgU3R5bGVkQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcbiAgJHtwcm9wcyA9PlxuICAgIHJlc3BvbnNpdmVTdHlsZShcbiAgICAgIHByb3BzLFxuICAgICAgJ3NpemUnLFxuICAgICAgc2l6ZSA9PiBjc3NgXG4gICAgICAgIHBhZGRpbmctdG9wOiAke2luZmVyZVBhZGRpbmdTaXplKHByb3BzLCBzaXplKX1weDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206ICR7aW5mZXJlUGFkZGluZ1NpemUocHJvcHMsIHNpemUpfXB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6ICR7KHByb3BzLnB4UmF0aW8gfHwgMikgKlxuICAgICAgICAgIGluZmVyZVBhZGRpbmdTaXplKHByb3BzLCBzaXplKX1weDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogJHsocHJvcHMucHhSYXRpbyB8fCAyKSAqXG4gICAgICAgICAgaW5mZXJlUGFkZGluZ1NpemUocHJvcHMsIHNpemUpfXB4O1xuICAgICAgYCxcbiAgICApfTtcblxuICAke3Byb3BzID0+XG4gICAgcmVzcG9uc2l2ZVN0eWxlKFxuICAgICAgcHJvcHMsXG4gICAgICAnc2l6ZScsXG4gICAgICBzaXplID0+IGNzc2BcbiAgICAgICAgZm9udC1zaXplOiAke2luZmVyZUZvbnRTaXplKHByb3BzLCBzaXplKX07XG4gICAgICBgLFxuICAgICl9O1xuICBmb250LXdlaWdodDogJHtwcm9wcyA9PiBpbmZlcmVGb250V2VpZ2h0KHByb3BzKX07XG5cbiAgYm9yZGVyOiAke3Byb3BzID0+IChwcm9wcy5ib3JkZXJMZXNzID8gMCA6IHByb3BzLnRoZW1lLmJ1dHRvbnMuYm9yZGVyIHx8IDEpfXB4XG4gICAgc29saWQ7XG4gICR7cHJvcHMgPT5cbiAgICByZXNwb25zaXZlU3R5bGUoXG4gICAgICBwcm9wcyxcbiAgICAgICdzaXplJyxcbiAgICAgIHNpemUgPT4gY3NzYFxuICAgICAgICBib3JkZXItcmFkaXVzOiAke2luZmVyZUJvcmRlclJhZGl1cyhwcm9wcywgc2l6ZSl9cHg7XG4gICAgICBgLFxuICAgICl9O1xuXG4gIG91dGxpbmUtc3R5bGU6IG5vbmU7XG5cbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICR7cHJvcHMgPT4gc3BhY2VTdHlsZXMocHJvcHMpfVxuICAke3Byb3BzID0+IChwcm9wcy5kaXNhYmxlZCA/IGRpc2FibGVkQ29sb3JTdHlsZXMocHJvcHMpIDogY29sb3JTdHlsZXMocHJvcHMpKX1cbmBcblxuY29uc3QgTG9hZGVyQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC4yKTtcblxuICAke3Byb3BzID0+XG4gICAgcmVzcG9uc2l2ZVN0eWxlKFxuICAgICAgcHJvcHMsXG4gICAgICAnc2l6ZScsXG4gICAgICBzaXplID0+IGNzc2BcbiAgICAgICAgYm9yZGVyLXJhZGl1czogJHtpbmZlcmVCb3JkZXJSYWRpdXMocHJvcHMsIHNpemUpfXB4O1xuICAgICAgYCxcbiAgICApfTtcblxuICAmIC5idXR0b25Mb2FkZXIgPiAqIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3Byb3BzID0+XG4gICAgICBkYXJrZW4ocHJvcHMuY29sb3IgfHwgaW5mZXJlQnV0dG9uQ29sb3JzKHByb3BzKS5saW5lQ29sb3IsIDApfTtcbiAgfVxuXG4gICYgLmJ1dHRvbkxvYWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICAgIGhlaWdodDogMTFweDtcbiAgICAke3Byb3BzID0+XG4gICAgICByZXNwb25zaXZlU3R5bGUoXG4gICAgICAgIHByb3BzLFxuICAgICAgICAnc2l6ZScsXG4gICAgICAgIHNpemUgPT4gY3NzYFxuICAgICAgICAgIGJvdHRvbTogJHtpbmZlcmVQYWRkaW5nU2l6ZShwcm9wcywgc2l6ZSkgLyAyfXB4O1xuICAgICAgICBgLFxuICAgICAgKX07XG4gICAgb3BhY2l0eTogMC42O1xuICB9XG5gXG5cbmNvbnN0IEJ1dHRvbkNvbnRhaW5lciA9IHN0eWxlZChCb3gpYFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAke3Byb3BzID0+IChwcm9wcy5ibG9jayA/ICcxMDAlJyA6IHByb3BzLndpZHRoKX07XG5gXG5cbmNsYXNzIElubmVyQnV0dG9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQgPSAoKSA9PiB7XG4gICAgLy8gRklYTUUgOiBUaGUgcmVhc29uIGZvciB0aGUgZm9sbG93aW5nIHdvcmsgYXJvdW5kLCBpcyB0aGF0IG9uQ2xpY2sgd291bGQgYmUgY2FsbGVkIG9uIHRoZVxuICAgIC8vICAgICAgICAgRXh0ZXJuYWwgY29tcG9uZW50IGZpcnN0LCBhbmQgdGh1cyBjYXVzZXMgdGhlIG9uQ2xpY2sgYmVpbmcgY2FsbGVkIHR3aWNlXG4gICAgYXNzZXJ0KFxuICAgICAgIXRoaXMucHJvcHMub25DbGljayxcbiAgICAgIFwib25DbGljayBzaG91bGRuJ3QgYmUgdXNlZCBvbiBCYXNpY0J1dHRvbiwgdXNlIG9uQ2xpY2tlZCBpbnN0ZWFkXCIsXG4gICAgKVxuICB9XG5cbiAgb25DbGljayA9IGUgPT4ge1xuICAgIGlmICh0aGlzLnByb3BzLm9uQ2xpY2tlZCkge1xuICAgICAgdGhpcy5wcm9wcy5vbkNsaWNrZWQoZSlcbiAgICB9XG4gIH1cblxuICByZW5kZXIgPSAoKSA9PiAoXG4gICAgPEJ1dHRvbkNvbnRhaW5lciBibG9jaz17dGhpcy5wcm9wcy5ibG9ja30+XG4gICAgICA8U3R5bGVkQnV0dG9uXG4gICAgICAgIHsuLi5fLm9taXQodGhpcy5wcm9wcywgWydvbkNsaWNrZWQnXSl9XG4gICAgICAgIG9uQ2xpY2s9e2UgPT4gdGhpcy5vbkNsaWNrKGUpfVxuICAgICAgPlxuICAgICAgICA8QnV0dG9uQ29udGVudFxuICAgICAgICAgIGNlbnRlckp1c3RpZmllZFxuICAgICAgICAgIGNlbnRlckFsaWduZWRcbiAgICAgICAgICBzcGFjZUJldHdlZW49e1xuICAgICAgICAgICAgaW5mZXJlSW50cmFTcGFjaW5nU2l6ZSh0aGlzLnByb3BzKSAvIHRoaXMucHJvcHMudGhlbWUubmV3LnNwYWNlclxuICAgICAgICAgIH1cbiAgICAgICAgICB7Li4ucHJvcHNGb3JQcmVmaXgodGhpcy5wcm9wcywgJ2J1dHRvbkNvbnRlbnRfJyl9XG4gICAgICAgID5cbiAgICAgICAgICB7dGhpcy5wcm9wcy5pY29uTmFtZSAmJiAoXG4gICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9e3RoaXMucHJvcHMuaWNvbk5hbWV9XG4gICAgICAgICAgICAgIHsuLi5wcm9wc0ZvclByZWZpeCh0aGlzLnByb3BzLCAnaWNvbkJlZm9yZV8nKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5pY29uICYmIHRoaXMucHJvcHMuaWNvbn1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5pY29uQWZ0ZXJOYW1lICYmIChcbiAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17dGhpcy5wcm9wcy5pY29uQWZ0ZXJOYW1lfVxuICAgICAgICAgICAgICB7Li4ucHJvcHNGb3JQcmVmaXgodGhpcy5wcm9wcywgJ2ljb25BZnRlcl8nKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7dGhpcy5wcm9wcy5pY29uQWZ0ZXIgJiYgdGhpcy5wcm9wcy5pY29uQWZ0ZXJ9XG4gICAgICAgIDwvQnV0dG9uQ29udGVudD5cbiAgICAgIDwvU3R5bGVkQnV0dG9uPlxuICAgICAge3RoaXMucHJvcHMubG9hZGluZyAmJiAoXG4gICAgICAgIDxMb2FkZXJDb250YWluZXIgey4uLl8ub21pdCh0aGlzLnByb3BzLCBbJ29uQ2xpY2tlZCddKX0+XG4gICAgICAgICAgPEJveCBmdWxsV2lkdGggZnVsbEhlaWdodD5cbiAgICAgICAgICAgIDxQdWxzZUxvYWRlciBzaXplPXsyfSBjbGFzc05hbWU9XCJidXR0b25Mb2FkZXJcIiAvPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0xvYWRlckNvbnRhaW5lcj5cbiAgICAgICl9XG4gICAgPC9CdXR0b25Db250YWluZXI+XG4gIClcbn1cblxuSW5uZXJCdXR0b24ucHJvcFR5cGVzID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgaWNvbk5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn0pLmlzUmVxdWlyZWRcblxuY29uc3QgQnV0dG9uID0gd2l0aE1lZGlhKFxuICB3aXRoVGhlbWUocHJvcHMgPT5cbiAgICBwcm9jZXNzLmlzU3R5bGVndWlkaXN0QWN0aXZlID8gKFxuICAgICAgPElubmVyQnV0dG9uXG4gICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgdGl0bGU9e3Jlc3BvbnNpdmVTdHlsZShwcm9wcywgJ3NpemUnLCBzaXplID0+XG4gICAgICAgICAgaW5mZXJlRm9udFNpemUocHJvcHMsIHNpemUpLFxuICAgICAgICApfVxuICAgICAgLz5cbiAgICApIDogKFxuICAgICAgPElubmVyQnV0dG9uIHsuLi5wcm9wc30gLz5cbiAgICApLFxuICApLFxuKVxuXG5leHBvcnQgZGVmYXVsdCBCdXR0b25cbiJdfQ== */"));

class InnerButton extends React.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "componentDidMount", () => {
      // FIXME : The reason for the following work around, is that onClick would be called on the
      //         External component first, and thus causes the onClick being called twice
      assert(!this.props.onClick, "onClick shouldn't be used on BasicButton, use onClicked instead");
    });

    _defineProperty(this, "onClick", e => {
      if (this.props.onClicked) {
        this.props.onClicked(e);
      }
    });

    _defineProperty(this, "render", () => React.createElement(ButtonContainer, {
      block: this.props.block
    }, React.createElement(StyledButton, _extends({}, _.omit(this.props, ['onClicked']), {
      onClick: e => this.onClick(e)
    }), React.createElement(ButtonContent, _extends({
      centerJustified: true,
      centerAligned: true,
      spaceBetween: infereIntraSpacingSize(this.props) / this.props.theme.new.spacer
    }, propsForPrefix(this.props, 'buttonContent_')), this.props.iconName && React.createElement(Icon, _extends({
      className: this.props.iconName
    }, propsForPrefix(this.props, 'iconBefore_'))), this.props.icon && this.props.icon, this.props.children, this.props.iconAfterName && React.createElement(Icon, _extends({
      className: this.props.iconAfterName
    }, propsForPrefix(this.props, 'iconAfter_'))), this.props.iconAfter && this.props.iconAfter)), this.props.loading && React.createElement(LoaderContainer, _.omit(this.props, ['onClicked']), React.createElement(Box, {
      fullWidth: true,
      fullHeight: true
    }, React.createElement(PulseLoader, {
      size: 2,
      className: "buttonLoader"
    })))));
  }

}

InnerButton.propTypes = PropTypes.shape({
  iconName: PropTypes.string.isRequired
}).isRequired;
const Button = withMedia$1(withTheme(props => process.isStyleguidistActive ? React.createElement(InnerButton, _extends({}, props, {
  title: responsiveStyle(props, 'size', size => infereFontSize(props, size))
})) : React.createElement(InnerButton, props)));

export default Wrapper;
export { Button };
