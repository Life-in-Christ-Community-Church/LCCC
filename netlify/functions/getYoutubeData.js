// netlify/functions/getYoutubeData.js

const fs = require("fs");
const path = require("path");

exports.handler = async () => {
  try {
    const dataPath = path.join(__dirname, "../../data/youtubeData.json");
    const data = fs.readFileSync(dataPath, "utf-8");
    return {
      statusCode: 200,
      body: data,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to read YouTube data" }),
    };
  }
};