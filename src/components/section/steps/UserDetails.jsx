import React from 'react'
// import { makeStyles } from '@material-ui/core/styles';
import { Container, Typography, Grid, TextField, Button,Select,MenuItem } from '@material-ui/core'

const UserDetails = ({ nextStep, handleChange, values }) => {
  
  // for continue event listener
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  return (
    <Container  component="main" maxWidth="xs">
      <div>
        {/* <Typography  component="h1" variant="h5">
          Registrar la orden
        </Typography> */}
        <form>
          <Grid container spacing={2}>
              {/* Nombre */}
              <Grid item xs={12}>
              <div>Nombre:</div>
                <TextField 
                  // placeholder="Cliente"
                  // label="Nombre"
                  onChange={handleChange('cliente')}
                  defaultValue={values.cliente}
                  // variant="outlined"
                  autoComplete="cliente"
                  fullWidth
                />
              </Grid>
              <br />
              {/* Medio de pago */}
              <Grid item xs={12}>
                <div>Medio de Pago:</div>
                <Select
                  // placeholder="Medio de Pago"
                  value={values.medioDePago}
                  label="medioDePago"
                  onChange={handleChange('medioDePago')}
                  autoComplete="medioDePago"
                  style = {{width: '300px'}}
                >
                  <MenuItem value={'Debito'}>Debito</MenuItem>
                  <MenuItem value={'Credito'}>Credito</MenuItem>
                  <MenuItem value={'Efectivo'}>Efectivo</MenuItem>
                  </Select>

              
                  
                {/* <TextField 
                  placeholder="Medio de Pago"
                  label="medioDePago"
                  onChange={handleChange('medioDePago')}
                  defaultValue={values.medioDePago}
                  // variant="outlined"
                  autoComplete="medioDePago"
                  fullWidth
                /> */}
              </Grid>
              <br />
              {/* password */}
              {/* <Grid item xs={12}>
                <TextField 
                  placeholder="Password"
                  label="Password"
                  onChange={handleChange('password')}
                  defaultValue={values.password}
                  // variant="outlined"
                  autoComplete="password"
                  fullWidth
                  type="password"
                /> */}
              {/* </Grid> */}
          </Grid>
          <br />
          <Button 
            onClick={ Continue }
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Next
          </Button>
        </form>
      </div>
    </Container>
  )
}

export default UserDetails