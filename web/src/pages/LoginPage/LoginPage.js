import { Link, routes, navigate } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { useParams } from '@redwoodjs/router'

const LoginPage = () => {
  const { logIn } = useAuth()
  const { redirectTo } = useParams()

  const onLogin = async () => {
    await logIn()
    navigate(redirectTo || routes.users())
  }

  return (
    <>
      <h1>LoginPage</h1>
      <p>
        You must have an ethereum wallet, such as MetaMask, installed in your
        browser
      </p>
      <button onClick={onLogin}>Log in with Ethereum</button>
    </>
  )
}

export default LoginPage
