import {
    useContext,
} from "react"

import { AuthContext, AuthContextValue } from './AuthProvider'

const useAuth = (): AuthContextValue => {
    return useContext(AuthContext)
}

export default useAuth