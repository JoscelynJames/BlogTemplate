import React, { Component } from 'react'
// CSS imports
import './App.css'
import theme from './theme.js'

// Material-UI imports
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import DatePicker from 'material-ui/DatePicker'

// Apply custom theme to the Material-UI theme to pass through MuiThemeProvider
const customTheme = getMuiTheme(theme)
class App extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={customTheme}>
        <div className="App">Hey there</div>
      </MuiThemeProvider>
    )
  }
}

export default App
