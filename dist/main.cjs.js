'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var emotionTheming = require('emotion-theming');
var _styled = _interopDefault(require('@emotion/styled-base'));
var _ = _interopDefault(require('lodash'));
var cuid = _interopDefault(require('cuid'));
require('color');
var core = require('@emotion/core');
var changeCase = _interopDefault(require('change-case'));
var reactMediaQueryHocWithContext = require('react-media-query-hoc-with-context');
var PropTypes = _interopDefault(require('prop-types'));

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
core.css("color:", props.color || infereBoxColors(props).lineColor, ";border-color:", props.borderColor || infereBoxColors(props).borderColor, ";background-color:", props.backgroundColor || infereBoxColors(props).backgroundColor, ";label:boxColorsStyles;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZmVyZVN0eWxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStGMkMiLCJmaWxlIjoiaW5mZXJlU3R5bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ29sb3IgZnJvbSAnY29sb3InXG5pbXBvcnQge2Nzc30gZnJvbSAnQGVtb3Rpb24vY29yZSdcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCdcblxuaW1wb3J0IGFzc2VydCBmcm9tICd+L2NvcmUvdXRpbHMvanNIZWxwZXJzL2Fzc2VydCdcblxuaW1wb3J0IGdlbmVyYXRlU2VxdWVuY2VGcm9tVG8gZnJvbSAnfi9jb3JlL3V0aWxzL2pzSGVscGVycy9nZW5lcmF0ZVNlcXVlbmNlJ1xuXG5jb25zdCBTSVpFX1BST1BfTkFNRVMgPSBbJ3hzJywgJ3NtJywgJ21kJywgJ2xnJywgJ3hsJywgJ3h4bCcsICdoZWFkZXInXVxuXG5jb25zdCBGT05UX0NPTE9SUyA9IFtcbiAgJ3ByaW1hcnknLFxuICAnc2Vjb25kYXJ5JyxcbiAgJ2ltcG9ydGFudCcsXG4gICdub3JtYWwnLFxuICAnZW1waGFzaXplZCcsXG4gICdzdWJ0bGUnLFxuICAnaGludCcsXG4gICdlcnJvcicsXG5dXG5cbmNvbnN0IHRoZW1lUHJvcCA9IHByb3BOYW1lID0+IHByb3BOYW1lLnJlcGxhY2UoJ3NfJywgJycpXG5cbmV4cG9ydCBjb25zdCBkYXJrZW4gPSAoY29sb3IsIHJhdGlvKSA9PlxuICByYXRpbyA+PSAwXG4gICAgPyBDb2xvcihjb2xvcilcbiAgICAgICAgLmRhcmtlbihyYXRpbylcbiAgICAgICAgLnN0cmluZygpXG4gICAgOiBDb2xvcihjb2xvcilcbiAgICAgICAgLmxpZ2h0ZW4oLTEgKiByYXRpbylcbiAgICAgICAgLnN0cmluZygpXG5cbmNvbnN0IG1vZGVzQ29sb3JzID0gKHR5cGUsIHRoZW1lLCBwcm9wcykgPT4ge1xuICBjb25zdCBjb2xvcnMgPSB0aGVtZS5uZXcuY29sb3JzLmJ1dHRvbnNbdHlwZV1cblxuICByZXR1cm4ge1xuICAgIG5vcm1hbDoge1xuICAgICAgbGluZUNvbG9yOiBjb2xvcnMubGluZSxcbiAgICAgIGJvcmRlckNvbG9yOiBwcm9wcy5mb3JjZUludmVydGVkQm9yZGVyID8gY29sb3JzLmxpbmUgOiBjb2xvcnMuYmFja2dyb3VuZCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmJhY2tncm91bmQsXG4gICAgfSxcbiAgICBpbnZlcnRlZDoge1xuICAgICAgbGluZUNvbG9yOiBjb2xvcnMubGluZUludmVydGVkLFxuICAgICAgYm9yZGVyQ29sb3I6IHByb3BzLmZvcmNlSW52ZXJ0ZWRCb3JkZXJcbiAgICAgICAgPyBjb2xvcnMuYmFja2dyb3VuZGludmVydGVkXG4gICAgICAgIDogY29sb3JzLmxpbmVJbnZlcnRlZCxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JzLmJhY2tncm91bmRpbnZlcnRlZCxcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBjb25zdCBib3hNb2Rlc0NvbG9ycyA9ICh0eXBlLCB0aGVtZSkgPT4gKHtcbiAgbm9ybWFsOiB7XG4gICAgbGluZUNvbG9yOiB0aGVtZS5uZXcuY29sb3JzLm5hbWVkLmludmVydGVkLFxuICAgIGJvcmRlckNvbG9yOiB0aGVtZS5uZXcuY29sb3JzLm5hbWVkLmludmVydGVkLFxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUubmV3LmNvbG9ycy5uYW1lZFt0eXBlXSxcbiAgfSxcbiAgaW52ZXJ0ZWQ6IHtcbiAgICBsaW5lQ29sb3I6IHRoZW1lLm5ldy5jb2xvcnMubmFtZWRbdHlwZV0sXG4gICAgYm9yZGVyQ29sb3I6IHRoZW1lLm5ldy5jb2xvcnMubmFtZWRbdHlwZV0sXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5uZXcuY29sb3JzLnBhbmVscy5iYWNrZ3JvdW5kLFxuICB9LFxufSlcblxuZXhwb3J0IGNvbnN0IGluZmVyZUNvbnRyb2xUeXBlID0gcHJvcHMgPT4ge1xuICBpZiAocHJvcHMuZGlzYWJsZWQpIHtcbiAgICByZXR1cm4gJ2Rpc2FibGVkJ1xuICB9IGVsc2UgaWYgKHByb3BzLnBhc3NpdmUpIHtcbiAgICByZXR1cm4gJ3Bhc3NpdmUnXG4gIH0gZWxzZSBpZiAocHJvcHMuc2Vjb25kYXJ5KSB7XG4gICAgcmV0dXJuICdzZWNvbmRhcnknXG4gIH1cbiAgcmV0dXJuICdwcmltYXJ5J1xufVxuXG5leHBvcnQgY29uc3QgaW5mZXJlQ29udHJvbE1vZGUgPSBwcm9wcyA9PiB7XG4gIGlmIChwcm9wcy5pbnZlcnRlZCkge1xuICAgIHJldHVybiAnaW52ZXJ0ZWQnXG4gIH1cbiAgcmV0dXJuICdub3JtYWwnXG59XG5cbmNvbnN0IGluZmVyZUJveENvbG9ycyA9IHByb3BzID0+IHtcbiAgaWYgKHByb3BzLmNvbG9ycykge1xuICAgIHJldHVybiBwcm9wcy5jb2xvcnNcbiAgfVxuICBpZiAoIXByb3BzLmJveFR5cGUgfHwgIXByb3BzLnRoZW1lLm5ldy5jb2xvcnMubmFtZWRbcHJvcHMuYm94VHlwZV0pIHtcbiAgICByZXR1cm4ge31cbiAgfVxuICBjb25zdCB0eXBlID0gcHJvcHMuYm94VHlwZVxuICBjb25zdCBtb2RlID0gaW5mZXJlQ29udHJvbE1vZGUocHJvcHMpXG5cbiAgcmV0dXJuIGJveE1vZGVzQ29sb3JzKHR5cGUsIHByb3BzLnRoZW1lKVttb2RlXVxufVxuXG5leHBvcnQgY29uc3QgYm94Q29sb3JzU3R5bGVzID0gcHJvcHMgPT4gY3NzYFxuICBjb2xvcjogJHtwcm9wcy5jb2xvciB8fCBpbmZlcmVCb3hDb2xvcnMocHJvcHMpLmxpbmVDb2xvcn07XG4gIGJvcmRlci1jb2xvcjogJHtwcm9wcy5ib3JkZXJDb2xvciB8fCBpbmZlcmVCb3hDb2xvcnMocHJvcHMpLmJvcmRlckNvbG9yfTtcbiAgYmFja2dyb3VuZC1jb2xvcjogJHtwcm9wcy5iYWNrZ3JvdW5kQ29sb3IgfHxcbiAgICBpbmZlcmVCb3hDb2xvcnMocHJvcHMpLmJhY2tncm91bmRDb2xvcn07XG5gXG5cbmV4cG9ydCBjb25zdCBpbmZlcmVCdXR0b25Db2xvcnMgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IHR5cGUgPSBpbmZlcmVDb250cm9sVHlwZShwcm9wcylcbiAgY29uc3QgbW9kZSA9IGluZmVyZUNvbnRyb2xNb2RlKHByb3BzKVxuXG4gIHJldHVybiBwcm9wcy5jb2xvcnMgfHwgbW9kZXNDb2xvcnModHlwZSwgcHJvcHMudGhlbWUsIHByb3BzKVttb2RlXVxufVxuXG5jb25zdCBjb2xvcnMgPSAoaW5mZXJlZENvbG9ycywgZGFya1JhdGlvKSA9PiAoe1xuICBjb2xvcjogZGFya2VuKGluZmVyZWRDb2xvcnMubGluZUNvbG9yLCBkYXJrUmF0aW8pLFxuICBiYWNrZ3JvdW5kQ29sb3I6IGRhcmtlbihpbmZlcmVkQ29sb3JzLmJhY2tncm91bmRDb2xvciwgZGFya1JhdGlvKSxcbiAgYm9yZGVyQ29sb3I6IGRhcmtlbihpbmZlcmVkQ29sb3JzLmJvcmRlckNvbG9yLCBkYXJrUmF0aW8pLFxufSlcblxuZXhwb3J0IGNvbnN0IGNvbG9yU3R5bGVzID0gcHJvcHMgPT4ge1xuICBjb25zdCBpbmZlcmVkQ29sb3JzID0gaW5mZXJlQnV0dG9uQ29sb3JzKHByb3BzKVxuICByZXR1cm4gW1xuICAgIGNvbG9ycyhpbmZlcmVkQ29sb3JzLCAwKSxcbiAgICB7XG4gICAgICAnJjpob3Zlcic6IGNvbG9ycyhpbmZlcmVkQ29sb3JzLCAwLjA1KSxcbiAgICAgICcmOmFjdGl2ZSc6IGNvbG9ycyhpbmZlcmVkQ29sb3JzLCAwLjEpLFxuICAgICAgJyY6Zm9jdXMnOiB7XG4gICAgICAgIGJvcmRlckNvbG9yOiBkYXJrZW4oaW5mZXJlQnV0dG9uQ29sb3JzKHByb3BzKS5ib3JkZXJDb2xvciwgMC4zKSxcbiAgICAgIH0sXG4gICAgfSxcbiAgXVxuICAvLyBjc3NgXG4gIC8vICAgJHtjb2xvcnMoaW5mZXJlZENvbG9ycywgMCl9XG5cbiAgLy8gICAmOmhvdmVyIHtcbiAgLy8gICAgIGNvbG9yOiAke2RhcmtlbihpbmZlcmVkQ29sb3JzLmxpbmVDb2xvciwgMC4wNSl9O1xuICAvLyAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtkYXJrZW4oaW5mZXJlZENvbG9ycy5iYWNrZ3JvdW5kQ29sb3IsIDAuMDUpfTtcbiAgLy8gICAgIGJvcmRlci1jb2xvcjogJHtkYXJrZW4oaW5mZXJlZENvbG9ycy5ib3JkZXJDb2xvciwgMC4wNSl9O1xuICAvLyAgIH1cbiAgLy8gYCB8fFxuICAvLyBjc3NgXG4gIC8vICAgJHtjb2xvcnMocHJvcHMsIDApfVxuXG4gIC8vICAgJjpob3ZlciB7XG4gIC8vICAgICAke2NvbG9ycyhwcm9wcywgMC4wNSl9XG4gIC8vICAgfVxuICAvLyAgICY6YWN0aXZlIHtcbiAgLy8gICAgICR7Y29sb3JzKHByb3BzLCAwLjEpfVxuICAvLyAgIH1cbiAgLy8gICAmOmZvY3VzIHtcbiAgLy8gICAgIGJvcmRlci1jb2xvcjogJHtkYXJrZW4oaW5mZXJlQnV0dG9uQ29sb3JzKHByb3BzKS5ib3JkZXJDb2xvciwgMC4zKX07XG4gIC8vICAgfVxuICAvLyBgXG59XG5cbmV4cG9ydCBjb25zdCBkaXNhYmxlZENvbG9yU3R5bGVzID0gcHJvcHMgPT4gY3NzYFxuICAke2NvbG9ycyhwcm9wcywgMCl9XG5gXG5cbmV4cG9ydCBjb25zdCBnZXROYW1lZEZvbnRTaXplID0gc2l6ZSA9PlxuICBTSVpFX1BST1BfTkFNRVMuZmluZChzaXplUHJvcCA9PiBzaXplID09PSBzaXplUHJvcClcblxuZXhwb3J0IGNvbnN0IGluZmVyZVNpemUgPSBwcm9wcyA9PlxuICBnZXROYW1lZEZvbnRTaXplKHByb3BzLnNpemUpIHx8XG4gIFNJWkVfUFJPUF9OQU1FUy5maW5kKHNpemVQcm9wID0+IHByb3BzW3NpemVQcm9wXSlcblxuZXhwb3J0IGNvbnN0IGluZmVyZVNwYWNlU2l6ZSA9IChwcm9wcywgc2l6ZSkgPT4ge1xuICBpZiAoXy5pc051bWJlcihzaXplKSkge1xuICAgIHJldHVybiBgJHtzaXplICogcHJvcHMudGhlbWUubmV3LnNwYWNlcn1weGBcbiAgfSBlbHNlIGlmIChzaXplICYmIHBhcnNlRmxvYXQoc2l6ZS50b1N0cmluZygpKSA9PT0gc2l6ZSkge1xuICAgIHJldHVybiBgJHtwYXJzZUZsb2F0KHNpemUudG9TdHJpbmcoKSkgKiBwcm9wcy50aGVtZS5uZXcuc3BhY2VyfXB4YFxuICB9XG4gIHJldHVybiBzaXplXG59XG5cbmV4cG9ydCBjb25zdCBpbmZlcmVGb250Q29sb3IgPSAocHJvcHMsIGRlZmF1bHRDb2xvcikgPT4ge1xuICBsZXQgY29sb3IgPSBudWxsXG4gIGlmIChwcm9wcy5jb2xvcikge1xuICAgIGNvbG9yID0gRk9OVF9DT0xPUlMuZmluZChmb250Q29sb3IgPT4gZm9udENvbG9yID09PSBwcm9wcy5jb2xvcilcbiAgICBpZiAoIWNvbG9yKSB7XG4gICAgICByZXR1cm4gcHJvcHMuY29sb3JcbiAgICB9XG4gIH1cbiAgY29sb3IgPVxuICAgIGNvbG9yIHx8IEZPTlRfQ09MT1JTLmZpbmQoZm9udENvbG9yID0+IHByb3BzW2ZvbnRDb2xvcl0pIHx8IGRlZmF1bHRDb2xvclxuXG4gIGNvbnN0IG1vZGUgPSBpbmZlcmVDb250cm9sTW9kZShwcm9wcylcblxuICByZXR1cm4gcHJvcHMudGhlbWUubmV3LmNvbG9ycy5sYWJlbHNbbW9kZV1bY29sb3JdXG59XG5cbmV4cG9ydCBjb25zdCBpbmZlcmVGb250U2l6ZSA9IChwcm9wcywgc2l6ZSkgPT4ge1xuICBsZXQgaW5mZXJlZFNpemUgPSBpbmZlcmVTaXplKHByb3BzKVxuICBjb25zdCByZWNlaXZlZFNpemUgPSBzaXplIHx8IHByb3BzLnNpemVcblxuICBpZiAoIXJlY2VpdmVkU2l6ZSAmJiAhaW5mZXJlZFNpemUpIHtcbiAgICBpbmZlcmVkU2l6ZSA9ICdtZCdcbiAgfVxuXG4gIGlmIChfLmlzTnVtYmVyKHJlY2VpdmVkU2l6ZSkpIHtcbiAgICByZXR1cm4gYCR7cmVjZWl2ZWRTaXplICogcHJvcHMudGhlbWUubmV3LnNwYWNlcn1weGBcbiAgfSBlbHNlIGlmIChcbiAgICByZWNlaXZlZFNpemUgJiZcbiAgICBwYXJzZUZsb2F0KHJlY2VpdmVkU2l6ZS50b1N0cmluZygpKSA9PT0gcmVjZWl2ZWRTaXplXG4gICkge1xuICAgIHJldHVybiBgJHtwYXJzZUZsb2F0KHJlY2VpdmVkU2l6ZSkudG9TdHJpbmcoKSAqIHByb3BzLnRoZW1lLm5ldy5zcGFjZXJ9cHhgXG4gIH0gZWxzZSBpZiAoZ2V0TmFtZWRGb250U2l6ZShyZWNlaXZlZFNpemUpKSB7XG4gICAgcmV0dXJuIGAke3Byb3BzLnRoZW1lLm5ldy5mb250cy5zaXplc1t0aGVtZVByb3AocmVjZWl2ZWRTaXplKV19cHhgXG4gIH0gZWxzZSBpZiAoaW5mZXJlZFNpemUpIHtcbiAgICByZXR1cm4gYCR7cHJvcHMudGhlbWUubmV3LmZvbnRzLnNpemVzW3RoZW1lUHJvcChpbmZlcmVkU2l6ZSldfXB4YFxuICB9XG5cbiAgcmV0dXJuIHJlY2VpdmVkU2l6ZVxufVxuXG5leHBvcnQgY29uc3QgaW5mZXJlTmFtZWRGb250U2l6ZSA9IChwcm9wcywgc2l6ZSkgPT4ge1xuICBjb25zdCBpbmZlcmVkU2l6ZSA9IHNpemUgfHwgaW5mZXJlU2l6ZShwcm9wcykgfHwgJ21kJ1xuICByZXR1cm4gcHJvcHMudGhlbWUubmV3LmZvbnRzLnNpemVzW3RoZW1lUHJvcChpbmZlcmVkU2l6ZSldIHx8IGluZmVyZWRTaXplXG59XG5cbmV4cG9ydCBjb25zdCBpbmZlcmVGb250V2VpZ2h0ID0gcHJvcHMgPT4ge1xuICBpZiAocHJvcHMuZXh0cmFCb2xkKSB7XG4gICAgcmV0dXJuIHByb3BzLnRoZW1lLm5ldy5mb250cy53ZWlnaHRzLmV4dHJhQm9sZFxuICB9IGVsc2UgaWYgKHByb3BzLmJvbGQpIHtcbiAgICByZXR1cm4gcHJvcHMudGhlbWUubmV3LmZvbnRzLndlaWdodHMuYm9sZFxuICB9IGVsc2UgaWYgKHByb3BzLnNlbWlCb2xkKSB7XG4gICAgcmV0dXJuIHByb3BzLnRoZW1lLm5ldy5mb250cy53ZWlnaHRzLnNlbWlCb2xkXG4gIH1cbiAgcmV0dXJuIG51bGwgLy8gTm9ybWFsXG59XG5cbmV4cG9ydCBjb25zdCBpbmZlcmVCb3JkZXJSYWRpdXMgPSAocHJvcHMsIHNpemUpID0+IHtcbiAgaWYgKHByb3BzLmZ1bGxSb3VuZCkge1xuICAgIHJldHVybiAxMDAwXG4gIH0gZWxzZSBpZiAocHJvcHMucmFkaXVzKSB7XG4gICAgcmV0dXJuIHByb3BzLnJhZGl1c1xuICB9XG5cbiAgY29uc3QgaW5mZXJlZFNpemUgPSBpbmZlcmVOYW1lZEZvbnRTaXplKHByb3BzLCBzaXplKVxuICByZXR1cm4gaW5mZXJlZFNpemUgLyAyLjVcbn1cblxuZXhwb3J0IGNvbnN0IGluZmVyZVBhZGRpbmdTaXplID0gKHByb3BzLCBzaXplKSA9PiB7XG4gIGNvbnN0IGluZmVyZWRTaXplID0gMC41MyAqIGluZmVyZU5hbWVkRm9udFNpemUocHJvcHMsIHNpemUpXG4gIHJldHVybiBwcm9wcy50aWdodCA/IGluZmVyZWRTaXplIC8gMiA6IGluZmVyZWRTaXplXG59XG5cbmV4cG9ydCBjb25zdCBpbmZlcmVJbnRyYVNwYWNpbmdTaXplID0gKHByb3BzLCBzaXplKSA9PiB7XG4gIGNvbnN0IGluZmVyZWRTaXplID0gMC41MyAqIGluZmVyZU5hbWVkRm9udFNpemUocHJvcHMsIHNpemUpXG4gIHJldHVybiBwcm9wcy50aWdodCA/IGluZmVyZWRTaXplIC8gMiA6IGluZmVyZWRTaXplXG59XG5cbmV4cG9ydCBjb25zdCBwcm9wc0ZvclByZWZpeCA9IChwcm9wcywgcHJlZml4KSA9PlxuICBfLm1hcEtleXMoXG4gICAgXy5waWNrQnkocHJvcHMsIChwcm9wVmFsdWUsIHByb3BOYW1lKSA9PiBwcm9wTmFtZS5pbmRleE9mKHByZWZpeCkgPT09IDApLFxuICAgICh0cmlnZ2VyUHJvcFZhbHVlLCB0cmlnZ2VyUHJvcEtleSkgPT4gdHJpZ2dlclByb3BLZXkucmVwbGFjZShwcmVmaXgsICcnKSxcbiAgKVxuXG5jb25zdCByZXNwb25zaXZlSlNRdWVyaWVzID0gbWVkaWEgPT4gW1xuICBtZWRpYS54c21hbGwsXG4gIG1lZGlhLm1pbk1vYmlsZSxcbiAgbWVkaWEubWluVGFibGV0LFxuICBtZWRpYS5taW5EZXNrdG9wLFxuICBtZWRpYS5sYXJnZURlc2t0b3AsXG5dXG5cbmV4cG9ydCBjb25zdCByZXNwb25zaXZlU3R5bGUgPSAocHJvcHMsIHRhcmdldFByb3AsIGNhbGxCYWNrLCBkZWZhdWx0VmFsdWUpID0+IHtcbiAgbGV0IHByb3BWYWx1ZSA9IG51bGxcbiAgaWYgKHRhcmdldFByb3AgPT09ICdzaXplJykge1xuICAgIGlmIChwcm9wcy5zaXplKSB7XG4gICAgICBwcm9wVmFsdWUgPSBwcm9wcy5zaXplXG4gICAgfSBlbHNlIHtcbiAgICAgIHByb3BWYWx1ZSA9IGluZmVyZVNpemUocHJvcHMpIHx8ICdtZCdcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcHJvcFZhbHVlID0gcHJvcHNbdGFyZ2V0UHJvcF1cbiAgfVxuXG4gIGlmICghcHJvcFZhbHVlKSB7XG4gICAgaWYgKGRlZmF1bHRWYWx1ZSkge1xuICAgICAgcmV0dXJuIGNhbGxCYWNrKGRlZmF1bHRWYWx1ZSlcbiAgICB9XG4gICAgcmV0dXJuIG51bGxcbiAgfVxuXG4gIGlmIChfLmlzQXJyYXkocHJvcFZhbHVlKSAmJiBwcm9wVmFsdWUubGVuZ3RoID49IDIpIHtcbiAgICBhc3NlcnQoXG4gICAgICBwcm9wcy5tZWRpYSxcbiAgICAgIFwiTWVkaWEgaXNuJ3QgZm91bmQuIE1ha2Ugc3VyZSB0byBzdXJyb3VuZCB3aXRoIHdpdGhNZWRpYVwiLFxuICAgIClcbiAgICBjb25zdCBjdXJyZW50U2l6ZUluZGV4ID0gZ2VuZXJhdGVTZXF1ZW5jZUZyb21Ubyg0LCAtMSkuZmluZChcbiAgICAgIGkgPT4gcmVzcG9uc2l2ZUpTUXVlcmllcyhwcm9wcy5tZWRpYSlbaV0gJiYgaSA8IHByb3BWYWx1ZS5sZW5ndGgsXG4gICAgKVxuICAgIGlmICghY3VycmVudFNpemVJbmRleCAmJiBjdXJyZW50U2l6ZUluZGV4ICE9PSAwKSB7XG4gICAgICByZXR1cm4gJydcbiAgICB9XG4gICAgcmV0dXJuIGNhbGxCYWNrKHByb3BWYWx1ZVtjdXJyZW50U2l6ZUluZGV4XSlcbiAgfVxuICByZXR1cm4gXy5pc0FycmF5KHByb3BWYWx1ZSkgJiYgcHJvcFZhbHVlLmxlbmd0aCA9PT0gMVxuICAgID8gY2FsbEJhY2socHJvcFZhbHVlWzBdKVxuICAgIDogY2FsbEJhY2socHJvcFZhbHVlKVxufVxuXG5leHBvcnQgY29uc3QgcmVzcG9uc2l2ZUZvbnRTaXplU3R5bGUgPSBwcm9wcyA9PlxuICByZXNwb25zaXZlU3R5bGUoXG4gICAgcHJvcHMsXG4gICAgJ3NpemUnLFxuICAgIHNpemUgPT4gY3NzYFxuICAgICAgZm9udC1zaXplOiAke2luZmVyZUZvbnRTaXplKHByb3BzLCBzaXplKX07XG4gICAgYCxcbiAgKVxuIl19 */"));
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
core.css(_.flatten(styleAliases.filter(aliasGroup => styleExists(props, aliasGroup)).map(aliasGroup => {
  const styleName = aliasGroup[0];
  return aliasGroup.map(styleAlias => props[styleAlias] && responsiveStyle(props, styleAlias, size =>
  /*#__PURE__*/
  core.css(changeCase.paramCase(styleName), ":", getSize(props, size), ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlU3lzdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlDb0QiLCJmaWxlIjoic3R5bGVTeXN0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IHJlc3BvbnNpdmVTdHlsZSB9IGZyb20gJ34vY29yZVVJL3V0aWxzL2luZmVyZVN0eWxlJztcbmltcG9ydCBjaGFuZ2VDYXNlIGZyb20gJ2NoYW5nZS1jYXNlJztcblxuY29uc3Qgc3R5bGVBbGlhc2VzID0gW1xuICBbJ3dpZHRoJywgJ3cnXSxcbiAgWydoZWlnaHQnLCAnaCddLFxuICBbJ21pbldpZHRoJ10sXG4gIFsnbWluSGVpZ2h0J10sXG4gIFsnbWF4V2lkdGgnXSxcbiAgWydtYXhIZWlnaHQnXSxcbiAgWydwYWRkaW5nJywgJ3AnXSxcbiAgWydwYWRkaW5nVG9wJywgJ3B0J10sXG4gIFsncGFkZGluZ0JvdHRvbScsICdwYiddLFxuICBbJ3BhZGRpbmdMZWZ0JywgJ3BsJ10sXG4gIFsncGFkZGluZ1JpZ2h0JywgJ3ByJ10sXG4gIFsnbWFyZ2luJywgJ20nXSxcbiAgWydtYXJnaW5Ub3AnLCAnbXQnXSxcbiAgWydtYXJnaW5Cb3R0b20nLCAnbWInXSxcbiAgWydtYXJnaW5MZWZ0JywgJ21sJ10sXG4gIFsnbWFyZ2luUmlnaHQnLCAnbXInXSxcbl07XG5cbmNvbnN0IHN0eWxlRXhpc3RzID0gKHByb3BzLCBzdHlsZSkgPT5cbiAgc3R5bGUuc29tZShzdHlsZU5hbWUgPT4gcHJvcHNbc3R5bGVOYW1lXSk7XG5cbmV4cG9ydCBjb25zdCBnZXRTaXplID0gKHByb3BzLCBzaXplKSA9PiB7XG4gIGlmIChfLmlzTnVtYmVyKHNpemUpKSB7XG4gICAgcmV0dXJuIGAke3NpemUgKiBwcm9wcy50aGVtZS5uZXcuc3BhY2VyfXB4YDtcbiAgfSBlbHNlIGlmIChzaXplICYmIHBhcnNlRmxvYXQoc2l6ZSkudG9TdHJpbmcoKSA9PT0gc2l6ZSkge1xuICAgIHJldHVybiBgJHtwYXJzZUZsb2F0KHNpemUudG9TdHJpbmcoKSkgKiBwcm9wcy50aGVtZS5uZXcuc3BhY2VyfXB4YDtcbiAgfVxuICByZXR1cm4gc2l6ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb3BzID0+IGNzc2BcbiAgJHtfLmZsYXR0ZW4oc3R5bGVBbGlhc2VzLmZpbHRlcihhbGlhc0dyb3VwID0+IHN0eWxlRXhpc3RzKHByb3BzLCBhbGlhc0dyb3VwKSkubWFwKChhbGlhc0dyb3VwKSA9PiB7XG4gICAgY29uc3Qgc3R5bGVOYW1lID0gYWxpYXNHcm91cFswXTtcbiAgICByZXR1cm4gYWxpYXNHcm91cC5tYXAoc3R5bGVBbGlhcyA9PiBwcm9wc1tzdHlsZUFsaWFzXSAmJlxuICAgICAgcmVzcG9uc2l2ZVN0eWxlKHByb3BzLCBzdHlsZUFsaWFzLCBzaXplID0+IGNzc2BcbiAgICAgICAgJHtjaGFuZ2VDYXNlLnBhcmFtQ2FzZShzdHlsZU5hbWUpfTogJHtnZXRTaXplKHByb3BzLCBzaXplKX07XG4gICAgICBgKSk7XG4gIH0pKX07XG4gIGA7XG4iXX0= */"))));
})), ";" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0eWxlU3lzdGVtLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFDMkIiLCJmaWxlIjoic3R5bGVTeXN0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjc3MgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5cbmltcG9ydCB7IHJlc3BvbnNpdmVTdHlsZSB9IGZyb20gJ34vY29yZVVJL3V0aWxzL2luZmVyZVN0eWxlJztcbmltcG9ydCBjaGFuZ2VDYXNlIGZyb20gJ2NoYW5nZS1jYXNlJztcblxuY29uc3Qgc3R5bGVBbGlhc2VzID0gW1xuICBbJ3dpZHRoJywgJ3cnXSxcbiAgWydoZWlnaHQnLCAnaCddLFxuICBbJ21pbldpZHRoJ10sXG4gIFsnbWluSGVpZ2h0J10sXG4gIFsnbWF4V2lkdGgnXSxcbiAgWydtYXhIZWlnaHQnXSxcbiAgWydwYWRkaW5nJywgJ3AnXSxcbiAgWydwYWRkaW5nVG9wJywgJ3B0J10sXG4gIFsncGFkZGluZ0JvdHRvbScsICdwYiddLFxuICBbJ3BhZGRpbmdMZWZ0JywgJ3BsJ10sXG4gIFsncGFkZGluZ1JpZ2h0JywgJ3ByJ10sXG4gIFsnbWFyZ2luJywgJ20nXSxcbiAgWydtYXJnaW5Ub3AnLCAnbXQnXSxcbiAgWydtYXJnaW5Cb3R0b20nLCAnbWInXSxcbiAgWydtYXJnaW5MZWZ0JywgJ21sJ10sXG4gIFsnbWFyZ2luUmlnaHQnLCAnbXInXSxcbl07XG5cbmNvbnN0IHN0eWxlRXhpc3RzID0gKHByb3BzLCBzdHlsZSkgPT5cbiAgc3R5bGUuc29tZShzdHlsZU5hbWUgPT4gcHJvcHNbc3R5bGVOYW1lXSk7XG5cbmV4cG9ydCBjb25zdCBnZXRTaXplID0gKHByb3BzLCBzaXplKSA9PiB7XG4gIGlmIChfLmlzTnVtYmVyKHNpemUpKSB7XG4gICAgcmV0dXJuIGAke3NpemUgKiBwcm9wcy50aGVtZS5uZXcuc3BhY2VyfXB4YDtcbiAgfSBlbHNlIGlmIChzaXplICYmIHBhcnNlRmxvYXQoc2l6ZSkudG9TdHJpbmcoKSA9PT0gc2l6ZSkge1xuICAgIHJldHVybiBgJHtwYXJzZUZsb2F0KHNpemUudG9TdHJpbmcoKSkgKiBwcm9wcy50aGVtZS5uZXcuc3BhY2VyfXB4YDtcbiAgfVxuICByZXR1cm4gc2l6ZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByb3BzID0+IGNzc2BcbiAgJHtfLmZsYXR0ZW4oc3R5bGVBbGlhc2VzLmZpbHRlcihhbGlhc0dyb3VwID0+IHN0eWxlRXhpc3RzKHByb3BzLCBhbGlhc0dyb3VwKSkubWFwKChhbGlhc0dyb3VwKSA9PiB7XG4gICAgY29uc3Qgc3R5bGVOYW1lID0gYWxpYXNHcm91cFswXTtcbiAgICByZXR1cm4gYWxpYXNHcm91cC5tYXAoc3R5bGVBbGlhcyA9PiBwcm9wc1tzdHlsZUFsaWFzXSAmJlxuICAgICAgcmVzcG9uc2l2ZVN0eWxlKHByb3BzLCBzdHlsZUFsaWFzLCBzaXplID0+IGNzc2BcbiAgICAgICAgJHtjaGFuZ2VDYXNlLnBhcmFtQ2FzZShzdHlsZU5hbWUpfTogJHtnZXRTaXplKHByb3BzLCBzaXplKX07XG4gICAgICBgKSk7XG4gIH0pKX07XG4gIGA7XG4iXX0= */")));

var ForceMediaContext = React.createContext();

const patchTargets = {
  xsmall: ['minXsamll', 'xsmall', 'maxMobile', 'maxTablet', 'maxDesktop', 'maxLargeDesktop'],
  mobile: ['minXsmall', 'minMobile', 'mobile', 'maxMobile', 'maxTablet', 'maxDesktop', 'maxLargeDesktop'],
  tablet: ['minXsmall', 'minMobile', 'minTablet', 'tablet', 'maxTablet', 'maxDesktop', 'maxLargeDesktop'],
  desktop: ['minXsmall', 'minMobile', 'minTablet', 'minDesktop', 'desktop', 'maxDesktop', 'maxLargeDesktop'],
  largeDesktop: ['minXsmall', 'minMobile', 'minTablet', 'minDesktop', 'largeDesktop', 'maxLargeDesktop']
};
var withMedia = (WrappedComponent => reactMediaQueryHocWithContext.withMedia(props => React.createElement(ForceMediaContext.Consumer, null, forceMediaQuery => {
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
  target: "e56c2770",
  label: "StyledSpacer"
})("flex-grow:", props => props.grow ? 1 : null, ";", props => responsiveStyle(props, 'size', size =>
/*#__PURE__*/
core.css("min-width:", infereSpaceSize(props, size), ";min-height:", infereSpaceSize(props, size), ";label:StyledSpacer;" + (process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNwYWNlci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV3VEIiwiZmlsZSI6IlNwYWNlci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgcmVzcG9uc2l2ZVN0eWxlLCBpbmZlcmVTcGFjZVNpemUgfSBmcm9tICd+L2NvcmVVSS91dGlscy9pbmZlcmVTdHlsZSc7XG5cbmltcG9ydCBzcGFjZVN0eWxlcyBmcm9tICd+L2NvcmVVSS91dGlscy9zdHlsZVN5c3RlbSc7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRTcGFjZXIgPSBzdHlsZWQuZGl2YFxuICBmbGV4LWdyb3c6ICR7cHJvcHMgPT4gKHByb3BzLmdyb3cgPyAxIDogbnVsbCl9O1xuICBcbiAgJHtwcm9wcyA9PiByZXNwb25zaXZlU3R5bGUocHJvcHMsICdzaXplJywgc2l6ZSA9PiBjc3NgXG4gICAgbWluLXdpZHRoOiAke2luZmVyZVNwYWNlU2l6ZShwcm9wcywgc2l6ZSl9O1xuICAgIG1pbi1oZWlnaHQ6ICR7aW5mZXJlU3BhY2VTaXplKHByb3BzLCBzaXplKX07XG4gIGApfTtcblxuICAke3Byb3BzID0+IHNwYWNlU3R5bGVzKHByb3BzKX1cbmA7XG5cbmNvbnN0IFNwYWNlciA9IHByb3BzID0+IDxTdHlsZWRTcGFjZXIgey4uLnByb3BzfSAvPjtcblxuU3BhY2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2l6ZTogMSxcbn07XG5cblNwYWNlci5wcm9wVHlwZXMgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBzaXplOiBQcm9wVHlwZXMubnVtYmVyLFxufSkuaXNSZXF1aXJlZDtcblxuZXhwb3J0IGRlZmF1bHQgU3BhY2VyO1xuXG5leHBvcnQgY29uc3QgSFNwYWNlciA9IHByb3BzID0+IChcbiAgPFNwYWNlciBtaW5IZWlnaHQ9XCIxcHhcIiB7Li4ucHJvcHN9IC8+XG4pO1xuXG5leHBvcnQgY29uc3QgVlNwYWNlciA9IHByb3BzID0+IChcbiAgPFNwYWNlciBtaW5XaWR0aD1cIjFweFwiIHsuLi5wcm9wc30gLz5cbik7XG4iXX0= */"))), ";", props => spaceStyles(props), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlNwYWNlci5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUXNDIiwiZmlsZSI6IlNwYWNlci5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlZCBmcm9tICdAZW1vdGlvbi9zdHlsZWQnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgcmVzcG9uc2l2ZVN0eWxlLCBpbmZlcmVTcGFjZVNpemUgfSBmcm9tICd+L2NvcmVVSS91dGlscy9pbmZlcmVTdHlsZSc7XG5cbmltcG9ydCBzcGFjZVN0eWxlcyBmcm9tICd+L2NvcmVVSS91dGlscy9zdHlsZVN5c3RlbSc7XG5cbmV4cG9ydCBjb25zdCBTdHlsZWRTcGFjZXIgPSBzdHlsZWQuZGl2YFxuICBmbGV4LWdyb3c6ICR7cHJvcHMgPT4gKHByb3BzLmdyb3cgPyAxIDogbnVsbCl9O1xuICBcbiAgJHtwcm9wcyA9PiByZXNwb25zaXZlU3R5bGUocHJvcHMsICdzaXplJywgc2l6ZSA9PiBjc3NgXG4gICAgbWluLXdpZHRoOiAke2luZmVyZVNwYWNlU2l6ZShwcm9wcywgc2l6ZSl9O1xuICAgIG1pbi1oZWlnaHQ6ICR7aW5mZXJlU3BhY2VTaXplKHByb3BzLCBzaXplKX07XG4gIGApfTtcblxuICAke3Byb3BzID0+IHNwYWNlU3R5bGVzKHByb3BzKX1cbmA7XG5cbmNvbnN0IFNwYWNlciA9IHByb3BzID0+IDxTdHlsZWRTcGFjZXIgey4uLnByb3BzfSAvPjtcblxuU3BhY2VyLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2l6ZTogMSxcbn07XG5cblNwYWNlci5wcm9wVHlwZXMgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBzaXplOiBQcm9wVHlwZXMubnVtYmVyLFxufSkuaXNSZXF1aXJlZDtcblxuZXhwb3J0IGRlZmF1bHQgU3BhY2VyO1xuXG5leHBvcnQgY29uc3QgSFNwYWNlciA9IHByb3BzID0+IChcbiAgPFNwYWNlciBtaW5IZWlnaHQ9XCIxcHhcIiB7Li4ucHJvcHN9IC8+XG4pO1xuXG5leHBvcnQgY29uc3QgVlNwYWNlciA9IHByb3BzID0+IChcbiAgPFNwYWNlciBtaW5XaWR0aD1cIjFweFwiIHsuLi5wcm9wc30gLz5cbik7XG4iXX0= */");

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

const StyledLinearLayout = withMedia(_styled("div", {
  target: "e16gqywk0",
  label: "StyledLinearLayout"
})("width:", props => props.fullWidth ? '100%' : props.width, ";height:", props => props.fullHeight ? '100%' : props.height, ";box-sizing:border-box;display:flex;flex-direction:", props => props.row ? 'row' : 'column', ";flex-grow:", props => props.grow ? 1 : null, ";justify-content:", props => getJustifyContent(props) || 'flex-start', ";align-items:", props => getAlignItems(props) || 'center', ";border:", props => props.bordered && `solid ${getBorderWeight(props)}px ${getBorderColor(props)}`, ";border-radius:", props => getBorderRadius(props), "px;border-top:", props => props.topBordered && `solid ${getBorderWeight(props)}px ${getBorderColor(props)}`, ";border-left:", props => props.leftBordered && `solid ${getBorderWeight(props)}px ${getBorderColor(props)}`, ";border-bottom:", props => props.bottomBordered && `solid ${getBorderWeight(props)}px ${getBorderColor(props)}`, ";border-right:", props => props.rightBordered && `solid ${getBorderWeight(props)}px ${getBorderColor(props)}`, ";padding:", props => props.padding * props.theme.new.spacer, "px;padding-left:", props => props.paddingLeft * props.theme.new.spacer, "px;padding-right:", props => props.paddingRight * props.theme.new.spacer, "px;padding-top:", props => props.paddingTop * props.theme.new.spacer, "px;padding-bottom:", props => props.paddingBottom * props.theme.new.spacer, "px;", props => spaceStyles(props), " ", props => boxColorsStyles(props), " ", props => props.customStyles && props.customStyles(props), process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkxpbmVhckxheW91dC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0YrQyIsImZpbGUiOiJMaW5lYXJMYXlvdXQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBzdHlsZWQgZnJvbSAnQGVtb3Rpb24vc3R5bGVkJztcbmltcG9ydCBpbmplY3RFbGVtZW50QmV0d2VlbkNoaWxkRWxlbWVudHMgZnJvbSAnfi9jb3JlL3V0aWxzL2pzSGVscGVycy9pbmplY3RFbGVtZW50QmV0d2VlbkNoaWxkRWxlbWVudHMnO1xuaW1wb3J0IHsgYm94Q29sb3JzU3R5bGVzIH0gZnJvbSAnfi9jb3JlVUkvdXRpbHMvaW5mZXJlU3R5bGUnO1xuaW1wb3J0IHNwYWNlU3R5bGVzIGZyb20gJ34vY29yZVVJL3V0aWxzL3N0eWxlU3lzdGVtJztcbmltcG9ydCB3aXRoTWVkaWEgZnJvbSAnfi9jb3JlL3V0aWxzL21lZGlhSGVscGVycy93aXRoTWVkaWEnO1xuXG5pbXBvcnQgU3BhY2VyIGZyb20gJy4vU3BhY2VyJztcblxuY29uc3QgZ2V0SW50cmFJdGVtc1NwYWNlciA9IChwcm9wcykgPT4ge1xuICBsZXQgc2l6ZVByb3AgPSBudWxsO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuICBzaXplUHJvcCA9IHByb3BzLnNwYWNlQmV0d2VlbiA/IHBhcnNlRmxvYXQocHJvcHMuc3BhY2VCZXR3ZWVuKSA6IG51bGw7XG4gIGlmICghc2l6ZVByb3ApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuICByZXR1cm4gPFNwYWNlciBzaXplPXtzaXplUHJvcH0gLz47XG59O1xuXG5jb25zdCBnZXRCb3JkZXJDb2xvciA9IChwcm9wcykgPT4ge1xuICBsZXQgY29sb3IgPSAnbGlnaHQnO1xuICBpZiAocHJvcHMuYm9yZGVyQ29sb3IpIHtcbiAgICBjb2xvciA9IHByb3BzLmJvcmRlckNvbG9yO1xuICB9XG5cbiAgcmV0dXJuIHByb3BzLnRoZW1lLmJvcmRlcnMuY29sb3JbY29sb3JdIHx8IHByb3BzLmJvcmRlckNvbG9yO1xufTtcblxuY29uc3QgZ2V0Qm9yZGVyV2VpZ2h0ID0gKHByb3BzKSA9PiB7XG4gIGxldCB3ZWlnaHQgPSAndGhpbic7XG4gIGlmIChwcm9wcy5ib3JkZXJXZWlnaHQpIHtcbiAgICB3ZWlnaHQgPSBwcm9wcy5ib3JkZXJXZWlnaHQ7XG4gIH1cblxuICByZXR1cm4gcHJvcHMudGhlbWUuYm9yZGVycy5zaXplW3dlaWdodF07XG59O1xuXG5jb25zdCBnZXRCb3JkZXJSYWRpdXMgPSAocHJvcHMpID0+IHtcbiAgbGV0IHJhZGl1cyA9ICdub3JtYWwnO1xuICBpZiAocHJvcHMuYm9yZGVyUmFkaXVzKSB7XG4gICAgcmFkaXVzID0gcHJvcHMuYm9yZGVyUmFkaXVzO1xuICB9XG5cbiAgcmV0dXJuIHByb3BzLnRoZW1lLmJvcmRlcnMucmFkaXVzW3JhZGl1c10gfHwgcmFkaXVzO1xufTtcblxuY29uc3QgZ2V0SnVzdGlmeUNvbnRlbnQgPSAocHJvcHMpID0+IHtcbiAgaWYgKHByb3BzLnNwYWNlRXZlbmx5SnVzdGlmaWVkKSB7XG4gICAgcmV0dXJuICdzcGFjZS1ldmVubHknO1xuICB9IGVsc2UgaWYgKHByb3BzLnNwYWNlQXJvdW5kSnVzdGlmaWVkKSB7XG4gICAgcmV0dXJuICdzcGFjZS1hcm91bmQnO1xuICB9IGVsc2UgaWYgKHByb3BzLnNwYWNlQmV0d2Vlbkp1c3RpZmllZCkge1xuICAgIHJldHVybiAnc3BhY2UtYmV0d2Vlbic7XG4gIH0gZWxzZSBpZiAocHJvcHMuc3RyZXRjaEp1c3RpZmllZCkge1xuICAgIHJldHVybiAnc3RyZXRjaCc7XG4gIH0gZWxzZSBpZiAocHJvcHMudG9wSnVzdGlmaWVkKSB7XG4gICAgcmV0dXJuICdmbGV4LXN0YXJ0JztcbiAgfSBlbHNlIGlmIChwcm9wcy5jZW50ZXJKdXN0aWZpZWQpIHtcbiAgICByZXR1cm4gJ2NlbnRlcic7XG4gIH0gZWxzZSBpZiAocHJvcHMuYm90dG9tSnVzdGlmaWVkKSB7XG4gICAgcmV0dXJuICdmbGV4LWVuZCc7XG4gIH0gZWxzZSBpZiAocHJvcHMubGVmdEp1c3RpZmllZCkge1xuICAgIHJldHVybiAnZmxleC1zdGFydCc7XG4gIH0gZWxzZSBpZiAocHJvcHMucmlnaHRKdXN0aWZpZWQpIHtcbiAgICByZXR1cm4gJ2ZsZXgtZW5kJztcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbmNvbnN0IGdldEFsaWduSXRlbXMgPSAocHJvcHMpID0+IHtcbiAgaWYgKHByb3BzLnN0cmV0Y2hBbGlnbmVkKSB7XG4gICAgcmV0dXJuICdzdHJldGNoJztcbiAgfSBlbHNlIGlmIChwcm9wcy5jZW50ZXJBbGlnbmVkKSB7XG4gICAgcmV0dXJuICdjZW50ZXInO1xuICB9IGVsc2UgaWYgKHByb3BzLnRvcEFsaWduZWQpIHtcbiAgICByZXR1cm4gJ2ZsZXgtc3RhcnQnO1xuICB9IGVsc2UgaWYgKHByb3BzLmJvdHRvbUFsaWduZWQpIHtcbiAgICByZXR1cm4gJ2ZsZXgtZW5kJztcbiAgfSBlbHNlIGlmIChwcm9wcy5sZWZ0QWxpZ25lZCkge1xuICAgIHJldHVybiAnZmxleC1zdGFydCc7XG4gIH0gZWxzZSBpZiAocHJvcHMucmlnaHRBbGlnbmVkKSB7XG4gICAgcmV0dXJuICdmbGV4LWVuZCc7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5jb25zdCBTdHlsZWRMaW5lYXJMYXlvdXQgPSB3aXRoTWVkaWEoc3R5bGVkLmRpdmBcbiAgd2lkdGg6ICR7cHJvcHMgPT4gKHByb3BzLmZ1bGxXaWR0aCA/ICcxMDAlJyA6IHByb3BzLndpZHRoKX07XG4gIGhlaWdodDogJHtwcm9wcyA9PiAocHJvcHMuZnVsbEhlaWdodCA/ICcxMDAlJyA6IHByb3BzLmhlaWdodCl9O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiAke3Byb3BzID0+IChwcm9wcy5yb3cgPyAncm93JyA6ICdjb2x1bW4nKX07XG4gIGZsZXgtZ3JvdzogJHtwcm9wcyA9PiAocHJvcHMuZ3JvdyA/IDEgOiBudWxsKX07XG4gIGp1c3RpZnktY29udGVudDogJHtwcm9wcyA9PiBnZXRKdXN0aWZ5Q29udGVudChwcm9wcykgfHwgJ2ZsZXgtc3RhcnQnfTtcbiAgYWxpZ24taXRlbXM6ICR7cHJvcHMgPT4gZ2V0QWxpZ25JdGVtcyhwcm9wcykgfHwgJ2NlbnRlcid9O1xuXG4gIGJvcmRlcjogJHtwcm9wcyA9PiBwcm9wcy5ib3JkZXJlZCAmJiBgc29saWQgJHtnZXRCb3JkZXJXZWlnaHQocHJvcHMpfXB4ICR7Z2V0Qm9yZGVyQ29sb3IocHJvcHMpfWB9O1xuICBib3JkZXItcmFkaXVzOiAke3Byb3BzID0+IGdldEJvcmRlclJhZGl1cyhwcm9wcyl9cHg7XG4gIGJvcmRlci10b3A6ICR7cHJvcHMgPT4gcHJvcHMudG9wQm9yZGVyZWQgJiYgYHNvbGlkICR7Z2V0Qm9yZGVyV2VpZ2h0KHByb3BzKX1weCAke2dldEJvcmRlckNvbG9yKHByb3BzKX1gfTtcbiAgYm9yZGVyLWxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMubGVmdEJvcmRlcmVkICYmIGBzb2xpZCAke2dldEJvcmRlcldlaWdodChwcm9wcyl9cHggJHtnZXRCb3JkZXJDb2xvcihwcm9wcyl9YH07XG4gIGJvcmRlci1ib3R0b206ICR7cHJvcHMgPT4gcHJvcHMuYm90dG9tQm9yZGVyZWQgJiYgYHNvbGlkICR7Z2V0Qm9yZGVyV2VpZ2h0KHByb3BzKX1weCAke2dldEJvcmRlckNvbG9yKHByb3BzKX1gfTtcbiAgYm9yZGVyLXJpZ2h0OiAke3Byb3BzID0+IHByb3BzLnJpZ2h0Qm9yZGVyZWQgJiYgYHNvbGlkICR7Z2V0Qm9yZGVyV2VpZ2h0KHByb3BzKX1weCAke2dldEJvcmRlckNvbG9yKHByb3BzKX1gfTtcblxuICBwYWRkaW5nOiAke3Byb3BzID0+IHByb3BzLnBhZGRpbmcgKiBwcm9wcy50aGVtZS5uZXcuc3BhY2VyfXB4O1xuICBwYWRkaW5nLWxlZnQ6ICR7cHJvcHMgPT4gcHJvcHMucGFkZGluZ0xlZnQgKiBwcm9wcy50aGVtZS5uZXcuc3BhY2VyfXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAke3Byb3BzID0+IHByb3BzLnBhZGRpbmdSaWdodCAqIHByb3BzLnRoZW1lLm5ldy5zcGFjZXJ9cHg7XG4gIHBhZGRpbmctdG9wOiAke3Byb3BzID0+IHByb3BzLnBhZGRpbmdUb3AgKiBwcm9wcy50aGVtZS5uZXcuc3BhY2VyfXB4O1xuICBwYWRkaW5nLWJvdHRvbTogJHtwcm9wcyA9PiBwcm9wcy5wYWRkaW5nQm90dG9tICogcHJvcHMudGhlbWUubmV3LnNwYWNlcn1weDtcblxuICAke3Byb3BzID0+IHNwYWNlU3R5bGVzKHByb3BzKX1cbiAgJHtwcm9wcyA9PiBib3hDb2xvcnNTdHlsZXMocHJvcHMpfVxuICAke3Byb3BzID0+IHByb3BzLmN1c3RvbVN0eWxlcyAmJiBwcm9wcy5jdXN0b21TdHlsZXMocHJvcHMpfVxuYCk7XG5cbmV4cG9ydCBjb25zdCBMaW5lYXJMYXlvdXQgPSBwcm9wcyA9PiAoXG4gIDxTdHlsZWRMaW5lYXJMYXlvdXQgey4uLnByb3BzfT5cbiAgICB7aW5qZWN0RWxlbWVudEJldHdlZW5DaGlsZEVsZW1lbnRzKFxuICAgICAgcHJvcHMuY2hpbGRyZW4sIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgcmVhY3QvcHJvcC10eXBlc1xuICAgICAgZ2V0SW50cmFJdGVtc1NwYWNlcihwcm9wcyksXG4gICAgICB0cnVlLFxuICAgICl9XG4gIDwvU3R5bGVkTGluZWFyTGF5b3V0PlxuKTtcblxuZXhwb3J0IGNvbnN0IENvbHVtbiA9IHByb3BzID0+IChcbiAgPExpbmVhckxheW91dCBjb2x1bW4gey4uLnByb3BzfSAvPlxuKTtcblxuZXhwb3J0IGNvbnN0IFJvdyA9IHByb3BzID0+IChcbiAgPExpbmVhckxheW91dCByb3cgey4uLnByb3BzfSAvPlxuKTtcblxuZXhwb3J0IGNvbnN0IEJveCA9IHByb3BzID0+IChcbiAgPExpbmVhckxheW91dCB7Li4ucHJvcHN9IC8+XG4pO1xuIl19 */"));
const LinearLayout = props => React.createElement(StyledLinearLayout, props, injectElementBetweenChildElements(props.children, // eslint-disable-line react/prop-types
getIntraItemsSpacer(props), true));

// these sizes are arbitrary and you can set them to whatever you wish

/* eslint-disable react/prop-types */

function Wrapper({
  children,
  theme = defaultTheme
}) {
  return React.createElement("div", null, React.createElement(emotionTheming.ThemeProvider, {
    theme: theme
  }, React.createElement(LinearLayout, {
    row: true,
    leftJustified: true,
    topAligned: true
  }, children)));
}

module.exports = Wrapper;
