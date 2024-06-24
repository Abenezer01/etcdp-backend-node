const validator = require("./validator");

const formatErrorResponse = (errors) => {
  const formattedErrors = Object.entries(errors).reduce((acc, [key, value]) => {
    acc[key] = value.map(error => error.message || error);
    return acc;
  }, {});

  return {
    "_links": {
      "previousPage": null,
      "nextPage": null
    },
    "_warning": [],
    "payload": [],
    "_attributes": {},
    "_errors": formattedErrors,
    "_generated": new Date().toISOString()
  };
};

const checkParam = async (req) => {
  let id = req.params.id;
  if (id) {
    const regexExp =
      /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

    const str = id;

    let tester = regexExp.test(str);
    if (!tester) {
      return "failed";
    } else {
      return "success";
    }
  }
};

const validateReply = async (body, validationRule, res, next) => {
  await validator(body, validationRule, {}, (err, status) => {
    if (!status) {
      const errors = Object.entries(err.errors).reduce((acc, [key, value]) => {
        acc[key] = value.map(error => error.message || error);
        return acc;
      }, {});

      return res.status(422).json(formatErrorResponse(errors));
    
    } else {
      next();
    }
  }).catch((err) => console.log(err));
};

const validateArrayReply = async (body, validationRule, res, next) => {
  let bodyArr = body;
  let errarr = [];
  for (let i = 0; i < bodyArr.length; i++) {
    await validator(bodyArr[i], validationRule, {}, (err, status) => {
      if (!status) {
        errarr.push({ row: i, ...err.errors });
      }
    });
  }
  if (errarr.length) {
    const combinedErrors = errarr.reduce((acc, error) => {
      Object.entries(error).forEach(([key, value]) => {
        acc[key] = acc[key] || [];
        acc[key].push(value.message || value);
      });
      return acc;
    }, {});
    return res.status(412).json(formatErrorResponse(combinedErrors));
  } else {
    next();
  }
};

module.exports = {
  validateReply,
  checkParam,
  validateArrayReply,
};
