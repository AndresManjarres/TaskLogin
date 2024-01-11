function HomePage() {
  return (
    <div className="min-h-screen flex items-center justify-center">

    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md mr-5">

      <header>
        <h2 className="text-2xl font-bold">Mejores Paginas para Notas</h2>
      </header>

      <hr className="border-gray-500 border-1 my-4"/>

      <p className="text-slate-300">1. TaskLib</p>
      <p className="text-blue-400 text-xs mt-2">11/01/24</p>

      <div className="flex gap-x-2 items-center mt-5">
        <a className="bg-violet-700 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded-s-md text-xs">
          Editar
        </a>

        <button className="bg-red-700 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-e-md text-xs">
          Eliminar
        </button>
      </div>
    </div>

    <div className="text-white-800">
      <p className="text-xl font-semibold mb-4">Crea y organiza tus notas de manera fácil y eficiente</p>
      <p className="text-lg mb-8 text-violet-500 text-center">Tu vida en Notas con <spam className="text-white"> TaskLib </spam></p>
    </div>
  </div>
  )
}

export default HomePage