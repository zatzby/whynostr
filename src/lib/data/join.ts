import { DescriptionList } from 'flowbite-svelte';

export const joinLinks: App.LinkList[] = [
    {
        title: 'Android',
        links: [
            {
                title: 'Amethyst',
                url: 'https://play.google.com/store/apps/details?id=com.vitorpamplona.amethyst',
                description: 'The best decentralized social media for your Android phone.'
            },
            {
                title: 'Camelus',
                url: 'https://camelus.app/',
                description: 'The Nostr app built for the community by the community.'
            },
    },
    {
        title: 'iOS',
        links: [
            {
                title: 'Current',
                url: 'https://apps.apple.com/us/app/current-nostr-bitcoin/id1668517032',
                description: 'The power of Bitcoin + Nostr at your hands.'
            },
            {
                title: 'Damus',
                url: 'https://damus.io/',
                description: 'The social network you control.'
            },
            {
                title: 'Nos',
                url: 'https://www.nos.social/',
                description: 'Join your peers in a healthy social network.'
            },
            {
                title: 'Nostrmo',
                url: 'https://apps.apple.com/us/app/id6447441761?l=en-us&platform=iphone',
                description: 'An iOS client built on the Nostr open source protocol.'
            },
            {
                title: 'Nostur',
                url: 'https://nostur.com',
                description: 'A feature packed iOS client.'
            },
        ]
    },
    {
        title: 'Web',
        links: [
            {
                title: 'Coracle',
                url: 'https://coracle.social',
                description: 'A high-quality social media experience for the web.'
            },
            {
                title: 'Iris',
                url: 'https://iris.to/',
                description: 'The Nostr client for better social networks.'
            },
            {
                title: 'Nostrudel',
                url: 'https://nostrudel.ninja',
                description: 'A simple, user friendly Nostr client for the web.'
            },
            {
                title: 'Primal',
                url: 'https://primal.net',
                description: 'Media hosting, audio recorder, and more.'
            },
            {
                title: 'Rabbit',
                url: 'https://syusui-s.github.io/rabbit/#/',
                description: 'A TweetDeck-style Nostr client.'
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
            }
        ]
    },
    {
        title: 'Desktop',
        links: [
            {
                title: 'Gossip',
                url: 'https://github.com/mikedilger/gossip',
                description:
                    'A desktop client for Nostr built on the Gossip model that works with Arch Linux, Debian and Windows.'
            },
            {
                title: 'Lume',
                url: 'https://lume.nu/',
                description: 'A Nostr client built for macOS, Windows and Linux.'
            },
            {
                title: 'More Speech',
                url: 'https://github.com/unclebob/more-speech',
                description:
                    'A pragmatic desktop client for communicating over the Nostr protocol. No Fluff, Just Stuff.'
            }
        ]
    }
];
