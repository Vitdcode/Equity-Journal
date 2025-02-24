import { useState } from "react";
import { MdCalendarMonth } from "react-icons/md";
import { useOutletContext } from "react-router-dom";

export default function AddMonthDisplay() {
  const { data, setData } = useOutletContext();
  const [date, setDate] = useState("");
  const [invested, setInvested] = useState("");
  const [cashTrade, setCashTrade] = useState("");
  const [c24Cash, setC24Cash] = useState("");
  const [cash, setCash] = useState("");
  const [sp500, setSp500] = useState("");
  const [bitcoin, setBitcoin] = useState("");
  const [xrp, setXrp] = useState("");

  const submitData = (e) => {
    e.preventDefault();
    setData([
      ...data,
      {
        date: date.split("-").reverse().join("."), //formats the american date format to metric date format
        Invested: parseFloat(invested),
        "Cash Trade Republic": parseFloat(cashTrade),
        "C24 Tagesgeld": parseFloat(c24Cash),
        Cash: parseFloat(cash),
        Investments: {
          "S&P 500": parseFloat(sp500),
          Bitcoin: parseFloat(bitcoin),
          XRP: parseInt(xrp),
        },
      },
    ]);
  };

  return (
    <div className="flex flex-col gap-10 ml-10 mr-10 w-[60%]">
      <h1 className="flex items-center justify-center gap-3 bg-base-300  p-2 text-2xl mb-10 rounded-lg">
        <MdCalendarMonth /> Add month
      </h1>
      <form onSubmit={submitData} className="flex flex-col gap-10 ">
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Date</legend>
          <input
            type="date"
            className="input"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </fieldset>

        <fieldset className="fieldset">
          <legend className="fieldset-legend">General Data</legend>
          <input
            type="number"
            className="input"
            placeholder="Invested"
            value={invested}
            required
            onChange={(e) => setInvested(e.target.value)}
          />
          <input
            type="number"
            className="input"
            placeholder="Cash Trade Republic"
            required
            value={cashTrade}
            onChange={(e) => setCashTrade(e.target.value)}
          />
          <input
            type="number"
            className="input"
            placeholder="C24 Tagesgeld"
            required
            value={c24Cash}
            onChange={(e) => setC24Cash(e.target.value)}
          />
          <input
            type="number"
            className="input"
            placeholder="Cash"
            required
            value={cash}
            onChange={(e) => setCash(e.target.value)}
          />
        </fieldset>

        <fieldset className="fieldset  bg-base-200 border border-base-300 p-4 rounded-box ">
          <legend className="fieldset-legend">Investments</legend>

          <label className="fieldset-label">S&P 500</label>
          <input
            type="number"
            className="input"
            placeholder="Amount"
            value={sp500}
            onChange={(e) => setSp500(e.target.value)}
          />

          <label className="fieldset-label">Bitcoin</label>
          <input
            type="number"
            className="input"
            placeholder="Amount"
            value={bitcoin}
            onChange={(e) => setBitcoin(e.target.value)}
          />

          <label className="fieldset-label">XRP</label>
          <input
            type="number"
            className="input"
            placeholder="Amount"
            value={xrp}
            onChange={(e) => setXrp(e.target.value)}
          />
        </fieldset>

        <button type="submit" className="btn btn-accent">
          Submit
        </button>
      </form>
    </div>
  );
}
