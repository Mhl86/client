import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className=" bg-lime-500 flex justify-between ">
      <h1 className="ml-4 text-4xl">Events Api</h1>
      <div>
        <button
          onClick={() => navigate("/SignUp")}
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl mr-4"
        >
          Rigister
        </button>
        <button
          onClick={() => navigate("/SignIn")}
          className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl mr-4"
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
