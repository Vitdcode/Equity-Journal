import { useOutletContext } from "react-router-dom";

export default function Overview() {
  const { data } = useOutletContext();

  const totalAmount = Object.values(data[data.length - 1])
    .flatMap((investments) => Object.values(investments))
    .reduce((sum, num) => (sum += num), 0);

  const totalAmountPerQuartal = (investments) => {
    return Object.values(investments).reduce((sum, num) => (sum += num), 0);
  };

  return (
    <div className="flex flex-col gap-10">
      <span className="text-xl font-bold text-green-600 [text-shadow:1px_1px_1px_rgba(0,0,0,0.2)]">
        Total amount: ${totalAmount.toFixed(2)}
      </span>
      {data.map((entry) =>
        Object.entries(entry).map(([date, investments]) => (
          <div
            key={date}
            className="flex flex-col items-center gap-10 shadow bg-white p-5 rounded-xl"
          >
            <span className="text-xl font-bold ">{date}</span>
            <div className="flex gap-20 bg-base-200 border border-base-300 rounded-xl p-2">
              {Object.entries(investments).map(([investmentType, amount]) => (
                <span key={investmentType}>
                  {investmentType}: ${amount.toFixed(2)}
                </span>
              ))}
              <span>Total amount: {totalAmountPerQuartal(investments)}</span>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
