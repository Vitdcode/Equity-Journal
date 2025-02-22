import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdCalendarMonth } from "react-icons/md";
import { LuPaintbrushVertical } from "react-icons/lu";

function App() {
  const [theme, setTheme] = useState("nord");
  const [data, setData] = useState([
    {
      "29.07.2024": {
        Invested: 17089,
        "Cash Trade Republic": 4000,
        "C24 Tagesgeld": 1714,
        Cash: 3000,
      },
    },
    {
      "29.10.2024": {
        Invested: 22909.85,
        "Cash Trade Republic": 4861.33,
        "C24 Tagesgeld": 2003.62,
        Cash: 3000,
      },
    },
  ]);

  return (
    <div className="main-wrapper">
      <div className=" h-screen flex flex-col p-25 gap-10 bg-base-200 border border-base-300 rounded-box ">
        <Link to="overview" className=" justify-start  btn btn-accent btn-xl">
          <MdOutlineSpaceDashboard /> Overview
        </Link>
        <Link to={"add-month"} className="btn btn-accent justify-start btn-xl">
          <MdCalendarMonth /> Add month
        </Link>
        <Link to={"change-theme"} className="btn btn-accent justify-start btn-xl">
          <LuPaintbrushVertical /> Change App Theme
        </Link>
      </div>
      <div className="flex flex-col items-center gap-20 mt-10">
        <Outlet context={{ theme, setTheme, data }} />
      </div>
    </div>
  );
}

export default App;
