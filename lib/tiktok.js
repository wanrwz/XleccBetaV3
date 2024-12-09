const axios = require("axios");

// Tiktok Search

async function tiktoks(text) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios({
        method: "POST",
        url: "https://tikwm.com/api/feed/search",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          Cookie: "current_language=en",
          "User-Agent":
            "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36",
        },
        data: {
          keywords: text,
          count: 10,
          cursor: 0,
          HD: 1,
        },
      });
      const videos = response.data.data.videos;
      if (videos.length === 0) {
        reject("No videos found.");
      } else {
        const results = videos.map((video) => ({
          title: video.title,
          cover: video.cover,
          origin_cover: video.origin_cover,
          no_watermark: video.play,
          watermark: video.wmplay,
          music: video.music,
        }));
        resolve(results);
      }
    } catch (error) {
      reject(error);
    }
  });
}