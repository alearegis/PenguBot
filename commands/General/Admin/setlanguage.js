const Command = require("../../../lib/structures/KlasaCommand");

module.exports = class extends Command {

    constructor(...args) {
        super(...args, {
            runIn: ["text"],
            cooldown: 10,
            guarded: true,
            aliases: ["language", "selectlanguage"],
            permissionLevel: 6,
            requiredPermissions: ["USE_EXTERNAL_EMOJIS"],
            description: language => language.get("COMMAND_SETLANGUAGE_DESCRPTION"),
            usage: "[language:string]",
            extendedHelp: "No extended help available."
        });
    }

    async run(msg, [language]) {
        if (!language) {
            
            // the idea is :
            // - if USER i just say my language (and stop)            
            msg.sendMessage(msg.language.get("HELP_MY_CURRENT_LANGUAGE"));            
            
            // - if PATRON i add some usefull hint ;)
            
            // - if ADMIN i add how to change language 
            return msg.sendMessage(msg.language.get("HELP_SET_LANGUAGE"));            
            
        }

        const currLang = msg.guild.settings.language;
        if (/english|inglese|en|en-us/i.test(language)) {
            if (currLang === "en-US") throw `${this.client.emotes.cross} ***${msg.language.get("HELP_MY_CURRENT_LANGUAGE")}***`;
            await this.changeLanguage(msg, "en-US");
        } else if (/italian|italiano|it|it-it/i.test(language)) {
            if (currLang === "it-IT") throw `${this.client.emotes.cross} ***${msg.language.get("HELP_MY_CURRENT_LANGUAGE")}***`;
            await this.changeLanguage(msg, "it-IT");
        } else if (/spanish|español|espanol|es|es-es/i.test(language)) {
            if (currLang === "es-ES") throw `${this.client.emotes.cross} ***${msg.language.get("HELP_MY_CURRENT_LANGUAGE")}***`;
            await this.changeLanguage(msg, "es-ES");
        } else if (/français|french|francais|fr|fr-fr/i.test(language)) {
            if (currLang === "fr-FR") throw `${this.client.emotes.cross} ***${msg.language.get("HELP_MY_CURRENT_LANGUAGE")}***`;
            await this.changeLanguage(msg, "fr-FR");
        } else if (/sardinian|sard|sardu|sar|sar-IT/i.test(language)) {
            if (currLang === "sar-IT") throw `${this.client.emotes.cross} ***${msg.language.get("HELP_MY_CURRENT_LANGUAGE")}***`;
            await this.changeLanguage(msg, "sar-IT");
        } else {
            throw `${this.client.emotes.cross} ***${msg.language.get("HELP_LANGUAGE_NOT_FOUND")}***`;
        }
    }

    async changeLanguage(msg, language) {
        await msg.guild.settings.update("language", language);
        return msg.sendMessage(`${this.client.emotes.check} \`${language}\` ***${msg.language.get("CONF_LANG_SET")}***`);
    }

};
