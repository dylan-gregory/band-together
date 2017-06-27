import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import './App.css';
import UserLogin from './components/UserLogin';
import Home from './components/Home';



var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();


const App = () => (
  <div className="App">
    <MuiThemeProvider>
      <div>
        <AppBar title='Band Together'>
          <Link to="/"><FlatButton>Home</FlatButton></Link>

          <Link to="/login"><FlatButton>Login</FlatButton></Link>
        </AppBar>

        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={UserLogin} />
        </main>
      </div>
    </MuiThemeProvider>
  </div>
);

// If I want to customize my own theme, I can do it below and set this as the muiTheme prop on the MuiThemeProvider

const muiTheme = getMuiTheme({

});

export default App;
