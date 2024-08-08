import { useState, useEffect } from "react";
import axios from "axios";

const LandingPage = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3000/rooms.json")
      .then((response) => {
        setRooms(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error loading rooms");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-2xl">Loading...</div>;
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-2xl text-red-500">{error}</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-800">Airbnb Clone</h1>
          <div className="flex space-x-4">
            <button className="text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded-md">Sign Up</button>
            <button className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md">Login</button>
          </div>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-semibold text-gray-800">Available Rooms</h2>
          <p className="text-xl text-gray-600">Find the perfect place to stay</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rooms.map((room, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={room.room_images[0]["url"]} alt={room.room_type} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{room.room_type}</h3>
                <p className="text-gray-600">{room.home_type}</p>
                <p className="text-gray-800 mt-2">
                  {room.address}, {room.city}, {room.state}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
