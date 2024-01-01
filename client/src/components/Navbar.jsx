import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"

function Navbar() {

  const { isAuthenticated, logout, user} = useAuth();

  return (
    <nav className="bg-zinc-700 my-3 flex justify-between py-5 px-10">
      <Link to='/'>
        <h1 className="text-2xl font-bold">TaskLib</h1>
      </Link>

      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            <li>
              Bienvenido {user.username}
            </li>
            <li>
              <Link to='/add-task' className="bg-zinc-500 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded">Agregar Task</Link>
            </li>
            <li>
              <Link to='/' onClick={() => {
                logout();
              }} className="bg-zinc-500 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded">Salir</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to='/login'
              className="bg-zinc-500 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded"
              >
                Iniciar sesión
              </Link>
            </li>
            <li>
              <Link to='/register'
              className="bg-zinc-500 hover:bg-zinc-600 text-white font-bold py-2 px-4 rounded"
              >Registrarme</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  )
}

export default Navbar