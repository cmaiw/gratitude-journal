import React from 'react';
import { Global, css } from '@emotion/core';

function GlobalStyles() {
  return (
    <Global
      styles={theme => css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        body {
          width: 100vw;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0;
          font-family: 'Dosis', sans-serif;
          color: ${theme.colors.font};
          background-color: #faf5eb;
          background-image: url(/images/linedpaper.png);
          background-size: fill;
          background-repeat: repeat;
          background-position: bottom right;
          bottom: 0;
          right: 0;
          z-index: -1;
          overflow: scroll;
          animation: fadein 1s;
          -moz-animation: fadein 1s;
          -webkit-animation: fadein 1s;
          @keyframes fadein {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @-moz-keyframes fadein {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @-webkit-keyframes fadein {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @-o-keyframes fadein {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        }
      `}
    />
  );
}
export default GlobalStyles;
