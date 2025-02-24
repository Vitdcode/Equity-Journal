import { useOutletContext } from "react-router-dom";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { FaWallet } from "react-icons/fa";
import { SiCashapp } from "react-icons/si";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TbBrandCashapp } from "react-icons/tb";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import PropTypes from "prop-types";

export default function Overview() {
  const { data, investmentReturnsRef } = useOutletContext();

  const totalAmount = (data) => {
    return Object.values(data).reduce((sum, num) => {
      if (typeof num === "number") {
        sum += num;
      }

      return sum;
    }, 0);
  };
  const totalChange = () => {
    return investmentReturnsRef.current.reduce((sum, num) => (sum += num), 0);
  };

  const returnOnInvestment = (index) => {
    if (data[index - 1] === undefined) return;

    const currentAmount = totalAmount(data[index]);
    const previousAmount = totalAmount(data[index - 1]);
    investmentReturnsRef.current.push(currentAmount - previousAmount);
    return [currentAmount, previousAmount];
  };

  return (
    <div className="flex flex-col gap-10 ml-10 mr-10 p-10">
      <h1 className="flex items-center justify-center gap-3 bg-base-300  p-2 text-2xl mb-10 rounded-lg">
        <MdOutlineSpaceDashboard /> Overview
      </h1>
      <div className="bg-base-200 border border-base-300 rounded-xl p-2">
        <span className="flex items-center gap-5 text-3xl  divider">
          <FaWallet className="h-30 w-25" /> Total amount: $
          {totalAmount(data[data.length - 1]).toFixed(2)}
        </span>
        <span className="flex flex-col gap-3 text-emerald-400 p-5">
          <FaArrowTrendUp className="h-7 w-7" /> Started: 12.02.2024 <br></br> Growth: $
          {totalChange().toFixed(2)} in {(data.length - 1) * 3} months ~{" "}
          {((data.length - 1) * 3) / 12} years
        </span>
      </div>
      {data.map((entry, index) => (
        <div key={entry.id}>
          <InvestmentChange amount={returnOnInvestment(index)} />
          <InvestmentData
            entry={entry}
            totalAmount={totalAmount}
            investmentReturnsRef={investmentReturnsRef}
            index={index}
          />
        </div>
      ))}
    </div>
  );
}

const InvestmentData = ({ entry, totalAmount, investmentReturnsRef, index }) => {
  const { data, setData } = useOutletContext();

  const handleDelete = (index) => {
    setData(data.filter((entry) => data[index] != entry));
  };

  investmentReturnsRef.current.length = 0; //resetting the ref so it doesn't keep pushing the same numbers
  return (
    <div className="relative flex flex-col flex-wrap items-center gap-10 bg-base-200 border border-base-300 rounded-xl p-3">
      <button onClick={() => handleDelete(index)} className="absolute right-0 top-0 btn btn-xl">
        <MdDelete />
      </button>
      <span className="flex items-center gap-2 text-xl font-bold ">
        <FaRegCalendarAlt /> {entry.date}
      </span>
      <div className="flex gap-10 bg-base-100 border border-base-300 rounded-xl p-3">
        {Object.entries(entry).map(([investmentType, amount], index) => (
          <>
            {typeof amount === "number" && (
              <span key={index} className="flex items-center">
                <TbBrandCashapp /> {investmentType}: ${amount.toFixed(2)}
              </span>
            )}
          </>
        ))}
        <span className="flex items-center gap-2">
          <SiCashapp />
          Total amount: ${totalAmount(entry).toFixed(2)}
        </span>
      </div>
      <div className="flex gap-10 bg-base-100 border border-base-300 rounded-xl p-3">
        {entry?.Investments &&
          Object.entries(entry["Investments"]).map(([investment, value]) => (
            <span key={investment}>
              {investment}: ${value.toFixed(2)}
            </span>
          ))}
      </div>
    </div>
  );
};

InvestmentData.propTypes = {
  entry: PropTypes.object,
  totalAmount: PropTypes.func,
  investmentReturnsRef: PropTypes.array,
  index: PropTypes.number,
};

const InvestmentChange = ({ amount }) => {
  if (amount === undefined) return;

  const currentAmount = amount[0];
  const previousAmount = amount[1];

  const change = (currentAmount - previousAmount).toFixed(2);
  const changePercantage = (((currentAmount - previousAmount) / currentAmount) * 100).toFixed(2);

  return (
    <div>
      {change > 0 ? (
        <div className="flex items-center justify-end mr-2 mb-2 gap-2 bg-base-300 border-1 border-base-300 w-fit ml-auto rounded-xl p-2">
          <span className="text-green-600">${change}</span>
          <FaArrowTrendUp />
          <span className="text-green-600">{changePercantage}%</span>
        </div>
      ) : (
        <div className="flex items-center justify-end mr-2 mb-2 gap-2 bg-base-300 border-1 border-base-300 w-fit ml-auto rounded-xl p-2">
          <span className="text-red-600">${change}</span>
          <FaArrowTrendDown />
          <span className="text-red-600">{changePercantage}%</span>
        </div>
      )}
    </div>
  );
};

InvestmentChange.propTypes = {
  amount: PropTypes.array,
};
