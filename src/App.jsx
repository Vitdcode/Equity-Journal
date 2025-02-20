import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState("nord");

  return (
    <div className="main-wrapper">
      <div className=" h-screen flex flex-col p-25 gap-10 bg-base-200 border border-base-300 rounded-box ">
        <Link to="home" className="btn btn-accent btn-xl">
          Home
        </Link>
        <Link to={"add-month"} className="btn btn-accent btn-xl">
          Add month
        </Link>
        <Link to={"change-theme"} className="btn btn-accent btn-xl">
          Change App Theme
        </Link>
      </div>
      <div className="flex justify-center">
        <Outlet context={(theme, setTheme)} />
      </div>
    </div>
  );
}

export default App;
