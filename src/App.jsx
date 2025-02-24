import { useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdCalendarMonth } from "react-icons/md";
import { LuPaintbrushVertical } from "react-icons/lu";
import logoText from "./images/logo-text.png";
import { GiCash } from "react-icons/gi";

function App() {
  const [theme, setTheme] = useState("nord");
  const investmentReturnsRef = useRef([]);
  const [data, setData] = useState([
    {
      id: crypto.randomUUID(),
      date: "29.07.2024",
      Invested: 17089,
      "Cash Trade Republic": 4000,
      "C24 Tagesgeld": 1714,
      Cash: 3000,
    },
    {
      id: crypto.randomUUID(),
      date: "29.10.2024",
      Invested: 22909.85,
      "Cash Trade Republic": 4861.33,
      "C24 Tagesgeld": 2003.62,
      Cash: 3000,
      Investments: {
        "S&P 500": 570.3,
      },
    },
    {
      id: crypto.randomUUID(),
      date: "01.02.2025",
      Invested: 29276,
      "Cash Trade Republic": 3994,
      "C24 Tagesgeld": 1132,
      Cash: 3000,
      Investments: {
        "S&P 500": 616.8,
        Bitcoin: 98148.0,
        XRP: 2.87,
      },
    },
  ]);

  return (
    <div className="main-wrapper">
      <div className="sticky top-0 h-screen flex flex-col gap-10 bg-base-200 border border-base-300  ">
        <div className="relative">
          <img
            src={logoText}
            alt="Logo Text"
            className="bg-base-300 border-2 border-base-300 rounded-lg shadow-lg w-[100%]"
          />
          <GiCash fontSize={"3rem"} className="rotate-16 absolute bottom-0 right-0" />
        </div>

        <div className="flex flex-col p-10 gap-10">
          <Link to="overview" className=" justify-start  btn btn-outline btn-xl">
            <MdOutlineSpaceDashboard /> Overview
          </Link>
          <Link to={"add-month"} className="btn btn-outline justify-start btn-xl">
            <MdCalendarMonth /> Add month
          </Link>
          <Link to={"change-theme"} className="btn btn-outline justify-start btn-xl">
            <LuPaintbrushVertical /> Change App Theme
          </Link>
        </div>
        <span className="flex items-center gap-2 mt-auto w-[100%] neutral-content shadow-2xl p-2 text-xl rounded-md">
          <LuPaintbrushVertical /> Theme: {theme}
        </span>
      </div>
      <div className="flex flex-col items-center gap-20 mt-10">
        <Outlet context={{ theme, setTheme, data, setData, investmentReturnsRef }} />
      </div>
    </div>
  );
}

export default App;
