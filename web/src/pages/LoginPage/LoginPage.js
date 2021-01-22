import { Link, routes, navigate } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { useParams } from '@redwoodjs/router'

const LoginPage = () => {
  const { logIn, logOut, getCurrentUser } = useAuth()
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
      <div className=" text-left ">
        <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
          <span className="block xl:inline">Login</span>
        </h1>
        <p className="mt-3 text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          You must have an ethereum wallet, such as MetaMask, installed in your
          browser
        </p>
      </div>
      <div className="mt-8">
        <button
          onClick={onLogin}
          className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border  rounded-md shadow-sm text-base font-medium text-black bg-black-600 hover:bg-black-700"
        >
          Log in with Ethereum
        </button>
      </div>
    </>
  )
}

export default LoginPage
