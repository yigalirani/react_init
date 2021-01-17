import React from 'react';
import ReactDOM from 'react-dom'
import {Msg} from './module.js'

var importObject = {
    env: {
      abort: () => console.log("Abort!")
    }
  };

function App(){
  function set_it(x){
    set_obj(x)
  }
  function get_wasm(){
    WebAssembly.instantiateStreaming(fetch('build/optimized.wasm',{cache: 'no-cache'}),importObject).then(set_it)
  }
  function get_result(){
    if (!obj)
      return null
    return obj.instance.exports.add(2,3)
  }
  var [obj,set_obj]=React.useState(null)
  React.useEffect(get_wasm,[])
  return <div>hello{get_result()}<Msg text='world'/></div> 
}

ReactDOM.render(<App />,document.querySelector('#root') );
