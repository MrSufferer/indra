import { useEffect, useRef } from 'react'
import loadMayan from '../components/loadMayan'
import { baseSepolia } from 'thirdweb/chains';

export default function Widget() {
  const mayan = useRef();
  useEffect(() => {
    (async function () {
      const mayanInstance = await loadMayan()
      mayan.current = mayanInstance
      const config = {
        appIdentity: {
          name: 'My Project',
          icon: './logo.png',
          uri: 'https://myproject.io',
        },
        rpcs: {
          solana: 'https://rpc.hellomoon.io/2105a23c-5fb3-41dd-adfa-8d1ac542795b',
        },
        tokens: {
          to: {
            solana: ['EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v'],
          },
          from: {
            ethereum: ['0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48'],
          }
        },
        destinationChains: ['solana'],
        solanaReferrerAddress: 'EU8z368kxJ4VzLfdpNG774L6DpAnav9d9cBBpbyH9Rr2',
        evmReferrerAddress: '0x2597281363326d27C4Fa403efc5305A573f07bf8',
        referrerBps: 10,
      }
      mayan.current.init('mayanContainer', config)
    })()
    return () => {
      if (mayan.current && mayan.current.destroy) {
        mayan.current.destroy()
      }
    }
  }, [])

  return (
    <div>
      <div id="mayanContainer" />
    </div>
  )
}
