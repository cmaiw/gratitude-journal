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
          <Route exact path="/" component={JournalCover} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/journal" component={Entries} />
          <Route exact path="/new" component={NewEntry} />
          <Route exact path="/about" component={About} />
          <Route exact path="/submit/confirm" component={ConfirmationSubmit} />
          <Route exact path="/entries/:entryId" component={EntryCard} />
          <Route exact path="/entries/edit/:entryId" component={EditEntry} />
          <Route exact path="/edit/confirm" component={ConfirmationEdit} />
          <Route
            exact
            path="/entries/preparedelete/:entryId"
            component={ConfirmationBeforeDelete}
          />
          <Route exact path="/deleteconfirm" component={ConfirmationAfterDelete} />
          <ErrorMessage>
            <span role="img" aria-label=":sunflower:">
              🌻 Sorry, Error 404! The Item you requested was not found, next time maybe, stay
              happy!
            </span>
          </ErrorMessage>
        </Switch>
     <NavBar />
      </Router>
    </ThemeProvider>
  );
}

export default App;
