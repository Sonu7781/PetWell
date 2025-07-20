
import React, { useState } from "react";
import axios from "axios";

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [amount, setAmount] = useState("");

  // Load Razorpay script
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  // Handle donation
  const handleDonate = async () => {
    const res = await loadRazorpayScript();
    if (!res) {
      alert("Failed to load Razorpay SDK.");
      return;
    }

    try {
      const { data } = await axios.post("http://localhost:5000/api/create-order", {
        amount: parseInt(amount),
      });

      const options = {
        key: "YOUR_RAZORPAY_KEY_ID", // Replace with your Razorpay Key
        amount: amount * 100,
        currency: "INR",
        name: "PetWell Foundation",
        description: "Donation for Animal Support",
        order_id: data.orderId,
        handler: function (response) {
          alert("Payment Successful!");
          setShowModal(false);
          setAmount("");
        },
        theme: { color: "#22c55e" },
        prefill: {
          name: "Animal Supporter",
          email: "user@example.com",
          contact: "9999999999",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (err) {
      console.error("Payment error:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <>
      <nav className="bg-yellow-200 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="text-xl font-bold text-gray-800">PetWell</div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-bold mt-2">Home</a>
              <button
                onClick={() => setShowModal(true)}
                className="bg-green-500 hover:bg-green-700 text-white px-4 py-2 rounded transition"
              >
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-green-200 bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80 space-y-4">
            <h2 className="text-xl font-bold text-center text-gray-700">Enter Donation Amount</h2>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="e.g. 500"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
              >
                Cancel
              </button>
              <button
                onClick={handleDonate}
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              >
                Pay ₹{amount || 0}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

