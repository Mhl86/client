import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const userData = {
      name: form.username,
      email: form.email,
      password: form.password,
    };

    try {
      const res = await fetch("http://localhost:3001/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Error.");
      }

      console.log("ok", data);
      navigate("/signin");
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
          Sign Up{" "}
        </h2>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <input
          type="text"
          name="username"
          placeholder="UserName "
          value={form.username}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="example@gmail.com"
          value={form.email}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />
        <input
          type="password"
          name="password"
          placeholder=" Password"
          value={form.password}
          onChange={handleChange}
          className="input input-bordered w-full"
          required
        />

        <button type="submit" className="btn btn-primary w-full">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
