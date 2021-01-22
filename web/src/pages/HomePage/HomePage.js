import { Link, routes, navigate } from '@redwoodjs/router'
import { useAuth } from '@redwoodjs/auth'
import { useParams } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <>
      <div className=" text-left ">
        <h1 className="text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
          <span className="block xl:inline">Ethereum auth example</span>
        </h1>
        <p className="mt-3 text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          This is a demo of{' '}
          <pre>
            <a
              className="mt-3 text-blue-600"
              href="https://github.com/oneclickdapp/ethereum-auth"
            >
              @oneclickdapp/ethereum-auth
            </a>
          </pre>
        </p>
      </div>
      <div className="mt-8">
        Restricted route (logged-in users only):
        <button
          onClick={() => navigate(routes.users())}
          className="ml-3 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border  rounded-md shadow-sm text-base font-medium text-black bg-black-600 hover:bg-black-700"
        >
          Users
        </button>
      </div>
    </>
  )
}

export default HomePage
