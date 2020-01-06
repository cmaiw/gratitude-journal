import React from 'react';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import defaultTheme from './themes/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EntryInputFormNewEntryByDate from './pages/EntryInputFormNewEntryByDate';
import NavBar from './components/NavBar';
import JournalCover from './pages/JournalCover';
import Home from './pages/Home';
import EntryConfirmationPage from './pages/EntryConfirmationPage';
import About from './pages/About';

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Router>
          <Switch>
            <Route exact path="/">
              <JournalCover />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/new">
              <EntryInputFormNewEntryByDate />
            </Route>
            <Route exact path="/entry-confirmation">
              <EntryConfirmationPage />
            </Route>
            <Route exact path="/About">
              <About />
            </Route>
            <Route>
              <div>404 Not found</div>
            </Route>
          </Switch>
          <NavBar />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
