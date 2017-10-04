  // Collect all the portfolios into an array

  const portfolioArray = [
    {
      "name": "Tribe",
      "url": "https://www.wearetribe.com"
    },
    {
      "name": "Combo",
      "url": "https://www.combostudio.co"
    },
    {
      "name": "23 Code Street",
      "url": "https://www.23codestreet.com"
    },
    {
      "name": "Bel-Air",
      "url": "https://www.bel-air.co"
    },
    {
      "name": "Comuzi",
      "url": "https://www.comuzi.xyz"
    },
    {
      "name": "Easle",
      "url": "https://www.easle.co"
    },
    {
      "name": "Immersive Rehab",
      "url": "https://www.immersiverehab.com"
    },
    {
      "name": "Parasym Health",
      "url": "https://www.parasym.co"
    },
    {
      "name": "Sanctus",
      "url": "https://www.sanctus.io"
    },
    {
      "name": "Sidestory",
      "url": "https://www.sidestory.co"
    },
    {
      "name": "Everyday",
      "url": "https://www.everyday.studio"
    },
    {
      "name": "Tray",
      "url": "https://www.tray.io"
    },
    {
      "name": "Uptree",
      "url": "https://www.uptree.co"
    },
    {
      "name": "Dojo",
      "url": "https://www.dojoapp.co"
    },
    {
      "name": "Hoop",
      "url": "https://www.hoop.co.uk"
    },
    {
      "name": "Wayfindr",
      "url": "https://www.wayfindr.net"
    },
    {
      "name": "Everpress",
      "url": "https://www.everpress.com"
    },
    {
      "name": "Curiscope",
      "url": "https://www.curiscope.com"
    },
    {
      "name": "Amaliah",
      "url": "https://www.amaliah.com"
    },
    {
      "name": "Mayku",
      "url": "https://www.mayku.me"
    },
    {
      "name": "Marvel",
      "url": "https://www.marvelapp.com"
    },
    {
      "name": "Dice",
      "url": "https://www.dice.fm"
    },
    {
      "name": "ustwo Games",
      "url": "https://www.ustwogames.co.uk"
    },
    {
      "name": "Pilcro",
      "url": "https://www.pilcro.com"
    },
    {
      "name": "Pausable",
      "url": "https://www.pausable.com"
    },
    {
      "name": "Over",
      "url": "https://www.madewithover.com"
    },
    {
      "name": "Run an Empire",
      "url": "https://www.runanempire.com"
    },
  ];

  function shufflePortfolioArray() {

    const a = portfolioArray;

    var j, x, i;
    for (i = a.length; i; i--) {
      j = Math.floor(Math.random() * i);
      x = a[i - 1];
      a[i - 1] = a[j];
      a[j] = x;
    }

    return a;

  }

  function createListElementsFromArray(a) {

    return a.map(function (el) {

      return "<li class='portfolio_item'><a href='"+ el.url + "' target='_blank'>" + el.name + "</a></li>"

    });

  }


  const listElements = createListElementsFromArray(shufflePortfolioArray());
  $('ul#companies').html(listElements);

  // Construct UI blocks through the portfolio array

  // Call shufflePortfolioArray()

  // Turn these into workable raw HTML to inject into a list