import { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { BiMenu, BiX } from "react-icons/bi";
function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="bg-white shadow-md fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-2xl font-bold text-indigo-600">MyLogo</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              
              
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setOpen(!open)}>
                {open ? <BiX size={28} /> : <BiMenu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white px-4 pb-4 space-y-2">
            <Link to={"/users"} className="text-gray-700 hover:text-indigo-600">
              users
            </Link>
            <Link
              to={"/create-users"}
              className="text-gray-700 hover:text-indigo-600"
            >
              New User
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}

export default App;
