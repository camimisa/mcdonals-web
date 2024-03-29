import React from 'react'
import { Container, Grid, List, ListItem, ListItemText, Button } from '@material-ui/core'
import { GuardarCompra, EliminarCarrito } from "../../../utils/utils";
import { useNavigate } from "react-router-dom";

const Confirmation = ({ prevStep, nextStep, values }) => {
  let navigate = useNavigate();
  console.log(values);
  const {cliente, medioDePago, sucursal} = values
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  return (
    <Container  component="main" maxWidth="xs">
      <div>
        <List>
          <ListItem>
            <ListItemText primary="Nombre" secondary={cliente}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Medio de Pago" secondary={medioDePago}/>
          </ListItem>
          <ListItem>
            <ListItemText primary="Sucursal" secondary={sucursal}/>
          </ListItem>
        </List>

        <br />
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Button 
              onClick={ Previous }
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              Previous
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button 
              onClick={() => {
                  GuardarCompra(values);
                  alert("TEST: Compra generada");
                  EliminarCarrito();
                  navigate("/");
              }}
              fullWidth
              variant="contained"
              color="primary"
            >
              Confirm & Continue
            </Button>
          </Grid>
        </Grid>
      </div>
    </Container>
  )
}

export default Confirmation