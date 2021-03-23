import { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
const Composante2 = () => {
    const[text,setText]=useState("")
    const [increment,setIncrement] = useState(0)
  useEffect(()=>{
    //setIncrement(increment+1)
    setText("Je suis lancé au démarrage "+increment)
  },[increment])
  return (
    <Grid container spacing={5} class="text-justify border"> Ceci est la composante 2
      <Grid container item xs={12} spacing={3} class="text-justify">
        <div>{text}</div>
      </Grid>
    </Grid>
  );
};
export default Composante2;