import React from 'react';
import ReactDOM from 'react-dom'
import {Msg} from './module.js'

function App(){
  return <div>hello<Msg text='world'/></div> 
}

ReactDOM.render(<App />,document.querySelector('#root') );
