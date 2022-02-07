import React from 'react'
import ReactDOM from 'react-dom'
import 'index.css'
import App from 'App'
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from 'reportWebVitals'
import { createTheme, ThemeProvider } from '@mui/material'
import {
  QueryClient,
  QueryClientProvider,
    QueryCache
} from 'react-query'
 import { ReactQueryDevtools } from 'react-query/devtools'
import { AuthProvider } from 'context/authentication'


const queryClient = new QueryClient()

const theme = createTheme({
    components: {
        // Name of the component
        MuiPaper: {
          defaultProps: {
              square: true,
              variant: 'outlined',
          }
        },
    },
})



ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
          <QueryClientProvider client={queryClient}>
                <ThemeProvider theme={theme}>
                    <AuthProvider>
                      <App />
                    </AuthProvider>
                </ThemeProvider>
                <ReactQueryDevtools />
          </QueryClientProvider>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
