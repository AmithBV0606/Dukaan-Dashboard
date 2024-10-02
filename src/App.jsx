import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import OrderInfo from "./components/OrderInfo";
import OverviewSection from "./components/OverviewSection";
import RevenueCard from "./components/RevenueCard";
import SideBar from "./components/SideBar";
import TransactionsFilter from "./components/TransactionsFilter";

function App() {
  return (
    <div className="flex">
      {/* SideBar */}
      <div className="w-0 xl:w-[14vw]">
        <SideBar />
      </div>

      {/* Main body : */}
      <div className="w-full lg:w-[100vw] ">
        {/* Navbar Section*/}
        <NavBar />

        {/* Overview Section */}
        <OverviewSection />

        {/* Revenue Card Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3">
          <RevenueCard
            title={"Next Payout"}
            amount={"2,312.23"}
            orderCount={23}
            subTitle={"Next Payment Date:"}
          />

          <RevenueCard
            title={"Amount Pending"}
            amount={"92,312.20"}
            orderCount={13}
          />

          <RevenueCard title={"Amount Processed"} amount={"23,92,312.19"} />
        </div>

        {/* Transaction */}
        <TransactionsFilter />

        {/* Order Table */}
        <OrderInfo />

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
}

export default App;