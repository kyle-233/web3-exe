

import { ConnectButton } from '@/components/wallet/ConnectButton'
import { RequireButton } from '@/components/RequireButton'
import { DataList } from './components/DataList'

export default function Home() {
  return (
    <main
      className='w-screen min-w-full min-h-screen flex items-center justify-center bg-slate-900 '
    >
      <div className='w-[350px] max-w-[350px] h-[600px] max-h-[600px] bg-white px-4'>
        <ConnectButton />
        <RequireButton />
        <DataList />
      </div>
    </main>
  )
}
