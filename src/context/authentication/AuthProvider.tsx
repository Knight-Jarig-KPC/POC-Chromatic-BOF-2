import {
    createContext,
    useState
} from "react"

import { useMutation } from 'react-query'
import Cookies from 'js-cookie'

import { UserLoginQueryVariables, RefreshTokenMutationVariables, LoginResponse } from 'graphql-generated'
import client from 'graphqlClient'

export type AuthProviderProps = {
    children: JSX.Element
}


export type LoginOptions = {
    onSuccess?: (data: LoginResponse) => void
    onError?:(error: unknown) => void
}

export type LogoutOptions = {
    onSuccess?: () => void
    onError?:() => void
}

export type RefreshTokenOptions = {
    onSuccess?: (data: LoginResponse) => void
    onError?:(error: unknown) => void
}

export type LoginInput = {
    email: string
    password: string
    isRemember?: boolean
}


export type AuthContextValue = {
    accessToken?: string
    refreshToken?: string
    isRemember?: boolean
    isLoggedIn: boolean
    isLoggingIn: boolean
    isResettingSession: boolean
    isLoginSuccess: boolean
    isLoginError: boolean
    loginError?: unknown
    resetSessionError?: unknown
    login: (input: LoginInput, options?: LoginOptions) => void
    logout: (options?: LogoutOptions) => void
    resetSession: (refreshToken: string, options?: LoginOptions) => void
}


export const AuthContext = createContext<AuthContextValue>({
    isLoggedIn: false,
    isLoggingIn: false,
    isResettingSession: false,
    isLoginSuccess: false,
    isLoginError: false,
    login: () => {},
    logout: () => {},
    resetSession: () => {}
})


export function AuthProvider({ children }: AuthProviderProps) {
    const existedAccessToken = Cookies.get('accessToken') as string
    const existedRefreshToken = Cookies.get('refreshToken') as string
    const isExistedRemember = JSON.parse(Cookies.get('isRemember') as string || 'false')

    const [accessToken, setAccessToken] = useState<string | undefined>(existedAccessToken)
    const [refreshToken, setRefreshToken] = useState<string | undefined>(existedRefreshToken)
    const [isRemember, setIsRemember] = useState<boolean | undefined>(isExistedRemember)

    const loginMutation = useMutation('login', async (variables: UserLoginQueryVariables) => {
        const { userLogin } = await client.userLogin(variables)

        return userLogin
    })

    const refreshTokenMutation = useMutation('refreshToken', async (variables: RefreshTokenMutationVariables) => {
        const { refreshToken: refreshTokenData } = await client.refreshToken(variables)

        return refreshTokenData
    })


    const login = (input: LoginInput, options?: LoginOptions): void => {
        loginMutation.mutate({
            email: input.email,
            password: input.password,
        }, {
            onSuccess: (data) => {
                const expiresIn: number = 365 // 365 day

                Cookies.set('accessToken', data?.accessToken as string, {
                    expires: input.isRemember ? expiresIn : undefined
                })

                Cookies.set('refreshToken', data?.refreshToken as string, {
                    expires: input.isRemember ? expiresIn : undefined
                })

                setAccessToken(data?.accessToken as string)
                setRefreshToken(data?.refreshToken as string)

                if (input.isRemember) {
                    Cookies.set('isRemember', JSON.stringify(input.isRemember), {
                        expires: expiresIn
                    })

                    setIsRemember(input.isRemember)
                }


                options?.onSuccess?.(data as LoginResponse)
            },
            onError: (error) => {
                options?.onError?.(error)
            }
        })
    }

    const logout = (options?: LogoutOptions): void => {
        Cookies.remove('accessToken')
        Cookies.remove('refreshToken')

        setAccessToken(undefined)
        setRefreshToken(undefined)

        options?.onSuccess?.()
    }

    const resetSession = (refreshTokenInput: string, options?: RefreshTokenOptions): void => {
        refreshTokenMutation.mutate({
            input: {
                refreshToken: refreshTokenInput
            }
        }, {
            onSuccess: (data) => {
                const expiresIn: number = 365 // 365 day

                Cookies.set('accessToken', data?.accessToken as string, {
                    expires: expiresIn // input.isRemember ? expiresIn : undefined
                })

                Cookies.set('refreshToken', data?.refreshToken as string, {
                    expires: expiresIn // expiresIn ? expiresIn : undefined
                })

                setAccessToken(data?.accessToken as string)
                setRefreshToken(data?.refreshToken as string)

                if (isRemember) {
                    Cookies.set('isRemember', JSON.stringify(isRemember), {
                        expires: expiresIn
                    })

                    setIsRemember(isRemember)
                }

                options?.onSuccess?.(data as LoginResponse)
            },
            onError: (error) => {
                options?.onError?.(error)
            }
        })
    }

    return (
        <AuthContext.Provider value={{
            accessToken,
            refreshToken,
            isRemember,
            isLoginSuccess: loginMutation.isSuccess,
            isLoggedIn: !!accessToken,
            isLoggingIn: loginMutation.isLoading,
            isLoginError: loginMutation.isError,
            loginError: loginMutation.error,
            isResettingSession: refreshTokenMutation.isLoading,
            resetSessionError: refreshTokenMutation.error,
            login,
            logout,
            resetSession,
        }} >
            {children}
        </AuthContext.Provider>
    )
}