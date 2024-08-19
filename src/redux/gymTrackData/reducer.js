const gymRecord = { // state 
    caloriesBurned: 100,
    runningDistance: 200,
    timeInSeconds: 300,
  };
  
  export const runReducer = (state = gymRecord, action) => {
    switch (action.type) {
      case "RUN_FOR_HOUR":
        return {
          ...state,
          caloriesBurned: state.caloriesBurned + 100,
          runningDistance: state.runningDistance + action.payload,
          timeInSeconds: state.timeInSeconds + 60 * 60 * 60,
        };
        case "RUN_FOR_TWO_HOUR":
          return {
            ...state,
            caloriesBurned: state.caloriesBurned + 200,
            runningDistance: state.runningDistance + action.payload,
            timeInSeconds: state.timeInSeconds +2*(60 * 60 * 60)
          };
  
      default:
        return state;
    }
  };
  