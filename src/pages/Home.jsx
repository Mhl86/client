import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/api/events?page=1&limit=10")
      .then((res) => {
        if (!res.ok) throw new Error("Something went Wrong");
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setEvents(data.results);
      })
      .catch((err) => setError(err.message));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="p-4">
        <h1 className="text-3xl font-bold mb-6 text-center"> Events list</h1>

        {error && <p className="text-red-500">{error}</p>}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event) => (
            <div
              key={event._id}
              className="card bg-base-100 shadow-md border hover:shadow-xl transition"
            >
              <div className="card-body">
                <h2 className="card-title">{event.title}</h2>
                <p>{event.description}</p>
                <div className="text-sm text-gray-500">
                  {new Date(event.date).toLocaleDateString()}
                </div>
                <div className="card-actions justify-end">
                  <Link
                    to={`/events/${event.id}`}
                    className="btn btn-sm btn-primary bg-lime-300 text-black"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
