const badge = document.querySelector('.badge');
const menu = document.querySelector('.menu');

// Toggle menu on badge click
badge.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// Hide menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (event.target.closest('.badge') === null && event.target.closest('.menu') === null) {
        menu.classList.remove('show');
    }
});

var websites = {
    Android: [
        {
            url: 'https://play.google.com/store/apps/details?id=com.vitorpamplona.amethyst',
            descriptor: 'Amethyst'
        },
        {
            url: 'https://play.google.com/store/apps/details?id=to.iris.twa&hl=en_US&gl=US',
            descriptor: 'Iris'
        },
        {
            url: 'https://play.google.com/store/apps/details?id=com.plebstr.client',
            descriptor: 'Plebstr'
        }
    ],

    iOS: [
        {
            url: 'https://damus.io/',
            descriptor: 'Damus'
        },
        {
            url: 'https://apps.apple.com/us/app/iris-the-nostr-client/id1665849007',
            descriptor: 'Iris'
        },
        {
            url: 'https://nostur.com/',
            descriptor: 'Nostur'
        },
        {
            url: 'https://apps.apple.com/app/plebstr-nostr-client/id1666230916',
            descriptor: 'Plebstr'
        }
    ],

    Web: [
        {
            url: 'https://coracle.social/',
            descriptor: 'Coracle'
        },
        {
            url: 'https://iris.to/',
            descriptor: 'Iris'
        },
        {
            url: 'https://primal.net/home',
            descriptor: 'Primal'
        },
        {
            url: 'https://satellite.earth/',
            descriptor: 'Satellite'
        },
        {
            url: 'https://snort.social/',
            descriptor: 'Snort'
        }
    ]
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
            return '<a href="' + website.url + '">' + website.descriptor + '</a> ' + '<br>';
        })
        .join('');

    // Update the selected website area with the chosen websites
    selectedWebsite.innerHTML = links;
}
