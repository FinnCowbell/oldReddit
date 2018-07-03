chrome.runtime.onInstalled.addListener(function() {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([activateRule]);
  });
  let activateRule = {//makes the button clickable
    conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostContains: 'reddit.'},
      })
    ],
    actions: [new chrome.declarativeContent.ShowPageAction()]
  }
  chrome.tabs.onUpdated.addListener(function(){// Checks if url is reddit, if so redirects.
    chrome.tabs.query({'active': true, 'lastFocusedWindow': true},function(tabs){
      let url = tabs[0].url.toString();
      let redditIndex = url ? url.search(/www.reddit.com/i) : -1;
      if(redditIndex >= 0){
        redirect(url);
      }
    })
  })
  function redirect(u){
    //load();
    let oldURL = u.split("www").join("old")
  //chrome.tabs.update params: (integer tabId(optional), object updateProperties, callbackFunction)
    chrome.tabs.update(null,{'url': oldURL},function(){console.log("Redirected to old.reddit!")})
  }
  function load(){
    var enabled = localStorage.getItem('enabled')
  }
});
