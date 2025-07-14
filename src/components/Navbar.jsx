import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className=" bg-lime-500 flex justify-between ">
      <h1 className="ml-4 text-4xl">Events Api</h1>
      <div>
        <button
          onClick={() => navigate("/SignUp")}
          className="btn btn-sm btn-accent mr-4 mt-2 mb-2"
        >
          Rigister
        </button>
        <button
          onClick={() => navigate("/SignIn")}
          className="btn btn-sm btn-accent mr-4 mt-2 mb-2"
        >
          Sign In
        </button>
        <Link
          to="/createEvent"
          className="btn btn-sm btn-accent mr-4 mt-2 mb-2"
        >
          Create Events{" "}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
