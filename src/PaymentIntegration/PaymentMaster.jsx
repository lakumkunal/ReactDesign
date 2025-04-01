import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const PaymentMaster = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);
  const [paymentMethod, setPaymentMethod] = useState("");

  useEffect(() => {
    if (location.state?.service) {
      setSelectedService(location.state.service);
    } else {
      setSelectedService({ name: "Default Service", price: 50 }); // Provide a default service
    }
  }, [location]);
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Payment Details</h2>
        {selectedService ? (
          <>
            <p className="text-gray-600">You have selected:</p>
            <h3 className="text-xl font-medium text-gray-700">{selectedService.name}</h3>
            <p className="text-lg font-bold text-gray-800">Total: ${selectedService.price}</p>

            <h3 className="mt-6 text-lg font-semibold text-gray-700">Choose Payment Method</h3>
            <div className="space-y-2 mt-2">
              {["GPay", "PhonePe", "Paytm"].map((method) => (
                <button
                  key={method}
                  className={`w-full p-3 rounded-lg border-2 transition ${
    paymentMethod === method ? "border-blue-500 bg-blue-100" : "border-gray-300"
  }`}
                  onClick={() => setPaymentMethod(method)}
                >
                  {method}
                </button>
              ))}
            </div>

            {paymentMethod && (
              <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                Pay with {paymentMethod}
              </button>
            )}
          </>
        ) : (
          <p className="text-red-500">No service selected. Redirecting...</p>
        )}
      </div>
    </div>
  );
};

export default PaymentMaster;
