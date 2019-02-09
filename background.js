// window.addEventListener("load", function load(event) {
chrome.tabs.onUpdated.addListener(function() {
  // document.getElementById("test").onclick = function() {
    chrome.tabs.query({"active": true, "lastFocusedWindow": true}, function(tabs) {
      chrome.tabs.insertCSS(tabs[0].id, {
        "code": "div,body,button,span { background-image: linear-gradient(rgb(50, 50, 50), rgb(50, 50, 50)) !important; } * { background-color: rgb(50, 50, 50) !important; border-color: rgb(100, 100, 100) !important; border-width: 1px !important; outline-color: rgb(50, 50, 50) !important; } * { color: rgb(200, 200, 200) !important; }"
      });
      // chrome.tabs.executeScript(tabs[0].id, {
      //   "code": "var txts = ['a', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'div', 'body']; for (var j = 0; j < txts.length; j++) { for (var i = 0; i < document.getElementsByClassName(txts[j]).length; i++) { document.getElementsByClassName(txts[j])[i].style.color = 'rgb(225, 225, 225)'; } }"
      // });
    });
  // };
});
