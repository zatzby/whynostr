import { DescriptionList, P } from 'flowbite-svelte';

export const exploreLinks: App.LinkList[] = [
    {
        title: 'Art',
        links: [
            {
                title: 'Npub Visualizer',
                url: 'https://yunginter.net/art/001',
                description: 'Generate lineal art based on your npub.'
            },
            {
                title: 'Polygonal Zap Count',
                url: 'https://yunginter.net/art/002',
                description: 'View your zap count data as polygonal shapes.'
            },
            {
                title: 'Polygonal Sat Amount',
                url: 'https://yunginter.net/art/003',
                description: 'View your sat amount data as polygonal shapes.'
            }
        ]
    },
    {
        title: 'Audio/Video Streaming',
        links: [
            {
                title: 'Fountain',
                url: 'https://www.fountain.fm/',
                description: 'The podcast app that pays.'
            },
            {
                title: 'Nostr Nests',
                url: 'https://nostrnests.com/',
                description: 'Host and join audio spaces.'
            },
            {
                title: 'Stemstr',
                url: 'https://stemstr.app/',
                description:
                    'A social experience for music artists to connect, collaborate and share amazing music - powered by nostr.'
            },
            {
                title: 'Vida',
                url: 'https://vida.page',
                description: 'Connect via paid messages, calls and live streams.'
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
        title: 'Browser Extensions',
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
                title: 'Nos2x',
                url: 'https://chrome.google.com/webstore/detail/nos2x/kpgefcfmnafjgpblomihpgmejjdanjjp',
                description:
                    'A Chrome compatible signer extension that allows you to sign Nostr events on web-apps without having to give them your keys.'
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
                title: 'Nodeless',
                url: 'https://nodeless.io/',
                description:
                    'Accept Bitcoin and Lightning payments in your online store, charity or fundariser, all without all of the complexities of managing a lightning node.'
            },
            {
                title: 'LNbits - Nostr Market',
                url: 'https://github.com/lnbits/nostrmarket',
                description:
                    'Create merchant accounts, or import your existing Nostr account, create stalls and start listing products for sale.'
            },
            {
                title: 'Plebian Market',
                url: 'https://plebeian.market/',
                description: 'Buy anything in sats, and sell anything and get paid in sats.'
            },
            {
                title: 'Robotechy',
                url: 'https://robotechy.com/',
                description:
                    '3d printed Bitcoin and Nostr products and memorabilia with custom orders available.'
            },
            {
                title: 'Satoshi Coffee Co',
                url: 'https://sats.coffee/',
                description:
                    'Purchase fresh-roasted coffee with the lightning network or on-chain BTC.'
            }
        ]
    },
    {
        title: 'Games',
        links: [
            {
                title: 'Choose Your Own Adventure',
                url: 'https://snort.social/p/npub1l6jqp0h7kkl3zkck2a0zza4lhk8m32ueskkpwzkmgq4l3jymn59q7ezyfy',
                description: 'Play quick AI-powered RPG games over Nostr.'
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
            },
            {
                title: 'Trivia Masters',
                url: 'https://triviamasters.social',
                description: 'Answer trivia questions and win Bitcoin prizes.'
            },
            {
                title: 'Wine Masters',
                url: 'https://winemasters.social',
                description: 'Answer Wine themed trivia questions and win Bitcoin prizes.'
            }
        ]
    },
    {
        title: 'Media Hosting',
        links: [
            {
                title: 'Inosta',
                url: 'https://inosta.cc/',
                description: 'Pay a lightning invoice to upload a file to use on Nostr.'
            },
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
                title: 'Nostrfiles',
                url: 'https://nostrfiles.dev',
                description: 'Media hosting, audio recorder, and more.'
            },
            {
                title: 'Nostrimg',
                url: 'https://nostrimg.com',
                description: 'Uploader and GIF-ify generator.'
            },
            {
                title: 'Satellite',
                url: 'https://satellite.earth/cdn',
                description: 'Scalable media hosting for the Nostr ecosystem.'
            }
        ]
    },
    {
        title: 'News',
        links: [
            {
                title: 'Nostr Report',
                url: 'https://nostr.report/',
                description: 'Your #1 source for Daily Nostr news. Built by plebs, for plebs.'
            }
        ]
    },
    {
        title: 'Nostr Address',
        links: [
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
                title: 'Graphene',
                url: 'https://grapheneos.org/',
                description:
                    'The private and secure mobile operating system with Android app compatibility.'
            },
            {
                title: 'Kagi',
                url: 'https://kagi.com/',
                description: 'Fast, accurate, and ad-free. The search engine you deserve.'
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
                url: 'https://nostr.watch',
                description: 'Explore public and private relays.'
            },
            {
                title: 'Relayable',
                url: 'https://relayable.org',
                description: 'A latency optimizing network of global relays.'
            },
            {
                title: 'Relay.exchange',
                url: 'https://relay.exchange',
                description: 'A paid relay service providers comparison table.'
            },
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
                url: 'https://badges.page',
                description: 'Create, collect and award badges.'
            },
            {
                title: 'Coracle',
                url: 'https://coracle.social',
                description: 'A high-quality social media experience for the web.'
            },
            {
                title: 'Current',
                url: 'https://app.getcurrent.io',
                description: 'The power of Bitcoin + Nostr at your hands.'
            },
            {
                title: 'Damus',
                url: 'https://damus.io/',
                description: 'The social network you control.'
            },
            {
                title: 'Iris',
                url: 'https://iris.to',
                description: 'The Nostr client for better social networks.'
            },
            {
                title: 'Listr',
                url: 'https://listr.lol',
                description: 'Browse and manage Nostr lists.'
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
                title: 'Nostrends',
                url: 'https://nostrends.vercel.app',
                description: "What's trending on Nostr"
            },
            {
                title: 'Nostr Nests',
                url: 'https://nostrnests.com',
                description: 'Host and join audio spaces.'
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
                title: 'Snort',
                url: 'https://snort.social',
                description: 'A feature packed Nostr client.'
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
                title: 'Listr',
                url: 'https://listr.lol',
                description: 'A simple tool that allows you to browse and manage Nostr lists.'
            },
            {
                title: 'Nostr Army Knife',
                url: 'https://nak.nostr.com',
                description: 'Generate events and keypairs.'
            },
            {
                title: 'Nashboard',
                url: 'https://nashboard.space',
                description: 'A Nostr network dashboard.'
            },
            {
                title: 'Nosbin',
                url: 'https://nosbin.com/',
                description: 'The original decentralized pasting platform, built on Nostr.'
            },
            {
                title: 'Nostr Event Deletion',
                url: 'https://nostr-delete.vercel.app',
                description: 'So... you want something gone?'
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
                title: 'Rana',
                url: 'https://github.com/grunch/rana',
                description: 'A CLI-based vanity key generator.'
            },
            {
                title: 'Seedsigner',
                url: 'https://seedsigner.com/',
                description:
                    'Next Level Bitcoin Security. Build your own offline, air-gapped Bitcoin transaction signing device from off-the-shelf components for less than $50!'
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
                title: 'LifPay',
                url: 'https://lifpay.me/en/',
                description: 'A Bitcoin lightning wallet with Nostr compatibility.'
            },
            {
                title: 'Nodeless',
                url: 'https://nodeless.io/',
                description:
                    'Accept Bitcoin and Lightning payments in your online store, charity or fundraiser, all without all of the complexities of managing a lightning node. Get payments sent directly to your cold storage or lightning address.'
            },
            {
                title: 'Mutiny Wallet',
                url: 'https://www.mutinywallet.com/',
                description:
                    'Unstoppable bitcoin. For everyone. Mutiny is a self-custodial Nostr compatible lightning wallet that runs in the browser.'
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
                title: 'Bountstr',
                url: 'https://bountsr.org/',
                description:
                    'View, complete and post Nostr bounties for work, tasks or projects within the Nostr ecosystem.'
            },
            {
                title: 'Nostr Bounties',
                url: 'https://nostrbounties.com/',
                description: 'Complete taks and get paid with Bitcoin.'
            },
            {
                title: 'OpenSats',
                url: 'https://opensats.org/',
                description:
                    'Find and support open-source Bitcoin projects. Helping to create a better tomorrow, today.'
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
