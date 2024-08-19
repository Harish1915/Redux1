
this is synchronous action's

Redux:-

globally we r using 3 ways:

1. Props:-> Prop drilling 
2. context-> doesn't suitable for langer scale application becomes stability will get difficult 
3. redux

Redux is a third party which manages the global state for the javascript applications

package:npm i redux



ex: const gymRecord={
    caloriesBurned:100,
    runningDistance:200,
    timeInSeconds:300
}
Run_FOR_HOUR->caloriesBurned increase , runningDistance increase , timeInSeconds increase

Redux contains 3 main core principals

1. Actions [ it an object which tells what to happen to my state]
2. Reducer [    states change will be handle by the reducer     ]
3. Store []

1.  Action  -> Run_FOR_HOUR


const runAction={
type:"Run_FOR_HOUR",
payload:100

}

action creator: it's a function which returns the action({}will return)

const runActionCreator=()=>{
    return {
type:"Run_FOR_HOUR",
payload:100

}
}

2. Reducer: it's a pure function , which manipulates  the state based on the action 
by default, it will receive ,state and action  as a parameters


const runReducer=(state, action)=>{
    switch(action.type){
        case "RUN_FOR_HOUR"
        return {...state,caloriesBurned:state.caloriesBurned+100,runningDistance:state.runningDistance+action.payload,timeInSeconds:state.timeInSeconds+60*60*60}
    }
 default:
 return state
}


3. Store: is isolated container, which holds the application  data  , any component can take the data from the store directly instead of managing locally
[here we can't use useState]

["redux will provide createStore, which accepts the reducer
"]
React-Redux: it's a library which "bridges the rect and redux libraries

React --data--- Redux
Redux---data----React

for this bidirectional we will use 2 hooks:

 1. useSelector: Redux to React
 2. useDispatch:React to Redux

legacy_createStore it's like a container 
like library 
it have data 1 date 2 ...
gym data ....like this 

code flow 
step 1 action is connected to reducer
step 2 reducer is connected to  store 
step 3 store (step1 and 2)=connected to react 
step 4 react to redux
Provider(it's like a HOC which return the enhanced(meruguparachada,) component ) is used to configuration the data react to redux



TOPICS:
1. Redux introduction
2. How to write actions, reducers store
3. configuration of redux with react
4. How to use useSelector and useDispatch

Tasks:
1. Repeat the class
2. Redux Importance compared with context
3. How to use multiple reducers in redux 
4. Take a (fruit data) dat and use in react using redux 
5. Todo using redux




 So, let’s create a new React project with Vite by executing the following command:
 npm create vite@latest

 First, you’ll be asked for project name:npm create vite@latest
? Project name: › vite-project

