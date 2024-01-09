import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function RegisterPage() {
  // para registrar inputs en un estado
  const { register, handleSubmit, formState:{
    errors
  }
  } = useForm();
  
  const { signup, isAuthenticated, errors: AuthErrors} = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate('/task');
  }, [isAuthenticated]);

  // para enviar los datos del formulario y mostrar por consola
  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (

    <div className='flex h-[calc(100vh-100px)] items-center justify-center'>
      {
        AuthErrors.map((error, i) => (
          <div className='bg-red-500 p-2 text-white text-center my-2' key={i}>
            {error}
          </div>
        ))
      }
      <div className = 'bg-zinc-800 max-w-md w-full p-10 rounded-md'>

      <h1 className='text-2xl text-center mb-4'>Registrate</h1>

      <form
        onSubmit={onSubmit} className='flex flex-col'>

        <input type="text" {...register("username", { required: true })}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md mb-4' placeholder='Nombre de usuario'
        />
        {
          errors.username && <p className='text-red-500'>El usuario es requerido</p>
        }

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

        <button type="submit" className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded self-center'>Registrarme</button>
      </form>

      <p className='flex gap-x-2 justify-between p-5'>
          ¿Ya tienes una cuenta? <Link to='/login' className='text-sky-500 hover:text-blue-400'>Inicia sesión</Link>
        </p>
      </div>

    </div>
  )
}

export default RegisterPage
