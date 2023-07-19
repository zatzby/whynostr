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
      url: 'https://www.wavman.app/',
      descriptor: 'wavman.app',
      description: 'An open-source music player built for Nostr.',
    },
    {
      url: 'https://zapstr.live/',
      descriptor: 'zapstr.live',
      description: 'Sign in, listen, upload and chat.',
    },
  ],

  Games: [
    {
      url: 'https://jesterui.github.io/',
      descriptor: 'jesterui',
      description: 'Play Chess over Nostr.',
    },
  {
      url: 'https://triviamasters.social/',
      descriptor: 'triviamasters.social',
      description: 'A Trivia Nostr bot with Bitcoin prizes.',
    },  
  {
      url: 'https://winemasters.social/',
      descriptor: 'winemasters.social',
      description: 'A Wine Trivia Nostr bot with Bitcoin prizes.',
    },
    
    ],
  
  "Media Hosting": [
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
      url: 'https://satellite.earth/cdn',
      descriptor: 'satellite.earth',
      description: 'Scalable media hosting for the Nostr ecosystem.',
    },
    {
      url: 'https://void.cat/',
      descriptor: 'void.cat',
      description:
        'Free, simple file hosting featuring profiles, statistics and advanced file download paywall.',
    },
  ],

  "Newly Added": [
    {
      url: 'https://btcmap.org/',
      descriptor: 'btcmap.org',
      description: 'Easily find places to spend sats anywhere on the planet.',
    },
     {
      url: 'https://notazap.lol/',
      descriptor: 'notazap.lol',
      description: 'This is a tool that allows you to zap, but not.',
    },
     {
      url: 'https://www.nos.social/',
      descriptor: 'Nos',
      description: 'Join your peers in a healthy social network.',
    },
  {
      url: 'https://coracle.social/',
      descriptor: 'Coracle',
      description: 'High-quality social media experience for the web.',
    },
    {
      url: 'https://app.getcurrent.io/',
      descriptor: 'Current',
      description: 'The power of Bitcoin + Nostr at your hands',
    },
    {
      url: 'https://damus.io/',
      descriptor: 'Damus',
      description: 'The social network you control on iOS',
    },
    {
      url: 'https://iris.to/',
      descriptor: 'Iris',
      description: 'The Nostr client for better social networks.',
    },
    {
      url: 'https://play.google.com/store/apps/details?id=com.vitorpamplona.amethyst',
      descriptor: 'Amethyst',
      description: 'The best decentralized social network on your Android phone.',  
    },
    {
      url: 'https://relaying.io/',
      descriptor: 'relaying.io',
      description: 'Host your own private relay and never lose your notes.',
    },
  {
      url: 'https://satellite.earth/cdn',
      descriptor: 'satellite.earth',
      description: 'Scalable media hosting for the Nostr ecosystem.',
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
    {
      url: 'https://relaying.io/',
      descriptor: 'relaying.io',
      description: 'Host your own private relay and never lose your notes.',
    },
  ],
  Social: [
    {
      url: 'https://play.google.com/store/apps/details?id=com.vitorpamplona.amethyst',
      descriptor: 'Amethyst',
      description: 'The best decentralized social network on your Android phone.',  
    },
    {
      url: 'https://badges.page/',
      descriptor: 'badges.page',
      description: 'Create, collect and award badges.',
    },
    {
      url: 'https://coracle.social/',
      descriptor: 'Coracle',
      description: 'High-quality social media experience for the web.',
    },
    {
      url: 'https://app.getcurrent.io/',
      descriptor: 'Current',
      description: 'The power of Bitcoin + Nostr at your hands',
    },
    {
      url: 'https://damus.io/',
      descriptor: 'Damus',
      description: 'The social network you control on iOS',
    },
    {
      url: 'https://iris.to/',
      descriptor: 'Iris',
      description: 'The Nostr client for better social networks.',
    },
    {
      url: 'https://www.nos.social/',
      descriptor: 'Nos',
      description: 'Join your peers in a healthy social network.',
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
      url: 'https://nostr.do/',
      descriptor: 'nostr.do',
      description: 'Share Nostr invites with everyone!',
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
      url: 'https://plebstr.com/',
      descriptor: 'Plebstr',
      description: 'A friendly Nostr client, reimagined.',
    },
    {
      url: 'https://satellite.earth/',
      descriptor: 'Satellite',
      description: 'Find your community and join the conversation.',
    },
    {
      url: 'https://snort.social/',
      descriptor: 'Snort',
      description: 'Feature packed Nostr client.',
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
  {
    url: 'https://zap.stream/',
    descriptor: 'zap.stream',
    description: 'A Nostr native streaming provider.',
  },
  ],

  Tools: [
    {
      url: 'https://advancednostrsearch.vercel.app/',
      descriptor: 'advanced nostr search',
      description: 'A tool to help you find nostr notes',
    },
    {
      url: 'https://btcmap.org/',
      descriptor: 'btcmap.org',
      description: 'Easily find places to spend sats anywhere on the planet.',
    },
    {
      url: 'https://listr.lol/',
      descriptor: 'listr.lol',
      description: 'A simple tool that allows you to browse and manage lists.',
    },
    {
      url: 'https://nak.nostr.com/',
      descriptor: 'nak.nostr.com',
      description: 'Generate events and keypairs.',
    },
    {
      url: 'https://nashboard.space/',
      descriptor: 'nashboard.space',
      description: 'A Nostr network dashboard.',
    },
    {
      url: 'https://nostr-delete.vercel.app/',
      descriptor: 'nostr-delete',
      description: 'Delete Nostr events.',
    },
    {
      url: 'https://nostrfreaks.com/',
      descriptor: 'nostrfreaks.com',
      description: 'Add multiple Nostr sites to a single browser window.',
    },
    {
      url: 'https://www.nostr.guru/',
      descriptor: 'nostr.guru',
      description: 'A gateway to convert nostr events to html pages',
    },
    {
      url: 'https://nostrit.com/',
      descriptor: 'nostrit.com',
      description: 'Publish your note when something happens.',
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
      url: 'https://notazap.lol/',
      descriptor: 'notazap.lol',
      description: 'This is a tool that allows you to zap, but not.',
    },
    {
      url: 'https://github.com/grunch/rana',
      descriptor: 'rana',
      description: 'CLI based vanity key generator',
    },
    {
      url: 'https://www.zapit.live/',
      descriptor: 'zapit.live',
      description: 'Put any content behind a Bitcoin lightning paywall.',
    },
    {
      url: 'https://zaplinks.lol/',
      descriptor: 'zaplinks.lol',
      description: 'Create a zaplink.',
    },
  ],
  'Writing': [
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
