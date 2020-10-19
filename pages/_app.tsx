import '../styles/global.css'
import { AppProps } from 'next/app'
import 'fontsource-source-sans-pro'
// import 'fontsource-source-serif-pro'
import 'fontsource-alex-brush'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps}/>
}
