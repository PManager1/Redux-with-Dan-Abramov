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

// store.dispatch ({ type: 'INCREMENT' });
// console.log(' state.getState =', store.getState());


const render = () => {
    document.body.innerText = store.getState();
};



// anytime an action is dispatched, this store.subscribe will be called.
store.subscribe(render);
render();

document.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT'});
});


// it doesnt fire the very first time. so the very first 0 never gets rendered.
