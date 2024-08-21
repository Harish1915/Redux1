

combineReducers:
 
 It is a method provide redux,where we can configure all reducers in the application
 it will accept object{}

 const singleReducer=combineReducers({
    profile:profileReducer,
    gym:gymReducer,
    .
    .
    .
    .

 })

 Redux:
 1. Synchronous actions as soon as dispatch action takes places state change done immediately
 2. Asynchronous actions involves web api usage like data fetching,timers 

  redux thunk: it's a middleware enables to make async actions in redux apps

  generally every action creator returns the single action 
  redux-thunk will make to dispatch multiple actions instead of single action

  ex: product Api---> redux store---> any component   can able to access, any component can make changes universally 

  steps:
  1. npm i redux-thunk
  2. configure the redux thunk in the store
  3. create actin creator  which returns the functions where we can dispatch multiple actions 
  PRODUCT_FETCH_SUCCESS,
  PRODUCT_FETCH_FAIL,
  PRODUCT_FETCH_LOAD
  4.  Each action can have corresponding state changes 


Tasks:
1. what is middle ware  list out few middleware
2. what is the redux thunk
3. what is the difference between redux-thunk  and redux saga
4. what is the different between normal redux and redux toolkit 
5. what is the async and how to handle async actions in redux applications
6. TRy recipe api with redux thunk
7. flow diagram of redux app with thunk


