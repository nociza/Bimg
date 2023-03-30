import "dotenv/config";
const config = {
    bingImageCookie: process.env.BING_IMAGE_COOKIE,
    tempDir: process.env.TEMP_DIR || "/tmp",
};
export default config;
