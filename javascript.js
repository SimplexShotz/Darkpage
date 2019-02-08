window.addEventListener("load", function load(event) {
  document.getElementById("test").onclick = function() {
    chrome.tabs.query({"active": true, "lastFocusedWindow": true}, function(tabs) {
      chrome.tabs.insertCSS(tabs[0].id, {
        "code": "body { margin: 0px; } * { background-color: rgb(20, 20, 20); background-image: linear-gradient(rgb(20, 20, 20), rgb(20, 20, 20)); border-color: rgb(20, 20, 20); outline-color: rgb(20, 20, 20); } * { color: rgb(225, 225, 225); }"
      });
      // chrome.tabs.executeScript(tabs[0].id, {
      //   "code": "var txts = ['a', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'div', 'body']; for (var j = 0; j < txts.length; j++) { for (var i = 0; i < document.getElementsByClassName(txts[j]).length; i++) { document.getElementsByClassName(txts[j])[i].style.color = 'rgb(225, 225, 225)'; } }"
      // });
    });
  };
});
