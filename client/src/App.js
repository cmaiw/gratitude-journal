import React from 'react';
import GlobalStyles from './GlobalStyles';
import { ThemeProvider } from 'emotion-theming';
import defaultTheme from './themes/theme';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewEntry from './pages/NewEntry';
import styled from '@emotion/styled';

import Entries from './pages/Entries';
import NavBar from './components/NavBar';
import JournalCover from './pages/JournalCover';
import Home from './pages/Home';
import ConfirmationSubmit from './pages/ConfirmationSubmit';
import ConfirmationEdit from './pages/ConfirmationEdit';
import About from './pages/About';
import EntryCard from './components/EntryCard';
import EditEntry from './pages/EditEntry';
import ConfirmationBeforeDelete from './pages/ConfirmationBeforeDelete';
import ConfirmationAfterDelete from './pages/ConfirmationAfterDelete';

const ErrorMessage = styled.div`
  display: flex;
  align-self: center;
  text-align: center;
  font-family: 'Cookie', cursive;
  font-size: 48px;
  justify-content: center;
  margin: 30px;
`;

function App() {
  return (
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
          <Route exact path="/journal">
            <Entries />
          </Route>
          <Route exact path="/new">
            <NewEntry />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/submit/confirm">
            <ConfirmationSubmit />
          </Route>
          <Route exact path="/entries/:entryId">
            <EntryCard />
          </Route>
          <Route exact path="/entries/edit/:entryId">
            <EditEntry />
          </Route>
          <Route exact path="/edit/confirm">
            <ConfirmationEdit />
          </Route>
          <Route exact path="/entries/preparedelete/:entryId">
            <ConfirmationBeforeDelete />
          </Route>
          <Route exact path="/entries/delete/:entryId">
            <ConfirmationAfterDelete />
          </Route>
          <Route>
            <ErrorMessage>
              <span role="img" aria-label=":sunflower:">
                🌻 Sorry, Error 404! The Item you requested was not found, next time maybe, stay
                happy!
              </span>
            </ErrorMessage>
          </Route>
        </Switch>
        <NavBar />
      </Router>
    </ThemeProvider>
  );
}

export default App;
