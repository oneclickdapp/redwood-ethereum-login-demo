import { AuthProvider } from '@redwoodjs/auth'
import EthereumAuthClient from '@oneclickdapp/ethereum-auth'
import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'

import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'

const graphQLClient = createGraphQLClient()
const ethereum = new EthereumAuthClient({ graphQLClient })

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <AuthProvider client={ethereum} type="ethereum">
      <RedwoodProvider>
        <Routes />
      </RedwoodProvider>
    </AuthProvider>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
)
