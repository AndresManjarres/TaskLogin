import { useForm } from 'react-hook-form'
import { useAuth } from '../context/AuthContext';
import {Link, useNavigate} from 'react-router-dom'
import { useEffect } from 'react';
//import { useNavigate } from 'react-router-dom';
//import { useEffect } from 'react';

function LoginPage() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  // cambios: agregar isAuthenticated para pasara desde el login a la pagina de tareas(TASKS)
  const {signin, errors: signinErrors, isAuthenticated} = useAuth();
  const navigate = useNavigate();

  // const navigate = useNavigate();

  //Agregar useEffect para redireccionar a la pagina de tareas
  /*
  useEffect(() => {
    if (isAuthenticated) navigate('/tasks');
  }, [isAuthenticated]);

  // No olvidar ir a AuthContext.jsx y agregar el isAuthenticated en true
  */
  
  const onSubmit = handleSubmit((data) => {
    signin(data)
  });

  useEffect(() => {
    if (isAuthenticated) navigate('/task');
  },[isAuthenticated]);

  return (
    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>

      <div className='bg-zinc-800 max-w-md w-full p-10 rounded-md'>

      {
        signinErrors.map((error, i) => (
          <div className='bg-red-500 p-2 text-white text-center my-2' key={i}>
            {error}
          </div>
        ))
      }

        <h1 className='text-2xl text-center mb-4'>Inicio de sesión</h1>

        <form
          onSubmit={onSubmit} className='flex flex-col'>

          <input type="email"  {...register("email", { required: true })}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md mb-4' placeholder='Correo electrónico'
          />
          {
            errors.email && <p className='text-red-500'>El email es requerido</p>
          }
          <input type="password"  {...register("password", { required: true })}
            className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md mb-4' placeholder='Contraseña'
          />
          {
            errors.password && <p className='text-red-500'>La contraseña es requerida</p>
          }

          <button type="submit" className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded self-center'>Ingresar</button>
        </form>
        <p className='flex gap-x-2 justify-between p-5'>
          ¿No tienes una cuenta? <Link to='/register' className='text-sky-500 hover:text-blue-400'>Regístrate</Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage