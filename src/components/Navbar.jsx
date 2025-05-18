import { useState } from "react"
import { FaBars } from "react-icons/fa"
import { IoMdClose } from "react-icons/io"


const Navbar = () => {
    const [isOpen,setIsOpen]=useState(false)

    const toggleMenu=()=>{
        setIsOpen(!isOpen)
    }
  return (
    <nav className="bg-green-800 text-white py-4 md:py-6">
      <div className="container mx-auto flex justify-between items-center">
        <h2>React Practice</h2>

        {/* Mobile Menu */}
        <div>
            <button onClick={toggleMenu}>
                {
                    isOpen ?<IoMdClose />: <FaBars />
                }
               
                
            </button>
        </div>
        <ul className="flex space-x-4 md:space-x-6">
            <li>Home</li>
            <li>About</li>
            <li>Blogs</li>
            <li>Contact</li>
        </ul>
        <button>Login</button>
      </div>
    </nav>
  )
}

export default Navbar