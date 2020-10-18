import React from 'react';
import Contador from './Contador'
import LabelRelogio from './LabelRelogio' 
import Botao from './Botao'

import './App.css';

function App() {
  return (
       <div>
         <LabelRelogio nome="Cronometro" />
         <Contador />
         <Botao onclick={()=>this.zerarCronometro()} lalbel="zerar" />
       
       </div>
       
  
  );
}

export default App;
