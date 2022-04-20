import { USER_INFO } from "../actions/types/user";

export default (state = {}, action) => {
  if(action.type === USER_INFO){
    state = JSON.parse(JSON.stringify(state))
    state = action.user
    return state;
  }
  return state;
}