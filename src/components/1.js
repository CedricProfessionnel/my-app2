import { useState } from "react";
import { Button, Grid } from "@material-ui/core";
const Composante1 = () => {
  const [nombre1, setNombre1] = useState(0);
  const function1 = () => {
    setNombre1(nombre1 + 1);
    return nombre1;
  };
  var nombre2 = 0;
  const function2 = () => {
    nombre2++;
    console.log(nombre2)
    return nombre2;
  };

  return (
    <Grid container spacing={5} class="text-justify border"> Ceci est la composante 1
      <Grid container item xs={12} spacing={3} class="text-justify">
        <Button onClick={function1} class="btn btn-warning">
          Incrément
        </Button>
        <div>{nombre1}</div>
      </Grid>
      <Grid container item xs={12} spacing={3} class="text-justify">
        <Button onClick={function2} class="btn btn-primary" >
          Incrément
        </Button>
        <div>{nombre2}</div>
      </Grid>
    </Grid>
  );
};
export default Composante1;
