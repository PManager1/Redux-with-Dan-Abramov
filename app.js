// reducer
console.log(' loading app.js file ');

const counter = (state = 0, action) => {
  switch(action.type){
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
    return state;
}
}

const { createStore } = Redux;
const store = createStore(counter);

store.dispatch ({ type: 'INCREMENT' });

console.log(' state.getState =', store.getState());

// anytime an action is dispatched, this store.subscribe will be called.
store.subscribe (() => {
    console.log(' calling the store.subscribe  method');
    document.body.innerText = store.getState();
  });

document.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT'});
});

// console.log(store.getState());
// store.dispatch({type: 'INCREMENT'});

// const createStore = (reducer) => {
//   let state;
//   let listeners = [];
//
//   const getState = () => state;
//
//   const dispatch = (action) => {
//     state = reducer(state, action);
//     listeners.forEach(listener => listener());
//   };
//
//   const subscribe = (listener) => {
//     listeners.push(listener);
//     return () => {
//       listeners = listeners.filter( l=> l !== listener );
//     };
//   };
//
//   dispatch ({   });
//   return {getState, dispatch, subscribe };
//
// }
//
//
// const render = () => {
//     document.body.innerText = store.getState();
// };
//
// store.subscribe(render);
//   render();
//
// console.log(store.getState());
//
// document.addEventListener('click', () => {
//   store.dispatch({ type: 'INCREMENT' });
// });
