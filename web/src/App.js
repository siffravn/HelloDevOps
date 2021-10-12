import logo from './logo.svg';
import './App.css';
import {TextField, Button, Grid, Container, Box} from "@material-ui/core"
import GiraffeStore from "./GiraffeStore";
import {observer} from "mobx-react-lite";

const giraffeStore = new GiraffeStore();



function App() {
  return (
    <Container className="App" p>
        <header className="App-header">
            <Box sx={{pt: 16}}>
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

            </Box>
        </header>
    </Container>
  );
}

export function sillyMethod(num1, num2) {
    return num1 + num2
}

export default observer(App);
