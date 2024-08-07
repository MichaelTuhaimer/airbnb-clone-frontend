import React, { useState, useEffect } from "react";
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
      .catch((error) => {
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
    <div>
      <h1>Landing Page</h1>
      <ul>
        {rooms.map((room, index) => (
          <li key={index}>{room.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default LandingPage;
