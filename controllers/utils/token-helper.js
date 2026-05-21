const crypto = require("crypto");
const { RefreshToken } = require("../../models");

// 🚨 FIX: Increase the Refresh Token Time To Live (TTL)
// Changing this to 7 days so the user stays remembered, while the frontend handles the 15-minute inactivity rule.
const REFRESH_TOKEN_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds

/**
 * Creates a new, long-lived Refresh Token record in the database.
 * @param {number} userId The ID of the user who is logging in.
 * @returns {Promise<string>} The generated opaque token string.
 */
exports.createRefreshToken = async (userId) => {
    // 1. Calculate the actual expiration date/time
    let expiry_date = new Date();
    expiry_date.setTime(expiry_date.getTime() + REFRESH_TOKEN_TTL_MS);

    // 2. Generate a unique, random string (opaque token)
    const token = crypto.randomBytes(64).toString('hex');

    // 3. Save the token and expiration date to the database
    const refreshTokenRecord = await RefreshToken.create({
        token: token,
        user_id: userId,
        expiry_date: expiry_date, // Ensure your RefreshToken model uses 'expiry_date' matching your DB schema
    });

    // 🚨 FIX: Removed the duplicate object return that made line 32 unreachable.
    // Return the plain token string to be sent to the client
    return refreshTokenRecord.token;
};