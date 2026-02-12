const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// AmoCRM Credentials from .env
const { AMO_DOMAIN, AMO_ACCESS_TOKEN } = process.env;

/**
 * Endpoint to handle lead creation
 */
app.post("/api/leads", async (req, res) => {
  const { name, phone, model, source } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: "Name and phone are required" });
  }

  try {
    // 1. Create a lead and contact in one request (AmoCRM Complex Request)
    // Documentation: https://www.amocrm.ru/developers/content/crm_platform/complex-leads-add
    const response = await axios.post(
      `https://${AMO_DOMAIN}.amocrm.ru/api/v4/leads/complex`,
      [
        {
          name: `Новая заявка: ${model || "Заказ"}`,
          price: 0,
          _embedded: {
            contacts: [
              {
                first_name: name,
                custom_fields_values: [
                  {
                    field_code: "PHONE",
                    values: [
                      {
                        value: phone,
                        enum_code: "MOB",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          custom_fields_values: [
            {
              field_name: "Источник",
              values: [
                {
                  value: source || "Landing Page",
                },
              ],
            },
          ],
        },
      ],
      {
        headers: {
          Authorization: `Bearer ${AMO_ACCESS_TOKEN}`,
          "Content-Type": "application/json",
        },
      },
    );

    console.log("AmoCRM Response:", response.data);
    res
      .status(200)
      .json({ success: true, message: "Lead created successfully" });
  } catch (error) {
    console.error(
      "Error creating lead in AmoCRM:",
      error.response ? error.response.data : error.message,
    );
    res.status(500).json({
      error: "Failed to create lead",
      details: error.response ? error.response.data : error.message,
    });
  }
});

// Export the app for Vercel
module.exports = app;

// Only start the server if running locally (not in Vercel environment)
if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}
