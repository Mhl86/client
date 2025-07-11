import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "You cant sign in");
      }

      //   Save to localStorage
      localStorage.setItem("token", data.token);

      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md space-y-4"
      >
        <h2 className="text-2xl font-bold text-center mb-4 text-black">
          Sign In
        </h2>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <input
          type="email"
          name="email"
          placeholder="Exampel@gmail.com"
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
          Sign In{" "}
        </button>
      </form>
    </div>
  );
};

export default SignIn;
