import { Link, routes, navigate } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { useParams } from '@redwoodjs/router'

const LoginPage = () => {
  const { logIn, logOut } = useAuth()
  const { redirectTo } = useParams()

  const onLogin = async () => {
    await logIn()
    navigate(redirectTo || routes.users())
  }

  const onLogout = async () => {
    await logOut()
    navigate(redirectTo || routes.home())
  }

  return (
    <>
      <h1>Login</h1>
      <p>
        You must have an ethereum wallet, such as MetaMask, installed in your
        browser
      </p>
      <button onClick={onLogin}>Log in with Ethereum</button>
      <button onClick={onLogout}>Log out</button>
    </>
  )
}

export default LoginPage
