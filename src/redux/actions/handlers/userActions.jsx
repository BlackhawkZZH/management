import { USER_INFO } from '../types/user'
import axios from "axios";


export const login = (user) => {
  
  return (dispatch) => {
    axios.post('http://localhost:8088/api/login', user).then(res => {
      dispatch(getUserInfo(res.data.user))
    })
  }

}

export const getUserInfo = (user) => ({
  type: USER_INFO,
  user
})