import { validateOrder } from "../validators/orderValidator.js";

export const createOrder = async (req, res) => {
  try {
    const errors = validateOrder(req.body);

    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors });
    }

    const now = new Date();
    const formattedDate =
    String(now.getDate()).padStart(2, "0") +
    "/" +
    String(now.getMonth() + 1).padStart(2, "0") +
    "/" +
    now.getFullYear() +
    " " +
    String(now.getHours()).padStart(2, "0") +
    ":" +
    String(now.getMinutes()).padStart(2, "0") +
    ":" +
    String(now.getSeconds()).padStart(2, "0");

    const payload = {
      date_order: formattedDate,
      full_name: req.body.full_name.trim(),
      phone: req.body.phone.trim(),
      address: req.body.address.trim(),
      sku: req.body.sku.trim(),
      qte: Number(req.body.qte),
      price: Number(req.body.price),
      note: req.body.note?.trim() || "",
      delivery_note: req.body.delivery_note?.trim() || "",
    };

    const response = await fetch(process.env.GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (!data.success) {
      return res.status(500).json({
        success: false,
        message: "Failed to save order.",
      });
    }

    res.json({ success: true, message: "Order saved successfully." });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Server error.",
      error: err.message,
    });
  }
};