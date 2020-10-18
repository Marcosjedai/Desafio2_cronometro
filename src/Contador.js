import React from 'react';
import Botao from './Botao'
import LabelRelogio from './LabelRelogio'
import './App.css';

class Contador extends React.Component {
  constructor(props){
    super(props);
    this.state={
      centesimo: 0, 
      segundos: 0,
      minutos: 0,
      hora: 0,
      stop: false,
      nameStop: "Stop",
      name: "Relógio", 
      parcial: ""
    };
  }







   zerarCronometro() {
      this.setState.centesimo =0 
      this.setState.segundos = 0
      this.setState.minutos = 0
      this.setState.hora = 0
      this.setState.parcial = ""
   }
  
  parcial(){
    let p = this.state.hora+ ":"+ this.state.minutos+ ":"+ this.state.segundos + this.state.centesimo+ "\n\n"
    this.setState.parcial = this.state.parcial + p
  }
  
  pararTempo(){
    this.setState({ 
        stop: !this.state.stop 
      })
        if (this.state.stop){
           this.setState({
               nameStop: "stop"
           })  
        }
      
    else
     {this.setState({
         nameStop: "Play"
     })}
  }

  incrementarCentesimo () {
    if (this.state.stop === false){
      this.setState(
        function (state, props) {
          if (state.centesimos >= 99){
            this.zerarCentesimos();
            this.incrementarSegundo(state);
          }
          return({ centesimos: state.centesimos + 1})
        }
      )
    }
  }

  incrementarSegundo () {
    if (this.state.stop === false){
      this.setState(
         function (state, props) {
          if (state.segundos >= 59){
            this.zerarSegundos();
            this.incrementarMinuto(state);
          }  
          return({ segundos: state.segundos + 1})
         }
      )
    }
  }
  
  incrementarMinuto () {
    if (this.state.stop === false){
      this.setState(
        function (state, props) {
          if (state.minutos >= 59){
            this.zerarMinutos();
            this.incrementarHora(state);
          }
          return({ minutos: state.minutos + 1 })
        }
      )
    }
  }
  
  incrementarHora (state) {
    this.setState(() => { 
      return {horas: state.horas +1}
    })
  };

  zerarCentesimos () {
    this.setState({
      centesimos: 0
    })
  }

  zerarSegundos () {
    this.setState({ 
      segundos: 0 
    })
  }

  zerarMinutos (){
      this.setState({
          minutos:0
      })
  }
 zerarHoras () {
    this.setState({
      horas: 0
    })
  }

  componentDidMount(){
    this.timer = setInterval(
      () => this.incrementarCentesimo(), 10)
  }
  

  render(){

    return (
      <div>
        
        <Contador hora={this.state.hora} minutos={this.state.minutos} segundos={this.state.segundos} centesimo = {this.state.centesimo} />
        <LabelRelogio name={this.state.name} />
        <Botao onClick={() => this.zerarCronometro()} label={"Zerar"} />
        <Botao onClick={() => this.pararTempo()} label={this.state.nameStop} />
        <Botao onClick={() => this.parcial()} label={"Pacial"} />
        <LabelRelogio name={this.state.parcial} />
      </div>
    );
  }
}
export default Contador