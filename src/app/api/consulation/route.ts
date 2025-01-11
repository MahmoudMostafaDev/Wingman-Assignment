export const GET = async () => {
  const data = [
    {
      day: "Mon",
      incoming: 30,
      answerd: 12,
      ExpertsOnline: 10,
    },
    {
      day: "Tue",
      incoming: 20,
      answerd: 30,
      ExpertsOnline: 20,
    },
    {
      day: "Wed",
      incoming: 34,
      answerd: 40,
      ExpertsOnline: 15,
    },
    {
      day: "Thu",
      incoming: 32,
      answerd: 10,
      ExpertsOnline: 10,
    },
    {
      day: "Fri",
      incoming: 20,
      answerd: 26,
      ExpertsOnline: 51,
    },
    {
      day: "Sat",
      incoming: 40,
      answerd: 50,
      ExpertsOnline: 40,
    },
    {
      day: "Sun",
      incoming: 20,
      answerd: 30,
      ExpertsOnline: 31,
    },
  ];
  return new Response(JSON.stringify(data));
};
