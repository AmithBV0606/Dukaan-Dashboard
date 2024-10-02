import React from "react";

const orders = [
  {
    id: 1,
    OrderID: "#281209",
    Status: "Successful",
    TransactionID: "TRX123456",
    RefundDate: "Today, 8:45 PM",
    OrderAmount: "₹1125.00",
  },
  {
    id: 2,
    OrderID: "#281210",
    Status: "Processing",
    TransactionID: "TRX789012",
    RefundDate: "Tomorrow, 10:00 AM",
    OrderAmount: "₹950.50",
  },
  {
    id: 3,
    OrderID: "#281211",
    Status: "Successful",
    TransactionID: "TRX345678",
    RefundDate: "Yesterday, 3:30 PM",
    OrderAmount: "₹750.00",
  },
  {
    id: 4,
    OrderID: "#281212",
    Status: "Successful",
    TransactionID: "TRX901234",
    RefundDate: "Today, 11:20 AM",
    OrderAmount: "₹2000.00",
  },
  {
    id: 5,
    OrderID: "#281213",
    Status: "Processing",
    TransactionID: "TRX567890",
    RefundDate: "Tomorrow, 9:00 AM",
    OrderAmount: "₹1800.00",
  },
  {
    id: 6,
    OrderID: "#281214",
    Status: "Processing",
    TransactionID: "TRX098765",
    RefundDate: "Yesterday, 2:00 PM",
    OrderAmount: "₹500.00",
  },
  {
    id: 7,
    OrderID: "#281215",
    Status: "Successful",
    TransactionID: "TRX456789",
    RefundDate: "Today, 10:30 AM",
    OrderAmount: "₹3000.00",
  },
  {
    id: 8,
    OrderID: "#281216",
    Status: "Processing",
    TransactionID: "TRX987654",
    RefundDate: "Tomorrow, 11:30 AM",
    OrderAmount: "₹1200.00",
  },
  {
    id: 9,
    OrderID: "#281217",
    Status: "Processing",
    TransactionID: "TRX654321",
    RefundDate: "Yesterday, 4:00 PM",
    OrderAmount: "₹900.00",
  },
  {
    id: 10,
    OrderID: "#281218",
    Status: "Successful",
    TransactionID: "TRX234567",
    RefundDate: "Today, 9:45 AM",
    OrderAmount: "₹1500.00",
  },
];

// Table
function OrderInfo() {
  return (
    <div className="bg-slate-200 m-4 p-2 rounded-lg font-mono">
      {/* Search Section */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 p-2 bg-white w-80 rounded-lg ml-2">
          <img src="/search.svg" alt="" />
          <input
            type="search"
            name=""
            placeholder="Order ID or transactions ID"
            className=" outline-none w-80"
            id=""
          />
        </div>

        <div className="hidden sm:flex gap-2">
          <button className="bg-white flex items-center gap-2 p-2 rounded-lg">
            <p className="text-lg">Sort</p>
            <img src="/sort.svg" alt="" className="w-4" />
          </button>

          <button className="bg-white p-2 rounded-lg mr-2">
            <img src="/download.svg" alt="" className="w-6" />
          </button>
        </div>
      </div>

      {/* Table section */}
      {/* <div className="text-white p-2 overflow-x-auto">
        <div className="grid grid-cols-5 sm:gap-20 gap-32 bg-[#146EB4] rounded-lg p-2">
          <p>Order ID</p>
          <p>Status</p>
          <p>Transaction ID</p>
          <p className="hidden sm:block">Refund Date</p>
          <p className="hidden sm:block">Order Amount</p>
        </div>

        {orders.map((order) => (
          <div key={order.id} className="text-black grid grid-cols-5 p-4 gap-32 sm:gap-20">
            <p>{order.OrderID}</p>
            <p>{order.Status}</p>
            <p>{order.TransactionID}</p>
            <p className="hidden sm:block">{order.RefundDate}</p>
            <p className="hidden sm:block">{order.OrderAmount}</p>
          </div>
        ))}
      </div> */}

      <div className="overflow-x-auto">
        <table className="min-w-full mt-4 p-2">
          <colgroup>
            <col className="w-1/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
            <col className="w-1/5" />
          </colgroup>

          <thead className="text-[#4D4D4D]">
            <tr className="bg-[#F2F2F2]">
              <th class="px-3 py-[10px] text-left text-sm font-medium tracking-wider rounded-l">
                Order ID
              </th>

              <th class="px-3 py-[10px] text-left text-sm font-medium tracking-wider rounded-l">
                Status
              </th>

              <th class="px-3 py-[10px] text-left text-sm font-medium tracking-wider rounded-l">
                Transaction ID
              </th>

              <th class="px-3 py-[10px] text-left text-sm font-medium tracking-wider rounded-l">
                Refund Date
              </th>

              <th class="px-3 py-[10px] text-left text-sm font-medium tracking-wider rounded-l">
                Order Amount
              </th>
            </tr>
          </thead>

          <tbody className="bg-white divide-[#E6E6E6]">
            {orders.map((order) => (
              <tr className="text-sm" key={order.id}>
                <td class="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                  {order.OrderID}
                </td>

                <td class="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                  {order.Status}
                </td>

                <td class="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                  {order.TransactionID}
                </td>

                <td class="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                  {order.RefundDate}
                </td>

                <td class="px-3 py-[10px] whitespace-nowrap text-[#146EB4] font-medium">
                  {order.OrderAmount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default OrderInfo;