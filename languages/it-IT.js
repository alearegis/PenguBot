const { Language, util } = require("klasa");

module.exports = class extends Language {

    constructor(...args) {
        super(...args);
        this.language = {
            DEFAULT: key => `${key} non è stato ancora tradotta.`,
            INHIBITOR_DISABLED: "<:penguError:435712890884849664> ***Questo comando è attualmente disabilitato.***",
            INHIBITOR_DISABLED_GROUP: "<:penguError:435712890884849664> ***Questo gruppo di comandi è attualmente disabilitato***",
            COMMAND_UNLOAD: (type, name) => `<:penguSuccess:435712876506775553> Scaricato ${type}: ${name}`,
            COMMAND_TRANSFER_ERROR: "<:penguError:435712890884849664> Questo file è stato spostato ovvero non è mai esistito.",
            COMMAND_RELOAD: (type, name) => `<:penguSuccess:435712876506775553> Ricaricato ${type}: ${name}`,
            COMMAND_RELOAD_ALL: type => `<:penguSuccess:435712876506775553> Ricaricati tutti i ${type}.`,
            COMMAND_LOAD: (time, type, name) => `<:penguSuccess:435712876506775553> Caricato correttamente ${type}: ${name}. (Ho impiegato: ${time})`,
            COMMAND_LOAD_ERROR: (type, name, error) => `<:penguError:435712890884849664> Impossibile caricare ${type}: ${name}. Motivo:${util.codeBlock("js", error)}`,
            COMMAND_INVITE: `**ðŸ‘‰ | Invita PenguBot sul tuo server discord:** <https://www.PenguBot.com/invite>`,
            COMMAND_SUPPORT: `**__PenguBot - Server di Supporto__**\nâ€¢ **Link di Invito:** https://discord.gg/u8WYw5r`,
            COMMAND_INVITE_DESCRIPTION: "Visualizza il link per unirti al server di supporto PenguBot",
            COMMAND_INFO: [
                "PenguBot è un bot multi-funzione per Discord ricco di funzionalità quali Moderazione, Divertimento, Utilità di sistema ed altro.. Sviluppato in NodeJS utilizzando diverse tecnologie quali RethinkDB, JavaScript e Linux.",
                "",
                "â€¢ **Autore:** [AdityaTD#5346](https://www.AdityaTD.me)",
                `â€¢ **Versione:** ${require("../package").version}`,
                "â€¢ **Sito Web:** <https://www.PenguBot.com>",
                "â€¢ **Patreon:** <https://www.Patreon.com/PenguBot>",
                "â€¢ **Server Discord:** <https://discord.gg/6KpTfqR>",
                "â€¢ **GitHub:** <https://www.github.com/AdityaTD/PenguBot>",
                "â€¢ **Database:** RethinkDB"
            ],
            COMMAND_DONATE: [
                "PenguBot funziona su vari server attorno al mondo e questo richiede un costo. Se ti andasse di supportare PenguBot in questi costi, verrai ricompensato nei seguenti modi:",
                "",
                "__Perks__:",
                "â€¢ Accesso illimitato alla lunghezza della Playlist, regolazione Volume ed altro..",
                "â€¢ Nessun blocco dai voti - Nessun bisogno di voti per sbloccare i comandi bloccati.",
                "â€¢ Tempo di uptime migliorato, con un Bot dedicato ai Patrons",
                "â€¢ Ruolo speciale nel server della Official Pengu Squad",
                "",
                "â€¢ **Patreon:** https://www.patreon.com/PenguBot",
                "â€¢ **Crypto Donazioni:** https://1upcoin.com/donate/adityatd",
                "â€¢ **Pagina di PenguBot per le donazioni:** https://www.PenguBot.com/donate"
            ],
            COMMAND_HELP_NODM: "ðŸ“ª | Hai disabilitato i messaggi personali. Non posso inviarti i comandi in privato. Questo il link per la lista dei comandi disponibili : <https://www.pengubot.com/commands>",
            COMMAND_UPVOTE: ["Vuoi che PenguBot sia più grande e disponbile su più server che frequenti?",
                "Allora vota per PenguBot tramite il link sottostante e sblocca l'accesso",
                "a tutte quelle caratteristiche che sono riservate a coloro che ci votano!!",
                "",
                "â€¢ **Votaci:** https://www.pengubot.com/upvote"],
            COMMAND_TOGGLE_GROUP_DESCRPTION: "Abilita/Disabilita le categorie dei comandi.",
            COMMAND_TOGGLE_COMMAND_DESCRPTION: "Abilita/Disabilita i comandi sul tuo server.",
            COMMAND_SUPPORT_DESCRIPTION: "Link per connetterti al Server di Supporto di PenguBot.",

            // Pengu's Sentences
            MESSAGE_PREFIX_SET: "Ho aggiornato il prefisso a : ",
            MESSAGE_CURRENT_PREFIX: "Il prefisso attuale su questo server è: ",
            MESSAGE_PENGU: "eccolo quà!",

            // Kick Messages
            MESSAGE_KICKED: "è stato disconnesso! (Kick)",
            MESSAGE_KICK_YOURSELF: "Non puoi disconnettere te stesso!!",
            MESSAGE_KICK_PENGU: "Per quale motivo vuoi disconnettermi??",
            MESSAGE_KICK_CANT: "Questo utente non può esser disconnesso.",

            // Ban Messages
            MESSAGE_BANNED: "è stato bandito!! (ban)",
            MESSAGE_SOFTBANNED: "è stato bandito momentaneamente! (softban)",
            MESSAGE_BAN_YOURSELF: "Non puoi bandire te stesso!",
            MESSAGE_BAN_PENGU: "Per quale motivo vorresti bandirmi??",
            MESSAGE_BAN_CANT: "Questo utente non può esser bandito!",

            // Make Admin and Mod Messages
            MESSAGE_ADMIN_ADD: "è ora un Amministratore di Pengu!",
            MESSAGE_ADMIN_REMOVE: "non è più un Amministratore di Pengu!",
            MESSAGE_MOD_ADD: "è ora un Moderatore per Pengu!",
            MESSAGE_MOD_REMOVE: "non è più un Moderatore per Pengu!",
            MESSAGE_DJ_ADD: "è ora un DJ per Pengu DJ!",
            MESSAGE_DJ_REMOVE: "non è più un DJ per Pengu!",

            // Mute Command Messages
            MESSAGE_MUTED: "è stato mutato!",
            MESSAGE_UNMUTED: "ora può parlare di nuovo!",

            // Other Mod Commands Messages
            MESSAGE_PRUNE_DELETED: "messaggio/i cancellato/i!",

            // Custom Commands Messages
            MESSAGE_CMD_ADDED: "comand aggiunto da",
            MESSAGE_CMD_UPDATED: "comando aggiornato da",
            MESSAGE_CMD_REMOVED: "comando rimosso da",
            MESSAGE_CMD_NOTFOUND: "comando non trovato!",
            MESSAGE_CMD_EXISTS: "comando con questo nome esiste già per Pengu! (Comune o personalizzato)",
            MESSAGE_NO_CMDS: "Questo server non ha comandi personalizzati, chiedi ad un amministratore di crearlo per te!",
            MESSAGE_COMMAND_CUSTOM_ENABLED: "Comandi personalizzati è adesso disponibile!",
            MESSAGE_COMMAND_CUSTOM_DISABLED: "Comandi personalizzati è adesso disabilitato!",

            // Welcome & Leave messages
            MESSAGE_WLCM_ENABLED: "I messaggi di Benvenuto sono abilitati!",
            MESSAGE_WLCM_DISABLED: "I messaggi di Benvenuto sono stati disabilitati!",
            MESSAGE_LEAVE_ENABLED: "I messaggi di Addio sono abilitati!",
            MESSAGE_LEAVE_DISABLED: "I messaggi di Addio sono stati disabilitati!",
            MESSAGE_WELCOME_SET: "I messaggi di Benvenuto non sono ancora stati impostati!!",
            MESSAGE_LEAVE_SET: "I messaggi di Addio non sono ancora stati impostati!!",
            MESSAGE_WELCOME_CHANNEL_SET: "I Messaggi di Benvenuto sono stati correttamente impostati!",
            MESSAGE_LEAVE_CHANNEL_SET: "I Messaggi di Addio sono stati correttamente impostati!",

            // Logging
            MESSAGE_LOGCHAN_SET: "Canale di Logging impostato correttamente!",
            COMMAND_LOG_DESCRPTION: "Abilita/Disabilita gli eventi di Logging (se sei un Amministratore di Pengu)",

            // Autoroles, Level & Self Roles
            MESSAGE_AUTOROLES_ENABLED: "Ruoli-Automatici abilitati su questo server!",
            MESSAGE_AUTOROLES_DISABLED: "Ruoli-Automatici Roles disabilitati su questo server!",
            MESSAGE_AUTOROLE_REMOVED: "ruolo è stato rimosso dai Ruoli-Automatici!",
            MESSAGE_AUTOROLE_ADDED: "role è stato aggiunto ai Ruoli-Automatici!",
            COMMAND_SELFROLES: "Assegna/Rimuove/Visualizza i ruoli per te stesso.",
            COMMAND_SELFROLES_MANAGE: "Aggiungi/Rimuovi Ruoli-Automatici al server.",
            COMMAND_TOGGLE_SELFROLES: "Abilita/Disabilita Ruoli-Automatici sul server.",
            MESSAGE_LEVELROLES_ENABLED: "Ruoli basati sul Livello sono stati abilitati sul server!",
            MESSAGE_LEVELROLES_DISABLED: "Ruoli basati sul Livello sono stati disabilitati sul server!",

            // Utilities Messages
            MESSAGE_NEW_REMINDER: "Nuovo Promemoria creato con ID:",
            MESSAGE_LINK_SHORTEN: "Ecco la tua URL:",
            MESSAGE_AVATAR: "Ecco l'avatar di",
            MESSAGE_AFK_TRUE: "Imposta il tuo stato in AFK - Assente!",
            MESSAGE_AFK_FALSE: "Rimuove il tuo stato di AFS - Assente!",
            MESSAGE_IS_AFK: "è attualmente AFK - Assente poichè:",
            MESSAGE_AFK_REMOVED: "è stato rimosso dallo stato di AFK - Assente!",
            MESSAGE_STARCHAN_SET: "Il canale Starboard è stato impostato correttamente.",

            // Pengu's Commands Descriptions
            COMMAND_KICK_DESCRIPTION: "Permette ai Moderatori di disconnettere gli utenti. (kick)",
            COMMAND_BAN_DESCRIPTION: "Permette ai Moderatori di bandire gli utenti. (ban)",
            COMMAND_SOFTBAN_DESCRIPTION: "Permette ai Moderatori di bandire momentaneamente gli utenti. (softban)",
            COMMAND_MAKE_ADMIN_DESCRIPTION: "Permette agli Amministratori di creare ulteriori Amministratori.",
            COMMAND_MAKE_MOD_DESCRIPTION: "Permette ai Moderatori di aggiungere nuove mods a PenguBot.",
            COMMAND_MUTE_DESCRIPTION: "Permette ai Moderatori di zittire gli utenti. (mute)",
            COMMAND_SAY_DESCRIPTION: "Permette ai Moderatori di far parlare PenguBot.",
            COMMAND_ADD_CMD_DESCRIPTION: "(Admin) Permette di aggiungere Comandi Personalizzati al server locale.",
            COMMAND_TOGGLE_CUSTOM_DESCRIPTION: "(Admin) Permette di abilitare/disabilitare i Comandi Personalizzati sul server.",
            COMMAND_TOGGLE_WELCOME_DESCRPTION: "(Admin) Permette di abilitare/disabilitare i Messaggi di Benvenuto al server.",
            COMMAND_TOGGLE_LEAVE_DESCRPTION: "(Admin) Permette di abilitare/disabilitare i messaggi di Addio al server.",
            COMMAND_SET_WELCOME_DESCRPTION: "(Admin) Permette di impostare i messaggi di Benvenuto al server.",
            COMMAND_SET_LEAVE_DESCRPTION: "(Admin) Permette di impostare i messaggi di Addio al server.",
            COMMAND_CHANNEL_WELCOME_DESCRPTION: "(Admin) Permette di impostare il canale per i messaggi di Benvenuto.",
            COMMAND_CHANNEL_LEAVE_DESCRPTION: "(Admin) Permette di impostare il canale per i messaggi di Addio.",
            COMMAND_TOGGLE_ROLES_DESCRPTION: "(Admin) Permette di abilitare/disabilitare i Ruoli-Automatici.",
            COMMAND_TOGGLE_LVLROLES_DESCRPTION: "(Admin) Permette di abilitare/disabilitare i Ruoli basati sul Livello.",
            COMMAND_LIST_LVLROLES_DESCRPTION: "Visualizza i Ruoli disponili per quelli basati sul Livello dell'utente.",
            COMMAND_LVLROLE_DESCRPTION: "(Admin) Permette di aggiungere/rimuovere Ruoli ai Ruoli-Automatici.",
            COMMAND_ADD_ROLES_DESCRPTION: "(Admin) Permette di aggiungere nuovi Ruoli-Automatici.",
            COMMAND_REMIND_DESCRIPTION: "Crea un Promemoria. Così Pengu si occuperà di ricordare per te!",
            COMMAND_SHORTEN_DESCRIPTION: "Permette a Pengu di creare un link corto con un singolo comando.",
            COMMAND_AFK_DESCRIPTION: "Imposta la ragione per la quale sarai AFK - Assente!",
            COMMAND_DEL_CMD_DESCRIPTION: "(Admin) Permette di cancellare uno dei Comandi Personalizzati.",
            COMMAND_LIST_CMDS_DESCRIPTION: "Visualizza tutti i Comandi Personalizzati disponibili sul server.",
            COMMAND_TOGGLE_CUSTOM_DESCRPTION: "(Admin) Permette di abilitare/disabilitare i Comandi Personalizzati per questo server.",
            COMMAND_MUTE_DESCRPTION: "(Moderatore) Permette di zittire gli utenti del server.",
            COMMAND_PRUNE_DESCRIPTION: "(Moderatore) Permette di cancellare i messaggi (tramite filtro)",
            COMMAND_MAKE_ADMIN_DESCRPTION: "(Admin) Permette di creare nuovi Amministratori di Pengu.",
            COMMAND_MAKE_MODS_DESCRPTION: "(Admin) Permette di creare nuove Pengu Mods.",
            COMMAND_PREFIX_DESCRIPTION: "(Admin) Permette di modificare il prefisso su questo server.",
            COMMAND_SHARDS_DESCRIPTION: "Visualizza tutte le informazioni disponibili per PenguBot.",
            COMMAND_LMGTFY_DESCRIPTION: "Stanco di cercare su Google?? Lascia che PenguBot cerchi per te .. ",
            COMMAND_UPVOTE_DESCRIPTION: "Vota per PenguBot su DBL e ricevi l'accesso a maggiori caratteristiche di PenguBot.. Immediatamente!!",

            // Automod
            MESSAGE_AUTOMOD_ENABLED: "Moderazione Automatica è ora abilitato (con filtro THREAT e SPAM). Modifica questo con: `p!automod toggle <filtro>`",
            MESSAGE_AUTOMOD_DISABLED: "Moderazione Automatica è stato disabilitato.",
            MESSAGE_AUTOMOD_TOGGLED: "il filtro è stato attivato/disattivato",
            COMMAND_AUTOMOD_DESCRPTION: "Impostazioni di Moderazione Automatica.",

            // Fun Commands Descriptions
            COMMAND_CAT_DESCRIPTION: "Tenere foto e fatti riguardanti gatti!",
            COMMAND_CHUCK_DESCRIPTION: "Opere di Chuck Norris a portata di tastiera!!",
            COMMAND_COMPLIMENT_DESCRIPTION: "Sii carino e fai i complimenti a qualcuno con Pengu!",
            COMMAND_COOKIE_DESCRIPTION: "Immagini di biscotti e dolciumi, per stimolare la tua fame!!",
            COMMAND_DADJOKE_DESCRIPTION: "Tutti amano gli scherzetti!! Anche i Dad Jokes?",
            COMMAND_DOG_DESCRIPTION: "Tenere foto di cagnetti!!",
            COMMAND_FML_DESCRIPTION: "Cose che fan dire alla gente: FML!",
            COMMAND_HUG_DESCRIPTION: "Qualcuno vuole un abbraccio? Perchè attendere.. inviaglielo!!",
            COMMAND_PENGU_DESCRIPTION: "Immagini di carinissimi Pinguini OG!",
            COMMAND_8BALL_DESCRIPTION: "Chiedi alla palla magica !!",
            COMMAND_DICE_DESCRIPTION: "Tira un dado .. Pengu!",
            COMMAND_INSULT_DESCRIPTION: "Vuoi insultare qualcuno? Questo il comando giusto!",
            COMMAND_KISS_DESCRIPTION: "Manda un bacio a qualcuno ..",
            COMMAND_PUNCH_DESCRIPTION: "Tira un pugno a qualcuno ..",
            COMMAND_COMIC_DESCRIPTION: "I millenials ricorderanno le strisce comiche? Questo comando è per loro!!",
            COMMAND_FACT_DESCRIPTION: "Educati con Pengu! Fatti sempre attuali ..",
            COMMAND_RPS_DESCRIPTION: "Carta, forbice o sasso?? Gioca con Pengu!! Adesso puoi ..",
            COMMAND_SLOTS_DESCRIPTION: "Non promuoviamo i giochi d'azzardo .. ma se vuoi, puoi!!",
            COMMAND_TRUMP_DESCRIPTION: "Vieni Trumpato .. dagli insulti di Trump!",
            COMMAND_MOMMA_DESCRIPTION: "Ancora non sei stanco di ... tua mamma?? Scopri le novità!!!",
            COMMAND_FOX_DESCRIPTION: "Adori le volpi?? Pure io!!! Ecco la foto di una di esse ..",
            COMMAND_ILLEGAL_DESCRIPTION: "Facciamo le cose illegali:: mettiamo il simbolo di Trump sulle banconote!!",
            COMMAND_MCA_DESCRIPTION: "Genera un obiettivo di Minecraft ..",
            COMMAND_LIO_DESCRIPTION: "Aggiungi la faccia di qualcun altro al tenero Lio!",
            COMMAND_SLAP_DESCRIPTION: "Chi ha detto una cazzata?? Puniscilo con uno schiaffo!",
            COMMAND_PAT_DESCRIPTION: "Qualcuno ha fatto un buon lavoro?? Rendigli una giusta pacca sulle spalle..",
            COMMAND_CUDDLE_DESCRIPTION: "Non ci pensare.. tempo di relax. Tutto andrà meglio, dopo ..",
            COMMAND_TICKLE_DESCRIPTION: "Brutta giornata?? Manda un Tickle .. cambia l'umore!",
            COMMAND_POKE_DESCRIPTION: "Pinga qualcuno con un poke ..",
            COMMAND_FEED_DESCRIPTION: "Qualcuno ha fame?? Dagli del cibo!!",
            COMMAND_BATSLAP_DESCRIPTION: "Diventa Batman .. e dagli un cazzotto!!",
            COMMAND_BEAUTIFUL_DESCRIPTION: "Ammira il tuo avatar (o quello di qualcun altro)!",
            COMMAND_FACEPALM_DESCRIPTION: "*sigh* Una mano in faccia descrive sempre bene la situazione ..",
            COMMAND_RIP_DESCRIPTION: "Paga il tuo rispetto personale!!",
            COMMAND_SUPERPUNCH_DESCRIPTION: "Diventa Superman e dagli un cazzottone!!",
            COMMAND_TATTOO_DESCRIPTION: "Vorresti tatuare il tuo avatar su qualcuno?? Ecco come!!",
            COMMAND_TRIGGERED_DESCRIPTION: "Perchè esser toccato al giorno d'oggi è facilissimo ..",
            COMMAND_WANTED_DESCRIPTION: "Stampa alcuni posters VIVO-O-MORTO .. da parte dello sceriffo!!",
            COMMAND_VAULT_DESCRIPTION: "Sii una icona per questo server!! O indica qualcuno meglio di te!",
            COMMAND_GARBAGE_DESCRIPTION: "Cestina qualcuno .. perchè se lo merita!!",
            COMMAND_APPROVED_DESCRIPTION: "Dai un segno di approvazione a qualcuno ..",
            COMMAND_REJECT_DESCRIPTION: "Respingi qualcuno, le sue qualità fanno schifo!!",
            COMMAND_TINDER_DESCRIPTION: "Hai una corrispondenza con qualcuno!! Visualizzala!!",
            COMMAND_MISSING_DESCRIPTION: "E' sparito uno dei tuoi cari?? Fai un poster da appendere in giro ..",
            COMMAND_SNAPCHAT_DESCRIPTION: "Crea una immagine Meme Snapchat.",
            COMMAND_OSU_DESCRIPTION: "Usa osu! Statistiche in formato fighissimo!!",
            COMMAND_CMM_DESCRIPTION: "Crea un meme: ho cambiato idea!",

            // NSFW Commands
            COMMAND_ANAL_DESCRIPTION: "-NOT SAFE FOR WORK- Immagini di inculate.",
            COMMAND_BOOBS_DESCRIPTION: "-NOT SAFE FOR WORK- Immagini di tette.",
            COMMAND_BOOTY_DESCRIPTION: "-NOT SAFE FOR WORK- Immagini di culi.",
            COMMAND_PUSSY_DESCRIPTION: "-NOT SAFE FOR WORK- Immagini di figa.",
            COMMAND_TEEN_DESCRIPTION: "-NOT SAFE FOR WORK- Immagini di ragazzine.",
            COMMAND_HENTAI_DESCRIPTION: "-NOT SAFE FOR WORK- Immagini Hentai.",
            COMMAND_SNAP_DESCRIPTION: "-NOT SAFE FOR WORK- Immagini da Snapchat.",
            COMMAND_AMETEUR_DESCRIPTION: "-NOT SAFE FOR WORK- Immagini amatoriali.",
            COMMAND_GIFS_DESCRIPTION: "-NOT SAFE FOR WORK- Gifs Animate.",
            COMMAND_GWNSFW_DESCRIPTION: "-NOT SAFE FOR WORK- Immagini selvagge.",
            COMMAND_LESB_DESCRIPTION: "-NOT SAFE FOR WORK- Immagini di lesbiche.",
            COMMAND_MILF_DESCRIPTION: "-NOT SAFE FOR WORK- Immagini di MILF.",
            COMMAND_NEKOS_DESCRIPTION: "-NOT SAFE FOR WORK- Immagini di Nekos.",
            COMMAND_ANIMETRAPS_DESCRIPTION: "-NOT SAFE FOR WORK- Immagini di Anime Trap",
            COMMAND_ASIAN_DESCRIPTION: "-NOT SAFE FOR WORK- Immagini di Asiatiche",
            COMMAND_BDSM_DESCRIPTION: "-NOT SAFE FOR WORK- Immagini BDSM",
            COMMAND_BJNSFW_DESCRIPTION: "-NOT SAFE FOR WORK- Immagini di pompini",
            COMMAND_COSPLAY_DESCRIPTION: "-NOT SAFE FOR WORK- Immagini di Cosplay",
            COMMAND_FITGIRLS_DESCRIPTION: "-NOT SAFE FOR WORK- Immagini di ragazze in forma",
            COMMAND_FUTANARI_DESCRIPTION: "-NOT SAFE FOR WORK- Immagini di Futanari",
            COMMAND_NSFW_DESCRIPTION: "-NOT SAFE FOR WORK- Immagini generiche NSFW",
            COMMAND_FEET_DESCRIPTION: "-NOT SAFE FOR WORK- Immagini di piedi",
            COMMAND_GINGER_DESCRIPTION: "-NOT SAFE FOR WORK- Immagini di Ginger",
            COMMAND_OUTFITS_DESCRIPTION: "-NOT SAFE FOR WORK- Immagini di abbigliamenti",
            COMMAND_PARTYHOUSE_DESCRIPTION: "-NOT SAFE FOR WORK- Immagini di Partyhouse",
            COMMAND_R34_DESCRIPTION: "-NOT SAFE FOR WORK- Immagini di Rule-34",
            COMMAND_SOLO_DESCRIPTION: "-NOT SAFE FOR WORK- Immagini di masturbazioni",
            COMMAND_THICC_DESCRIPTION: "-NOT SAFE FOR WORK- Immagini Thicc",
            COMMAND_NSFWTRAPS_DESCRIPTION: "-NOT SAFE FOR WORK- Immagini Traps",

            // Utilities Commands
            COMMAND_GUILDINFO_DESCRIPTION: "Visualizza maggiori informazioni sul server locale.",
            COMMAND_TWSTATS_DESCRIPTION: "Verifica le statistiche di Twitch, live!",
            COMMAND_URBAN_DESCRIPTION: "Trova il significato di parole dall'Urban Dictionary.",
            COMMAND_USERINFO_DESCRIPTION: "Visualizza maggiori informazioni sull'utente indicato.",
            COMMAND_WEATHER_DESCRIPTION: "Visualizza le informazioni climatologiche del posto indicato ..",
            COMMAND_YTSTATS_DESCRIPTION: "Visualizza le statistiche YouTube, live!",
            COMMAND_ADBLOCK_DESCRIPTION: "Abilita/Disabilita la cancellazione dei links di invito.",
            COMMAND_TRANSLATE_DESCRIPTION: "Traduci una parola o un messaggio in uno dei linguaggi selezionabili.",
            COMMAND_POLL_DESCRIPTION: "Crea un sondaggio Strawpoll usando PenguBot",
            COMMAND_LOGCHAN_DESCRPTION: "Seleziona un canale le quale visualizzare gli eventi di Log.",
            COMMAND_AVATAR_DESCRIPTION: "Visualizza l'URL del tuo Avatar o di qualcun altro..",
            COMMAND_QUOTE_DESCRIPTION: "Rispondi ad un messaggio, citandone il contenuto .. (Message ID)",

            // Profile Commands
            COMMAND_LEVELUP_DESCRIPTION: "Gestisci i livelli raggiungibili dagli utenti del server.",
            COMMAND_REP_DESCRIPTION: "Dai i tuoi punti di reputazione a qualcuno, per farlo sentire speciale!",
            COMMAND_PROFILE_DESCRIPTION: "Visualizza i profili degli utenti in un modo simpatico!!",
            COMMAND_DAILY_DESCRIPTION: "Reclama i tuoi 100 Snowflakes! Potrai usarli per comperare le cose..",
            COMMAND_TITLE_DESCRIPTION: "Imposta il titolo che verrà visualizzato sul tuo profilo.",
            COMMAND_SNOWFLAKES_DESCRIPTION: "Visualizza i tuoi Snowflakes o inviali a qualcuno ..",
            COMMAND_BGBUY_DESCRIPTION: "Acquista nuovi sfondi per il tuo profilo su PenguBot.",
            COMMAND_CHANGEBG_DESCRIPTION: "Modifica lo sfondo del tuo profilo su PenguBot.",
            COMMAND_LEADERBOARD_DESCRIPTION: "Controlla chi stà vincendo!! Guarda la leaderboard del tuo server..",
            COMMAND_BACKGROUND_DESCRIPTION: "Personalizza il tuo profilo su PenguBot acquistando e scegliendo nuovi sfondi ..",
            COMMAND_RANK_DESCRIPTION: "Tessere di Iscrizione al server personalizzate (Differenti per OGNI server)",
            COMMAND_MANAGEXP_DESCRIPTION: "Imposta/Reimposta/Aggiungi esperienza per un utente del server.",

            // Dev Commands
            COMMAND_EXEC_DESCRIPTION: "-BOT OWNER ONLY-",
            COMMAND_SG_DESCRIPTION: "-BOT OWNER ONLY-",
            COMMAND_TPG_DESCRIPTION: "-BOT OWNER ONLY-",
            COMMAND_DONATE_DESCRIPTION: "Dona qualcosa a PenguBot! Aiutaci a rendere questo bot bellissimo!!",

            // Music Commands
            COMMAND_DMSONG_DESCRIPTION: "Permetti a Pengu di inviare la canzone in riproduzione tramite DMs.",
            COMMAND_LOOP_DESCRIPTION: "Metti in Loop una canzone.",
            COMMAND_LYRICS_DESCRIPTION: "Ottieni il testo di una canzone, direttamente su PenguBot.",
            COMMAND_MUSIC_DESCRIPTION: "Informazioni dettagliate per tutti i comandi musicali.",
            COMMAND_NOWPLAYING_DESCRIPTION: "Visualizza quale traccia audio è in riproduzione ed il suo attuale progresso .. ",
            COMMAND_PLAY_DESCRIPTION: "Suona tracce da YouTube/Twitch/SoundCloud/Mixer/Live Streams, etc.. con PenguBot.",
            COMMAND_SHUFFLE_DESCRIPTION: "Mischia le tracce nella playlist, rendile più casuali ..",
            COMMAND_QUEUE_DESCRIPTION: "Percorri la traccia in coda in maniera interattiva ..",
            COMMAND_SKIP_DESCRIPTION: "Salta la traccia corrente o richiedi una votazione per farlo (se presenti più di 3 utenti)",
            COMMAND_STOP_DESCRIPTION: "Ferma la riproduzione e pulisci la playlist (Se sei un Pengu-DJ ovvero IL SOLO all'ascolto)",
            COMMAND_MAKE_DJ_DESCRPTION: "Rendi un utente un Pengu-DJ.",
            COMMAND_LEAVE_DESCRIPTION: "Obbliga PenguBot ad abbandonare forzatamente il canale vocale.",
            COMMAND_PAUSE_DESCRIPTION: "Pausa/Riprendi l'attuale riproduzione musicale.",
            COMMAND_VOLUME_DESCRIPTION: "Modifica il volume di default di PenguBot per tutti gli utenti del server.",
            COMMAND_DJONLY_DESCRIPTION: "Abilita/Disabilita la modalità Pengu-DJ per i comandi musicali.",
            INHIBITOR_DJ_ONLY: "Questo server è stato configurato per consentire SOLTANTO ai Pengu-DJ di utilizzare i comandi musicali.",
            COMMAND_DUMP_DESCRIPTION: "Scarica la playlist in formato raw, per poterla riutilizzare in seguito!",

            // ----------------------------------------------------------------------------------------------------------------------------------
            // Game Stats
            COMMAND_FORTNITE_DESCRIPTION: "Visualizza statistiche di gioco Fortnite su Discord.",
            COMMAND_CRSTATS_DESCRIPTION: "Visualizza statistiche utente per Clash Royale su Discord.",
            COMMAND_COCSTATS_DESCRIPTION: "Visualizza statistiche utente per Clash of Clans su Discord.",
            COMMAND_CSGO_DESCRIPTION: "Visualizza statistiche utente Counter Strike Global Offensive su Discord",

            // Starboard
            COMMAND_TOGGLE_STARBOARD_DESCRPTION: "Permetti agli Amministratori di Pengu di abilitare/disabilitare la Starboard su questo server.",
            COMMAND_CHANNEL_STAR_DESCRPTION: "Permetti agli Amministratori di Pengu di impostare il canale Starboard.",
            COMMAND_REQUIRED_STAR_DESCRPTION: "Permetti agli Amministratori di Pengu di impostare il minimo di stelle prima dei messaggi Starboard.",
            COMMAND_STAR_DESCRPTION: "Permetti agli Amministratori di Pengu di forzare un messaggio Starboard.",
            MESSAGE_STAR_ENABLED: "Starboard è stato abilitato su questo server.",
            MESSAGE_STAR_DISABLED: "Starboard è stato disabilitato su questo server.",
            MESSAGE_STARS_REQUIRED_SET: "Indica il minimo numero di stelle NECESSARIO prima che il messaggio sia mandato sullo Starboard.",
            MESSAGE_STAR_CHANNEL_SET: "Canale Starboard impostato correttamente.",

            // Custom Messages
            ER_TRY_AGAIN: "Sono spiacente, ma c'è stato un errore.. Riprova più tardi. Se il problema persiste, contattaci su https://discord.gg/kWMcUNe",
            ER_MUSIC_TRIP: "Accidenti!!! Ho qualche problema sulla traccia indicata.. Riprova più tardi. Se il problema persiste, contattaci su https://discord.gg/kWMcUNe",
            ER_MUSIC_NF: "<:penguError:435712890884849664> Non sono riuscito a trovare alcun risultato per la tua richiesta. Riprova più tardi. Se il problema persiste, contattaci su https://discord.gg/kWMcUNe",
            ER_CATS_DOGS: "C'è stato un errore! Penso che un gatto abbia smangiucchiato il cavo.. un cane certe cose non le fa!",
            ER_API: "Sfortunatamente, a causa di una mancanza del provider, questo comando è stato momentaneamente disabilitato.",
            ER_TINDER: "Non trovo corrispondenze per te .. ",
            CMD_LOG_DISABLED: "Il giornale di bordo (logging) è ora disabilitato.",
            CMD_LOG_ENABLED: "Il giornale di bordo (logging) è ora abilitato e funzionante!",
            CMD_NO_SELFROLES: "Questo server non ha alcun Ruolo-Automatico assegnabile.",
            CMD_SELF_ASSIGNABLE: "il ruolo adesso è auto-assegnabile.",
            CMD_NO_ASSIGNABLE: "il ruolo adesso non è più auto-assegnabile.",
            ER_NO_DM: "Non posso mandarti Messaggi Diretti poichè non ne ho la possibilità. Abilita i Messaggi Diretti nelle tue preferenze personali.",

            CMD_FUN_COOKIE: "Ti è stato mandato un biscotto da ",
            CMD_FUN_CUDDLE: "Qualcuno ti coccolerebbe:",
            CMD_FUN_FED: "Ti è stato dato da mangiare! Ci ha pensato ",
            CMD_FUN_HUG: "Sei stato abbracciato da",
            CMD_FUN_KISS: "Sei stato baciato da",
            CMD_FUN_PAT: "Qualcuno ti ha dato una pacca sulla spalla:",
            CMD_FUN_POKE: "Qualcuno cerca la tua attenzione: ",
            CMD_FUN_PUNCH: "Qualcuno ti ha dato un pugno:",
            CMD_FUN_SLAP: "Qualcuno ti schiaffeggerebbe:",
            CMD_FUN_TICKLE: "Qualcuno ti solletica:",

            CMD_FUN_PENGU: "Ecco la dolce immagine di un Pengu che hai richiesto",
            CMD_COC_TAG: "Tag invalida; prova con una tag differente. Usa una di quelle In-game.",
            CMD_COC_DATA: "Nessun dato recuperato. Riprova più tardi ..",
            CMD_FORT_PLAT: "NomeUtente o Piattaforma non validi. Riprova con una delle seguenti piattaforme: `pc`. `xbox`, `psn`.",
            CMD_FORT_ERR: "Errore nelle Tracking API. Riprova più tardi ..",
            CMD_OSU_ERR: "O non sono riuscito a trovare l'utente .. o abbiamo grossi problemi!!",
            CMD_UPVOTE_ONLY: "Non hai ancora votato per PenguBot!! Visita il sito <http://bit.ly/VoteDBL> per votare PenguBot ed ottenere l'accesso!",
            CMD_PATRON_ONLY: "Questo server non è un server premium. Considera l'idea di diventare un Patron su <https://patreon.com/PenguBot> per ottenere l'accesso a taluni comandi.",
            CMD_RPS_INVALID: "Mossa non valida. Seleziona nuovamente ..",
            CMD_SLOTS_INVALID: "Il quantitativo di Snowflakes indicato non è valido. Inserisci ALMENO 1 o più Snowflakes.",
            CMD_LOG_INVALID: "Opzione non valida. Seleziona tra",
            CMD_CSGO_NF: "Il NomeUtente indicato non è stato trovato su Steam. Riprova, con un NomeUtente differente ..",
            CMD_CSGO_ER: "C'è stato un errore: O il tuo profilo è PRIVATO, o non hai comperato CSGO, o le API non funzionano. Riprova più tardi ..",

            // Missing Default
            DEFAULT_LANGUAGE: "Linguaggio Predefinito",
            SETTING_GATEWAY_EXPECTS_GUILD: "Il parametro <Guild> si aspetta un server o l'istanza di un server.",
            SETTING_GATEWAY_VALUE_FOR_KEY_NOEXT: (data, key) => `Il valore ${data} per la chiave ${key} non esiste.`,
            SETTING_GATEWAY_VALUE_FOR_KEY_ALREXT: (data, key) => `Il valore ${data} per la chiave ${key} è già esistente.`,
            SETTING_GATEWAY_SPECIFY_VALUE: "Devi specificare il valore da aggiungere o filtrare.",
            SETTING_GATEWAY_KEY_NOT_ARRAY: key => `La chiave ${key} non è una lista.`,
            SETTING_GATEWAY_KEY_NOEXT: key => `La chiave ${key} non esiste nello schema dei dati corrente.`,
            SETTING_GATEWAY_INVALID_TYPE: "Il parametro 'type' può essere solo 'add' o 'remove'.",
            RESOLVER_INVALID_PIECE: (name, piece) => `${name} deve esserve il nome di un ${piece} valido.`,
            RESOLVER_INVALID_MSG: name => `${name} deve essere l'id di un messaggio valido.`,
            RESOLVER_INVALID_USER: name => `${name} deve essere una menzione o l'id di un utente valido.`,
            RESOLVER_INVALID_MEMBER: name => `${name} deve essere una menzione o l'id di un utente valido.`,
            RESOLVER_INVALID_CHANNEL: name => `${name} deve essere il tag di un canale o l'id di un canale valido.`,
            RESOLVER_INVALID_GUILD: name => `${name} deve essere l'id di un server valido.`,
            RESOLVER_INVALID_ROLE: name => `${name} deve essere una menzione o l'id di un ruolo.`,
            RESOLVER_INVALID_LITERAL: name => `La tua opzione non corrisponde all'unica possibilità: ${name}`,
            RESOLVER_INVALID_BOOL: name => `${name} deve essere 'true' o 'false'.`,
            RESOLVER_INVALID_INT: name => `${name} deve essere un intero.`,
            RESOLVER_INVALID_FLOAT: name => `${name} deve essere un numero valido.`,
            RESOLVER_INVALID_REGEX_MATCH: (name, pattern) => `${name} deve combaciare con il seguente pattern in regex: \`${pattern}\`.`,
            RESOLVER_INVALID_URL: name => `${name} deve essere un url valido.`,
            RESOLVER_STRING_SUFFIX: " caratteri",
            RESOLVER_MINMAX_EXACTLY: (name, min, suffix) => `${name} deve essere esattamente ${min}${suffix}.`,
            RESOLVER_MINMAX_BOTH: (name, min, max, suffix) => `${name} deve essere compreso tra ${min} e ${max}${suffix}.`,
            RESOLVER_MINMAX_MIN: (name, min, suffix) => `${name} deve essere maggiore di ${min}${suffix}.`,
            RESOLVER_MINMAX_MAX: (name, max, suffix) => `${name} deve essere minore di ${max}${suffix}.`,
            COMMANDMESSAGE_MISSING: "Uno o più argomenti mancanti dopo la fine dell'inserimento.",
            COMMANDMESSAGE_MISSING_REQUIRED: name => `${name} è un argomento richiesto.`,
            COMMANDMESSAGE_MISSING_OPTIONALS: possibles => `Opzione richiesta mancante: (${possibles})`,
            COMMANDMESSAGE_NOMATCH: possibles => `La tua opzione non corrisponde a nessuna possibilità: (${possibles})`,
            MONITOR_COMMAND_HANDLER_REPROMPT: (tag, error, time) => `${tag} | **${error}** | Hai **${time}** secondi per rispondere a questo messaggio con un argomento calido. Scrivi **"ABORT"** per annullare.`, // eslint-disable-line max-len
            MONITOR_COMMAND_HANDLER_ABORTED: "Annullato",
            INHIBITOR_COOLDOWN: remaining => `Hai appena usato questo comando. Potrai usare questo comando nuovamente in ${remaining} secondi.`,
            INHIBITOR_MISSING_BOT_PERMS: missing => `Permessi insufficienti, mancano: **${missing}**`,
            INHIBITOR_PERMISSIONS: "Non hai il permesso di utilizzare questo comando",
            INHIBITOR_REQUIRED_SETTINGS: settings => `Il server manca ${settings.length > 1 ? "del permesso" : "dei permessi"} **${settings.join(", ")}** e quindi non è possibile continuare.`,
            INHIBITOR_RUNIN: types => `Questo comando è disponibile solo in canali di tipo ${types}`,
            INHIBITOR_RUNIN_NONE: name => `Il comando ${name} non è configurato per essere eseguito in alcun canale.`,
            COMMAD_UNLOAD: (type, name) => `✅ Scaricato ${type}: ${name}`,
            COMMAND_TRANSFER_SUCCESS: (type, name) => `✅ Trasferito con successo il ${type}: ${name}`,
            COMMAND_TRANSFER_FAILED: (type, name) => `Trasferimento del ${type}: ${name} al Client è fallito, controlla la Console.`,
            COMMAND_REBOOT: "Riavvio...",
            COMMAND_PING: "Ping?",
            COMMAND_PINGPONG: (diff, ping) => `Pong! (Roundtrip ha richiesto: ${diff}ms. Heartbeat: ${ping}ms.)`,
            COMMAND_INVITE_SELFBOT: "Perchè dovrebbe servirti un invito per un bot personale...",
            COMMAND_HELP_DM: "📥 | La lista di comandi a cui hai accesso è stata inviata nei tuoi messaggi privati.",
            COMMAND_ENABLE: (type, name) => `+ Abilitato con successo il ${type}: ${name}`,
            COMMAND_DISABLE: (type, name) => `+ Disabilitato con successo il ${type}: ${name}`,
            COMMAND_DISABLE_WARN: "Probabilmente non vuoi disabilitare questo, dato che non saresti più in grado di eseguire un comando per riabilitarlo",
            COMMAND_CONF_NOKEY: "Devi definire una chiave",
            COMMAND_CONF_NOVALUE: "Devi definire un valore",
            COMMAND_CONF_ADDED: (value, key) => `Aggiunto con successo il valore \`${value}\` alla chiave: **${key}**`,
            COMMAND_CONF_UPDATED: (key, response) => `Aggiornata con successo la chiave **${key}**: \`${response}\``,
            COMMAND_CONF_KEY_NOT_ARRAY: "Questa chiave non è una lista. Usa l'azione 'reset'.",
            COMMAND_CONF_REMOVE: (value, key) => `Rimosso con successo il valore \`${value}\` dalla chiave: **${key}**`,
            COMMAND_CONF_GET_NOEXT: key => `La chiave **${key}** non sembra esistere.`,
            COMMAND_CONF_GET: (key, value) => `Il valore per la chiave **${key}** è: \`${value}\``,
            COMMAND_CONF_RESET: (key, response) => `La chiave **${key}** è stata ripristinata a: \`${response}\``
        };
    }

    async init() {
        await super.init();
    }

};
