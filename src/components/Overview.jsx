import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";

export default function Overview() {
  const { data } = useOutletContext();
  const [returnPositive, setReturnPostitive] = useState(true);

  const totalAmount = Object.values(data[data.length - 1])
    .flatMap((investments) => Object.values(investments))
    .reduce((sum, num) => (sum += num), 0);

  const totalAmountPerQuartal = (investments) => {
    return Object.values(investments).reduce((sum, num) => (sum += num), 0);
  };

  const returnOnInvestment = (index) => {
    if (data[index - 1] === undefined) return;
    console.log(data[index - 1]);

    function amountHelperFunction(index) {
      return Object.values(data[index])
        .flatMap((investments) => Object.values(investments))
        .reduce((sum, num) => (sum += num), 0);
    }

    const currentAmount = amountHelperFunction(index);
    const lastAmount = amountHelperFunction(index - 1);

    const amount = `${(currentAmount - lastAmount).toFixed(2)}`;
    /*     amount > 0 ? setReturnPostitive(true) : setReturnPostitive(false); */

    return amount;
  };

  return (
    <div className="flex flex-col gap-10">
      <span className="text-xl font-bold text-green-600 [text-shadow:1px_1px_1px_rgba(0,0,0,0.2)]">
        Total amount: ${totalAmount.toFixed(2)}
      </span>
      {data.map((entry, index) => {
        const amount = returnOnInvestment(index);

        return (
          <div key={index}>
            {amount !== undefined && (
              <>
                {amount > 0 ? (
                  <div className="flex items-center justify-end mr-2 mb-2 gap-2 ">
                    <FaArrowTrendUp />
                    <span className="text-green-600">{amount}</span>
                  </div>
                ) : (
                  <div>
                    <FaArrowTrendDown />
                    <span className="text-red-600">{amount}</span>
                  </div>
                )}
              </>
            )}

            {Object.entries(entry).map(([date, investments]) => (
              <div
                key={date}
                className="flex flex-col items-center gap-10 shadow bg-white p-5 rounded-xl"
              >
                <span className="text-xl font-bold">{date}</span>
                <div className="flex gap-20 bg-base-200 border border-base-300 rounded-xl p-2">
                  {Object.entries(investments).map(([investmentType, amount]) => (
                    <span key={investmentType}>
                      {investmentType}: ${amount.toFixed(2)}
                    </span>
                  ))}
                  <span>Total amount: {totalAmountPerQuartal(investments)}</span>
                </div>
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
