import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-gray-800 bg-gray-950 text-white">

      <h1 className="text-2xl font-bold text-purple-500">
        StudySync AI
      </h1>

      <div className="flex gap-4 items-center">

        <Link to="/login">
          <button className="border border-purple-500 px-4 py-2 rounded-lg hover:bg-purple-500 hover:text-white transition">
            Login
          </button>
        </Link>

        <Link to="/register">
          <button className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition">
            Register
          </button>
        </Link>

      </div>

    </nav>
  )
}

export default Navbar