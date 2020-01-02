import React from 'react';
import { Global, css } from '@emotion/core';
import backgroundsplashes from '../public/images/backgroundsplashes1.jpg';
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
          font-size: 16px;
          margin: 0;
          background: ${theme.colors.background};
          font-family: 'Roboto', sans-serif;
          color: ${theme.colors.font};
          height: 100vh;
          width: 100vw;
          background-image: url(${backgroundsplashes});
          background-size: cover;
        }
      `}
    />
  );
}
export default GlobalStyles;
