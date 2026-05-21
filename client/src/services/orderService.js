export async function createOrder(orderData) {
  const res = await fetch("https://bioverma.up.railway.app/api/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });

  const data = await res.json();
  console.log("Order created:", data);
  if (!res.ok) {
    throw new Error(data.message || "Order failed");
  }

  return data;
}