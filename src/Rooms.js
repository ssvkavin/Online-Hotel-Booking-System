import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./Rooms.css";

function Rooms() {
  const { area } = useParams();
  const [rooms, setRooms] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/rooms/${area}`)
      .then((res) => setRooms(res.data))
      .catch((err) => console.error("Error fetching rooms:", err));
  }, [area]);

  // Function "Book Now"
  const handleBookNow = () => {
    setShowModal(true);
    setPaymentMethod(null);
    setPhoneNumber("");
    setOtp("");
  };

  // Function payment method 
  const handlePaymentSelection = (method) => {
    setPaymentMethod(method);

    if (method === "Cash") {
      alert("Payment Successful!");
      setShowModal(false);
    }
  };

  // Function- OTP
  const generateOtp = () => {
    if (phoneNumber.length === 10) {
      const newOtp = Math.floor(1000 + Math.random() * 9000).toString();
      setGeneratedOtp(newOtp);
      alert(`Your OTP is: ${newOtp}`); 
    } else {
      alert("Enter a valid 10-digit phone number.");
    }
  };

  // Function- verify OTP
  const verifyOtp = () => {
    if (otp === generatedOtp) {
      alert("Payment Successful!");
      setShowModal(false);
    } else {
      alert("Invalid OTP! Try again.");
    }
  };

  return (
    <div className="rooms-container">
      <h2 className="rooms-heading">Rooms in {area}</h2>
      {rooms.length === 0 ? (
        <p>No rooms available</p>
      ) : (
        <div className="rooms-grid">
          {rooms.map((room) => (
            <div key={room.id} className="room-item">
              <h3>{room.name}</h3>
              <img src={`http://localhost:3000${room.image}`} alt="room_img" className="room-image" />
              <p><strong>Rating:</strong> {room.rating} ⭐</p>
              <p><strong>Price:</strong> ${room.price}/night</p>
              <button className="room-button" onClick={handleBookNow}>Book Now</button>
            </div>
          ))}
        </div>
      )}

      {/* Payment Modal */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h3>Select Payment Method</h3>
            <button className="modal-button" onClick={() => handlePaymentSelection("Cash")}>Cash</button>
            <button className="modal-button" onClick={() => handlePaymentSelection("Online")}>Online</button>

            {/* Online Payment Process */}
            {paymentMethod === "Online" && (
              <div>
                <input
                  type="text"
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  maxLength="10"
                />
                <button className="modal-button" onClick={generateOtp}>Generate OTP</button>

                {generatedOtp && (
                  <>
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      maxLength="4"
                    />
                    <button className="modal-button" onClick={verifyOtp}>Verify OTP</button>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Rooms;
