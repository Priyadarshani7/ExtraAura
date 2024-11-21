import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth, db } from "../components/firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if (user) {
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          firstName: fname,
          lastName: lname,
        });
      }
      console.log("user registered");
      toast.success("User Registered Successfully", {
        position: "top-center",
        className: "small-toast",
        style: { fontSize: "0.875rem", padding: "8px 12px" },
      });

      navigate("/login");
    } catch (error) {
      console.log(error.message);
      toast.success(error.message, {
        position: "top-center",
        className: "small-toast",
        style: { fontSize: "0.875rem", padding: "8px 12px" },
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center  bg-white py-6 md:py-20">
      <h2 className="text-6xl font-semibold text-black mb-8">Create account</h2>

      <form onSubmit={handleRegister} className="w-full max-w-sm space-y-6">
        <div>
          <input
            type="firstname"
            placeholder="First Name"
            className="w-full px-8 py-3 border border-black "
            onChange={(e) => setFname(e.target.value)}
          />
        </div>
        <div>
          <input
            type="lastname"
            placeholder="Last Name"
            className="w-full px-8 py-3 border border-black "
            onChange={(e) => setLname(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full px-8 py-3 border border-black "
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full px-8 py-3 border border-black "
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 text-white bg-black border border-black hover:bg-gray-800 transition"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
