import { useState } from 'react'
import { Button, ButtonGroup, Checkbox, FormControlLabel, TextField, Typography, Container, Grid, Paper, AppBar, Toolbar, IconButton, Box, Switch } from '@material-ui/core';
import { Save, Delete, Menu } from '@material-ui/icons';
import { makeStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { orange, green } from '@material-ui/core/colors'
import 'fontsource-roboto'

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createMuiTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    }
  })
  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: '100vh' }}>
        <Grid container direction="column">
          <Typography variant="h3">This is A Heading</Typography>
          <ButtonGroup variant="contained" color="primary">
            <Button>
              This is a Button
            </Button>
            <Button color="secondary">
              This is another Button
            </Button>
          </ButtonGroup>
          <Switch checked={darkMode} onClick={() => setDarkMode(!darkMode)} />
        </Grid>
      </Paper>
    </ThemeProvider>
  )
}

export default App;
