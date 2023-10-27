import { WagmiConfig } from 'wagmi'
import { config } from './config'

export const WagmiProvider = ({ children }) => {
    return (
        <WagmiConfig config={config}>
            {
                children
            }
        </WagmiConfig>
    )
}