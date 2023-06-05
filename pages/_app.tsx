import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <div className='flex-100 bg-black'>
  <Component {...pageProps} />
  </div>
  )
}
