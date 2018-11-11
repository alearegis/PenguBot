const { main, dashboard, database } = require("./config.json");
const { ShardingManager } = require("kurasuta");

const sharder = new ShardingManager(`${process.cwd()}/app.js`, {
    token: main.token,
    client: require("./lib/structures/PenguClient"),
    clientOptions: {
        prefix: "p!",
        commandEditing: true,
        disableEveryone: true,
        regexPrefix: /^((?:Hey |Ok )?Pengu(?:,|!| ))/i,
        ownerID: "136549806079344640",
        typing: true,
        disabledEvents: [
            "GUILD_SYNC",
            "CHANNEL_PINS_UPDATE",
            "USER_NOTE_UPDATE",
            "RELATIONSHIP_ADD",
            "RELATIONSHIP_REMOVE",
            "USER_SETTINGS_UPDATE",
            "VOICE_STATE_UPDATE",
            "VOICE_SERVER_UPDATE",
            "TYPING_START",
            "PRESENCE_UPDATE"
        ],
        pieceDefaults: {
            commands: { deletable: true, quotedStringSupport: true, bucket: 2 },
            rawEvents: { enabled: true }
        },
        providers: {
            default: "rethinkdb",
            rethinkdb: { db: "pengubot", servers: [{ host: database.host, port: database.port }] }
        },
        console: { useColor: true },
        production: main.production,
        presence: { activity: { name: "❤ p!donate For Exclusive Patron Bot Access ➖ p!help", type: "PLAYING" } },
        prefixCaseInsensitive: true,
        noPrefixDM: true,
        aliasFunctions: { returnRun: true, enabled: true, prefix: "funcs" },
        dashboardHooks: { apiPrefix: "/" },
        clientSecret: dashboard.secret,
        clientID: dashboard.id,
        messageSweepInterval: 60,
        messageCacheLifetime: 120,
        commandMessageLifetime: 120
    }
});

sharder.spawn();

sharder.on("ready", cluster => {
    console.log(`💠- Cluster ${cluster.id} is now online`);
});
