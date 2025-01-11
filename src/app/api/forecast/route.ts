export const GET = async () => {
  const data = ["+15%", "+25%"];
  return new Response(JSON.stringify(data), { status: 200 });
};
