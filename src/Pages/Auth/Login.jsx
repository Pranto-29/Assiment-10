
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogIn = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;

    signInUser(email, password)
      .then((result) => {
        event.target.reset();
        navigate(location.state?.from || "/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        navigate(location.state?.from || "/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="card w-full max-w-md shadow-2xl border border-gray-200 rounded-2xl p-6 bg-base-100">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

        {/* Login Form */}
        <form onSubmit={handleLogIn} className="space-y-4">
          <div className="flex flex-col">
            <label className="label font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="input input-bordered rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="flex flex-col">
            <label className="label font-medium">Password</label>
            <input
              type="password"
              name="password"
              required
              placeholder="Enter your password"
              className="input input-bordered rounded-full focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="text-right">
            <a href="#" className="link link-hover text-sm">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="btn w-full rounded-full bg-gradient-to-r from-pink-500 to-red-600 text-white hover:from-red-600 hover:to-pink-500 transition-all"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="divider">OR</div>

        {/* Google Login */}
        <button
          onClick={handleGoogleSignIn}
          className="btn w-full rounded-full bg-white text-black border border-gray-300 flex items-center justify-center gap-2 hover:bg-gray-100"
        >
          <FaGoogle /> Login with Google
        </button>

        {/* Register Link */}
        <p className="text-center mt-4 text-sm">
          New to TasteTrail?{" "}
          <Link
            className="text-pink-500 hover:text-red-500 font-medium"
            to="/auth/register"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
