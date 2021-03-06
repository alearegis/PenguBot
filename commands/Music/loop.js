const MusicCommand = require("../../lib/structures/MusicCommand");

module.exports = class extends MusicCommand {

    constructor(...args) {
        super(...args, {
            requireDJ: true,
            requireMusic: true,
            cooldown: 10,
            aliases: ["loopsong", "repeat", "ripeti", "répéte", "repite" ],
            requiredPermissions: ["USE_EXTERNAL_EMOJIS"],
            description: language => language.get("COMMAND_LOOP_DESCRIPTION"),
            extendedHelp: "No extended help available.",

            usage: "[queue|song]"
        });
    }

    async run(msg, [queueOrSong = "song"]) {
        const { music } = msg.guild;
        if (!music.playing) return msg.sendMessage(`${this.client.emotes.cross} ${msg.language.get("MUSICIF_NO_MUSIC_PLAYING")}`);
        if (msg.member.voice.channel.id !== msg.guild.me.voice.channel.id) return msg.sendMessage(`${this.client.emotes.cross} ${msg.language.get("MUSICIF_NO_VOICE_CHANNEL")}`);

        if (queueOrSong === "song") {
            music.looping = !music.looping;
            return msg.sendMessage(`${this.client.emotes.cross} ${msg.language.get("MUSICIF_TOGGLE_SONG_LOOP")}`);
        } else {
            if (music.queue.length * 2 > 1000 && !this.client.config.patreon) throw `${this.client.emotes.cross} **${msg.language.get("MUSICIF_QUEUE_LIMIT_REACHED")} ***`;
            music.queue = music.queue.concat(music.queue);
            return msg.sendMessage(`${this.client.emotes.cross} ${msg.language.get("MUSICIF_TOGGLE_QUEUE_LOOP")}`);
        }
        
        // nice hacking, but IMPOSSIBLE TO TRANSLATE!!
        // PLEASE: can we use something less math and more human? :)
        return msg.sendMessage(`⏯ | ***${queueOrSong === "song" ? "Song" : "Queue"} looping is now ${queueOrSong === "queue" ? "The whole queue will now repeat." : music.looping ? "Enabled" : "Disabled"}***`);
    }

};
