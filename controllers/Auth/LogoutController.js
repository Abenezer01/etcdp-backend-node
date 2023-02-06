const {
    user,
    Sequelize
} = require("../../models");

const jwt = require("jsonwebtoken");
let self = {};
let REFRESH_TOKEN_KEY = process.env.REFRESH_TOKEN_KEY;
self.logout = async(request, response) => {
    try {
        const refTokenn = request.headers.authorization
        decoded = jwt.verify(refTokenn, REFRESH_TOKEN_KEY);
        // const claims = atob(tokenn.split('.')[1])
        // response.status(200).json(decoded)
        usrID = decoded.id
        user.update({
                refresh_token: ''
            }, {
                where: { id: usrID },
            })
            .then(result => {

                console.log('success', result);
                return response.status(200).json({
                        message: "User successfully logged out!"
                    })
                    // return result;
            }).catch(error => {
                return response.status(500).json({
                    message: error
                })
            })
    } catch (error) {
        return response.status(500).json({
            message: error
        })
    }
}
module.exports = self;