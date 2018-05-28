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

console.log(store.getState());
// store.dispatch({type: 'INCREMENT'});

const render = () => {
    document.body.innerText = store.getState();
};

store.subscribe(render);
  render();

console.log(store.getState());

document.addEventListener('click', () => {
  store.dispatch({ type: 'INCREMENT' });
});
