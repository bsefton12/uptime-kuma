const NotificationProvider = require("./notification-provider");
const axios = require("axios");

class Cellcast extends NotificationProvider {
    name = "Cellcast";

    /**
     * @inheritdoc
     */
    async send(notification, msg, monitorJSON = null, heartbeatJSON = null) {
        const okMsg = "Sent Successfully.";
        const url = "https://api.cellcast.com/api/v1/gateway";

        try {
            const contacts = notification.cellcastRecipients
                .split(",")
                .map((number) => number.trim())
                .filter((number) => number !== "");

            let data = {
                message: msg,
                contacts,
            };

            if (notification.cellcastSender) {
                data.sender = notification.cellcastSender.trim();
            }

            let config = {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    Authorization: notification.cellcastApiKey,
                },
            };
            config = this.getAxiosConfigWithProxy(config);

            let resp = await axios.post(url, data, config);

            // Cellcast reports queueing problems in the body of a 200 response
            if (resp.data?.status === false) {
                throw new Error(resp.data.message || "Cellcast rejected the request");
            }

            return okMsg;
        } catch (error) {
            this.throwGeneralAxiosError(error);
        }
    }
}

module.exports = Cellcast;
