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
function showSelectedList() {
  var dropdown = document.getElementById('websiteDropdown');
  var selectedList = document.getElementById('selectedList');

  // Get the selected value from the dropdown
  var selectedOption = dropdown.options[dropdown.selectedIndex].value;

  // Check the selected value and update the list accordingly
  if (selectedOption === 'iOS') {
    var listItems = [
      { text: 'Damus', link: 'https://damus.io/' },
      {
        text: 'Iris',
        link: 'https://apps.apple.com/us/app/iris-the-nostr-client/id1665849007',
      },
      {
        text: 'Plebstr',
        link: 'https://apps.apple.com/app/plebstr-nostr-client/id1666230916',
      },
    ];

    var listHTML = '<ul>';
    for (var i = 0; i < listItems.length; i++) {
      listHTML +=
        '<li><a href="' +
        listItems[i].link +
        '">' +
        listItems[i].text +
        '</a></li>';
    }
    listHTML += '</ul>';

    selectedList.innerHTML = listHTML;
  } else if (selectedOption === 'Android') {
    var listItems = [
      {
        text: 'Iris',
        link: 'https://play.google.com/store/apps/details?id=to.iris.twa&hl=en_US&gl=US',
      },
      {
        text: 'Amethyst',
        link: 'https://play.google.com/store/apps/details?id=com.vitorpamplona.amethyst',
      },
      {
        text: 'Plebstr',
        link: 'https://play.google.com/store/apps/details?id=com.plebstr.client',
      },
    ];

    var listHTML = '<ul>';
    for (var i = 0; i < listItems.length; i++) {
      listHTML +=
        '<li><a href="' +
        listItems[i].link +
        '">' +
        listItems[i].text +
        '</a></li>';
    }
    listHTML += '</ul>';

    selectedList.innerHTML = listHTML;
  } else if (selectedOption === 'Web') {
    var listItems = [
      { text: 'Snort', link: 'https://snort.social/posts' },
      { text: 'Iris', link: 'https://iris.to/' },
      { text: 'Coracle', link: 'https://coracle.social/' },
      { text: 'Primal', link: 'https://primal.net/' },
    ];

    var listHTML = '<ul>';
    for (var i = 0; i < listItems.length; i++) {
      listHTML +=
        '<li><a href="' +
        listItems[i].link +
        '">' +
        listItems[i].text +
        '</a></li>';
    }
    listHTML += '</ul>';

    selectedList.innerHTML = listHTML;
  } else {
    selectedList.innerHTML = '';
  }

  // Center the list vertically
  var listHeight = selectedList.offsetHeight;
  var windowHeight = window.innerHeight;
  selectedList.style.top = windowHeight / 2 - listHeight / 2 + 'px';

  // Center the list horizontally
  var listWidth = selectedList.offsetWidth;
  var windowWidth = window.innerWidth;
  selectedList.style.left = windowWidth / 2 - listWidth / 2 + 'px';
}
