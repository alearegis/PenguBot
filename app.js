const { main, keys } = require("./config.json");
const Raven = require("raven");
const { BaseCluster } = require("kurasuta");

Raven.config(keys.sentry, { captureUnhandledRejections: true }).install();

module.exports = class extends BaseCluster {

    launch() {
        Raven.context(() => {
            this.client.login(main.token);
        });

        process.on("uncaughtException", err => {
            console.error(`uncaughtException:\n${err.stack}`);
            Raven.captureException(err);
        });
    }

};
