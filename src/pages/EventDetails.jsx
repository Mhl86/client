import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const res = await fetch(`http://localhost:3001/api/events/${id}`);
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.message || "error fetching data");
        }

        setEvent(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchEvent();
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="p-6">
        {error && (
          <p className="text-center text-red-500 text-lg mb-4">{error}</p>
        )}

        {!event && !error && <p className="text-center text-lg"> Loding...</p>}

        {event && (
          <div className="max-w-xl mx-auto bg-white shadow-lg rounded p-6 space-y-4 text-black">
            <h1 className="text-3xl font-bold text-center text-black">
              {event.title}
            </h1>
            <p className="text-black">{event.description}</p>
            <p>
              <strong className="text-black">Date:</strong>{" "}
              {new Date(event.date).toLocaleDateString()}
            </p>
            <p>
              <strong className="text-black">Location:</strong> {event.location}
            </p>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default EventDetails;
