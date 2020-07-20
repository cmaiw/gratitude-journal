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
          height: 100vh;
          width: 100vw;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 16px;
          margin: 0;
          background-color: ${theme.colors.ptimary};
          font-family: 'Dosis', sans-serif;
          color: ${theme.colors.font};
          background-image: url(/images/backgroundsplashes1.jpg);
          background-size: fill;
          background-repeat: no-repeat;
          background-position: center;
          height: 100%;
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
