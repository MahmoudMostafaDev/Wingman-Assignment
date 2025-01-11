export const GET = async () => {
  const data = {
    consultations: {
      isIncreasing: true,
      percentage: 15,
      value: "24",
    },
    ordersPlaced: {
      isIncreasing: false,
      percentage: 25,
      value: "12",
    },
    conversion: {
      isIncreasing: false,
      percentage: 15,
      value: "50%",
    },
    totalSalesValue: {
      isIncreasing: true,
      percentage: 15,
      value: "$12,000",
    },
    avgOrderValue: {
      isIncreasing: true,
      percentage: 15,
      value: "$1,000",
    },
    commissionPaid: {
      isIncreasing: true,
      percentage: 15,
      value: "$2,000",
    },
  };
  return new Response(JSON.stringify(data));
};
