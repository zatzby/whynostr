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
                title: 'Nostrich November',
                url: 'https://nostrichnovember.com/',
                description:
                    'Home of the Nostrich November art challenge. Learn about the origin of the Nostr Nostrich and participate in the fun.'
            },
            {
                title: 'Nostr Zine Club',
                url: 'https://nostrzine.club/',
                description:
                    'A community project that aims to build an ongoing series of highly shareable Zines that exhibit the power of Nostr and the Nostr community.'
            }
        ]
    }
];
