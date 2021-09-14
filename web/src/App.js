import logo from './logo.svg';
import './App.css';
import {TextField, Button, Grid} from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Grid
            container
            spacing={4}
            direction="row"
            justifyContent="center"
            alignItems="center"
        >
           <form>
             <TextField id="outlined-basic" label="Outlined" variant="outlined"></TextField>
           </form>
           <Button variant="contained" color="primary">Primary</Button>
        </Grid>
      </header>
    </div>
  );
}

export default App;
