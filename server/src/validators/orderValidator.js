export function validateOrder(data) {
  const errors = [];

  if (!data.name || data.name.length < 2) errors.push("Name is required.");

  if (!data.phone || !/^(06|07)\d{8}$/.test(data.phone))
    errors.push("Phone must be Moroccan format (06/07 + 8 digits).");

  if (!data.city || data.city.length < 2) errors.push("City is required.");

  if (!data.address || data.address.length < 5)
    errors.push("Address is required.");

  if (!data.product || data.product.length < 2)
    errors.push("Product is required.");

  const quantity = Number(data.quantity);
  if (!quantity || quantity < 1 || quantity > 99)
    errors.push("Quantity must be between 1 and 99.");

  // Honeypot anti-spam
  if (data.website && data.website.trim() !== "")
    errors.push("Spam detected.");

  return errors;
}