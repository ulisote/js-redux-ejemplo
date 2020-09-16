import {createStore} from 'redux';

const contador = document.getElementById("contador");
const btninc = document.getElementById("incrementar");
const btndec = document.getElementById("decrementar");

const INITIAL_STATE = {
   counter: 0
}

//Reducer
function counterApp(state = INITIAL_STATE, action) {
    switch(action.type){
      case 'Incremento':
      return { counter: state.counter + 1 }
      case 'Decremento':
      return { counter: state.counter - 1 }
      default: return state;
    }
}

const store = createStore(counterApp);

store.subscribe(()=>{
  const state = store.getState();
  contador.innerText = state.counter;
})

btninc.addEventListener('click', () =>{
  store.dispatch({ 
    type:'Incremento',

  })
})
btndec.addEventListener('click', () =>{
  store.dispatch({ 
    type:'Decremento',
    
  })
})