import React from 'react';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import defaultTheme from './themes/theme';
import { UniversalButton } from './components/UniversalButton';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <div>
          Gratefully
          <UniversalButton />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
