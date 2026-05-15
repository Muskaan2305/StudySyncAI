import { useState } from "react"

function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = (e) => {
    e.preventDefault()

    console.log("Email:", email)
    console.log("Password:", password)
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4">

      <div className="bg-gray-900 p-8 rounded-2xl shadow-lg w-full max-w-md border border-gray-800">

        <h1 className="text-4xl font-bold text-white mb-2">
          Welcome Back
        </h1>

        <p className="text-gray-400 mb-6">
          Login to continue your study journey
        </p>

        <form
          onSubmit={handleLogin}
          className="flex flex-col gap-4"
        >

          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-800 text-white px-4 py-3 rounded-lg outline-none border border-gray-700 focus:border-purple-500"
          />

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-800 text-white px-4 py-3 rounded-lg outline-none border border-gray-700 focus:border-purple-500"
          />

          <button
            className="bg-purple-600 hover:bg-purple-700 transition text-white py-3 rounded-lg font-semibold"
          >
            Login
          </button>

        </form>

      </div>

    </div>
  )
}

export default Login