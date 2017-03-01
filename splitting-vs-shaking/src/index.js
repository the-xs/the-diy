import React from 'react';
import ReactDom from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';

const App = () => (
  <MuiThemeProvider>
    <TextField hintText="my cool hint text" />
  </MuiThemeProvider>
);

ReactDom.render(<App />, document.body);
