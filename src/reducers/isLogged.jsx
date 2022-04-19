export const isLoggedReducer = (state = false, action) => {
  switch(action.type){
    case 'SIGN_IN': return true;
    default: return false;
  }
}