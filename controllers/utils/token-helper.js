const crypto = require("crypto");
// const db = require("../models"); // Assuming your models index file is here
// const RefreshToken = db.RefreshToken;

const { RefreshToken } = require("../../models");


// Set the Refresh Token Time To Live (TTL) - e.g., 30 days

const REFRESH_TOKEN_TTL_MS = 60*60 * 1000; // 10 minute in milliseconds

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
        expiry_date: expiry_date,
    });

    return refreshTokenRecord;

    // 4. Return the plain token string to be sent to the client
    return refreshTokenRecord.token;
};