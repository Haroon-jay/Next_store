import {AppProps} from "next/app"
import "@assets/main.css"
import { FC } from "react"
import { UIProvider } from "@components/ui/context"
const Noop:FC=({children})=><>{children} </>
export default function App({Component,pageProps}:AppProps & {Component:{Layout:FC}}){
    const Layout=Component.Layout?Component.Layout:Noop
return(
    <>
    <UIProvider>
    <Layout>
   <Component {...pageProps} />
   </Layout>
   </UIProvider>
    </>
)
}