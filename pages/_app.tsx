import '../styles/globals.css'
import {SetStateAction, useState, Dispatch} from "react"
import type { AppProps } from 'next/app'
import {TokenContext} from './context'

function MyApp({ Component, pageProps }: AppProps) {
  
  const [token,setToken] = useState<string>("no token here yet")

  return (<TokenContext.Provider value={{token,setToken}}>
  <Component {...pageProps} />
  </TokenContext.Provider>
  )

}

export default MyApp
