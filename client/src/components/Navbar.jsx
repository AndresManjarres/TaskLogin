import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import { TbPlayerTrackNextFilled } from "react-icons/tb";

function Navbar() {

  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10 items-center w-full max-w-screen-mx mx-auto min-w-[450px]">
      <Link to='/'>
        <h1 className="text-2xl font-bold">TaskLib</h1>
      </Link>

      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li className="hidden md:block">
              Bienvenido {user.username}
            </li>
            <li>
              <Link to='/add-task' className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded">Agregar Task</Link>
            </li>
            <li>
              <Link to='/' onClick={() => {
                logout();
              }} className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">Salir</Link>
            </li>

            <li className="flex items-center">
              <Link to='/task' className="text-white-500 hover:text-violet-200 text-xl">
                <TbPlayerTrackNextFilled />
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to='/login'
                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded flex items-center"
              >
                Iniciar sesión
              </Link>
            </li>
            <li>
              <Link to='/register'
                className="bg-slate-500 hover:bg-slate-600 text-white font-bold py-2 px-4 rounded flex items-center"
              >Registrarme</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar