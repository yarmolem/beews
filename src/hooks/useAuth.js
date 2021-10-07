import { useContext } from 'react'
import { AuthContext } from '@/context/auth/AuthState'

const useAuth = () => {
  const { user, ...rest } = useContext(AuthContext)
  return { user, isAuth: Object.keys(user).length !== 0, ...rest }
}

export default useAuth
