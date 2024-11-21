import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../components/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { MdDoneOutline } from "react-icons/md";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setLoading(false);
      // console.log("user logged in succesfully");

      toast.success("User logged in successfully", {
        position: "top-center",
        className: "small-toast",
        style: {
          fontSize: "0.875rem",
          padding: "8px 12px",
          color: "green",
          display: "flex",
          alignItems: "center",
        },
        icon: <MdDoneOutline style={{ width: "20px", marginRight: "8px" }} />,
      });

      navigate("/");
    } catch (error) {
      setLoading(false);
      toast.error(error.message, {
        position: "top-center",
        className: "small-toast",
        style: { fontSize: "0.875rem", padding: "8px 12px", color: "red" },
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center  bg-white py-6 md:py-20">
      <h2 className="text-6xl font-semibold text-black mb-8">Login</h2>

      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-6">
        <div>
          <input
            type="email"
            placeholder="Enter Email"
            className="w-full px-8 py-3 border border-black "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full px-8 py-3 border border-black"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 text-white bg-black border border-black hover:bg-gray-800 transition"
          >
            Sign In
          </button>
        </div>
      </form>

      <p className="mt-6 text-sm text-gray-600">
        New user?{" "}
        <Link to="/signup" className="text-blue-600 hover:underline">
          Create a New Account
        </Link>
      </p>
    </div>
  );
};

export default Login;
