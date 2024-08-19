
const profileData={
    USERNAME:"PREM"
}



export const profileReducer=(state=profileData,action)=>{
    switch(action.type){
case "CHANGE_USERNAME":
    return{ ...state,USERNAME:action.payload}
   
    default:
       return state;
    };
}