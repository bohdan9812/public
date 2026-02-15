const express = require("express");
const axios = require("axios");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const { AMO_DOMAIN, AMO_ACCESS_TOKEN } = process.env;

app.post("/api/leads", async (req, res) => {
  const { name, phone, model, price, siteUrl } = req.body;

  console.log("Incoming lead request:", req.body);

  if (!name || !phone) {
    return res.status(400).json({ error: "Name and phone are required" });
  }

  try {
    const url = `https://${AMO_DOMAIN}.amocrm.ru/api/v4/leads`;
    console.log("Sending to AmoCRM URL:", url);

    const contactsResp = await axios.post(
      `https://${AMO_DOMAIN}.amocrm.ru/api/v4/contacts`,
      [
        {
          name: name,
          custom_fields_values: [
            {
              field_id: 1260659,
              values: [
                {
                  value: phone,
                  enum_code: "WORK",
                },
              ],
            },
          ],
        },
      ],
      { headers: { Authorization: `Bearer ${AMO_ACCESS_TOKEN}` } },
    );

    const contactIds = (contactsResp.data?._embedded?.contacts || []).map(
      (c) => ({ id: c.id }),
    );
    const leadResp = await axios.post(
      url,
      [
        {
          name: model,
          price,
          custom_fields_values: [
            { field_id: 1261261, values: [{ value: name }] },
            {
              field_id: 1261265,
              values: [{ value: siteUrl }],
            },
          ],
          _embedded: {
            contacts: contactIds,
          },
        },
      ],
      { headers: { Authorization: `Bearer ${AMO_ACCESS_TOKEN}` } },
    );
    console.log(
      "AmoCRM Success Response:",
      JSON.stringify(leadResp.data, null, 2),
    );
    res
      .status(200)
      .json({ success: true, message: "Lead created successfully" });
  } catch (error) {
    const errorData = error.response ? error.response.data : error.message;
    console.error(
      "Error creating lead in AmoCRM:",
      JSON.stringify(errorData, null, 2),
    );

    res.status(500).json({
      error: "Failed to create lead",
      details: errorData,
    });
  }
});

module.exports = app;

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}
