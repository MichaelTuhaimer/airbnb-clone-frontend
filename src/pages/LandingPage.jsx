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
        console.log(response);
        setRooms(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError("Error loading rooms");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <div>
        <h1>Landing Page</h1>

        {rooms.map((room, index) => (
          <ul key={index}>
            <li>{room.room_type}</li>
            <li>{room.home_type}</li>
            <li>
              {room.address} {room.city} {room.state}
            </li>
          </ul>
        ))}
      </div>
    </>
  );
};

export default LandingPage;
