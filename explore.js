const badge = document.querySelector('.badge');
const menu = document.querySelector('.menu');

// Toggle menu on badge click
badge.addEventListener('click', () => {
  menu.classList.toggle('show');
});

// Hide menu when clicking outside of it
document.addEventListener('click', event => {
  if (
    event.target.closest('.badge') === null &&
    event.target.closest('.menu') === null
  ) {
    menu.classList.remove('show');
  }
});

var websites = {
  Audio: [
    {
      url: 'https://www.fountain.fm/',
      descriptor: 'fountain.fm',
      description: 'The podcast app that pays.',
    },
    {
      url: 'https://nostrnests.com/',
      descriptor: 'nostrnests.com',
      description: 'Host and join audio spaces.',
    },
    {
      url: 'https://vida.page/',
      descriptor: 'vida.page',
      description: 'Connect via paid messages, calls and live streams.',
    },
    {
      url: 'https://zapstr.live/',
      descriptor: 'zapstr.live',
      description: 'Sign in, listen, upload and chat.',
    },
  ],

  'Media Hosting': [
    {
      url: 'https://nostr.build/',
      descriptor: 'nostr.build',
      description: 'A free media uploader and hosting platform for all things Nostr.',
    },
    {
      url: 'https://nostrcheck.me/public/',
      descriptor: 'nostrcheck.me',
      description:
        'Media hosting, nostr address, key converter and private relay.',
    },
    {
      url: 'https://nostrfiles.dev/',
      descriptor: 'nostrfiles.dev',
      description: 'Media hosting services, audio recorder and more.',
    },
    {
      url: 'https://nostrimg.com/',
      descriptor: 'nostrimg.com',
      description: 'Uploader and GIF-ify generator.',
    },
    {
      url: 'https://void.cat/',
      descriptor: 'void.cat',
      description:
        'Free, simple file hosting featuring profiles, statistics and advanced file download paywall.',
    },
  ],

  Relays: [
    {
      url: 'https://www.nostr.land/',
      descriptor: 'nostr.land',
      description: 'Where relays evolve.',
    },
    {
      url: 'https://nostr.watch/',
      descriptor: 'nostr.watch',
      description: 'Explore public and private relays.',
    },
    {
      url: 'https://relayable.org/?utm_source=nostrich.fun',
      descriptor: 'relayable.org',
      description: 'A latency optimizing network of global relays.',
    },
    {
      url: 'https://relay.exchange/',
      descriptor: 'relay.exchange',
      description: 'Paid Relay Service Providers comparison table',
    },
  ],
  Social: [
    {
      url: 'https://badges.page/',
      descriptor: 'badges.page',
      description: 'Create, collect and award badges.',
    },
    {
      url: 'https://nostr.band/',
      descriptor: 'nostr.band',
      description: 'Learn what is trending today.',
    },
    {
      url: 'https://www.nostrchat.io/',
      descriptor: 'nostrchat.io',
      description: 'A decentralized chat application.',
    },
    {
      url: 'https://nostr.directory/',
      descriptor: 'nostr.directory',
      description: 'Find your Twitter follows on Nostr.',
    },
    {
      url: 'https://nostrends.vercel.app/',
      descriptor: 'nostrends.vercel.app',
      description: "What's trending on Nostr?",
    },
    {
      url: 'https://nostrnests.com/',
      descriptor: 'nostrnests.com',
      description: 'Host and join audio spaces.',
    },
    {
      url: 'https://vida.page/',
      descriptor: 'vida.page',
      description: 'Connect via paid messages, calls and live streams.',
    },
    {
      url: 'https://zapddit.com/',
      descriptor: 'zapddit.com',
      description: 'A reddit-styled Nostr client for following topics.'
    },
    {
      url: 'https://zaplife.lol/',
      descriptor: 'zaplife.lol',
      description: "Real-time zap stream - discover who's zapping whom.",
    },
  ],

  Tools: [
    {
      url: 'https://advancednostrsearch.vercel.app/',
      descriptor: 'advanced nostr search',
      description: 'A tool to help you find nostr notes',
    },
    {
      url: 'https://nak.nostr.com/',
      descriptor: 'nak.nostr.com',
      description: 'Generate events and keypairs.',
    },
    {
      url: 'https://nostr-delete.vercel.app/',
      descriptor: 'nostr-delete',
      description: 'Delete Nostr events.',
    },
    {
      url: 'https://www.nostr.guru/',
      descriptor: 'nostr.guru',
      description: 'A gateway to convert nostr events to html pages',
    },
    {
      url: 'https://nostr.io/',
      descriptor: 'nostr.io',
      description: 'Access Nostr statistics via REST API.',
    },
    {
      url: 'https://www.nostr.rest/',
      descriptor: 'nostr.rest',
      description: 'A browser-based vanity key generator.',
    },
    {
      url: 'https://nostrcheck.me/converter/',
      descriptor: 'nostrcheck.me/converter',
      description: 'Key converter.',
    },
    {
      url: 'https://nostryfied.online/',
      descriptor: 'nostryfied.online',
      description: 'A backup service for your data.',
    },
    {
      url: 'https://hitony.com/nostrogen/',
      descriptor: 'nostrogen',
      description: 'A browser-based vanity key generator.',
    },
    {
      url: 'https://nostrsites.com/',
      descriptor: 'nostrsites.com',
      description: 'Convert your Nostr note into a personal webpage.',
    },
    {
      url: 'https://nostrstuff.com/',
      descriptor: 'nostrstuff.com',
      description: 'A browser-based CLI tool to explore Nostr.',
    },
    {
      url: 'https://nostrtool.com/',
      descriptor: 'nostrtool.com',
      description:
        'A browser based testing ground for key generation, NIP-26 delegation, and more.',
    },
    {
      url: 'https://github.com/grunch/rana',
      descriptor: 'rana',
      description: 'CLI based vanity key generator',
    },
    {
      url: 'https://zaplinks.lol/',
      descriptor: 'zaplinks.lol',
      description: 'Create a zaplink.',
    },
  ],
  'Writing/Curating': [
    {
      url: 'https://blogstack.io/',
      descriptor: 'blogstack.io',
      description: 'Lightning enabled long form blogging platform.',
    },
    {
      url: 'https://habla.news/',
      descriptor: 'habla.news',
      description: 'Earn bitcoin for your writing',
    },
    {
      url: 'https://highlighter.com/',
      descriptor: 'highlighter.com',
      description: 'Content curation and highlighting',
    },
    {
      url: 'https://write.nostr.com/',
      descriptor: 'write.nostr.com',
      description: 'NIP-23 enabled article editor',
    },
  ],
};

function showSelectedWebsite() {
  var dropdown = document.getElementById('websiteDropdown');
  var selectedWebsite = document.getElementById('selectedWebsite');

  // Get the selected value from the dropdown
  var selectedOption = dropdown.options[dropdown.selectedIndex];

  var websiteOptions = websites[selectedOption.text] || [];

  // Create a string with all the websites as HTML links, including their descriptions
  var links = websiteOptions
    .map(function (website) {
      return (
        '<a href="' +
        website.url +
        '">' +
        website.descriptor +
        '</a>: ' +
        website.description +
        '<br>'
      );
    })
    .join('');

  // Update the selected website area with the chosen websites
  selectedWebsite.innerHTML = links;
}
