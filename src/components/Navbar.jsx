import { useState } from "react"
import { FaBars } from "react-icons/fa"
import { IoMdClose } from "react-icons/io"
import { Link } from "react-router"


const Navbar = () => {
    const [isOpen,setIsOpen]=useState(false)

    const toggleMenu=()=>{
        setIsOpen(!isOpen)
    }
  return (
    <nav className="bg-green-800 text-white py-4 md:py-6 relative border-b-4 border-amber-500">
      <div className="container mx-auto flex justify-between items-center">
        <h2 className="text-xl font-bold">React Practice</h2>

        {/* Mobile Menu */}
        <div className="md:hidden">
            <button onClick={toggleMenu}>
                {
                    isOpen ?<IoMdClose />: <FaBars />
                }
               
                
            </button>
        </div>
        <ul className="hidden md:flex space-x-4 md:space-x-6">
            <li><Link to={"/"} className="hover:text-green-600">Home</Link> </li>
            <li><Link to={"about"} className="hover:text-green-600">About</Link> </li>
            <li><Link to={"blogs"} className="hover:text-green-600">Blogs</Link></li>
            <li><Link to={"contact"} className="hover:text-green-600">Contact</Link></li>
        </ul>
        <button className="hidden md:block bg-white text-black font-bold cursor-pointer hover:bg-slate-400 px-4 py-1 rounded">Login</button>

        {/* Mobile Menu Collapsed */}
        <div className={`md:hidden w-full absolute top-full left-0 bg-green-600 ${isOpen ? 'block':'hidden'}`}>
            <ul className="flex flex-col  items-center py-4 space-y-2">
            <li>Home</li>
            <li>About</li>
            <li>Blogs</li>
            <li>Contact</li>
            <li>
                <button className="bg-white text-black font-bold cursor-pointer hover:bg-slate-400 px-4 py-1 rounded">Login</button>
            </li>
        </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar