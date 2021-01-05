import { Link, routes, navigate } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { useParams } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <>
      <h1>Ethereum auth example</h1>
      <p>
        Restricted route (logged-in users only):{' '}
        <Link to={routes.users()}>Users</Link>
      </p>
      <p>
        Login page: <Link to={routes.login()}>Login</Link>
      </p>
    </>
  )
}

export default HomePage
