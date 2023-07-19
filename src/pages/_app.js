import LayoutProvider from '@/layout/LayoutProvider'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <>
      <LayoutProvider>
        <Component {...pageProps} />
      </LayoutProvider>
    </>
  )
}
