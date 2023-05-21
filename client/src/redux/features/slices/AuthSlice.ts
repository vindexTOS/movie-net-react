import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'universal-cookie'
import jwt from 'jwt-decode'
const initialState = {
  error: '',
  username: '',
  password: '',
  userDecoded: {},
}

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    getEmail: (state, action) => {
      state.username = action.payload
    },
    getPassword: (state, action) => {
      state.password = action.payload
    },

    getError: (state, action) => {
      state.error = action.payload
    },
    getCookies: (state) => {
      const cookies = new Cookies()

      state.userDecoded = jwt(cookies.get('jwt_authorization'))
    },
    LogOut: (state) => {
      const cookies = new Cookies()
      state.userDecoded = {}
      cookies.remove('jwt_authorization')
    },
  },
})

export default AuthSlice.reducer
export const {
  getError,
  getEmail,
  getPassword,
  getCookies,
  LogOut,
} = AuthSlice.actions
