let redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  // reducer function which contains two parameters which recives as default
    if(action.type === 'increment'){
        return {
            counter : state.counter + 1
        }
    }

    if(action.type === 'decrement'){
        return {
            counter : state.counter - 1
        }
    }

    return state;
};

const store = redux.createStore(counterReducer);

console.log(store.getState());

const counterSubscriber = () => {
  const latestState = store.getState(); // it will give us the latest state snapshot after it was updated

  console.log(latestState);
};

store.subscribe(counterSubscriber);

// create an dispatch actions

store.dispatch({ type: 'increment' }); // it is an method which dispatch an actions or operations which later will be perform by reducer function
// here actions is an javascript objects with a type property which acts as an identifier.

store.dispatch({type : 'decrement'});