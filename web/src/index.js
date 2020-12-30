import { AuthProvider } from '@redwoodjs/auth'
import EthereumAuthClient from '@oneclickdapp/ethereum-auth'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import ReactDOM from 'react-dom'
import { RedwoodProvider, FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'

import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'

const ApolloInjector = ({ children }) => {
  let ethereum
  try {
    const graphQLClient = new ApolloClient({
      cache: new InMemoryCache(),
      uri: `${window.__REDWOOD__API_PROXY_PATH}/graphql`,
    })
    ethereum = new EthereumAuthClient({ graphQLClient })
  } catch (e) {
    console.log(e)
  }
  return React.cloneElement(children, { client: ethereum })
}

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <ApolloInjector>
    <AuthProvider client={ethereum} type="ethereum">
      <RedwoodProvider>
        <Routes />
      </RedwoodProvider>
    </AuthProvider>
    </ApolloInjector>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
)
