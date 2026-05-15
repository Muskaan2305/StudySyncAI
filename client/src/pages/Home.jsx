import Navbar from "../components/Navbar"
import { FaRobot } from "react-icons/fa"
function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">

      <Navbar />

      <div className="flex flex-col items-center justify-center mt-40">

        <FaRobot className="text-purple-500 text-7xl mb-6" />

        <h1 className="text-7xl font-bold text-purple-500 mb-6">
          StudySync AI
        </h1>

        <p className="text-gray-400 text-2xl mb-8">
          Your AI Powered Study Companion
        </p>

        <button className="bg-purple-600 px-6 py-3 rounded-xl text-lg hover:bg-purple-700 transition">
          Get Started
        </button>

      </div>

    </div>
  )
}

export default Home