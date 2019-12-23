import React from 'react';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import defaultTheme from './themes/theme';
import Checkbox from './components/FavCheckbox';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <div>
          Gratefully
          <Checkbox />
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
