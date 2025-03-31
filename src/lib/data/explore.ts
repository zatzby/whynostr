import { DescriptionList, P } from 'flowbite-svelte';

export const exploreLinks: App.LinkList[] = [
    {
        title: 'Audio and Video Streaming',
        links: [
            {
                title: 'Corny Chat',
                url: 'https://cornychat.com',
                description:
                    'Open source audio spaces integrated with Nostr with zap support and room customization options.'
            },
            {
                title: 'Flare',
                url: 'https://flare.pub/',
                description:
                    'Flare is the next era of video streaming. Host your content, post it to Nostr, and share it with the world.'
            },
            {
                title: 'HiveTalk',
                url: 'https://hivetalk.org/',
                description: 'Free Browser based Real-time video calls.'
            },
            {
                title: 'Nostr Nests',
                url: 'https://nostrnests.com/',
                description: 'Host and join audio spaces.'
            },
            {
                title: 'Tunestr',
                url: 'https://tunestr.io/',
                description:
                    'Value for value live music. View live music streams and support your favorite artists.'
            },
            {
                title: 'Zap.stream',
                url: 'https://zap.stream/',
                description:
                    'View current streams and start new live streams while chatting, zapping and interacting.'
            }
        ]
    },
    {
        title: 'Browser Extensions and Key Management',
        links: [
            {
                title: 'Alby',
                url: 'https://getalby.com/',
                description: 'Your Bitcoin and Nostr companion for the web.'
            },
            {
                title: 'Flamingo',
                url: 'https://www.getflamingo.org/',
                description:
                    'A Chrome compatible browser extension that makes interacting with Nostr apps safe and easy.'
            },
            {
                title: 'Keys.Band',
                url: 'https://keys.band/',
                description:
                    'Keep your keys safe with the best Nostr Extension for Chromium Browsers.'
            },
            {
                title: 'Nsec.app',
                url: 'https://nsec.app/',
                description:
                    'The universe of Nostr applications is growing, join it with Nsec.app - a safe non-custodial key storage with remote signing.'
            },
            {
                title: 'nsecBunker',
                url: 'https://nsecbunker.com/',
                description:
                    'Keep your Nostr keys in a single place and provide fine-grained access to your team members.'
            },
            {
                title: 'Nos2x',
                url: 'https://chrome.google.com/webstore/detail/nos2x/kpgefcfmnafjgpblomihpgmejjdanjjp',
                description:
                    'A Chrome compatible signer extension that allows you to sign Nostr events on web-apps without having to give them your keys.'
            },
            {
                title: 'Nostore',
                url: 'https://apps.apple.com/us/app/nostore/id1666553677',
                description:
                    'Keep your private keys safe and secret across many different web clients on iPhone, iPad and Mac with Nostore.'
            }
        ]
    },
    {
        title: 'Chat',
        links: [
            {
                title: '0xchat',
                url: 'https://0xchat.com/#/',
                description: 'Secure chat built on Nostr.'
            },
            {
                title: 'Blowater',
                url: 'https://blowater.deno.dev/',
                description: 'A sleek, DM focused Nostr client.'
            },
            {
                title: 'NostrChat',
                url: 'https://www.nostrchat.io',
                description: 'A decentralized chat application.'
            },
            {
                title: 'Nostri.chat',
                url: 'https://nostri.chat/',
                description: 'A chat widget for your site, powered by Nostr.'
            }
        ]
    },
    {
        title: 'Commerce',
        links: [
            {
                title: 'Coinkite',
                url: 'https://coinkite.com/',
                description:
                    'Bitcoin security and fun devices. Makers of the Opendime, Coldcard, Blockclock and more.'
            },
            {
                title: 'LNbits - Nostr Market',
                url: 'https://github.com/lnbits/nostrmarket',
                description:
                    'Create merchant accounts, or import your existing Nostr account, create stalls and start listing products for sale.'
            },
            {
                title: 'Plebeian Market',
                url: 'https://plebeian.market/',
                description: 'Buy anything in sats, and sell anything and get paid in sats.'
            },
            {
                title: 'Robotechy',
                url: 'https://robotechy.com/',
                description:
                    '3D printed Bitcoin and Nostr products and memorabilia with custom orders available.'
            },
            {
                title: 'shopstr.store',
                url: 'https://shopstr.store',
                description: 'Buy and sell anything, anywhere, anytime.'
            }
        ]
    },
    {
        title: 'Cyberspace & Dataspace',
        links: [
            {
                title: 'Yondar',
                url: 'https://go.yondar.me/',
                description: 'Your Places. Your Friends, Your World.'
            },
            {
                title: 'Onosendai',
                url: 'https://www.onosendai.tech/',
                description:
                    'A finite digital metaverse built on the Nostr protocol where every action has a real world cost via proof-of-work.'
            }
        ]
    },
    {
        title: 'Games',
        links: [
            {
                title: 'Crashglow',
                url: 'https://crashglow.com/',
                description:
                    'A distributed Arcade on Nostr where users can play and publish games. Powered by Magic.'
            },
            {
                title: 'Gamemasters.social',
                url: 'https://gamemasters.social',
                description:
                    'Games on Nostr that zap Satoshis. Play 100+ quick AI-powered text based RPG games, answer Trivia questions, and view leaderboards.'
            },
            {
                title: 'Jester',
                url: 'https://jesterui.github.io/',
                description: 'Play chess over Nostr.'
            },
            {
                title: 'Tetro Tiles',
                url: 'https://www.thndr.games/bitcoin-games/bitcoin-blocks',
                description:
                    'Do you like puzzle games, collecting free bitcoin, and earning Nostr badges? Then we have the perfect puzzle game for you!'
            }
        ]
    },
    {
        title: 'Media Hosting',
        links: [
            {
                title: 'Nostr.build',
                url: 'https://nostr.build',
                description: 'A free media uploader and hosting platform for all things Nostr.'
            },
            {
                title: 'Nostrcheck',
                url: 'https://nostrcheck.me/public',
                description:
                    'Media hosting, Nostr address provider, key converter, private relay and more.'
            },
            {
                title: 'NostrMedia',
                url:'https://nostrmedia.com',
                description: 'Image and Video hosting for Nostr'
            },
            {
                title: 'Satellite',
                url: 'https://satellite.earth/cdn',
                description: 'Scalable media hosting for the Nostr ecosystem.'
            },
            {
                title: 'Voidcat',
                url: 'https://void.cat/',
                description: 'Free simple file hosting.'
            }
        ]
    },
    {
        title: 'Music and Podcasting',
        links: [
            {
                title: 'Fanfares',
                url: 'https://fanfares.io/',
                description: 'Welcome to the Inernet-Money Era of Podcasting. Nostr-based and Open Source.'
            },
            {
                title: 'Fountain',
                url: 'https://www.fountain.fm/',
                description: 'Podcasts powered by community. Fountain is the podcast app that connects creators with a global community of fans and supporters.'
            },
            {
                title: 'Harmonique',
                url: 'https://harmonique.one/',
                description: 'An ad-free, value4value model DIY webradio broadcast since 2022.'
            },
            {
                title: 'Stemstr',
                url: 'https://stemstr.app/',
                description:
                    'A social experience for music artists to connect, collaborate and share amazing music - powered by nostr.'
            },
            {
                title: 'Wavlake',
                url: 'https://www.wavlake.com/',
                description: 'Turn up the value for your biggest fans.'
            },
            {
                title: 'Wavman',
                url: 'https://www.wavman.app',
                description: 'An open-source music player built for Nostr.'
            },
            {
                title: 'Zapstr.live',
                url: 'https://zapstr.live',
                description: 'Sign in, listen, upload and chat.'
            }
        ]
    },
    {
        title: 'News',
        links: [
            {
                title: 'Stacker News',
                url: 'https://stacker.news/',
                description: "It's like Hacker News but we pay you Bitcoin."
            }
        ]
    },
    {
        title: 'Nostr Address',
        links: [
            {
                title: 'Nostr Address',
                url: 'https://nostraddress.com',
                description: 'Get a Nostr address and a fast relay.'
            },
            {
                title: 'Nostrcheck',
                url: 'https://nostrcheck.me',
                description:
                    'Free Nostr address provider, media hosting, private nostr relay and more.'
            },
            {
                title: 'Nostr-Check',
                url: 'https://www.nostr-check.com/',
                description: 'Free Nostr address provider'
            },
            {
                title: 'Nostr Plebs',
                url: 'https://nostrplebs.com/',
                description:
                    'Paid Nostr address provider with directory service, FAQ section and more.'
            },
            {
                title: 'Swarmstr',
                url: 'https://swarmstr.com/nostr-address',
                description: 'Free Nostr address provider and Ask Nostr section. '
            },
            {
                title: 'Zaps.lol',
                url: 'https://zaps.lol',
                description: 'Free Nostr address provider.'
            }
        ]
    },
    {
        title: 'Nostr Browsers',
        links: [
            {
                title: 'NostrNet',
                url: 'https://www.nostrnet.work/',
                description:
                    'View Nostr apps in browser, with NostrAI extension, notes, chat and more.'
            },
            {
                title: 'Spring',
                url: 'https://spring.site/',
                description:
                    'The universe of Nostr applications is growing. Join it safely with Spring, the purpose-built Nostr browser.'
            }
        ]
    },
    {
        title: 'Other Stuff',
        links: [
            {
                title: 'Dtan',
                url: 'https://dtan.xyz/',
                description: 'BitTorrent on Nostr.'
            },
            {
                title: 'Graphene',
                url: 'https://grapheneos.org/',
                description:
                    'The private and secure mobile operating system with Android app compatibility.'
            },
            {
                title: 'Kagi',
                url: 'https://kagi.com/',
                description: 'Fast, accurate, and ad-free. The search engine you deserve.'
            },
            {
                title: 'Lightning Goats',
                url: 'https://lightning-goats.com/',
                description:
                    'View the live stream of the world famous Lightning Goats and zap sats to send them treats.'
            },
            {
                title: 'PlebAI',
                url: 'https://home.plebai.com',
                description:
                    'Open Source LLMs empowering democatized AI access for all, outside of the control of Silicon Valley elites and their exploitive, closed systems.'
            },
            {
                title: 'Satoshi Coffee Co',
                url: 'https://sats.coffee/',
                description:
                    'Purchase fresh-roasted coffee with the lightning network or on-chain BTC.'
            },
            {
                title: 'Songlink/Odesli',
                url: 'https://odesli.co/',
                description:
                    'Share Nostr friendly automated, smart links for songs, albums and podcasts.'
            },
            {
                title: 'Unleashed Chat',
                url: 'https://unleashed.chat/',
                description:
                    'One button to deploy your own chat. Unleashed Chat is an AI chatbot service built with real privacy in mind.'
            }
        ]
    },
    {
        title: 'Relays',
        links: [
            {
                title: 'Nostr.info',
                url: 'https://nostr.info/relays/',
                description: 'View relays and filter by performance.'
            },
            {
                title: 'Nostr.watch',
                url: 'https://legacy.nostr.watch/relays/find/',
                description: 'Explore public and private relays.'
            },
            {
                title: 'Relayable',
                url: 'https://relayable.org',
                description: 'A latency optimizing network of global relays.'
            },
            // {
               // title: 'Relay.exchange',
               // url: 'https://relay.exchange',
               // description: 'A paid relay service providers comparison table.'
            // }, 
            // deleted until if/when it is brought back online
            {
                title: 'Relaying.io',
                url: 'https://relaying.io',
                description: 'Host your own private relay and never lose your notes.'
            },
            {
                title: 'Nostrrr',
                url: 'https://relays.vercel.app/',
                description: 'A Nostr relay explorer with random relay finder feature.'
            },
            {
                title: 'Relay.tools',
                url: 'https://relay.tools/',
                description:
                    'View available public relays and deploy your own relay with a few mouse clicks.'
            }
        ]
    },
    {
        title: 'Social',
        links: [
            {
                title: 'Amethyst',
                url: 'https://play.google.com/store/apps/details?id=com.vitorpamplona.amethyst',
                description: 'The best decentralized social network for your Android phone.'
            },
            {
                title: 'Badges.page',
                url: 'https://badges.page/',
                description: 'Create, collect and award badges.'
            },
            {
                title: 'Comingle',
                url: 'https://comingle.co/',
                description: 'An events app powered by Nostr.'
            },
            {
                title: 'Coracle',
                url: 'https://coracle.social/',
                description: 'A high-quality social media experience for the web.'
            },
            {
                title: 'Current',
                url: 'https://app.getcurrent.io/',
                description: 'The power of Bitcoin + Nostr at your hands.'
            },
            {
                title: 'Damus',
                url: 'https://damus.io/',
                description: 'The social network you control.'
            },
            {
                title: 'Flockstr',
                url: 'https://flockstr.com',
                description: 'Own your Events. Only on Nostr. Explore events and meetups on Nostr.'
            },
            {
                title: 'Iris',
                url: 'https://iris.to',
                description: 'The Nostr client for better social networks.'
            },
            {
                title: 'Listr',
                url: 'https://listr.lol',
                description:
                    'Curate, organize and discover everything Nostr has to offer. Listr is the best way to create, manage and browse Nostr lists.'
            },
            {
                title: 'Memestr',
                url: 'https://memestr.app/',
                description: 'The Nostr hub for memes.'
            },
            {
                title: 'Mostr',
                url: 'https://mostr.pub',
                description:
                    'A bridge between Nostr and the Fediverse. Find a Fediverse account on Nostr. '
            },
            {
                title: 'Nos',
                url: 'https://www.nos.social',
                description: 'Join your peers in a healthy social network.'
            },
            {
                title: 'Nostr.band',
                url: 'https://nostr.band',
                description: 'Learn what is trending today.'
            },
            {
                title: 'Nostr.cooking',
                url: 'https://nostr.cooking/',
                description: 'View, bookmark and post recipes in the Nostrverse.'
            },
            {
                title: 'Nostr.directory',
                url: 'https://nostr.directory',
                description: 'Find your Twitter followers on Nostr.'
            },
            {
                title: 'Nostr.do',
                url: 'https://nostr.do',
                description: 'Share Nostr invites with anyone.'
            },
            {
                title: 'Nostr.kiwi',
                url: 'https://nostr.kiwi/',
                description: 'A place for you to share notes and curate content.'
            },
            {
                title: 'Nostrends',
                url: 'https://nostrends.vercel.app',
                description: "What's trending on Nostr"
            },
            {
                title: 'Nostrmeet.me',
                url: 'https://nostrmeet.me/',
                description: 'An app for sharing Nostr with friends.'
            },
            {
                title: 'Nostr Nests',
                url: 'https://nostrnests.com',
                description: 'Host and join audio spaces.'
            },
            {
                title: 'Nostr View',
                url: 'https://nostrview.com',
                description: 'Search popular notes, events and relays.'
            },
            {
                title: 'Ontolo',
                url: 'https://ontolo.social',
                description: 'View and label Nostr events.'
            },
            {
                title: 'Plebstr',
                url: 'https://plebstr.com',
                description: 'A friendly Nostr client, reimagined.'
            },
            {
                title: 'Pinstr',
                url: 'https://pinstr.app/',
                description:
                    'A decentralized and open-source social network for curating and sharing your interests with the world.'
            },
            {
                title: 'Pollstr',
                url: 'https://pollstr.online/',
                description: 'Unleash the power of polls with Nostr.'
            },
            {
                title: 'Satellite',
                url: 'https://satellite.earth',
                description: 'Find your community and join the conversation.'
            },
            {
                title: 'Satlantis',
                url: 'https://www.satlantis.io/place',
                description: 'Find, compare, join and build local communities on a Bitcoin Standard.'
            },
            {
                title: 'Snort',
                url: 'https://snort.social',
                description: 'A feature packed Nostr client.'
            },
            {
                title: 'Stargazr',
                url: 'https://www.stargazr.xyz/',
                description: 'Explore lyrics, interpretations and connect with other fans.'
            },
            {
                title: 'Swarmstr',
                url: 'https://swarmstr.com/',
                description: 'Find answers to your questions. Assist others in resolving theirs.'
            },
            {
                title: 'Vida',
                url: 'https://vida.page',
                description: 'Connect via paid messages, calls and live streams.'
            },
            {
                title: 'Zappdit',
                url: 'https://zapddit.com',
                description: 'A reddit-styled Nostr client for following topics.'
            },
            {
                title: 'Zaplife.lol',
                url: 'https://zaplife.lol',
                description: "Real-time zap stream - discover who's zapping whom."
            },
            {
                title: 'Zap.stream',
                url: 'https://zap.stream',
                description: 'A Nostr native streaming provider.'
            },
            {
                title: 'Zephyr',
                url: 'https://zephyr.coracle.social/',
                description: 'A calming place to read Nostr.'
            }
        ]
    },

    {
        title: 'Tools',
        links: [
            {
                title: 'Advanced Nostr Search',
                url: 'https://advancednostrsearch.vercel.app/',
                description: 'A tool to help you find Nostr notes.'
            },
            {
                title: 'BTC Map',
                url: 'https://btcmap.org',
                description: 'Easily find places to spend your sats anywhere on the planet.'
            },
            {
                title: 'Exit.pub',
                url: 'https://exit.pub/',
                description: "Leave Elon's walled garden and take your goodies with you."
            },
            {
                title: 'Mostr',
                url: 'https://mostr.pub/',
                description:
                    'A bridge between Nostr and the Fediverse. Find a Fediverse account on Nostr.'
            },
            {
                title: 'Nashboard',
                url: 'https://nashboard.space/',
                description: 'A Nostr network dashboard.'
            },
            {
                title: 'Njump',
                url: 'https://njump.me/',
                description:
                    'A hosted http gateway for browsing profiles, notes and relays. Sister site to nostr.at.'
            },
            {
                title: 'Nosbin',
                url: 'https://nosbin.com/',
                description: 'The original decentralized pasting platform, built on Nostr.'
            },
            {
                title: 'Nostr Army Knife',
                url: 'https://nak.nostr.com',
                description: 'Generate events and keypairs.'
            },
            {
                title: 'Nostr.At',
                url: 'https://nostr.at',
                description:
                    'A hosted http gateway for browsing profiles, notes and relays. Sister site to njump.me.'
            },
            {
                title: 'Nostr Event Deletion',
                url: 'https://nostr-delete.vercel.app',
                description: 'So... you want something gone?'
            },
            {
                title: 'Nostr Profile Manager',
                url: 'https://metadata.nostr.com/',
                description: 'View Nostr profile metadata, create, download and backup your data.'
            },
            {
                title: 'Nostrfreaks',
                url: 'https://nostrfreaks.com',
                description: 'Add multiple Nostr sites to a single browser window.'
            },
            {
                title: 'Nostr.guru',
                url: 'https://nostr.guru',
                description: 'A gateway to convert Nostr events into HTML pages.'
            },
            {
                title: 'Nostr It',
                url: 'https://nostrit.com',
                description: 'Publish your note when something happens.'
            },
            {
                title: 'Nostr.io',
                url: 'https://nostr.io',
                description: 'Access Nostr statistics via REST API.'
            },
            {
                title: 'Nostr.rest',
                url: 'https://nostr.rest',
                description: 'A browser-based vanity key generator.'
            },
            {
                title: 'Nostrcheck.me/converter',
                url: 'https://nostrcheck.me/converter/',
                description: 'Convert your Nostr key pair into its hex or npub value.'
            },
            {
                title: 'Nostrogen',
                url: 'https://hitony.com/nostrogen',
                description: 'A browser-based vanity key generator.'
            },
            {
                title: 'Nostr Sites',
                url: 'https://nostrsites.com',
                description: 'Convert your Nostr note into a personal webpage.'
            },
            {
                title: 'Nostr Stuff',
                url: 'https://nostrstuff.com',
                description: 'A browser-based CLI tool to explore Nostr.'
            },
            {
                title: 'NostrTool',
                url: 'https://nostrtool.com',
                description:
                    'A browser-based testing ground for key generation, NIP-26 delegation and more.'
            },
            {
                title: 'Nostryfied',
                url: 'https://nostryfied.online',
                description: 'A backup service for your data.'
            },
            {
                title: 'Not A Zap',
                url: 'https://notazap.lol',
                description: 'This is a tool that allows you to zap any npub, nevent or NOTE ID.'
            },
            {
                title: 'Quotestr',
                url: 'https://quotestr.vercel.app',
                description: 'Make It A Quote! Take a Nostr event and turn it into a quote to share.'
            },
            {
                title: 'Rana',
                url: 'https://github.com/grunch/rana',
                description: 'A CLI-based vanity key generator.'
            },
            {
                title: 'Rsslay',
                url: 'https://rsslay.nostr.net/',
                description: 'Turn RSS or Atom feeds into Nostr profiles.'
            },
            {
                title: 'Seedsigner',
                url: 'https://seedsigner.com/',
                description:
                    'Next Level Bitcoin Security. Build your own offline, air-gapped Bitcoin transaction signing device from off-the-shelf components for less than $50!'
            },
            {
                title: 'Sendstr',
                url: 'https://sendstr.com/',
                description: 'End to end encrypted shared clipboard.'
            },
            {
                title: 'TaskTiger',
                url: 'https://tasktiger.io/',
                description: 'A DVM client for working with images.'
            },
            {
                title: 'Vendata',
                url: 'https://vendata.io/',
                description:
                    'Money in, data out. The freest market of data-processing AIs in the world.'
            },
            {
                title: 'Voltage Nostr Toolkit',
                url: 'https://voltage.cloud/nostr/',
                description:
                    'Create your own Nostr address (NIP05) username, get zaps to your OWN lightning node, and use your nostr address as a lightning address.'
            },   
            {
                title: 'Zapit.live',
                url: 'https://www.zapit.live',
                description: 'Put any content behind a Bitcoin lightning paywall.'
            },
            {
                title: 'Zaplinks.lol',
                url: 'https://zaplinks.lol',
                description: 'Create a zaplink.'
            },
            {
                title: 'Zapple Pay',
                url: 'https://www.zapplepay.com/',
                description: 'Zap any note from any Nostr client with the power of emojis.'
            }
        ]
    },
    {
        title: 'Wallets',
        links: [
            {
                title: 'Alby',
                url: 'https://getalby.com/',
                description: 'Your Bitcoin and Nostr companion for the web.'
            },
            {
                title: 'Blink',
                url: 'https://www.blink.sv/',
                description:
                    'The everyday Bitcoin wallet. Blink (formerly Bitcoin Beach Wallet) makes Bitcoin easy.'
            },
            {
                title: 'BTCPay Server',
                url: 'https://btcpayserver.org/',
                description: 'Start Accepting Bitcoin payments plus NIP-57 LN address support.'
            },
            {
                title: 'Current',
                url: 'https://app.getcurrent.io/',
                description:
                    'The power of Bitcoin + Nostr at your hands. Nostr client and lightning wallet.'
            },
            {
                title: 'eNuts',
                url: 'https://www.enuts.cash/',
                description: 'Ecash. Private. Simple. Powered by the Lightning Network, using the Cashu protocol.'
            },
            {
                title: 'LifPay',
                url: 'https://lifpay.me/en/',
                description: 'A Bitcoin lightning wallet with Nostr compatibility.'
            },
            {
                title: 'Mutiny Wallet',
                url: 'https://www.mutinywallet.com/',
                description:
                    'Unstoppable bitcoin. For everyone. Mutiny is a self-custodial Nostr compatible lightning wallet that runs in the browser.'
            },
            {
                title: 'npub.cash',
                url: 'https://npub.cash/',
                description: 'A Nostr native Lightning Address for everyone - powered by eCash and Nostr.'
            },
            {
                title: 'Nodeless',
                url: 'https://github.com/nodeless-io/nodeless-monolith',
                description:
                    'The github repository for the Nodeless monolith that you can deploy on your own server.'
            },
            {
                title: 'PlebPay',
                url: 'https://plebpay.com',
                description: 'Create a Bitcoin Lightning paywall and get paid directly to your Strike account.'
            },
            {
                title: 'Wallet of Satoshi',
                url: 'https://www.walletofsatoshi.com/',
                description: "The world's simplest Bitcoin Lightning Wallet."
            }
        ]
    },
    {
        title: 'Writing',
        links: [
            {
                title: 'Blogstack',
                url: 'https://blogstack.io',
                description: 'A lightning enabled long form blogging platform.'
            },
            {
                title: 'Flycat',
                url: 'https://flycat.club/',
                description: 'Long form content focused client for the Nostrverse.'
            },
            {
                title: 'Habla',
                url: 'https://habla.news',
                description: 'Earn Bitcoin for your writing.'
            },
            {
                title: 'Highlighter',
                url: 'https://highlighter.com',
                description:
                    'Highlight, share, discover, comment and earn on any text via the Nostr network.'
            },
            {
                title: 'Postr',
                url: 'https://write.nostr.com',
                description: 'Send Markdown long-format or blog post notes.'
            },
            {
                title: 'Shipyard',
                url: 'https://shipyard.pub/',
                description: 'A quiet space for loud ideas: the focused writing client for Nostr.'
            },
            {
                title: 'Yakihonne',
                url: 'https://yakihonne.com/',
                description: 'Publish and curate long-form content.'
            }
        ]
    },
    {
        title: 'Work',
        links: [
            {
                title: 'Layer4Talent',
                url: 'https://www.layer4talent.com/',
                description: 'Technical and executive recruitment for Bitcoin companies.'
            },
            {
                title: 'Nostr Bounties',
                url: 'https://nostrbounties.com/',
                description: 'Complete tasks and get paid with Bitcoin.'
            },
            {
                title: 'Nostrocket',
                url: 'https://nostrocket.org',
                description:
                    'Nostrocket enters new territories of freedom by using Bitcoin and Nostr to coordinate leaderless, location independent Bitcoin-based economies that reward solutions to problems facing humanity.'
            },
            {
                title: 'OpenSats',
                url: 'https://opensats.org/',
                description:
                    'Find and support open-source Bitcoin and Nostr projects. Helping to create a better tomorrow, today.'
            },
            {
                title: 'Ostrich Work',
                url: 'https://ostrich.work/',
                description:
                    'The first and best Nostr jobs board on the internet. Post full-time, part-time, and contract work for Nostr projects.'
            },
            {
                title: 'Sovereign Engineering',
                url: 'https://sovereignengineering.io/',
                description: 'Build the tools. Ship the future.'
            }
        ]
    }
];
