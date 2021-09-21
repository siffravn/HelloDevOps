import logo from './logo.svg';
import './App.css';
import {TextField, Button, Grid} from "@material-ui/core"
import GiraffeStore from "./GiraffeStore";
import {observer} from "mobx-react-lite";

const giraffeStore = new GiraffeStore();



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
           <Button
               variant="contained"
               color="primary"
               onClick={()=>giraffeStore.giraffes.push("Elmer")}
           >Tilføj Giraf</Button>
        </Grid>
          <ul>
              {giraffeStore.giraffes.map((giraffeName,key)=>
                  <li key={key}>{giraffeName}</li>
              )}
          </ul>
      </header>
    </div>
  );
}

export default observer(App);
