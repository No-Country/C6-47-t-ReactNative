import axios from 'axios'
import jwt_decode from 'jwt-decode'
import dayjs from 'dayjs'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTokens } from '../../features/user/userSlice'
import { setLoading } from '../../features/posts/postsSlice'

const baseURL = 'http://localhost:8080'

export const useAxios = () => {
  const access_token = useSelector((state) => state.user.access_token)
  const refresh_token = useSelector((state) => state.user.refresh_token)
  const dispatch = useDispatch()

  const axiosInstance = axios.create({
    baseURL,
    withCredentials: true,
    headers: {
      'x-access-token': access_token
    }
  })

  axiosInstance.interceptors.request.use(async (req) => {
    dispatch(setLoading(true))
    if (access_token) {
      req.headers['x-access-token'] = access_token

      const tokenDecoded = jwt_decode(access_token)
      const isExpired = dayjs.unix(tokenDecoded.exp).diff(dayjs()) < 1

      if (!isExpired) return req

      const res = await axios.post(
        `${baseURL}/refresh`,
        {},
        {
          withCredentials: true,
          headers: {
            'x-refresh-token': refresh_token
          }
        }
      )

      dispatch(fetchTokens(res.data))

      req.headers['x-access-token'] = res.data.access_token
    }
    console.log(req)
    return req
  })

  return axiosInstance
}
