import React from "react";

const navigationList = [
  "Home",
  "Orders",
  "Products",
  "Delivery",
  "Marketing",
  "Analytics",
  "Payouts",
  "Discounts",
  "Audience",
  "Appearence",
  "Plugins",
];

function SideBar() {
  return (
    <div className="bg-[#1E2640] h-[100%] flex flex-col justify-between font-mono">
      {/* Top Part */}
      <div>
        {/* Logo */}
        <div className="flex justify-between items-center p-4">
          <img
            src="/Logo.jpg"
            alt=""
            className="w-10 h-10 rounded-lg"
          />

          <div className="text-white">
            <p className="text-base">Amith</p>
            <p className="cursor-pointer underline text-xs">Visit Store</p>
          </div>

          <img src="/DownArrowWhite.svg" alt="" className="w-4 hidden xl:block" />
        </div>

        {/* Navigation */}
        <div>
          {navigationList.map((item, index) => (
            <div className="hidden lg:flex text-white gap-2 p-2 m-2 rounded-xl hover:bg-[#3b4a7b] cursor-pointer" key={index}>
              <img src={`/${item}.svg`} alt="" className="w-6" />
              <p className="text-base">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Part */}
      <div className="bg-[#3b4a7b] text-white p-2 m-2 rounded-lg hidden lg:block">
        <p>Available Credits : </p>
        <p>$200</p>
      </div>
    </div>
  );
}

export default SideBar;