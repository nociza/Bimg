import "dotenv/config";
interface Config {
    bingImageCookie?: string;
    tempDir?: string;
}
declare const config: Config;
export default config;
