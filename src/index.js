import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloClient, createNetworkInterface } from 'react-apollo';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import dotenv from 'dotenv';

import Routes from './routes';

dotenv.config();
injectTapEventPlugin();

const networkInterface = createNetworkInterface({ uri: 'http://localhost:3030/graphql' });

const client = new ApolloClient({
  networkInterface,
});

const App = (
  <MuiThemeProvider>
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  </MuiThemeProvider>
);

ReactDOM.render(App, document.getElementById('root'));
