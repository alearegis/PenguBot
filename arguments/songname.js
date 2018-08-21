const { Argument } = require("klasa");
const Song = require("../lib/structures/Song");
const url = require("url");
const { get } = require("snekfetch");

const playlist = /(\?|\&)list=(.*)/i; // eslint-disable-line no-useless-escape
const soundcloud = /https:\/\/soundcloud\.com\/.*/i;
const scPlaylist = /https:\/\/?soundcloud.com\/.*\/.*\/.*/i;
const wcSc = /scsearch:.*/;
const wcYt = /ytsearch:.*/;
const paste = /https:\/\/paste.pengubot.com\/(.*)/i;

module.exports = class extends Argument {

    /* eslint-disable complexity */
    async run(arg, possible, msg) {
        arg = arg.replace(/<(.+)>/g, "$1");
        if (!msg.guild) return null;

        const results = [];
        results.playlist = null;

        const node = msg.guild.music.idealNode;
        if (!node) throw msg.language.get("LL_ERR_NGR");

        const isLink = this.isLink(arg);
        if (isLink) {
            if (playlist.exec(arg)) {
                const playlistResults = await this.getTracks(node, arg);
                if (!playlistResults.tracks[0]) throw msg.language.get("ER_MUSIC_NF");
                results.playlist = playlistResults.playlistInfo.name;
                results.push(...playlistResults.tracks);
            } else if (soundcloud.exec(arg)) {
                if (scPlaylist.exec(arg)) {
                    const scPlaylistRes = await this.getTracks(node, arg);
                    if (!scPlaylistRes.tracks[0]) throw msg.language.get("ER_MUSIC_NF");
                    results.playlist = scPlaylistRes.playlistInfo.name;
                    results.push(...scPlaylistRes.tracks);
                } else {
                    const scSingleRes = await this.getTracks(node, arg);
                    if (!scSingleRes.tracks) throw msg.language.get("ER_MUSIC_NF");
                    results.push(scSingleRes.tracks[0]);
                }
            } else if (paste.exec(arg)) {
                const rawRes = await get(`https://paste.pengubot.com/raw/${paste.exec(arg)[1]}`);
                if (!rawRes.body) throw msg.language.get("ER_MUSIC_NF");
                for (const song of JSON.parse(rawRes.body).songs) {
                    const songRes = await this.getTracks(node, song);
                    results.push(songRes.tracks[0]);
                }
                results.playlist = "Custom PenguBot Playlist";
            } else {
                const httpRes = await this.getTracks(node, arg);
                if (!httpRes.tracks[0]) throw msg.language.get("ER_MUSIC_NF");
                results.push(httpRes.tracks[0]);
            }
        } else if (wcYt.exec(arg) || wcSc.exec(arg)) {
            const wildcardRes = await this.getTracks(node, arg);
            if (!wildcardRes.tracks[0]) throw msg.language.get("ER_MUSIC_NF");
            results.push(wildcardRes.tracks[0]);
        } else {
            let searchRes = await this.getTracks(node, `ytsearch:${arg}`);
            if (!searchRes.tracks[0]) searchRes = await this.getTracks(node, `scsearch:${arg}`);
            if (!searchRes.tracks[0]) throw msg.language.get("ER_MUSIC_NF");
            const options = searchRes.tracks.slice(0, 5);
            const selection = await msg.awaitReply(msg.language.get("LL_SNA_SS", msg.author, options), 20000).catch(() => null);
            if (!selection) throw msg.language.get("LL_ERR_SSI");
            const selectedNo = Number(selection);
            if (selectedNo <= 0 || selectedNo > 5 || selectedNo !== Number(selectedNo)) throw msg.language.get("LL_ERR_SSI");
            results.push(searchRes.tracks[selectedNo - 1]);
        }

        if (!results.length) throw msg.language.get("ER_MUSIC_NF");
        return { tracks: results.filter(a => a && a.track !== undefined).map(track => new Song(track, msg.author)), playlist: results.playlist };
    }

    /**
     * Gets an array of tracks from lavalink REST API
     * @param {Object} node The node to use for REST searches
     * @param {string} search The search string
     * @returns {Array<Object>}
     */
    getTracks(node, search) {
        return this.client.lavalink.getSongs(node, search);
    }

    /**
     * Returns a valid URl that can be accepted by Lavalink
     * @param {string} arg URL which you want to verify
     * @returns {string}
     */
    isLink(arg) {
        const res = url.parse(arg);
        const goodUrl = res.protocol && res.hostname;
        return goodUrl && (res.protocol === "https:" || res.protocol === "http:");
    }

};
