import { WagmiProvider } from '@/components/wallet/WagmiProvider'
import { SWRRrovider } from '@/request/SWRProvider'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return <WagmiProvider>
    <SWRRrovider>
      <Component {...pageProps} />
    </SWRRrovider>
  </WagmiProvider>
}
