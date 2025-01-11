import { NextRequest } from "next/server";

function generateProducts(page: number) {
  const products = [];
  for (let i = 0; i < 5; i++) {
    products.push({
      product: {
        img: "/Avatar.png",
        product: `Product ${page * 5 + i + 1}`,
      },
      date: {
        date: "24 Apr '2024",
        time: "10:24 AM",
      },
      timeSpent: "2h 5m",
      orderValue: `$${Math.floor(Math.random() * 1000)}`,
      commission: `$${Math.floor(Math.random() * 1000)}`,
    });
  }
  return products;
}
export const GET = async (req: NextRequest) => {
  const page = req.nextUrl.searchParams.get("page");
  const size = req.nextUrl.searchParams.get("size");
  if (page && size) {
    const data = generateProducts(Number(page));
    return new Response(JSON.stringify({ data }), { status: 200 });
  }
  return new Response(JSON.stringify({ message: "invalid request" }), {
    status: 401,
  });
};
