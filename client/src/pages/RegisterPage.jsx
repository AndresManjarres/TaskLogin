import { useForm } from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  // para registrar inputs en un estado
  const { register, handleSubmit, formState:{
    errors
  }
  } = useForm();
  const { signup, isAuthenticated, errors: AuthErrors} = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate('/tasks');
  }, [isAuthenticated]);

  // para enviar los datos del formulario y mostrar por consola
  const onSubmit = handleSubmit(async (values) => {
    signup(values);
  });

  return (

    <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
      {
        AuthErrors.map((error, i) => (
          <div className='bg-red-500 p-2 text-white' key={i}>
            {error}
          </div>
        ))
      }
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

        <button type="submit" className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded self-center'>Registrarse</button>
      </form>

    </div>
  )
}

export default RegisterPage
