const crypto = require("crypto");
const self = {};

const algorithm = "aes-256-cbc";
const key = crypto
  .createHash("sha512")
  .update("secret_key")
  .digest("hex")
  .substring(0, 32);
const encryptionIV = crypto
  .createHash("sha512")
  .update("secret_iv")
  .digest("hex")
  .substring(0, 16);


self.encrypt = (text) => {
  try {
    const cipher = crypto.createCipheriv(algorithm, key, encryptionIV);
    return Buffer.from(
      cipher.update(text, "utf8", "hex") + cipher.final("hex")
    ).toString("base64");
  } catch (error) {
    return {
      message: error.message,
    };
  }
};

self.decrypt = (encrypted) => {
  try {
    const buff = Buffer.from(encrypted, "base64");
    const decipher = crypto.createDecipheriv(algorithm, key, encryptionIV);
    return (
      decipher.update(buff.toString("utf8"), "hex", "utf8") +
      decipher.final("utf8")
      ); //
  } catch (error) {
    return {
      message: error.message,
    };
  }
};
module.exports = self;
