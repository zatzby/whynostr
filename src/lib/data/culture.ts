import { DescriptionList, P } from 'flowbite-svelte';

export const cultureLinks: App.LinkList[] = [
    {
        title: 'Conferences',
        links: [
            {
                title: 'Nostr World',
                url: 'https://nostr.world/index.html',
                description:
                    "Nostr World unconferences celebrate Nostr's decentralization. Join in-person or online."
            }
        ]
    },
    {
        title: 'Other Stuff',
        links: [
            {
                title: 'Nostr Artstr',
                url: 'https://www.nostrartstr.com',
                description: 'Art challenges by Rustypuppy.'
            },
            {
                title: 'Nostr_HK',
                url: 'https://nostr.hk/',
                description: 'Home of the Nostr_HK community. Drop in, say hello and learn more.'
            },
            {
                title: 'Nostr Zine Club',
                url: 'https://nostrzine.club/',
                description:
                    'A community project that aims to build an ongoing series of highly shareable Zines that exhibit the power of Nostr and the Nostr community.'
            },
            {
                title: 'Plebchain Radio',
                url: 'https://rss.com/podcasts/plebchainradio/',
                description:
                    "A weekly live audio show made for plebs, by plebs which focuses on the intersection of the Nostr protocol and Bitcoin plebs. Hosted by Quiet Warrior 'QW' and Avi Burra."
            }
        ]
    }
];
