import { useContext } from 'react'
import { AuthContext } from '@/context/auth/AuthState'

const useAuth = () => {
  const { user, ...rest } = useContext(AuthContext)
  return { user, ...rest }
}

export default useAuth
