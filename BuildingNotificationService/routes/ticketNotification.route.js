const notificationController = require("../controller/ticketNotification.controller")

module.exports = function (app) {
    app.post("/notifiServ/api/notifications/", notificationController.acceptNotificationRequest)
    app.get("/notifiServ/api/notifications/:id", notificationController.getNotificationStatus)
}