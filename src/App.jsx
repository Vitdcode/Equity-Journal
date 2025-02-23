import { useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdCalendarMonth } from "react-icons/md";
import { LuPaintbrushVertical } from "react-icons/lu";
import logo from "./images/logo.png";
import logoText from "./images/logo-text.png";
import { GiCash } from "react-icons/gi";

function App() {
  const [theme, setTheme] = useState("nord");
  /*  const [investmentReturns, setInvestmentreturns] = useState([]); */
  const investmentReturnsRef = useRef([]);
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
    {
      "01.02.2025": {
        Invested: 29276,
        "Cash Trade Republic": 3994,
        "C24 Tagesgeld": 1132,
        Cash: 3000,
      },
    },
  ]);

  return (
    <div className="main-wrapper">
      <div className=" h-screen flex flex-col  gap-10 bg-base-200 border border-base-300 rounded-box ">
        <div className="relative">
          <img
            src={logoText}
            alt="Logo Text"
            className="bg-base-100 border-2 border-base-300 rounded-xl "
          />
          <GiCash fontSize={"3rem"} className="rotate-16 absolute bottom-0 right-0" />

          {/*  <img src={logo} alt="Logo image of the App" className="h-20 w-20" /> */}
        </div>

        <div className="flex flex-col p-10 gap-10">
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
      </div>
      <div className="flex flex-col items-center gap-20 mt-10">
        <Outlet context={{ theme, setTheme, data, investmentReturnsRef }} />
      </div>
    </div>
  );
}

export default App;
