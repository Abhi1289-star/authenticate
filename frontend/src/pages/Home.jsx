import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const [loggedInUser, setLoggedInUser] = useState("");
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate logged-in user from localStorage
    const user = localStorage.getItem("loggedInUser") || "Guest";
    setLoggedInUser(user);

    // Dummy static product data (instead of backend)
    const dummyProducts = [
      { name: "Sanskar", power: 7300 },
      { name: "Milind", power: 7200 },
      
    ];
    setProducts(dummyProducts);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("loggedInUser");
    alert("User Logged out");
    setTimeout(() => {
      navigate("/login");
    }, 800);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">
        Welcome {loggedInUser}
      </h1>

      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded-md mb-6 hover:bg-red-600"
      >
        Logout
      </button>

      <div className="space-y-2">
        {products.length > 0 ? (
          products.map((item, index) => (
            <ul
              key={index}
              className="border border-gray-300 p-3 rounded-md shadow-sm"
            >
              <span className="font-medium">
                {item.name} : ₹{item.price}
              </span>
            </ul>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>

      <ToastContainer />
    </div>
  );
}

export default Home;
