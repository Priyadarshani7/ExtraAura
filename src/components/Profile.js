import React, { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  const fetchUserData = async () => {
    const user = auth.currentUser;
    if (user) {
      try {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
        } else {
          console.log("No user data found");
        }
      } catch (error) {
        console.log("Error fetching user data: ", error.message);
      }
    } else {
      console.log("User is not logged in");
      navigate("/login");
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      navigate("/login");
    } catch (error) {
      console.log("Error during logout: ", error.message);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl bg-white p-8 shadow-xl rounded-xl flex flex-col gap-6">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">
            Account Information
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Manage your account and view your details
          </p>

          <div className="flex justify-between items-center w-full border-b-2 pb-4 mb-4">
            <button
              onClick={handleLogout}
              className="text-white first-line:hover:underline text-lg font-semibold px-6 py-3 bg-blue-700 rounded-3xl"
            >
              Log Out
            </button>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">
            Account Details
          </h3>
          {userDetails ? (
            <div className="space-y-2 text-gray-800">
              <p className="text-lg">
                <strong>First Name: </strong>
                {userDetails.firstName}
              </p>
              <p className="text-lg">
                <strong>Last Name: </strong>
                {userDetails.lastName}
              </p>
              <p className="text-lg">
                <strong>Email: </strong>
                {userDetails.email}
              </p>
            </div>
          ) : (
            <p className="text-lg text-gray-500">Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
