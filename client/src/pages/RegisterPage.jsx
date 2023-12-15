import { useForm } from 'react-hook-form';
import { registerRequest } from '../api/auth';

function RegisterPage() {
  // para registrar inputs en un estado
  const { register, handleSubmit } = useForm();

  // para enviar los datos del formulario y mostrar por consola
  const onSubmit = handleSubmit(async (values) => {
    console.log(values);
    const res = await registerRequest(values);
    console.log(res)
  });

  return (

    <div className='bg-zinc-800 max-w-md p-10 rounded-md'>
      <form
        onSubmit={onSubmit} className='flex flex-col'>

        <input type="text" {...register("username", { require: true })}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md mb-4' placeholder='Nombre de usuario'
        />
        <input type="email"  {...register("email", { required: true })}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md mb-4' placeholder='Correo electrónico'
        />
        <input type="password"  {...register("password", { required: true })}
          className='w-full bg-zinc-700 text-white px-4 py-2 rounded-md mb-4' placeholder='Contraseña'
        />

        <button type="submit" className='bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded self-center'>Registrarse</button>
      </form>

    </div>
  )
}

export default RegisterPage
