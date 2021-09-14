import logo from './logo.svg';
import './App.css';
import {TextField, Button} from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form>
          <TextField id="outlined-basic" label="Outlined" variant="outlined"></TextField>
        </form>
        <Button variant="contained" color="primary">Primary</Button>
      </header>
    </div>
  );
}

export default App;
