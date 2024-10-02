import React from "react";

function NavBar() {
  return (
    <div className="flex justify-between pl-4 pr-4 pt-2 border border-b-slate-400 pb-3 font-mono">
        {/* Section 1 */}
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-2xl font-[500] text-black">Payouts</h1>

        <div className="hidden lg:flex lg:items-center">
          <img src="public/blackQuestion.svg" alt="" className="w-4" />
          <p>How it works</p>
        </div>
      </div>

    {/* Search section */}
      <div>
        <div className="flex justify-start gap-3 px-4 py-3 rounded-md w-60 sm:w-96 font-[sans-serif] bg-slate-200 ">
          <img src="public/search.svg" alt="" />

          <input
            type="email"
            placeholder="Search features, tutorials, etc."
            class="w-full outline-none bg-transparent text-sm"
          />
        </div>
      </div>

{/* Icons Section */}
      <div className="hidden sm:flex sm:items-center sm:gap-2">
        <span className="bg-slate-300 p-2 rounded-full cursor-pointer">
            <img src="public/message.svg" alt="" className="w-6"/>
        </span>

        <span className="bg-slate-300 p-2 rounded-full cursor-pointer">
            <img src="public/DownArrow.svg" alt="" className="w-6"/>
        </span>
      </div>
    </div>
  );
}

export default NavBar;