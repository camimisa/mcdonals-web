import React, { Component } from 'react'
import UserDetails from './steps/UserDetails'
import Confirmation from './steps/Confirmation'


export default class SectionForm extends Component {

  state = {
    step: 1,
    cliente: '',
    fecha: Date.now(),
    medioDePago: '', 
    sucursal: '',
  }

  // cliente: "prueba",
  //   total: 1000,
  //   fecha: Date.now(),
  //   medioDePago: "Tarjeta de debito",

  // go back to previous step
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  }

  // proceed to the next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  }

  // Handle fields change
  handleChange = input => e => {
    console.log(input + " " + e.target.value + " e " + e.target)
    this.setState({ [input]: e.target.value });
  }

  render() {
    const { step } = this.state;
    const { cliente, medioDePago, sucursal } = this.state;
    const values = { cliente, medioDePago, sucursal}
    
    switch(step) {
      case 1: 
        return (
          <UserDetails 
            nextStep={ this.nextStep }
            handleChange={ this.handleChange }
            values={ values }
          />
        )
      case 2: 
          return (
            <Confirmation 
              prevStep={ this.prevStep }
              nextStep={ this.nextStep }
              values={ values }
            />
          )
        // case 3: 
        //   return (
        //     <Success />
        //   )
      default: 
          // do nothing
    }
  }


  
}