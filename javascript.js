window.addEventListener("load", function load(event) {
  document.getElementById("Standard").onclick = function() {
    chrome.tabs.query({"active": true, "lastFocusedWindow": true}, function(tabs) {
      chrome.tabs.insertCSS(tabs[0].id, {
        "code": "body,div,button,span { background-image: linear-gradient(rgb(50, 50, 50), rgb(50, 50, 50)) !important; } * { background-color: rgb(50, 50, 50) !important; border-color: rgb(100, 100, 100) !important; border-width: 1px !important; outline-color: rgb(50, 50, 50) !important; } * { color: rgb(200, 200, 200) !important; }"
      });
    });
  };
  document.getElementById("Dark").onclick = function() {
    chrome.tabs.query({"active": true, "lastFocusedWindow": true}, function(tabs) {
      chrome.tabs.insertCSS(tabs[0].id, {
        "code": "body,div,button,span { background-image: linear-gradient(rgb(0, 0, 0), rgb(0, 0, 0)) !important; } * { background-color: rgb(0, 0, 0) !important; border-color: rgb(200, 200, 200) !important; border-width: 1px !important; outline-color: rgb(0, 0, 0) !important; } * { color: rgb(255, 255, 255) !important; }"
      });
    });
  };
  document.getElementById("Night").onclick = function() {
    chrome.tabs.query({"active": true, "lastFocusedWindow": true}, function(tabs) {
      chrome.tabs.insertCSS(tabs[0].id, {
        "code": "body,div,button,span { background-image: linear-gradient(rgb(50, 50, 0), rgb(50, 50, 0)) !important; } * { background-color: rgb(50, 50, 0) !important; border-color: rgb(100, 100, 0) !important; border-width: 1px !important; outline-color: rgb(50, 50, 0) !important; } * { color: rgb(200, 200, 0) !important; }"
      });
    });
  };
  document.getElementById("Sky").onclick = function() {
    chrome.tabs.query({"active": true, "lastFocusedWindow": true}, function(tabs) {
      chrome.tabs.insertCSS(tabs[0].id, {
        "code": "body,div,button,span { background-image: linear-gradient(rgb(50, 200, 200), rgb(50, 200, 200)) !important; } * { background-color: rgb(50, 200, 200) !important; border-color: rgb(0, 150, 150) !important; border-width: 1px !important; outline-color: rgb(50, 200, 200) !important; } * { color: rgb(255, 255, 255) !important; }"
      });
    });
  };
  document.getElementById("Simple").onclick = function() {
    chrome.tabs.query({"active": true, "lastFocusedWindow": true}, function(tabs) {
      chrome.tabs.insertCSS(tabs[0].id, {
        "code": "body,div,button,span { background-image: linear-gradient(rgb(255, 255, 255), rgb(255, 255, 255)) !important; } * { background-color: rgb(255, 255, 255) !important; border-color: rgb(0, 0, 0) !important; border-width: 1px !important; outline-color: rgb(0, 0, 0) !important; } * { color: rgb(0, 0, 0) !important; }"
      });
    });
  };
  document.getElementById("Font").onkeypress = function() {
    chrome.tabs.query({"active": true, "lastFocusedWindow": true}, function(tabs) {
      chrome.tabs.insertCSS(tabs[0].id, {
        "code": "* { font-family: " + document.getElementById("Font").value + " }"
      });
    });
  };
});
