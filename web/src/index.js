import { AuthProvider } from '@redwoodjs/auth'
import EthereumAuthClient from '@oneclickdapp/ethereum-auth'
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { FetchConfigProvider, useFetchConfig } from '@redwoodjs/web'
import ReactDOM from 'react-dom'
import { FatalErrorBoundary } from '@redwoodjs/web'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import DefaultLayout from 'src/layouts/DefaultLayout'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import Routes from 'src/Routes'

import './scaffold.css'
import './index.css'

let ethereum

const ApolloInjector = ({ children }) => {
  const { uri, headers } = useFetchConfig()
  try {
    const graphQLClient = new ApolloClient({
      cache: new InMemoryCache(),
      uri,
      headers,
    })
    // Default option using Apollo Client
    const makeRequest = (mutation, variables) =>
      graphQLClient.mutate({
        mutation,
        variables,
      })

    // Alternative option using graphql-hooks
    // You'll also need to modify graphQLClient
    // const makeRequest = (query, variables) =>
    //   graphQLClient.request({
    //     query,
    //     variables,
    //   })

    ethereum = new EthereumAuthClient({
      makeRequest,
      // Note: you must set NODE_ENV manually when using Netlify
      debug: process.NODE_ENV !== 'development',
      infuraId: process.env.INFURA_ID,
    })
  } catch (e) {
    console.log(e)
  }
  return React.cloneElement(children, { client: ethereum })
}

ReactDOM.render(
  <FatalErrorBoundary page={FatalErrorPage}>
    <FetchConfigProvider>
      <ApolloInjector>
        <AuthProvider client={ethereum} type="ethereum">
          <RedwoodApolloProvider>
            <DefaultLayout>
              <Routes />
            </DefaultLayout>
          </RedwoodApolloProvider>
        </AuthProvider>
      </ApolloInjector>
    </FetchConfigProvider>
  </FatalErrorBoundary>,
  document.getElementById('redwood-app')
)
