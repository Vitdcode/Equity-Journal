import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex h-[100vh]">
      <div className="flex flex-col p-25 gap-10 bg-base-200 border border-base-300 rounded-box ">
        <Link to="home" className="btn btn-accent btn-lg">
          Home
        </Link>
        <Link to={"add-month"} className="btn btn-accent btn-lg">
          Add month
        </Link>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
