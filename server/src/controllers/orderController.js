import { validateOrder } from "../validators/orderValidator.js";

export const createOrder = async (req, res) => {
  try {
    const errors = validateOrder(req.body);

    if (errors.length > 0) {
      return res.status(400).json({ success: false, errors });
    }

    const ip =
      req.headers["x-forwarded-for"]?.split(",")[0] ||
      req.socket.remoteAddress ||
      "unknown";

    const payload = {
      name: req.body.name.trim(),
      phone: req.body.phone.trim(),
      city: req.body.city.trim(),
      address: req.body.address.trim(),
      product: req.body.product.trim(),
      quantity: Number(req.body.quantity),
      note: req.body.note?.trim() || "",
      ip,
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