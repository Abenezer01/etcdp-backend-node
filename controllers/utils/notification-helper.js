const { notification } = require("../../models");
const { Socket } = require("../../utils/WebSocket");
const self = {};
self.notify = async(type, subject, notifiable_type, notifiable_id, content, description = null) => {
    try {
        let notifier = await notification.create({
            type: type,
            subject: subject,
            notifiable_type: notifiable_type,
            notifiable_id: notifiable_id,
            data: JSON.stringify(content),
            description: description ? description : "description",
          });
        //   Socket.emit("newNotification", notifier);

        Socket.emitToUser("newNotification", notifier, notifiable_id);

          return notifier;
    } catch (error) {
        return {
            message: error.message
        };
    }
    
};

module.exports = self;
