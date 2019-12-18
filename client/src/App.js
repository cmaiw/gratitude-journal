import React from 'react';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import defaultTheme from './themes/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <div>Gratefully</div>
      </ThemeProvider>
    </>
  );
}

export default App;
