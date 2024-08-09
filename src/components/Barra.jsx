

export default function Barra() {
  return (
    <header className="bg-red-600 py-2 fixed w-full h-12 top-0 z-10">
      <div className="conatainer mx-auto flex justify-between items-center">
        <div className="">
        <nav>
          <ul className="container mx-auto flex justify-between itens-center text-white font-medium">
             <li className="hover:text-gray-300 cursor-pointer">
              <a className="ml-4" href="/">Home</a>
              <a href=""></a>
              <a href=""></a>
              <a href=""></a>
             </li>
           </ul>           
        </nav>
        </div>
      </div>
    </header>
  )
}
