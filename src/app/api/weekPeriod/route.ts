export const GET = async () => {
  const data = [
    { period: "This Week", consultations: 30, ordersClosed: 20 },
    { period: "Last Week", consultations: 20, ordersClosed: 25 },
  ];
  return new Response(JSON.stringify(data), { status: 200 });
};
