

export default function Barra() {
  return (
    <header className="bg-red-600 py-2 fixed w-full top-0 z-10">
      <div className="conatainer mx-auto flex justify-between items-center">
        <div className="">
        <nav className="space-x-4 p-5">
          <ul className="container mx-auto flex justify-between itens-center text-white font-medium">
             <li className="hover:text-gray-300 cursor-pointer">Home</li>
             <li></li>
           </ul>           
        </nav>
        </div>
      </div>
    </header>
  )
}
