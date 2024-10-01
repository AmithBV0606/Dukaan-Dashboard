import RevenueCard from "./components/RevenueCard";

function App() {

  return (
    <div>
      <RevenueCard 
        title={"Next Payout"}
        amount={"2,312.23"}
        orderCount={23}
      />
    </div>
  );
}

export default App;