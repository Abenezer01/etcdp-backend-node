const validateReply = require("../../../../utils/validateerror");
const { UserEmail } = require('../../../../models'); // Import the User model
const cipherHelper = require("../../../../controllers/utils/cipher-helper");

const loginValidate = async (req, res, next) => {
  const validationRule = {
    email: "required|email",
    password: "required|string|min:6",
  };

  // Validate the request body against the validation rules
  await validateReply.validateReply(req.body, validationRule, res, async () => {
    const { email } = req.body;

    try {
      // Encrypt the email before checking in the database
      const encryptedEmail = cipherHelper.encrypt(email);

      // Check if the encrypted email exists in the database
      const userEmail = await UserEmail.findOne({
        where: { email: encryptedEmail, is_primary: true }
      });

      if (!userEmail) {
        // If the email does not exist, return a formatted validation error response
        const errorResponse = {
          _links: {
            previousPage: null,
            nextPage: null
          },
          _warning: [],
          payload: [],
          _attributes: {},
          _errors: {
            email: ["email not found!"]
          },
          _generated: new Date().toISOString()
        };
        return res.status(404).json(errorResponse);
      }

      // If the email exists, proceed to the next middleware or controller
      next();
    } catch (error) {
      // Handle any potential errors during the database query
      console.error("Error checking email existence:", error);
      return res.status(500).json({
        message: "Internal server error"
      });
    }
  });
};

module.exports = {
  loginValidate,
};
