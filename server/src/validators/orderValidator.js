export function validateOrder(data) {
  const errors = [];

  if (!data.full_name || data.full_name.length < 2) errors.push("Name is required.");

  if (!data.phone || !/^(06|07|\+2126|\+2127)\d{8}$/.test(data.phone))
    errors.push("Phone must be Moroccan format (06/07/+2126/+2127 + 8 digits).");

  if (!data.sku || data.sku.length < 2)
    errors.push("SKU is required.");

  const qte = Number(data.qte);
  if (!qte || qte < 1 || qte > 99)
    errors.push("Quantity must be between 1 and 99.");

  if (!data.price || data.price <= 0)
    errors.push("Price must be a positive number.");

  // Honeypot anti-spam
  if (data.website && data.website.trim() !== "")
    errors.push("Spam detected.");

  return errors;
}