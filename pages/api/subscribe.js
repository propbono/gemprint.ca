import axios from 'axios';

const getRequestParams = (email) => {
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const API_SERVER = process.env.MAILCHIMP_API_SERVER;
  const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
  const url = `https://${API_SERVER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`;

  const data = {
    email_address: email,
    status: "subscribed",
  };
  // Api key needs to be encoded in base 64 format before
  const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString("base64");

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${base64ApiKey}`,
  };

  return { url, data, headers };
};

const subscribe = async (req, res) => {
  const { email } = req.body;

  if (!email || !email.length) {
    return res.status(400).json({ error: "Please provide an email address" });
  }

  try {
    const { url, data, headers } = getRequestParams(email);

    await axios.post(url, data, { headers });

    return res.status(201).json({ error: null });
  } catch (error) {
    return res
      .status(400)
      .json({
        error:
          "Something went wrong. Please try again later. If this issue continues please contact us.",
      });
  }
};

export default subscribe;
