import { USER_INFO } from '../types/user'

export const getUserInfo = (user) => ({
  type: USER_INFO,
  user
})