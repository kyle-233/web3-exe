// "use client";

import { useClient } from '@/hooks/useClient';
import { useConnect } from 'wagmi'

export function ConnectButton() {
    const { connect, connectors, error, isLoading, pendingConnector } =
        useConnect();
    const isClient = useClient();

    return (

        isClient ? <div className='w-full py-4 flex flex-col gap-y-4'>
            {
                connectors.map((connector) => (
                    connector.ready &&
                    < button
                        className='w-full flex items-center justify-center py-4 border'
                        disabled={!connector.ready}
                        key={connector.id}
                        onClick={() => connect({ connector })}
                    >
                        {connector.name}
                        {isLoading &&
                            connector.id === pendingConnector?.id &&
                            ' (connecting)'}
                    </button>
                ))
            }

            {error && <div>{error.message}</div>}
        </div >
            : null


    )
}
