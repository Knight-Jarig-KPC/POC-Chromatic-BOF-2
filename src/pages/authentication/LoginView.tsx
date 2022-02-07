import React from 'react'

import { useForm, Controller, SubmitHandler } from "react-hook-form"
import { useNavigate } from "react-router-dom"

import OutlinedInput from '@mui/material/OutlinedInput'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import FormHelperText from '@mui/material/FormHelperText'
import InputLabel from '@mui/material/InputLabel'
import Typography from '@mui/material/Typography'
import CircularProgress from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert'
import Checkbox from '@mui/material/Checkbox'

import { useAuth } from 'context/authentication'


interface LoginFormInput {
    email: String
    password: String
    isRemember: boolean
}

export default function LoginView(): JSX.Element {
    const navigation = useNavigate()
    const { login, isLoggingIn, isLoginError } = useAuth()


    const { control, handleSubmit } = useForm<LoginFormInput>({
        defaultValues: {
          email: '',
          password: '',
          isRemember: false
        }
      })

      const onSubmit: SubmitHandler<LoginFormInput> = (input) => {
        login({
            email: input.email as string,
            password: input.password as string,
            isRemember: input.isRemember as boolean,
        }, {
            onSuccess: () => {
                navigation('/')
            }
        })
      }

      return (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Paper
                onSubmit={handleSubmit(onSubmit)}
                component="form"
                noValidate
                autoComplete="off"
                sx={{ p: 5, minWidth: '500px', mt: 14, '> *': { pt: 2, pb: 2  } }}
            >
            <Typography variant="h5" >King Power Back Office 2.0</Typography>
               <Box>
                <InputLabel htmlFor="email">
                    Email
                </InputLabel>
                <Controller
                    name="email"
                    rules={{ required: true }}
                    control={control}
                    render={({ field, fieldState }) => {
                       const isRequiredError = fieldState.error?.type === 'required'

                       return (
                           <>
                            <OutlinedInput
                                {...field}
                                size="small"
                                disabled={isLoggingIn}
                                sx={{ display: 'block' }}
                                error={isRequiredError} />
                            { isRequiredError && <FormHelperText error>{'Email required.'}</FormHelperText> }
                           </>
                       )
                    }}
                />
               </Box>
               <Box>
                <InputLabel htmlFor="password">
                  Password
                </InputLabel>
                <Controller
                    name="password"
                    rules={{ required: true }}
                    control={control}
                    render={({ field, fieldState }) => {
                        const isRequiredError: boolean = fieldState.error?.type === 'required'

                         return (
                            <>
                                <OutlinedInput
                                    {...field} type="password"
                                    size="small"
                                    disabled={isLoggingIn}
                                    sx={{display: 'block'}}
                                    error={isRequiredError}/>
                                {isRequiredError && <FormHelperText error>{'Password required.'}</FormHelperText>}
                            </>
                        )
                      }}
                    />
                </Box>
              <Box>
                <InputLabel sx={{ display: 'inline' }}  htmlFor="rememberMe">
                  Remember Me
                </InputLabel>
                <Controller
                    name="isRemember"
                    control={control}
                    render={({field}) =>
                        <Checkbox {...field}  id="rememberMe" disableRipple/>
                    }
                 />
              </Box>

              <Box>
                <Button type="submit" variant="outlined" disabled={isLoggingIn} sx={{ width: '100%' }}>Login</Button>
              </Box>
                { isLoggingIn && <Box sx={{ textAlign: 'center' }}>
                    <CircularProgress />
                </Box> }
                { isLoginError && <Alert severity="error">Username or Password Wrong!</Alert> }
            </Paper>
         </Box>
      )
}