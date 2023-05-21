import { ThunkDispatch, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { getError } from '../slices/AuthSlice'
import jwt from 'jwt-decode'
import Cookies from 'universal-cookie'
type LoginType = {
  password: string
  username: string
  dispatch: ThunkDispatch<any, any, any>
}

const Login = createAsyncThunk('login/post', async (val: LoginType) => {
  const loginAPi = `http://localhost:5119/api/Authorization/LogIn`
  const cookies = new Cookies()
  if (val.password && val.username) {
    const data = await axios
      .post(loginAPi, {
        username: val.username,
        password: val.password,
      })
      .then((res) => {
        const token = res.data
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
        const decoded: any = jwt(token)
        cookies.set('jwt_authorization', token, {
          expires: new Date(decoded.exp * 1000),
        })
        const userCookieData = jwt(cookies.get('jwt_authorization'))
        return userCookieData
      })

      .catch((err) => {
        console.log(err)
        val.dispatch(getError(err))
      })
    return data
  }
})

const RegisterThunk = createAsyncThunk(
  'Register/post',
  async (val: LoginType) => {
    const RegisterAPi = `http://localhost:5119/api/Authorization/Register`

    const cookies = new Cookies()
    if (val.password && val.username) {
      const data = await axios
        .post(RegisterAPi, {
          username: val.username,
          password: val.password,
        })
        .then((res) => {
          const token = res.data
          axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
          const decode: any = jwt(token)
          cookies.set(`jwt_authorization`, token, {
            expires: new Date(decode.exp * 1000),
          })
          const userCookieData = jwt(cookies.get('jwt_authorization'))
          return userCookieData
        })

        .catch((err) => {
          console.log(err)
          val.dispatch(getError(err))
        })
      return data
    }
  },
)
export { Login, RegisterThunk }
