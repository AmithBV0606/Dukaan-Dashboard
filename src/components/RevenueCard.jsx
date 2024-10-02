import React from "react";

function RevenueCard({ title, amount, orderCount, subTitle }) {
  return (
    <div
      className={`${
        subTitle ? "bg-[#146EB4] text-white hover:bg-[#1a8fea]" : "bg-[#E5E4E2] text-black hover:bg-[#d4d3d2]"
      } m-4 rounded-lg space-y-3 font-mono cursor-pointer`}
    >
      <div className="flex items-center gap-1 font-normal pl-4 mt-3">
        <p>{title}</p>

        <img
          src={`${
            subTitle
              ? "../src/assets/whiteQuestion.svg"
              : "../src/assets/blackQuestion.svg"
          }`}
          alt=""
          className="w-4"
        />
      </div>

      <div className="flex justify-between pl-4">
        <h1 className="text-xl font-semibold">${amount}</h1>

        {orderCount && (
          <span className="flex items-center pr-4">
            <p
              className={`underline ${
                subTitle ? "text-white" : "text-blue-600"
              }`}
            >
              {orderCount} Orders
            </p>

            <img
              src={`${
                subTitle
                  ? "../src/assets/whiteArrow.svg"
                  : "../src/assets/blackArrow.svg"
              }`}
              alt=""
              className="w-5"
            />
          </span>
        )}
      </div>

      {subTitle && (
        <div className="flex justify-between pr-4 bg-[#0e529a] pl-4 rounded-md pt-2 pb-2">
          <p>{subTitle}</p>
          <p>Today, 4:00PM</p>
        </div>
      )}
    </div>
  );
}

export default RevenueCard;