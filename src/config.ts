import "dotenv/config";

interface Config {
  bingImageCookie?: string;
  tempDir?: string;
}

const config: Config = {
  bingImageCookie: process.env.BING_IMAGE_COOKIE,
  tempDir: process.env.TEMP_DIR || "/tmp",
};

export default config;
