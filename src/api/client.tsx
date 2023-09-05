import axios from "axios"

const createAxiosInstance = (baseURL: string) => {
  const instance = axios.create({
    baseURL,
  })

  instance.interceptors.request.use(
    (config) => {
      const token = localStorage.getItem("accessToken")

      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }

      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  return instance
}

export const productionClient = createAxiosInstance(
  process.env.REACT_APP_BACKEND_API_URL || ""
)
export const mockClient = createAxiosInstance(
  process.env.REACT_APP_MOCK_API_URL || ""
)
