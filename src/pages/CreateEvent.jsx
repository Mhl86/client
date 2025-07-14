import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateEvent = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: "",
    description: "",
    date: "",
    location: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const token = localStorage.getItem("token");

    if (!token) {
      setError("أنت غير مسجل الدخول.");
      return;
    }

    try {
      const res = await fetch("http://localhost:3001/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "حدث خطأ أثناء إنشاء الحدث");
      }

      const data = await res.json();
      console.log("تم إنشاء الحدث:", data);
      navigate("/"); // بعد الإنشاء يرجع للصفحة الرئيسية
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-black">
          Create New Event
        </h2>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <input
          type="text"
          name="title"
          placeholder=" Title"
          value={form.title}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />

        <textarea
          name="description"
          placeholder=" Detailes"
          value={form.description}
          onChange={handleChange}
          className="textarea textarea-bordered w-full"
          required
        />

        <input
          type="datetime-local"
          name="date"
          value={form.date}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />

        <input
          type="text"
          name="location"
          placeholder=" Location"
          value={form.location}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />

        <button type="submit" className="btn btn-primary w-full">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;
